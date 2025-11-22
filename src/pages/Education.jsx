import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

import GlowOrb from "../components/GlowOrb";
import amity from "../assets/icons/amity.png";

const Education = () => {
  const { darkMode } = useContext(ThemeContext);

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  const fade = !isMobile
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
        hidden: { opacity: 0, y: 25 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: "easeOut" },
        },
      }
    : {};

  const cardBase =
    "relative rounded-[26px] p-12 w-full max-w-5xl min-h-[320px] shadow-md border overflow-hidden flex items-center justify-between gap-10";

  const cardColor = "bg-[#fdebef] border-[#f6d7df]";

  return (
    <section
      id="education"
      className={`relative py-28 min-h-screen px-8 lg:px-24 transition-colors duration-700 ${
        darkMode ? "bg-[#0b0a0f] text-white" : "bg-[#faf3ff]"
      }`}
    >
      {/* Glow — desktop only */}
      {!isMobile && (
        <GlowOrb
          className="absolute top-[-180px] right-[-140px] w-[360px] h-[360px] blur-[220px] opacity-60"
          color="#b57aff"
        />
      )}

      {/* Title */}
      <motion.h1
        variants={titleFade}
        initial={!isMobile ? "hidden" : ""}
        whileInView={!isMobile ? "show" : ""}
        viewport={{ once: true }}
        className="text-5xl font-extrabold text-center mb-20
          bg-gradient-to-r from-[#a66bff] via-[#c26bff] to-[#9b5cff]
          text-transparent bg-clip-text"
      >
        Education
      </motion.h1>

      {/* CARD WRAPPER */}
      <motion.div
        className="w-full flex justify-center"
        variants={fade}
        initial={!isMobile ? "hidden" : ""}
        whileInView={!isMobile ? "show" : ""}
        viewport={{ once: true }}
      >
        <motion.div
          className={`${cardBase} ${cardColor} ${
            isMobile ? "flex-col text-center p-10" : "flex-row"
          }`}
          whileHover={!isMobile ? { y: -6 } : {}}
        >
          {/* Glow Sweep — desktop only */}
          {!isMobile && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.50), transparent)",
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

          {/* LOGO — TOP ON MOBILE */}
          <div
            className={`relative z-10 ${
              isMobile ? "w-32 h-32 mx-auto mb-6" : "w-[170px] h-[170px]"
            }`}
          >
            <img
              src={amity}
              alt="Amity University"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>

          {/* TEXT — BELOW ON MOBILE */}
          <div
            className={`relative z-10 flex-1 ${
              isMobile ? "text-center" : "text-left"
            }`}
          >
            <h3 className="text-3xl font-bold mb-3 text-[#3b2b7f]">
              Amity University, Kolkata
            </h3>

            <p className="text-lg mb-1 text-gray-800">
              BSc Physics (Honours with Research)
            </p>

            <p className="text-[15px] font-semibold text-gray-700 mb-4">
              2024–2028
            </p>

            <p className="text-[15px] leading-[1.55] text-gray-700">
              Strengthened analytical reasoning, scientific problem-solving,
              and built solid foundations in mathematics and research-based
              physics studies.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
