import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const FluidBackground = () => {
  const { darkMode } = useContext(ThemeContext);

  // Soft gradients that slowly morph
  const variants = {
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 15,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base noise or dark background */}
      <div
        className={`absolute inset-0 transition-colors duration-1000 ${
          darkMode ? "bg-[#0b0a0f]" : "bg-[#faf5ff]"
        }`}
      />

      {/* Morphing colorful blobs via large blurred divs */}
      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -100, 100, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className={`absolute -top-1/4 -left-1/4 w-[80vw] h-[80vw] rounded-full blur-[120px] opacity-30 ${
          darkMode ? "bg-purple-900" : "bg-purple-300"
        }`}
      />
      
      <motion.div
        animate={{
          x: [0, -100, 100, 0],
          y: [0, 100, -100, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 25,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 2,
        }}
        className={`absolute -bottom-1/4 -right-1/4 w-[60vw] h-[60vw] rounded-full blur-[120px] opacity-20 ${
          darkMode ? "bg-indigo-900" : "bg-pink-300"
        }`}
      />

      {/* Grid overlay to give it a techy feel */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />
    </div>
  );
};

export default FluidBackground;
