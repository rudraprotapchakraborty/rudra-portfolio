import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      scrollToTop();
    } else {
      navigate("/");
      setTimeout(scrollToTop, 150);
    }
  };

const handleNavClick = (link) => {
  let targetId = link;

  // If link is contact → scroll to footer
  if (link === "contact") {
    targetId = "footer";
  }

  if (link === "home") {
    if (location.pathname !== "/") {
      window.location.href = "/";
    } else {
      scrollToTop();
    }
    setActiveLink("home");
    setIsMenuOpen(false);
    return;
  }

  const section = document.querySelector(`#${targetId}`);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = `/#${targetId}`;
  }

  setActiveLink(link);
  setIsMenuOpen(false);
};


  const navLinks = [
    "home",
    "about",
    "skills",
    "education",
    "projects",
    "contact",
  ];

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 border-b transition-all duration-500
        ${
          darkMode
            ? "bg-[#030617] bg-gradient-to-b from-[#040718] via-[#060B20] to-[#030617] border-[#0f1120]"
            : "bg-white/90 backdrop-blur-xl border-gray-200 shadow-sm"
        }
      `}
    >
      {/* TOP NAVBAR ROW */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-10 lg:px-20 py-4">
        {/* Logo */}
        <button onClick={handleLogoClick} className="flex items-center gap-2">
          <img className="w-10" src="/favicon.png" alt="Logo" />
          <div className="leading-[1.1]">
            <span
              className={`text-lg font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Rudra Protap
            </span>
            <br />
            <span
              className={`text-lg font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Chakraborty
            </span>
          </div>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleNavClick(link)}
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
          ))}
        </ul>

        {/* Right side buttons */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-xl text-xl transition-all ${
              darkMode ? "text-yellow-300" : "text-gray-800"
            }`}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Resume */}
          <a
            href="https://drive.google.com/file/d/1iJSaz38y63jYBvsS45dstnYmBGnUqs23/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-5 py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-[#6C2BD9] to-[#A855F7] shadow transition-all"
          >
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden text-3xl ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`
    md:hidden transition-all duration-300 overflow-hidden
    ${isMenuOpen ? "max-h-[100vh] py-4" : "max-h-0 py-0"}
    ${
      darkMode
        ? "bg-[#030617] border-t border-[#0f1120]"
        : "bg-white border-t border-gray-200"
    }
  `}
      >
        <ul className="flex flex-col gap-6 px-6 pb-10">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleNavClick(link)}
                className={`
            block w-full text-left text-lg font-semibold
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
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
