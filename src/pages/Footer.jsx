import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import logo from "../../public/favicon.png";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext); // Access darkMode from context

  return (
    <footer
      className={`relative overflow-hidden ${
        darkMode
          ? "bg-black bg-opacity-80 text-gray-300"
          : "bg-white text-gray-800"
      } backdrop-blur-md shadow-lg`}
    >
      {/* Floating Animated Glow */}
      <div className="absolute -top-16 -left-16 w-32 h-32 bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto py-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Name and Tagline */}
        <div className="text-center md:text-left flex flex-col md:flex-row items-center md:gap-4">
          <motion.img
            className="w-24 md:w-32"
            src={logo}
            alt="Logo"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          />
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
          {["Home", "Projects", "About", "Contact"].map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.toLowerCase()}`}
              className={`text-lg transition duration-300 ease-in-out transform ${
                darkMode ? "text-gray-300" : "text-gray-800"
              }`}
              whileHover={{ scale: 1.1, color: "#a855f7" }}
            >
              {item}
            </motion.a>
          ))}
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
            {["Terms of Use", "Privacy Policy"].map((item, index) => (
              <motion.a
                key={index}
                href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
                whileHover={{
                  scale: 1.05,
                  color: "#a855f7",
                  textShadow: "0px 0px 8px rgba(168, 85, 247, 0.7)",
                }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
