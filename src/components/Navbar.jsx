import { NavLink } from "react-router-dom";
import logo from "../assets/apple-touch-icon.png";

const Navbar = () => {
  return (
    <div
      className="w-full h-[15vh] flex justify-between items-center py-10 sticky top-0 z-50 border-b border-gray-700 bg-black"
    >
      <NavLink to="/" className="flex items-center gap-4 h-full">
        <img src={logo} alt="nikhil" className="h-10 w-10 object-contain"/>
        <h1 className="text-white font-bold font-['Caveat'] text-3xl">
          Nikhil Singhal
        </h1>
      </NavLink>
      <div className="w-[40%] flex justify-around text-white text-lg font-['PT_Serif']">
        <NavLink
          className={(e) => (e.isActive ? "text-red-400 " : "hover:translate-x-1 transition-all")}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-red-400" : "hover:translate-x-1 transition-all")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-red-400" : "hover:translate-x-1 transition-all")}
          to="/skills"
        >
          Skills
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-red-400" : "hover:translate-x-1 transition-all")}
          to="/project"
        >
          Project
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-red-300" : "hover:translate-x-1 transition-all")}
          to="/contact"
        >
          Contact
        </NavLink>
      </div>

      <a
        href="/Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-red-500 hover:bg-red-600 transition rounded hover:scale-98 text-white text-xl font-semibold font-['PT_Serif']"
      >
        Resume
      </a>
    </div>
  );
};

export default Navbar;