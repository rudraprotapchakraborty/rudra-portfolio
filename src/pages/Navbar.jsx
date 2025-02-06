import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    "home",
    "about",
    "skills",
    "education",
    "projects",
    "contact",
  ].map((link) => (
    <li key={link} className="text-lg capitalize">
      <HashLink
        to={`/#${link}`}
        onClick={() => {
          setActiveLink(link);
          setIsMenuOpen(false);
        }}
        className={`${
          activeLink === link
            ? "text-purple-500"
            : "text-gray-700 dark:text-gray-300"
        } hover:text-purple-400 dark:hover:text-purple-300 transition-transform duration-200 ease-in-out transform hover:scale-105`}
      >
        {link}
      </HashLink>
    </li>
  ));

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md bg-white dark:bg-gray-900 bg-opacity-80 shadow-md transition-all duration-300 w-11/12 md:px-8 md:py-3 px-2 py-1 rounded-full`}
    >
      <div className="flex justify-between items-center px-4">
        {/* Logo */}
        <NavLink className="text-2xl font-bold text-purple-500">
          <span className="text-purple-700">&lt;R</span>udra
          <span className="text-purple-700">/&gt;</span>
        </NavLink>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">{links}</ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <div className="flex items-center">
            <label
              htmlFor="darkModeToggle"
              className="relative inline-block w-12 h-6"
            >
              <input
                type="checkbox"
                id="darkModeToggle"
                checked={darkMode}
                onChange={toggleDarkMode}
                className="opacity-0 w-0 h-0 absolute"
              />
              <span className="slider block w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full">
                <span
                  className={`dot block w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                    darkMode ? "translate-x-6" : "translate-x-0"
                  }`}
                >
                  {/* The icons will slide with the dot */}
                  <span
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                      darkMode ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <FaSun className="text-purple-500" />
                  </span>
                  <span
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                      darkMode ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <FaMoon className="text-purple-500" />
                  </span>
                </span>
              </span>
            </label>
          </div>

          {/* Download Resume Button */}
          <a
          target="_blank"
            href="https://drive.google.com/file/d/1FF9UVp8LXuXvHNKp9hZE-bxd22BFVPRa/view?usp=sharing"
            className="hidden sm:block bg-purple-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-purple-600 dark:hover:bg-purple-500 transition-transform duration-300 transform hover:scale-105"
          >
            Download Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300 p-2"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden absolute top-12 right-0 w-3/5 bg-white dark:bg-gray-900 shadow-lg p-4 flex flex-col gap-4 items-center text-lg rounded-lg">
          {links}
          <a
          target="_blank"
            href="https://drive.google.com/file/d/1FF9UVp8LXuXvHNKp9hZE-bxd22BFVPRa/view?usp=sharing"
            className="block text-base bg-purple-500 text-white px-2 py-1 rounded-full shadow-lg hover:bg-purple-600 dark:hover:bg-purple-500 transition-transform duration-300 transform hover:scale-105"
          >
            Download Resume
          </a>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
