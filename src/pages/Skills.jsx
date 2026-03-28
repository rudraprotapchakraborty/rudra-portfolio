import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

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

const skillsTop = [
  { title: "React", icon: react },
  { title: "Node.js", icon: node },
  { title: "MongoDB", icon: mongodb },
  { title: "Tailwind", icon: tailwind },
  { title: "Next.js", icon: nextjs },
];

const skillsBottom = [
  { title: "JavaScript", icon: javascript },
  { title: "HTML", icon: html },
  { title: "CSS", icon: css },
  { title: "Firebase", icon: firebase },
  { title: "AI/Tools", icon: ai },
];

const MarqueeRow = ({ items, reverse }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="flex overflow-hidden relative w-full h-40 group [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex gap-8 whitespace-nowrap min-w-full absolute"
        animate={{
          x: reverse ? ["-100%", "0%"] : ["0%", "-100%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {/* Render twice for seamless looping */}
        {[...items, ...items, ...items, ...items].map((skill, i) => (
          <div
            key={i}
            className={`flex-shrink-0 w-[240px] h-32 rounded-3xl flex items-center justify-center gap-4 border transition-all duration-300 hover:scale-[1.05] hover:z-10
              ${
                darkMode
                  ? "bg-white/5 border-white/10 hover:bg-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md"
                  : "bg-white/60 border-purple-200/50 hover:bg-white shadow-xl backdrop-blur-md"
              }
            `}
          >
            <img src={skill.icon} alt={skill.title} className="w-12 h-12 object-contain filter drop-shadow-md" />
            <h3 className={`text-xl font-bold ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
              {skill.title}
            </h3>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-32 px-4 lg:px-24 flex flex-col justify-center overflow-hidden min-h-[80vh]">
      <div className="text-center mb-16 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#C084FC] to-[#EC4899] text-transparent bg-clip-text inline-block drop-shadow-lg"
        >
          My Toolbox
        </motion.h2>
        <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg">Continuous learning is the most powerful skill.</p>
      </div>

      <div className="flex flex-col gap-6 relative z-10 w-full max-w-[100vw]">
        <MarqueeRow items={skillsTop} reverse={false} />
        <MarqueeRow items={skillsBottom} reverse={true} />
      </div>
    </section>
  );
};

export default Skills;
