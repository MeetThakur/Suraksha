import "react-datepicker/dist/react-datepicker.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function Report() {
  function sub(e) {
    alert("Report Submitted");
  }
  return (
    <>
      <div className="text-white text-center text-4xl font-extrabold mt-4 gap-10">
        Report the area
      </div>
      <div className="flex flex-col p-6 justify-center pt-20">
        <form className="mt-8" onSubmit={sub}>
          <div className="mb-4">
            <label
              htmlFor="incident-details"
              className="block text-white text-lg font-bold mb-2"
            >
              Incident Details
            </label>
            <textarea
              id="incident-details"
              className="w-full h-32 px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter details about the incident"
            ></textarea>
          </div>
          <div className="flex flex-row justify-between mb-4">
            <div className="w-1/3">
              <label className="block text-white text-lg font-bold mb-2">
                Time
              </label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  sx={{
                    label: { color: "#979faa" },
                    svg: { color: "#979faa" },
                    input: { color: "white" },
                  }}
                  label="Enter Time"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </LocalizationProvider>
            </div>
            <div className="w-3/5">
              <label className="block text-white text-lg font-bold mb-2">
                Date
              </label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{
                    label: { color: "#979faa" },
                    svg: { color: "#979faa" },
                    input: { color: "white" },
                  }}
                  label="Enter Time"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </LocalizationProvider>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-white text-lg font-bold mb-2">
              Location
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter the exact location of the incident"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-bold mt-10"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Report;
