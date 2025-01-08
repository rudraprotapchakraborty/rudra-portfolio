import { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGitAlt } from "react-icons/fa"; // Importing Icons
import { ThemeContext } from '../context/ThemeContext'; // Import the ThemeContext

const Skills = () => {
    const { darkMode } = useContext(ThemeContext); // Get the darkMode state

    // Animation Configurations
    const fadeInUp = (delay = 0) => ({
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1, delay }
    });

    const skills = [
        {
            category: "Frontend",
            skills: [
                { name: "HTML", icon: <FaHtml5 />, level: 90 },
                { name: "CSS", icon: <FaCss3Alt />, level: 85 },
                { name: "JavaScript", icon: <FaJs />, level: 80 },
                { name: "React", icon: <FaReact />, level: 75 }
            ]
        },
        {
            category: "Backend",
            skills: [
                { name: "Node.js", icon: <FaNode />, level: 70 },
                { name: "Express", icon: <FaNode />, level: 65 },
                { name: "MongoDB", icon: <FaNode />, level: 60 }
            ]
        },
        {
            category: "Tools",
            skills: [
                { name: "Git", icon: <FaGitAlt />, level: 80 }
            ]
        }
    ];

    return (
        <section id="skills" className={`py-16 min-h-screen px-6 lg:px-16 ${darkMode ? 'bg-black' : 'bg-white'}`}>
            <motion.div className="container mx-auto">
                <motion.h2 className={`text-4xl font-extrabold ${darkMode ? 'text-purple-300' : 'text-purple-700'} text-center mb-12`} {...fadeInUp(0)}>
                    My Skills
                </motion.h2>

                {skills.map((category, index) => (
                    <div key={index} className="mb-12">
                        <motion.h3 className={`text-2xl font-semibold ${darkMode ? 'text-purple-300' : 'text-purple-700'} mb-6`} {...fadeInUp(0.2)}>
                            {category.category}
                        </motion.h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {category.skills.map((skill, idx) => (
                                <motion.div
                                    key={idx}
                                    className={`bg-black p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
                                    {...fadeInUp(0.4 + idx * 0.2)}
                                >
                                    {/* Glowing Border Animation */}
                                    <motion.div
                                        className="absolute inset-0 border-4 border-transparent rounded-lg"
                                        style={{
                                            background: "linear-gradient(45deg, rgba(204, 153, 255, 0.5), rgba(255, 204, 255, 0.8))",
                                            backgroundSize: "200% 200%",
                                            boxShadow: "0 0 10px rgba(204, 153, 255, 0.5)"
                                        }}
                                        animate={{
                                            backgroundPosition: ["200% 200%", "-200% -200%"],
                                        }}
                                        transition={{
                                            duration: 2,
                                            ease: "linear",
                                            repeat: Infinity
                                        }}
                                    />

                                    {/* Skill Content */}
                                    <div className="flex items-center justify-between space-x-6">
                                        <div className="flex items-center space-x-4">
                                            <div className="text-3xl text-purple-300">{skill.icon}</div>
                                            <span className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{skill.name}</span>
                                        </div>

                                        {/* Level (progress bar and percentage) */}
                                        <div className="flex items-center space-x-4">
                                            <span className={`text-${darkMode ? 'gray-300' : 'gray-700'}`}>{skill.level}%</span>
                                            <div className="relative w-24 h-2 bg-gray-700 rounded-full">
                                                <motion.div
                                                    className="h-full rounded-full bg-purple-500"
                                                    style={{ width: `${skill.level}%` }}
                                                    animate={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 1 }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
