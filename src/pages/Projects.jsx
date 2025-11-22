import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import useDevice from "../hooks/useDevice";

import project0 from "../assets/digital-wallet-system.png";
import project1 from "../assets/hotel-management.png";
import project2 from "../assets/food-sharing.png";
import project3 from "../assets/movie-portal.png";

import reactIcon from "../assets/icons/react.png";
import nodeIcon from "../assets/icons/node.png";
import mongoIcon from "../assets/icons/mongodb.png";
import firebaseIcon from "../assets/icons/firebase.png";
import tailwindIcon from "../assets/icons/tailwind.png";
import expressIcon from "../assets/icons/express.png";

const projects = [
  {
    id: 0,
    name: "Digital Wallet System",
    image: project0,
    description:
      "A modern digital wallet frontend application built with React + Vite, supporting three user roles: User, Agent, and Admin with full wallet operations, transfers, admin controls & transaction history.",
    tech: [reactIcon, nodeIcon, expressIcon, mongoIcon, tailwindIcon],
  },
  {
    id: 1,
    name: "Hotel Management System",
    image: project1,
    description:
      "A React-based hostel management app featuring authentication, meal management, reviews, payments, and a full admin dashboard.",
    tech: [reactIcon, nodeIcon, expressIcon, mongoIcon, tailwindIcon],
  },
  {
    id: 2,
    name: "Food Sharing Website",
    image: project2,
    description:
      "A community-driven food-sharing platform to donate food, request essentials, and reduce waste with real-time updates.",
    tech: [reactIcon, firebaseIcon, tailwindIcon],
  },
  {
    id: 3,
    name: "Movie Portal",
    image: project3,
    description:
      "A movie browsing portal with search, filtering, ratings, and detailed info pages built using React.",
    tech: [reactIcon, tailwindIcon],
  },
];

const Projects = () => {
  const { isMobile } = useDevice();

  // Desktop animation
  const desktopFade = (delay = 0) => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
  });

  // Mobile animation (super light)
  const mobileFade = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.4 },
  };

  return (
    <section
      id="projects"
      className="relative py-20 px-6 md:px-12 bg-[#f9f7ff] dark:bg-[#0b0a0f] transition-all"
    >
      {/* Title */}
      <motion.h2
        className="text-5xl font-extrabold text-center mb-20 
        bg-gradient-to-r from-[#a66bff] via-[#c26bff] to-[#9b5cff]
        text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((proj, index) => (
          <motion.div
            key={proj.id}
            {...(isMobile ? mobileFade : desktopFade(index * 0.15))}
            className="bg-white dark:bg-[#1a1a1a] border border-[#e7e3ee] 
            dark:border-[#322645] shadow-[0_0_12px_rgba(0,0,0,0.06)] 
            rounded-2xl p-8 md:p-10 flex flex-col"
          >
            {/* Image */}
            <div className="w-full h-64 md:h-72 overflow-hidden rounded-xl mb-6">
              <img
                src={proj.image}
                alt={proj.name}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-[26px] font-bold text-[#2b235a] dark:text-white mb-4">
              {proj.name}
            </h3>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6">
              {proj.description}
            </p>

            {/* Tech Icons */}
            <div className="flex items-center gap-4 flex-wrap mb-8">
              {proj.tech.map((icon, i) => (
                <img
                  key={i}
                  src={icon}
                  alt=""
                  className="w-8 h-8 object-contain opacity-85 hover:opacity-100 transition"
                />
              ))}
            </div>

            {/* Button */}
            <div className="mt-auto flex justify-start">
              <Link
                to={`/projects/${proj.id}`}
                className="px-6 py-3 rounded-full border border-[#3b2b7f] text-[#3b2b7f]
                dark:text-white dark:border-[#d8b4fe] font-semibold text-sm
                hover:bg-[#f2eaff] dark:hover:bg-[#2a1f3d]
                transition"
              >
                View Details →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
