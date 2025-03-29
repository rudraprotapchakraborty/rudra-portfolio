import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import "../index.css";

const Hero = () => {
  const { darkMode } = useContext(ThemeContext);

  // Animation Configurations
  const fadeInUp = (delay = 0) => ({
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay },
  });

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
          href="https://x.com/rudraprotapc"
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
          href="https://drive.google.com/file/d/1wqVSRQ6Jhh212Mv8Ztrde-5dOXRGf-sk/view?usp=sharing"
          download
          className="inline-block bg-purple-600 text-white px-8 py-3 mt-6 rounded-full shadow-lg hover:bg-purple-500 hover:-translate-y-2 transition-transform duration-300"
        >
          Download Resume
        </a>
      </div>

      {/* Image Section with Morphing Hard Border */}
      <div className="relative w-60 h-60 lg:w-80 lg:h-80 flex justify-center items-center">
        {/* Morphing Hard Border */}
        <motion.div
          className="absolute w-[110%] h-[110%] border-[3px] border-purple-500"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 8, -8, 0],
            borderRadius: ["50%", "44%", "56%", "50%"],
          }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          style={{
            background: "transparent",
          }}
        ></motion.div>

        {/* Profile Image */}
        <button>
          <img
            src="https://i.ibb.co/7Jn0DKtF/photo-rudra-protap-chakraborty-reduced.jpg"
            alt="Rudra Protap Chakraborty"
            className="w-56 h-56 lg:w-72 lg:h-72 rounded-full object-cover border-4 dark:border-white border-purple-500 shadow-lg relative"
          />
        </button>
      </div>
    </div>
  );
};

export default Hero;
