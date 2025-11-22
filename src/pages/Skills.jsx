import { useContext } from "react";
import { motion } from "framer-motion";

import { ThemeContext } from "../context/ThemeContext";
import GlowOrb from "../components/GlowOrb";

// Icons
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import javascript from "../assets/icons/javascript.png";
import react from "../assets/icons/react.png";
import mongodb from "../assets/icons/mongodb.png";
import firebase from "../assets/icons/firebase.png";
import tailwind from "../assets/icons/tailwind.png";
import node from "../assets/icons/node.png";
import nextjs from "../assets/icons/nextjs.png";
import ai from "../assets/icons/ai.png";

const Skills = () => {
  const { darkMode } = useContext(ThemeContext);

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  // Desktop animations ONLY
  const container = !isMobile
    ? {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.12, delayChildren: 0.2 },
        },
      }
    : {};

  const item = !isMobile
    ? {
        hidden: { opacity: 0, y: 40 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: "easeOut" },
        },
      }
    : {};

  const titleFade = !isMobile
    ? {
        hidden: { opacity: 0, y: 30 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: "easeOut" },
        },
      }
    : {};

  const cardBase =
    "relative rounded-[22px] p-8 w-full h-[380px] shadow-md border overflow-hidden";

  const colors = [
    "bg-[#fdebef] border-[#f6d7df]",
    "bg-[#e6f3ff] border-[#d2e7ff]",
    "bg-[#fff8cc] border-[#f6e8a8]",
    "bg-[#e6f6ff] border-[#cfefff]",
    "bg-[#e4f7e7] border-[#ccefd2]",
    "bg-[#fff4d8] border-[#ffeac0]",
    "bg-[#e9f5ff] border-[#d5eaff]",
    "bg-[#e9f8ed] border-[#d3f0d7]",
    "bg-[#f2efff] border-[#e2dcff]",
    "bg-[#f3ecff] border-[#e6d9ff]",
  ];

  const skills = [
    {
      title: "HTML",
      icon: html,
      text: "Foundation of webpages. Learn semantic markup, clean layouts, and accessible structure.",
    },
    {
      title: "CSS",
      icon: css,
      text: "Styling language for layouts. Master Flexbox, Grid, animations, and responsive design.",
    },
    {
      title: "JavaScript",
      icon: javascript,
      text: "Core web logic. Learn ES6+, async code, APIs, and dynamic interactivity.",
    },
    {
      title: "React",
      icon: react,
      text: "Component-based UI library. Build scalable interfaces with hooks, state, and routing.",
    },
    {
      title: "MongoDB",
      icon: mongodb,
      text: "NoSQL database for modern apps. Learn CRUD, modeling, indexing, and integrations.",
    },
    {
      title: "Firebase",
      icon: firebase,
      text: "Serverless backend: auth, Firestore, hosting, storage, and real-time features.",
    },
    {
      title: "Tailwind CSS",
      icon: tailwind,
      text: "Utility-first CSS framework for fast, clean, responsive UIs.",
    },
    {
      title: "Node.js",
      icon: node,
      text: "JavaScript backend runtime: APIs, routing, authentication, and server logic.",
    },
    {
      title: "Next.js",
      icon: nextjs,
      text: "Full-stack React with SSR, API routes, routing, and production optimizations.",
    },
    {
      title: "AI",
      icon: ai,
      text: "Use AI tools for coding, debugging, prototyping, and smart application workflows.",
    },
  ];

  return (
    <section
      id="skills"
      className={`relative py-28 min-h-screen px-8 lg:px-24 transition-colors duration-700 ${
        darkMode ? "bg-[#0b0a0f] text-white" : "bg-[#faf3ff]"
      }`}
    >
      {/* Glow orb – desktop only */}
      {!isMobile && (
        <GlowOrb
          className="absolute top-[-180px] right-[-140px] w-[360px] h-[360px] blur-[220px] opacity-60"
          color="#b57aff"
        />
      )}

      <motion.h1
        variants={titleFade}
        initial={!isMobile ? "hidden" : ""}
        whileInView={!isMobile ? "show" : ""}
        viewport={{ once: true }}
        className="text-5xl font-extrabold text-center mb-20 bg-gradient-to-r from-[#a66bff] via-[#c26bff] to-[#9b5cff] text-transparent bg-clip-text"
      >
        My Skills
      </motion.h1>

      {/* Cards container */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
        variants={container}
        initial={!isMobile ? "hidden" : ""}
        whileInView={!isMobile ? "show" : ""}
        viewport={{ once: true }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={!isMobile ? { y: -8 } : {}}
            className={`${cardBase} ${colors[i]}`}
          >
            {/* Moving sweep effect – desktop only */}
            {!isMobile && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)",
                  filter: "blur(18px)",
                }}
                animate={{ x: ["-120%", "120%"] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}

            <img
              src={skill.icon}
              alt={skill.title}
              className="w-[85px] h-[85px] object-contain mb-6 relative z-10"
            />

            <h3 className="text-2xl font-bold mb-4 text-[#3b2b7f] relative z-10">
              {skill.title}
            </h3>

            <p className="text-[15px] leading-[1.55] text-gray-800 relative z-10">
              {skill.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
