import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinkClass = (isActive) =>
    isActive
      ? "text-red-400"
      : "hover:translate-x-1 transition-all hover:text-red-300";

  return (
    <nav className="w-full h-[15vh] min-h-[80px] flex justify-between items-center px-4 md:px-6 lg:px-10 py-4 sticky top-0 z-50 border-b border-gray-700 bg-black">
      {/* Logo */}
      <NavLink to="/" className="flex items-center gap-2 md:gap-4 h-full">
        <img
          src="/apple-touch-icon.png"
          alt="nikhil"
          className="h-8 w-8 md:h-10 md:w-10 object-contain"
        />
        <h1 className="text-white font-bold font-['Caveat'] text-xl md:text-2xl lg:text-3xl">
          Nikhil Singhal
        </h1>
      </NavLink>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex w-[45%] xl:w-[40%] justify-around text-white text-lg font-['PT_Serif']">
        <NavLink
          className={({ isActive }) => navLinkClass(isActive)}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => navLinkClass(isActive)}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => navLinkClass(isActive)}
          to="/skills"
        >
          Skills
        </NavLink>
        <NavLink
          className={({ isActive }) => navLinkClass(isActive)}
          to="/project"
        >
          Project
        </NavLink>
        <NavLink
          className={({ isActive }) => navLinkClass(isActive)}
          to="/contact"
        >
          Contact
        </NavLink>
      </div>

      {/* Desktop Resume Button */}
      <a
        href="/Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:block px-4 py-2 bg-red-500 hover:bg-red-600 transition rounded hover:scale-95 text-white text-xl font-semibold font-['PT_Serif']"
      >
        Resume
      </a>

      {/* Mobile Menu Button - INCREASED Z-INDEX */}
      <button
        onClick={toggleMenu}
        className="lg:hidden text-white p-2 hover:bg-gray-800 rounded transition relative z-[60]"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-black border-l border-gray-700 transform transition-transform duration-300 ease-in-out lg:hidden z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start gap-6 pt-24 px-8 text-white text-lg font-['PT_Serif']">
          <NavLink
            className={({ isActive }) => navLinkClass(isActive)}
            to="/home"
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => navLinkClass(isActive)}
            to="/about"
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => navLinkClass(isActive)}
            to="/skills"
            onClick={closeMenu}
          >
            Skills
          </NavLink>
          <NavLink
            className={({ isActive }) => navLinkClass(isActive)}
            to="/project"
            onClick={closeMenu}
          >
            Project
          </NavLink>
          <NavLink
            className={({ isActive }) => navLinkClass(isActive)}
            to="/contact"
            onClick={closeMenu}
          >
            Contact
          </NavLink>
          
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-2 bg-red-500 hover:bg-red-600 transition rounded text-white text-lg font-semibold font-['PT_Serif'] w-full text-center"
            onClick={closeMenu}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;