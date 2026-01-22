import { NavLink } from "react-router-dom";
import logo from "../assets/apple-touch-icon.png";
const Navbar = () => {
  return (
    <div
      className="w-full h-[15vh] flex justify-between items-center py-10 sticky top-0 z-50 border-b border-gray-800 bg-black
"
    >
      <NavLink to="/" className="flex items-center gap-4 h-full">
        <img src={logo} alt="nikhil" className="h-10 w-10 object-contain" />
        <h1 className="text-2xl text-white font-bold font-[Poppins]">
          Nikhil Singhal
        </h1>
      </NavLink>
      <div className="w-[40%] flex justify-around text-white text-lg">
        <NavLink
          className={(e) => (e.isActive ? "text-red-300" : "")}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-red-300" : "")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-red-300" : "")}
          to="/skills"
        >
          Skills
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-red-300" : "")}
          to="/project"
        >
          Project
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-red-300" : "")}
          to="/contact"
        >
          Contact
        </NavLink>
      </div>

      <a
        href="/Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-red-500 hover:bg-red-600 transition rounded text-white text-lg font-semibold"
      >
        Resume
      </a>
    </div>
  );
};

export default Navbar;
