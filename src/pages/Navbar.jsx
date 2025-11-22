import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Logo behavior
  const handleLogoClick = () => {
    if (location.pathname === "/") {
      scrollToTop();
    } else {
      navigate("/");
      setTimeout(() => scrollToTop(), 200);
    }
  };

const links = ["home", "about", "skills", "education", "projects", "contact"].map(
  (link) => (
    <li key={link}>
      <button
        onClick={() => {
          if (link === "home") {
            // SAME BEHAVIOR AS LOGO BUTTON
            
            if (location.pathname !== "/") {
              // Go to home page
              window.location.href = "/";
            } else {
              // Already in home, just scroll up
              window.scrollTo({ top: 0, behavior: "smooth" });
            }

            setActiveLink(link);
            setIsMenuOpen(false);
            return;
          }

          // For other links (smooth scroll to section)
          const section = document.querySelector(`#${link}`);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          } else {
            // If coming from other page
            window.location.href = `/#${link}`;
          }

          setActiveLink(link);
          setIsMenuOpen(false);
        }}
        className={`
          px-3 py-2 text-sm font-semibold tracking-wide transition-all
          ${
            activeLink === link
              ? "text-[#A855F7]"
              : darkMode
              ? "text-gray-300"
              : "text-gray-800"
          }
          hover:text-[#A855F7]
        `}
      >
        {link.toUpperCase()}
      </button>
    </li>
  )
);


  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b
        ${
          darkMode
            ? "bg-[#030617] bg-gradient-to-b from-[#040718] via-[#060B20] to-[#030617] border-[#0f1120]"
            : "bg-white/90 backdrop-blur-xl border-gray-200 shadow-sm"
        }
      `}
    >
      <div className="max-w-full mx-auto flex justify-between items-center px-14 py-4">

        {/* Logo (fixed behavior) */}
        <button onClick={handleLogoClick} className="flex items-center gap-2">
          <img className="w-10" src="/favicon.png" alt="" />

          <div className="flex flex-col items-start leading-[1.05]">
            <span
              className={`text-lg font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Rudra Protap
            </span>
            <span
              className={`text-lg font-bold -mt-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Chakraborty
            </span>
          </div>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">{links}</ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-xl transition-all text-xl ${
              darkMode ? "text-yellow-300" : "text-gray-800"
            }`}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Resume Button */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1iJSaz38y63jYBvsS45dstnYmBGnUqs23/view?usp=sharing"
            className="hidden md:block px-5 py-2 rounded-xl text-white font-semibold 
              bg-gradient-to-r from-[#6C2BD9] to-[#A855F7] shadow transition-all"
          >
            Resume
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden text-2xl ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul
          className={`
            md:hidden flex flex-col gap-6 px-6 py-6 border-b
            ${
              darkMode
                ? "bg-[#030617] border-[#0f1120]"
                : "bg-white border-gray-200"
            }
          `}
        >
          {links}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
