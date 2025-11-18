import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projectsData";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext"; // ⬅ ADD THIS

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(id));

  const { darkMode } = useContext(ThemeContext); // ⬅ USE THEME
  const isDark = darkMode; // ⬅ SAME AS NAVBAR

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="text-center text-2xl text-red-500 py-20">
        Project not found!
      </div>
    );
  }

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className={`min-h-screen py-20 px-6 md:px-12 transition-all duration-700
        ${
          isDark
            ? "bg-gradient-to-br from-[#020617] via-[#0a0f29] to-[#020617] text-white"
            : "bg-gray-50 text-gray-900"
        }
      `}
    >
      <div
        className={`
        max-w-5xl mx-auto rounded-3xl p-10 shadow-2xl relative z-10 backdrop-blur-2xl  
        ${
          isDark
            ? "bg-[#0b0e22]/80 border border-[#1c2036]"
            : "bg-white border border-gray-200"
        }
      `}
      >
        {/* Title */}
        <motion.h1
          variants={fadeInUp}
          className={`text-4xl md:text-5xl font-bold mb-10 text-center
          ${isDark ? "text-[#d8b4fe]" : "text-purple-700"}
        `}
        >
          {project.name}
        </motion.h1>

        {/* Banner Image */}
        <motion.div
          variants={fadeInUp}
          className="w-full rounded-2xl overflow-hidden shadow-lg mb-10"
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-72 md:h-96 object-cover rounded-2xl"
          />
        </motion.div>

        {/* DETAILS */}
        <motion.div variants={fadeInUp} className="mb-12">
          <h2
            className={`text-2xl md:text-3xl font-bold mb-4
            ${isDark ? "text-[#c084fc]" : "text-purple-700"}
          `}
          >
            Details
          </h2>

          <p
            className={`text-lg leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {project.longDescription}
          </p>
        </motion.div>

        {/* Technologies */}
        <motion.h2
          variants={fadeInUp}
          className={`text-2xl md:text-3xl font-bold mb-6 
          ${isDark ? "text-[#fb7185]" : "text-pink-600"}
        `}
        >
          Technologies Used
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {project.techCards.map((tech, index) => (
            <div
              key={index}
              className={`
              flex items-start gap-4 p-6 rounded-xl shadow-md transition-all
              ${
                isDark
                  ? "bg-[#111123]/70 border border-[#1e2338] hover:-translate-y-1"
                  : "bg-white border border-gray-200 hover:-translate-y-1"
              }
            `}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-12 h-12 object-contain"
              />

              <div>
                <h3 className="text-xl font-semibold mb-1">{tech.name}</h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Links */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col md:flex-row gap-4 justify-center mb-12"
        >
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full text-white font-semibold
            bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition shadow-lg"
          >
            Live Link
          </a>

          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-8 py-3 rounded-full font-semibold transition shadow-lg
            ${
              isDark
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-gray-200 text-gray-900 hover:bg-gray-300"
            }`}
          >
            GitHub Repository
          </a>
        </motion.div>

        {/* Challenges */}
        <motion.div variants={fadeInUp} className="mb-10">
          <h3
            className={`text-2xl font-bold mb-3 ${
              isDark ? "text-[#c084fc]" : "text-purple-700"
            }`}
          >
            Challenges Faced
          </h3>
          <p className={`${isDark ? "text-gray-300" : "text-gray-700"}`}>
            {project.challenges}
          </p>
        </motion.div>

        {/* Improvements */}
        <motion.div variants={fadeInUp}>
          <h3
            className={`text-2xl font-bold mb-3 ${
              isDark ? "text-[#c084fc]" : "text-purple-700"
            }`}
          >
            Potential Improvements
          </h3>
          <p className={`${isDark ? "text-gray-300" : "text-gray-700"}`}>
            {project.improvements}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectDetails;
