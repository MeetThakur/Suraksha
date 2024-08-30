import { useEffect, useState } from "react";

function Home() {
  const [location, setLocation] = useState("");
  const [riskLevel, setRiskLevel] = useState("Low");
  const [volunteers, setVolunteers] = useState(10);
  const [reports, setReports] = useState(1);

  function calculateRiskScore() {
    let score = 0;

    var timeOfDay = new Date().getHours();

    if (timeOfDay >= 22 || timeOfDay < 5) {
      score += 5;
    } else if (timeOfDay >= 18 && timeOfDay < 22) {
      score += 4;
    } else if (timeOfDay >= 5 && timeOfDay < 9) {
      score += 2;
    } else {
      score += 1;
    }

    if (volunteers >= 5) {
      score -= 1;
    } else if (volunteers >= 3) {
      score += 1;
    } else if (volunteers >= 1) {
      score += 2;
    } else {
      score += 5;
    }

    if (reports >= 10) {
      score += 5;
    } else if (reports >= 5) {
      score += 4;
    } else if (reports >= 2) {
      score += 3;
    } else if (reports == 1) {
      score += 2;
    } else {
      score += 1;
    }

    if (score >= 13) {
      return "Very High";
    } else if (score >= 10) {
      return "High";
    } else if (score >= 7) {
      return "Moderate";
    } else if (score >= 4) {
      return "Low";
    } else {
      return "Very Low";
    }
  }

  function RiskColor() {
    if (riskLevel === "Very High") {
      return "bg-red-500";
    } else if (riskLevel === "High") {
      return "bg-red-400";
    } else if (riskLevel === "Moderate") {
      return "bg-yellow-400";
    } else if (riskLevel === "Low") {
      return "bg-green-400";
    } else {
      return "bg-green-500";
    }
  }
  useEffect(() => {
    RiskColor();
    setRiskLevel(calculateRiskScore());
    getLocation();
  }, [volunteers, reports, riskLevel]);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error) => {
          console.error("Error getting location:", error);
        },
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  function sos() {
    alert("SOS sent");
  }

  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-[5vh] font-extrabold text-center mt-4 text-white">
          Suraksha
        </h1>
      </div>

      <div className="flex flex-col gap-[15vh] mt-[10vh]">
        <div
          className={`w-full flex place-content-center p-[2vh] font-bold text-[3vh] ${RiskColor()}`}
        >
          Risk Level : {riskLevel}
        </div>

        <div className="text-[2vh] font-extrabold text-center text-white">
          Your Location: <br />
          {location} <br /> Volunteers Nearby : {volunteers}
          <br /> Reports by User : {reports}
        </div>
        <div className="flex justify-center items-center  w-full">
          <button
            className="text-center p-[1vh] bg-red-500 rounded-xl font-extrabold text-white text-[5vh]"
            onClick={sos}
          >
            SEND SOS
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
