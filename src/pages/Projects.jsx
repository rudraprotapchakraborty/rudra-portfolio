import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
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
    description: "A secure digital wallet frontend for seamless transfers and admin controls.",
    fullDesc: "A modern digital wallet application built with React + Vite, supporting user, agent, and admin roles with complete transaction history.",
    tech: [reactIcon, nodeIcon, expressIcon, mongoIcon, tailwindIcon],
  },
  {
    id: 1,
    name: "Hotel Management",
    image: project1,
    description: "A comprehensive dashboard for booking, tracking meals, and handling reviews.",
    fullDesc: "A React-based hostel management platform featuring authentication, meal tracking, reviews, payments, and an admin dashboard.",
    tech: [reactIcon, nodeIcon, expressIcon, mongoIcon, tailwindIcon],
  },
  {
    id: 2,
    name: "Food Shaver Platform",
    image: project2,
    description: "Community-driven food-sharing to donate and reduce waste globally.",
    fullDesc: "A platform built to connect donors with receivers for surplus food, aiming to drastically reduce waste with real-time updates.",
    tech: [reactIcon, firebaseIcon, tailwindIcon],
  },
  {
    id: 3,
    name: "Movie DB Portal",
    image: project3,
    description: "A sleek, dark-themed movie browsing application.",
    fullDesc: "A sleek portal with search, filtering, ratings, and detailed informational pages for cinema, utilizing an external public API.",
    tech: [reactIcon, tailwindIcon],
  },
];

const ProjectCard = ({ proj, index }) => {
  const ref = useRef(null);
  const { isMobile } = useDevice();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax translation for the image ONLY on desktop
  const y = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%", "0%"] : ["-15%", "15%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.15)] flex flex-col md:flex-row ${
        index % 2 === 1 ? "md:flex-row-reverse" : ""
      } bg-white/5 backdrop-blur-lg group`}
    >
      {/* IMAGE (LEFT side usually) */}
      <div className="md:w-[55%] h-64 md:h-[450px] relative overflow-hidden">
        <motion.img
          style={{ y, scale: 1.15 }}
          src={proj.image}
          alt={proj.name}
          className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-[1.2] transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none md:bg-gradient-to-r md:from-black/50 md:to-transparent" />
      </div>

      {/* TEXT/CONTENT (RIGHT side usually) */}
      <div className="md:w-[45%] p-8 md:p-12 flex flex-col justify-center bg-black/40 z-10 transition-colors duration-500 group-hover:bg-black/60">
        <h3 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
          {proj.name}
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-6 hidden md:block">
          {proj.fullDesc}
        </p>
        <p className="text-gray-300 text-base leading-relaxed mb-6 md:hidden">
          {proj.description}
        </p>

        {/* Tech Stack */}
        <div className="flex items-center gap-3 flex-wrap mb-10">
          {proj.tech.map((icon, i) => (
            <div key={i} className="w-10 h-10 p-2 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all">
               <img src={icon} alt="tech" className="w-full h-full object-contain" />
            </div>
          ))}
        </div>

        <Link
          to={`/projects/${proj.id}`}
          className="relative overflow-hidden inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-white bg-white/10 border border-white/20 hover:border-purple-500 hover:text-purple-300 hover:bg-purple-900/30 transition-all self-start w-auto"
        >
          Explore Case Study
        </Link>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-32 px-6 lg:px-24 overflow-hidden">
      {/* Title */}
      <div className="text-center mb-24 relative z-10">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-[#A855F7] to-[#EC4899] text-transparent bg-clip-text drop-shadow-md">
          Featured Work
        </h2>
        <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
          Here are some of the selected projects that showcase my passion for building dynamic, modern applications.
        </p>
      </div>

      {/* Grid List */}
      <div className="flex flex-col gap-20 lg:gap-32 w-full max-w-7xl mx-auto z-10 relative">
        {projects.map((proj, index) => (
          <ProjectCard key={proj.id} proj={proj} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
