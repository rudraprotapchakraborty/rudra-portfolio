import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import MagneticButton from "../components/MagneticButton";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollY } = useScroll();

  // Scroll logic for floating shadow and ScrollSpy
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    if (location.pathname !== "/") return; // Only highlight links on the homepage

    const currentPos = latest + window.innerHeight / 2.5; 
    const sections = ["home", "about", "skills", "education", "projects", "contact"];

    for (let i = sections.length - 1; i >= 0; i--) {
      const targetId = sections[i] === "contact" ? "footer" : sections[i];
      const section = document.getElementById(targetId);
      if (section && section.offsetTop <= currentPos) {
        setActiveLink((prev) => (prev !== sections[i] ? sections[i] : prev));
        break;
      }
    }
  });

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

    if (link === "contact") targetId = "footer";

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

  const navLinks = ["home", "about", "skills", "education", "projects", "contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 md:top-6 left-0 w-full z-50 flex justify-center px-4 transition-all duration-300 pointer-events-none`}
    >
      <div 
        className={`pointer-events-auto w-full max-w-6xl mx-auto flex justify-between items-center px-6 py-3 rounded-2xl md:rounded-full transition-all duration-500
          ${darkMode ? "bg-[#0b0a0f]/80 border-white/10" : "bg-white/80 border-gray-200"}
          ${scrolled ? "backdrop-blur-xl border shadow-2xl shadow-purple-500/10" : "border-transparent bg-transparent"}
        `}
      >
        {/* Logo */}
        <button onClick={handleLogoClick} className="flex items-center gap-3 group relative z-50">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 p-[2px]">
             <img className="w-full h-full object-contain bg-white dark:bg-[#0b0a0f] rounded-full" src="/favicon.png" alt="Logo" />
          </div>
          <div className="leading-none text-left hidden sm:block">
            <span className={`block text-sm font-bold tracking-tight ${darkMode ? "text-white" : "text-gray-900"} group-hover:text-purple-500 transition-colors`}>
              Rudra Protap
            </span>
            <span className={`block text-sm font-bold tracking-tight ${darkMode ? "text-gray-400" : "text-gray-600"} group-hover:text-pink-500 transition-colors`}>
              Chakraborty
            </span>
          </div>
        </button>

        {/* Desktop Links (Floating Pill) */}
        <ul className="hidden md:flex items-center gap-2 px-2">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleNavClick(link)}
                className={`relative px-4 py-2 text-sm font-semibold tracking-wide capitalize transition-colors duration-300 rounded-full
                  ${activeLink === link ? (darkMode ? "text-white" : "text-purple-700") : (darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black")}
                `}
              >
                {activeLink === link && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-500/30 dark:to-pink-500/30 rounded-full -z-10 border border-purple-500/20"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side buttons */}
        <div className="flex items-center gap-3 relative z-50">
          
          {/* Dark Mode Toggle */}
          <MagneticButton>
            <button
              onClick={toggleDarkMode}
              className={`w-10 h-10 flex items-center justify-center rounded-full text-lg transition-all border ${
                darkMode ? "text-yellow-300 bg-white/5 border-white/10 hover:bg-white/10" : "text-gray-800 bg-gray-50 border-gray-200 hover:bg-gray-100"
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={darkMode ? "dark" : "light"}
                  initial={{ y: -20, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 20, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {darkMode ? <FaSun /> : <FaMoon />}
                </motion.div>
              </AnimatePresence>
            </button>
          </MagneticButton>

          {/* Resume */}
          <a
            href="https://drive.google.com/file/d/1kha8svSeYUWKe_9xHwa-MxaeJjiF8MqG/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center justify-center px-6 py-2.5 rounded-full text-white font-bold text-sm bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 active:scale-95 transition-all"
          >
            Resume
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden w-10 h-10 flex items-center justify-center rounded-full border ${
              darkMode ? "bg-white/5 border-white/10 text-white" : "bg-gray-50 border-gray-200 text-gray-800"
            }`}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`absolute top-full left-4 right-4 mt-2 p-6 rounded-3xl shadow-2xl pointer-events-auto border backdrop-blur-3xl md:hidden origin-top
              ${darkMode ? "bg-[#0b0a0f]/95 border-white/10 shadow-black/50" : "bg-white/95 border-gray-200 shadow-xl"}
            `}
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleNavClick(link)}
                    className={`block w-full px-6 py-4 rounded-xl text-left text-lg font-bold transition-all capitalize
                      ${activeLink === link 
                        ? (darkMode ? "bg-purple-500/20 text-purple-300" : "bg-purple-50 text-purple-700") 
                        : (darkMode ? "text-gray-300 hover:bg-white/5" : "text-gray-600 hover:bg-gray-50")
                      }
                    `}
                  >
                    {link}
                  </button>
                </li>
              ))}
              <li className="mt-4 pt-4 border-t border-gray-500/20">
                 <a
                  href="https://drive.google.com/file/d/1kha8svSeYUWKe_9xHwa-MxaeJjiF8MqG/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-6 py-4 rounded-xl text-white font-bold bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg transition-transform active:scale-95"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
