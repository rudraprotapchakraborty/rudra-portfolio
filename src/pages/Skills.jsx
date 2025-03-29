import { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode } from "react-icons/fa"; 
import { SiTailwindcss, SiFirebase, SiMongodb, SiExpress, SiNextdotjs } from "react-icons/si"; 
import { ThemeContext } from '../context/ThemeContext';

const Skills = () => {
    const { darkMode } = useContext(ThemeContext);

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const skills = [
        {
            category: "Frontend",
            skills: [
                { name: "HTML", icon: <FaHtml5 /> },
                { name: "CSS", icon: <FaCss3Alt /> },
                { name: "Tailwind", icon: <SiTailwindcss /> },
                { name: "JavaScript", icon: <FaJs /> },
                { name: "React", icon: <FaReact /> },
                { name: "Next.js", icon: <SiNextdotjs /> }
            ]
        },
        {
            category: "Backend",
            skills: [
                { name: "Node.js", icon: <FaNode /> },
                { name: "Express.js", icon: <SiExpress /> },
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "Firebase", icon: <SiFirebase /> }
            ]
        }
    ];

    return (
        <section id="skills" className={`py-16 min-h-screen px-6 lg:px-16 ${darkMode ? 'bg-black' : 'bg-white'}`}>
            <motion.div 
                className="container mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {/* Section Title */}
                <motion.h2 
                    className={`text-4xl font-extrabold ${darkMode ? 'text-purple-300' : 'text-purple-700'} text-center mb-12`} 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    My Skills
                </motion.h2>

                {skills.map((category, index) => (
                    <motion.div 
                        key={index} 
                        className="mb-12"
                        variants={containerVariants}
                    >
                        {/* Category Title */}
                        <motion.h3 
                            className={`text-2xl font-semibold ${darkMode ? 'text-purple-300' : 'text-purple-700'} mb-6`} 
                            variants={itemVariants}
                        >
                            {category.category}
                        </motion.h3>

                        {/* Skills Grid */}
                        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {category.skills.map((skill, idx) => (
                                <motion.div
                                    key={idx}
                                    className={`relative p-6 rounded-lg shadow-lg overflow-hidden transition-all duration-300 
                                    ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(204, 153, 255, 0.5)" }}
                                >
                                    {/* Glowing Light Effect - Moving Left to Right */}
                                    <motion.div 
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300 to-transparent"
                                        style={{
                                            width: "150%",
                                            height: "100%",
                                            transform: "translateX(-100%)",
                                            filter: "blur(10px)",
                                            opacity: 0.3
                                        }}
                                        animate={{
                                            x: ["-100%", "100%"],
                                        }}
                                        transition={{
                                            duration: 2,
                                            ease: "linear",
                                            repeat: Infinity
                                        }}
                                    />

                                    {/* Skill Content */}
                                    <div className="flex items-center space-x-4 relative z-10">
                                        <div className="text-3xl text-purple-300">{skill.icon}</div>
                                        <span className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                            {skill.name}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
