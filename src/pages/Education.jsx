import { useContext, useRef } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import useDevice from "../hooks/useDevice";
import amity from "../assets/icons/amity.png";
import GlowOrb from "../components/GlowOrb";

const Education = () => {
  const { darkMode } = useContext(ThemeContext);
  const { isMobile } = useDevice();
  
  // 3D Parallax Mouse Tracking
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current || isMobile) return;
    const rect = ref.current.getBoundingClientRect();
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

  return (
    <section
      id="education"
      className="relative py-32 min-h-[80vh] px-8 lg:px-24 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-24 z-10"
      >
        <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg inline-block">
          Education
        </h2>
        <p className={`mt-4 text-xl font-light ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          The academic foundation fueling my technical journey.
        </p>
      </motion.div>

      {/* 3D FLOATING CARD */}
      <div 
        ref={ref} 
        onMouseMove={handleMouseMove} 
        onMouseLeave={handleMouseLeave}
        className="relative w-full max-w-5xl z-10 [perspective:1200px]"
      >
        <motion.div
          style={isMobile ? {} : { rotateX, rotateY, transformStyle: "preserve-3d" }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className={`relative rounded-[3rem] p-12 md:p-16 w-full min-h-[400px] border backdrop-blur-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12
            ${darkMode ? "bg-white/5 border-white/10" : "bg-white/70 border-purple-200"}
          `}
        >
          {/* Internal Glow Overlay */}
          {!isMobile && (
             <motion.div
               className="absolute inset-0 pointer-events-none rounded-[3rem] opacity-30"
               style={{
                 background: "radial-gradient(circle at center, rgba(168, 85, 247, 0.8) 0%, transparent 60%)",
                 x: useTransform(mouseXSpring, [-0.5, 0.5], ["-50%", "50%"]),
                 y: useTransform(mouseYSpring, [-0.5, 0.5], ["-50%", "50%"]),
               }}
             />
          )}

          {/* Logo Side */}
          <div 
            style={{ transform: "translateZ(80px)" }} 
            className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative z-20"
          >
             <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full" />
             <img src={amity} alt="Amity University" className="w-full h-full object-contain drop-shadow-2xl relative z-10" />
          </div>

          {/* Text Side */}
          <div 
            style={{ transform: "translateZ(60px)" }}
            className={`flex-1 relative z-20 ${isMobile ? "text-center" : "text-left"}`}
          >
             <h3 className={`text-4xl md:text-5xl font-extrabold mb-4 tracking-tight ${darkMode ? "text-white" : "text-black"}`}>
                Amity University, Kolkata
             </h3>
             <p className="text-2xl md:text-3xl font-light text-purple-500 mb-2">
                BSc Physics (Honours with Research)
             </p>
             <p className={`text-lg font-bold mb-6 tracking-wide uppercase ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                2024 – 2028
             </p>
             <p className={`text-xl leading-relaxed font-light ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                Bridging the gap between the physical universe and digital realities. Strengthening analytical reasoning and scientific problem-solving, creating a rock-solid foundation for complex logical algorithms and state management in code.
             </p>
          </div>
        </motion.div>
      </div>
      
      {/* Background Ambience Specific to Education */}
      {!isMobile && (
         <>
           <GlowOrb className="absolute -left-[20%] top-[10%] w-[500px] h-[500px] blur-[150px] opacity-40 -z-10" color="#6C2BD9" />
           <GlowOrb className="absolute -right-[20%] bottom-[10%] w-[500px] h-[500px] blur-[150px] opacity-40 -z-10" color="#EC4899" />
         </>
      )}
    </section>
  );
};

export default Education;
