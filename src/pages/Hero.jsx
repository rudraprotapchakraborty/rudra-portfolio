import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaSquareXTwitter } from "react-icons/fa6";
import "../index.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Hero = () => {
  const { darkMode } = useContext(ThemeContext); // Access darkMode from context

  // Animation Configurations
  const fadeInUp = (delay = 0) => ({
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay },
  });

  const floatingEffect = {
    animate: { y: [0, -15, 0], rotate: [0, 2, -2, 0] },
    transition: { duration: 6, ease: "easeInOut", repeat: Infinity },
  };

  return (
    <div
      id="home"
      className={`flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-32 min-h-screen px-6 lg:px-16 py-16 relative ${
        darkMode ? "bg-black" : "bg-white"
      }`}
    >
      {/* Social Media Links on Left */}
      <motion.div
        className="absolute left-6 lg:left-16 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <a
          href="https://github.com/rudraprotapchakraborty"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-purple-900 dark:text-white dark:bg-purple-900 dark:hover:bg-purple-700 p-3 rounded-full shadow-lg transition-colors"
          aria-label="GitHub"
        >
          <FaGithub className="text-xl" />
        </a>
        <a
          href="https://linkedin.com/in/rudraprotapchakraborty"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-purple-900 dark:text-white dark:bg-purple-900 dark:hover:bg-purple-700 p-3 rounded-full shadow-lg transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-xl" />
        </a>
        <a
          href="https://x.com/rudraprotapchak"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-purple-900 dark:text-white dark:bg-purple-900 dark:hover:bg-purple-700 p-3 rounded-full shadow-lg transition-colors"
          aria-label="Twitter"
        >
          <FaSquareXTwitter className="text-xl" />
        </a>
        <a
          href="https://facebook.com/rudraprotapchakraborty1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-purple-900 dark:text-white dark:bg-purple-900 dark:hover:bg-purple-700 p-3 rounded-full shadow-lg transition-colors"
          aria-label="Facebook"
        >
          <FaFacebook className="text-xl" />
        </a>
      </motion.div>

      {/* Text Section */}
      <div
        className={`max-w-lg space-y-6 text-center lg:text-left ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        <motion.h1
          className={`text-5xl font-extrabold ${
            darkMode ? "text-purple-300" : "text-purple-700"
          }`}
          {...fadeInUp()}
        >
          Hi, I am{" "}
          <span className="text-purple-400">Rudra Protap Chakraborty</span>
        </motion.h1>
        <motion.h2
          className={`text-3xl ${darkMode ? "text-gray-400" : "text-gray-700"}`}
          {...fadeInUp(0.2)}
        >
          MERN Stack Developer
        </motion.h2>
        <motion.p
          className={`text-gray-300 leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
          {...fadeInUp(0.4)}
        >
          I specialize in creating visually engaging and highly responsive web
          interfaces using the latest technologies. With a keen eye for detail
          and a passion for clean design, I craft user-friendly digital
          experiences that drive results.
        </motion.p>
        <a
          target="_blank"
          href="https://docs.google.com/document/d/19I6D8w9wB4i3ZAcJ_c9ELnIEatJveP2vf1ekycXakIA/edit?usp=sharing"
          download
          className="inline-block bg-purple-600 text-white px-8 py-3 mt-6 rounded-full shadow-lg hover:bg-purple-500 hover:-translate-y-2 transition-transform duration-300"
        >
          Download Resume
        </a>
      </div>

      {/* Image Section */}
      <div className="relative w-60 h-60 lg:w-80 lg:h-80">
        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src="https://i.ibb.co/93CMfQKW/photo-rudra-protap-chakraborty.png"
            alt="Rudra Protap Chakraborty"
            className="max-w-full w-full h-full rounded-t-[40px] rounded-br-[40px] shadow-lg object-cover border-4 border-purple-700"
            {...floatingEffect}
          />
        </motion.div>
        <motion.div
          className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-800 to-black opacity-30 rounded-t-[40px] rounded-br-[40px] pointer-events-none ${
            darkMode ? "opacity-30" : "opacity-20"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
      </div>
    </div>
  );
};

export default Hero;
