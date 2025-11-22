// Updated Hero component with visible floating cards in light mode
import { useContext, useRef } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import GlowOrb from "../components/GlowOrb";
import "../index.css";

import photo from "../assets/photo.png";

const Hero = () => {
  const { darkMode } = useContext(ThemeContext);
  const heroRef = useRef(null);

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay, ease: "easeOut" },
  });

  const lightCard = "bg-white/70 border border-gray-300 text-gray-900 shadow-xl";
  const darkCard = "bg-white/10 border border-white/10 text-purple-100 shadow-xl";

  return (
    <section
      ref={heroRef}
      className={`
        relative min-h-screen w-full 
        overflow-visible
        flex flex-col lg:flex-row 
        items-center justify-center 
        gap-10 lg:gap-16
        px-6 lg:px-16 pt-32 pb-40
        transition-all duration-700
        ${darkMode ? "bg-[#0b0a0f] text-white" : "bg-[#faf5ff] text-gray-900"}
      `}
    >
      {/* GRID BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.2] mix-blend-soft-light z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(138,43,226,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(138,43,226,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* BLOBS */}
      <GlowOrb
        className="absolute top-[-180px] left-[-140px] w-[360px] h-[360px] blur-[180px] opacity-60 z-0"
        color="#C084FC"
      />
      <GlowOrb
        className="absolute bottom-[-200px] right-[-160px] w-[420px] h-[420px] blur-[200px] opacity-60 z-0"
        color="#A855F7"
      />

      {/* FLOATING CARDS */}
      <>
        {/* </> CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className={`hidden lg:flex absolute left-10 top-[30%] z-20 px-6 py-4 rounded-2xl backdrop-blur-md font-semibold text-lg shadow-xl ${
            darkMode ? darkCard : lightCard
          }`}
        >
          {"</>"}
        </motion.div>

        {/* STAR CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: [-8, 8, -8] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className={`hidden lg:flex absolute right-10 top-[48%] z-20 px-6 py-4 rounded-2xl backdrop-blur-md text-xl shadow-xl ${
            darkMode ? darkCard : lightCard
          }`}
        >
          ⭐
        </motion.div>

        {/* PORTFOLIO READY TAG */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className={`hidden lg:flex absolute bottom-32 left-10 z-20 py-4 px-6 text-sm font-semibold rounded-2xl shadow-xl backdrop-blur-md ${
            darkMode
              ? "bg-gradient-to-r from-[#6C2BD9] to-[#A855F7] text-white"
              : "bg-gradient-to-r from-[#D8B4FE] to-[#C084FC] text-gray-900 shadow-lg"
          }`}
        >
          🚀 Portfolio Ready
        </motion.div>

        {/* JS CIRCLE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: [1, 1.05, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className={`hidden lg:flex absolute right-[26%] top-[26%] z-20 w-12 h-12 rounded-full backdrop-blur-md items-center justify-center font-bold shadow-lg ${
            darkMode ? "bg-purple-600/20 text-purple-300" : "bg-white/80 border border-gray-300 text-purple-700"
          }`}
        >
          JS
        </motion.div>

        {/* SMOOTH UI TAG */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className={`hidden lg:flex absolute right-[20%] bottom-28 z-20 px-4 py-2 rounded-full backdrop-blur-md text-sm shadow-lg ${
            darkMode ? "bg-purple-600/20 text-purple-200" : "bg-white/80 border border-gray-300 text-purple-700"
          }`}
        >
          ✨ Smooth UI
        </motion.div>
      </>

      {/* LEFT TEXT */}
      <div className="max-w-xl text-center lg:text-left z-20">
        <motion.h1
          {...fade(0)}
          className="text-5xl lg:text-6xl font-extrabold leading-tight"
        >
          Build
          <br />
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-gradient-to-r from-[#6C2BD9] via-[#A855F7] to-[#EC4899] blur-md opacity-40 -z-10"></span>
            <span className="bg-gradient-to-r from-[#6C2BD9] via-[#A855F7] to-[#EC4899] text-transparent bg-clip-text">
              Stunning Web Experiences
            </span>
          </span>
        </motion.h1>

        <motion.p
          {...fade(0.3)}
          className={`mt-6 text-lg leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Hi, I'm Rudra — a MERN Stack Developer focused on building fast,
          beautiful, and modern web apps.
        </motion.p>

        <motion.a
          {...fade(0.6)}
          href="https://drive.google.com/file/d/1iJSaz38y63jYBvsS45dstnYmBGnUqs23/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-10 px-12 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-[#6C2BD9] via-[#A855F7] to-[#EC4899] text-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          Download Resume
        </motion.a>
      </div>

      {/* IMAGE FRAME */}
      <motion.div
        {...fade(0.5)}
        className="relative w-[260px] h-[260px] lg:w-[320px] lg:h-[320px] flex justify-center z-20"
      >
        <motion.div
          className="absolute inset-0 rounded-3xl shadow-xl backdrop-blur-md bg-purple-300/10"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <img
          src={photo}
          alt="Rudra"
          className="w-full h-full object-cover rounded-3xl shadow-xl relative"
        />
      </motion.div>

      {/* CURVED PURPLE WAVE */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen z-[1] pointer-events-none">
        <svg
          viewBox="0 0 1440 450"
          className="w-full h-[200px] md:h-[260px] lg:h-[300px]"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="phSoftPurpleWave" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E9D5FF" />
              <stop offset="40%" stopColor="#D8B4FE" />
              <stop offset="100%" stopColor="#C084FC" />
            </linearGradient>
          </defs>

          <path
            fill="url(#phSoftPurpleWave)"
            d="
              M0,300
              C200,260 400,230 600,240
              C800,250 1000,300 1200,310
              C1320,320 1440,330 1440,330
              L1440,450
              L0,450
              Z
            "
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
