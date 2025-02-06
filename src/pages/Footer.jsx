import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import logo from "../../public/favicon.png";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext); // Access darkMode from context

  return (
    <footer
      className={`${
        darkMode
          ? "bg-black bg-opacity-80 text-gray-300"
          : "bg-white text-gray-800"
      } backdrop-blur-md shadow-lg`}
    >
      <div className="container mx-auto py-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Name and Tagline */}
        <div className="text-center md:text-left flex flex-col md:flex-row items-center md:gap-4">
          <div>
            <img className="w-24 md:w-32" src={logo} alt="" />
          </div>
          <div>
            <h1
              className={`text-3xl font-semibold ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Rudra Protap Chakraborty
            </h1>
            <p
              className={`text-lg mt-2 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              MERN Stack Developer & Problem Solver
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-6 justify-center mt-6 md:mt-0">
          <a
            href="#home"
            className={`hover:text-purple-400 text-lg transition duration-300 ease-in-out transform hover:scale-110 ${
              darkMode ? "text-gray-300" : "text-gray-800"
            }`}
          >
            Home
          </a>
          <a
            href="#projects"
            className={`hover:text-purple-400 text-lg transition duration-300 ease-in-out transform hover:scale-110 ${
              darkMode ? "text-gray-300" : "text-gray-800"
            }`}
          >
            Projects
          </a>
          <a
            href="#about"
            className={`hover:text-purple-400 text-lg transition duration-300 ease-in-out transform hover:scale-110 ${
              darkMode ? "text-gray-300" : "text-gray-800"
            }`}
          >
            About
          </a>
          <a
            href="#contact"
            className={`hover:text-purple-400 text-lg transition duration-300 ease-in-out transform hover:scale-110 ${
              darkMode ? "text-gray-300" : "text-gray-800"
            }`}
          >
            Contact
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className={`text-sm ${
              darkMode ? "text-gray-500" : "text-gray-700"
            }`}
          >
            © {new Date().getFullYear()} Rudra Protap Chakraborty. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#terms"
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              } hover:text-purple-400 transition duration-300 ease-in-out`}
            >
              Terms of Use
            </a>
            <a
              href="#privacy"
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              } hover:text-purple-400 transition duration-300 ease-in-out`}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
