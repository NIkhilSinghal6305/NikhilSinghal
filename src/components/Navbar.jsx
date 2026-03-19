import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinkClass = (isActive) =>
    isActive
      ? "text-red-400"
      : "hover:translate-x-1 transition-all hover:text-red-300";

  const scrollToSection = (id) => {
    closeMenu();
    navigate(id === "home" ? "/" : `/${id}`);

    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <nav className="w-full h-[15vh] flex justify-between mb-2 items-center px-4 md:px-6 lg:px-10 py-4 sticky top-0 z-50 bg-black">
      
      {/* Logo */}
      <button onClick={() => scrollToSection("home")} className="flex items-center gap-2 md:gap-4 h-full">
        <img src="/apple-touch-icon.png" alt="nikhil" className="h-8 w-8 md:h-10 md:w-10 object-contain" />
        <h1 className="text-white font-bold font-['Caveat'] text-xl md:text-2xl lg:text-3xl">
          Nikhil Singhal
        </h1>
      </button>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-8 w-[45%] xl:w-[40%] justify-around text-white text-lg font-['PT_Serif']">
        {["home", "about", "skills", "project", "contact"].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className={navLinkClass(false)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}

        <a
          target="blank"
          href="Resume.pdf"
          className="transition bg-red-600 hover:bg-red-500 px-3 py-2 rounded-md text-white font-['PT_Serif']">
          Resume
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden text-white p-2 hover:bg-gray-800 rounded transition relative z-60"
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      

      {/* Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 lg:hidden z-40" onClick={closeMenu} />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-black border-l border-gray-700 transform transition-transform duration-300 ease-in-out lg:hidden z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start gap-6 pt-24 px-8 text-white text-lg font-['PT_Serif']">
          {["home", "about", "skills", "project", "contact"].map((item) => (
            <button key={item} onClick={() => scrollToSection(item)}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <a
          target="blank"
          href="Resume.pdf"
          className="transition bg-red-600 hover:bg-red-500 px-3 py-2 rounded-md text-white font-['PT_Serif']">
          Resume
        </a>
        </div>
      </div>

      {/* Animated Bottom Border (unchanged) */}
      <div className="absolute bottom-0 left-0 w-full h-1 overflow-hidden">
        <div className="w-[200%] h-full bg-linear-to-r from-black via-red-600 to-black animate-gradient-bg" />
      </div>
    </nav>
  );
};

export default Navbar;
