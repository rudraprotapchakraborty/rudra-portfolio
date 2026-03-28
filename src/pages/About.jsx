import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {
  const { darkMode } = useContext(ThemeContext);

  const containerVar = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVar = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, type: "spring" } },
  };

  const getBentoStyle = () =>
    `relative overflow-hidden rounded-3xl p-8 border backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 group ${
      darkMode
        ? "bg-white/5 border-white/10 hover:border-purple-500/50"
        : "bg-white/70 border-gray-200 hover:border-purple-500/50"
    }`;

  return (
    <section
      id="about"
      className="relative min-h-screen py-32 px-6 lg:px-24 flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVar}
        className="w-full max-w-7xl"
      >
        {/* HEADER */}
        <motion.div variants={itemVar} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#6C2BD9] via-[#A855F7] to-[#EC4899] bg-clip-text text-transparent inline-block drop-shadow-sm">
            About Me
          </h2>
          <p className={`mt-4 text-lg ${darkMode ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}>
            A deep dive into my background, skills, and the mindset I bring to web development.
          </p>
        </motion.div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[220px]">
          
          {/* Main Intro Card (Spans 2x2) */}
          <motion.div variants={itemVar} className={`md:col-span-2 md:row-span-2 ${getBentoStyle()}`}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className={`text-3xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
              Who am I?
            </h3>
            <p className={`text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              I’m <span className="font-semibold text-purple-500">Rudra Protap Chakraborty</span>, a passionate full-stack developer blending design with engineering. I thrive in environments where creativity meets complex problem-solving.
            </p>
            <p className={`mt-4 text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              Whether backend architecture via Node.js/MongoDB or creating mesmerizing frontend visuals via React and Framer Motion, I focus on delivering perfect user experiences.
            </p>
          </motion.div>

          {/* Skill 1 */}
          <motion.div variants={itemVar} className={`md:col-span-1 md:row-span-1 ${getBentoStyle()} flex flex-col justify-center`}>
             <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full"></div>
             <span className="text-sm font-semibold tracking-wider text-purple-500 mb-2 uppercase">Stack</span>
             <h4 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-black"}`}>MERN</h4>
             <p className={`mt-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>End-to-end web apps scaling elegantly.</p>
          </motion.div>

          {/* Interesting Fact */}
          <motion.div variants={itemVar} className={`md:col-span-1 md:row-span-1 ${getBentoStyle()} flex flex-col justify-center bg-gradient-to-br from-purple-600 to-pink-600 border-none !text-white`}>
            <span className="text-sm font-semibold tracking-wider opacity-80 mb-2 uppercase">Background</span>
            <h4 className="text-2xl font-bold">Physics Geek</h4>
            <p className="mt-2 opacity-90">Quantum logic heavily boosted my programming logic!</p>
          </motion.div>

          {/* Skill 2 */}
          <motion.div variants={itemVar} className={`md:col-span-2 lg:col-span-1 md:row-span-1 ${getBentoStyle()} flex flex-col justify-center`}>
            <span className="text-sm font-semibold tracking-wider text-pink-500 mb-2 uppercase">Philosophy</span>
            <h4 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-black"}`}>Clean Code</h4>
            <p className={`mt-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Reusable robust structures & components.</p>
          </motion.div>

          {/* Hobbies / Extras */}
          <motion.div variants={itemVar} className={`md:col-span-2 lg:col-span-1 md:row-span-1 ${getBentoStyle()} flex flex-col justify-center`}>
            <span className="text-sm font-semibold tracking-wider text-indigo-400 mb-2 uppercase">Hobbies</span>
            <h4 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-black"}`}>Movies & Gaming</h4>
            <p className={`mt-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Fueling my imagination and visual creativity.</p>
          </motion.div>
          
        </div>
      </motion.div>
    </section>
  );
};

export default About;
