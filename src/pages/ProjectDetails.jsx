import { useEffect, useContext, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projectsData";
import { motion, useScroll, useTransform } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import useDevice from "../hooks/useDevice";
import MagneticButton from "../components/MagneticButton";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(id));
  const { darkMode } = useContext(ThemeContext);
  const { isMobile } = useDevice();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const imgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="text-center text-3xl text-red-500 py-32 font-bold min-h-screen">
        Project not found!
      </div>
    );
  }

  const containerVar = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVar = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring" } },
  };

  const bentoStyle = `relative rounded-3xl p-8 overflow-hidden backdrop-blur-xl border shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2
    ${darkMode ? "bg-white/5 border-white/10 hover:border-purple-500/50" : "bg-white/70 border-gray-200 hover:border-purple-400"}
  `;

  return (
    <div ref={containerRef} className="relative min-h-[200vh] w-full bg-transparent">
      
      {/* MASSIVE IMMERSIVE HEADER */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center -z-10">
        <motion.img
          style={{ y: imgY, opacity: imgOpacity }}
          src={project.image}
          className="absolute inset-0 w-full h-full object-cover scale-110"
          alt={project.name}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#0b0a0f] dark:to-[#0b0a0f] max-h-screen" />
        
        <motion.div style={{ y: textY }} className="relative z-10 text-center px-6 mt-20">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black text-white drop-shadow-2xl tracking-tighter"
          >
            {project.name}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
             <MagneticButton>
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full font-bold bg-white text-black hover:bg-gray-200 transition-colors">
                  View Live Site
                </a>
             </MagneticButton>
             <MagneticButton>
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full font-bold bg-white/20 text-white backdrop-blur-md border border-white/30 hover:bg-white/30 transition-colors">
                  View Source
                </a>
             </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* CONTENT LAYER */}
      <motion.div 
        className={`relative z-20 w-full max-w-7xl mx-auto px-6 py-32 rounded-t-[3rem] 
          ${darkMode ? "bg-[#0b0a0f]" : "bg-[#faf5ff]"}
        `}
      >
         <motion.div variants={containerVar} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            
            {/* Project Deep Dive Text */}
            <motion.div variants={itemVar} className="max-w-4xl mx-auto text-center mb-24">
               <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text mb-6">The Concept</h2>
               <p className={`text-xl leading-relaxed md:text-2xl font-light ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                 {project.longDescription}
               </p>
            </motion.div>

            {/* BENTO GRID DETAILS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[auto]">
              
              {/* Challenges Card */}
              <motion.div variants={itemVar} className={`md:col-span-2 ${bentoStyle}`}>
                 <h3 className="text-2xl font-bold text-pink-500 mb-4 tracking-tight">Challenges Faced</h3>
                 <p className={`text-lg leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                   {project.challenges}
                 </p>
              </motion.div>

              {/* Improvements Card */}
              <motion.div variants={itemVar} className={`bg-gradient-to-br from-purple-900 to-indigo-900 border-none ${bentoStyle}`}>
                 <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Future Roadmap</h3>
                 <p className="text-lg leading-relaxed text-indigo-100">
                   {project.improvements}
                 </p>
              </motion.div>

              {/* Tech Stack Header */}
              <motion.div variants={itemVar} className="col-span-1 md:col-span-2 lg:col-span-3 mt-12 mb-4">
                 <h2 className={`text-4xl font-extrabold text-center ${darkMode ? "text-white" : "text-black"}`}>Core Architecture</h2>
              </motion.div>

              {/* Tech Cards Map */}
              {project.techCards.map((tech, i) => (
                <motion.div key={i} variants={itemVar} className={`${bentoStyle} flex flex-col justify-between group/tech`}>
                  <div className="flex justify-between items-start mb-6">
                     <h3 className={`text-2xl font-bold ${darkMode ? "text-gray-200" : "text-gray-800"}`}>{tech.name}</h3>
                     <img src={tech.icon} alt={tech.name} className="w-12 h-12 object-contain filter group-hover/tech:scale-125 transition-transform drop-shadow-lg" />
                  </div>
                  <p className={`text-base ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    {tech.description}
                  </p>
                </motion.div>
              ))}

            </div>

            {/* Bottom Nav */}
            <motion.div variants={itemVar} className="mt-32 text-center pb-20">
               <Link to="/" className="inline-block relative overflow-hidden px-10 py-5 rounded-full font-bold text-lg bg-white/10 border border-white/20 hover:border-purple-500 transition-colors group">
                  <span className={`relative z-10 ${darkMode ? "text-white" : "text-black"}`}>← Back to Portfolio</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity" />
               </Link>
            </motion.div>

         </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
