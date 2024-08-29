import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
    <div className="flex w-full justify-center">
      <div className="w-11/12 h-12 bg-white flex justify-evenly items-center absolute rounded-3xl" 
      style={{ top: '90%' }}>
        <Link to="/" className="text-white font-bold w-8"><img src="/src/Icons/home.png" alt="" /></Link>
        <Link to="/Report" className="text-white font-bold w-8"><img src="/src/Icons/report.png" alt="" /></Link>
        <Link to="/Settings" className="text-white font-bold w-8"><img src="src/Icons/set.png" alt="" /></Link>
        <Link to="/Profile" className="text-white font-bold w-8"><img src="src/Icons/pfp.png" alt="" /></Link>
      </div>
      </div>
    </>
  );
}

export default Nav;
