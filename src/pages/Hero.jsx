import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import useDevice from "../hooks/useDevice";
import MagneticButton from "../components/MagneticButton";
import photo from "../assets/photo.png";

const Hero = () => {
  const { darkMode } = useContext(ThemeContext);
  const { isMobile } = useDevice();

  // 3D Card Hover Effect Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
  };

  const text1 = "Build Stunning ".split(" ");
  const text2 = "Web Experiences".split(" ");

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-24 px-6 lg:px-20 pt-32 pb-40 overflow-hidden"
    >
      {/* LEFT SIDE: TEXT */}
      <motion.div
        className="max-w-xl text-center lg:text-left z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-5xl lg:text-[4.5rem] font-extrabold leading-[1.1] mb-6 flex flex-wrap justify-center lg:justify-start">
          {text1.map((word, i) => (
            <motion.span key={i} variants={wordVariants} className="mr-3">
              {word}
            </motion.span>
          ))}
          <span className="relative inline-block w-full lg:w-auto mt-2 lg:mt-0">
            {text2.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className="mr-3 bg-gradient-to-r from-[#C084FC] via-[#A855F7] to-[#EC4899] text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(203,132,252,0.3)]"
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          variants={wordVariants}
          className={`text-lg lg:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Hi, I'm <span className="font-semibold text-[#A855F7]">Rudra</span>. A MERN Stack Developer focused on crafting fast, intuitive, and mesmerizing digital products.
        </motion.p>

        <motion.div variants={wordVariants} className="mt-12">
          <MagneticButton>
            <a
              href="https://drive.google.com/file/d/1kha8svSeYUWKe_9xHwa-MxaeJjiF8MqG/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex px-10 py-4 font-bold rounded-full overflow-hidden group"
            >
              {/* Button Background & Border Effects */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#6C2BD9] to-[#EC4899]  -z-10 group-hover:opacity-90 transition-opacity"></span>
              <span className="absolute rotate-45 inset-0 w-full h-[300%] bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out -z-10"></span>
              
              <span className="text-white text-lg relative z-10 flex items-center gap-2">
                Download Resume <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </a>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE: ANIMATED 3D PROFILE IMAGE */}
      <motion.div
        className="relative z-20 perspective-1000"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={isMobile ? {} : { rotateX, rotateY, transformStyle: "preserve-3d" }}
          className={`relative w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] rounded-full p-2
            bg-gradient-to-br from-[#C084FC]/30 to-[#EC4899]/30 
            shadow-[0_0_40px_rgba(192,132,252,0.3)]
            backdrop-blur-xl border border-white/10
          `}
        >
          {/* Internal rotating dashes/rings */}
          {!isMobile && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-[#A855F7]/40 w-[110%] h-[110%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 pointer-events-none"
            />
          )}

          <div className="w-full h-full rounded-full overflow-hidden bg-[#0b0a0f] relative group">
            {/* The Image */}
            <img
              src={photo}
              alt="Rudra"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              style={{ transformTranslateZ: "40px" }} // Pop out in 3D Space
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
