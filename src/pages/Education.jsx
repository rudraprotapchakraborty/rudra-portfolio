import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
    const { darkMode } = useContext(ThemeContext);

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 30 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8 } },
        hover: { scale: 1.05, rotate: 1, transition: { duration: 0.3 } }
    };

    return (
        <section
            id="education"
            className={`${
                darkMode ? 'bg-black bg-opacity-80 text-gray-300' : 'bg-white text-gray-800'
            } backdrop-blur-md py-16 px-6 md:px-12`}
        >
            <div className="container mx-auto text-center">
                <motion.h2
                    className={`text-4xl font-bold mb-10 $ {
                        darkMode ? 'text-purple-400' : 'text-purple-600'
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Education
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[  
                        { school: "Amity University, Kolkata", degree: "BSc Physics (Honours with Research)", year: "2024-2028" },
                        { school: "Metropolitan College, Rajshahi", degree: "HSC", year: "2022" },
                        { school: "Govt. Laboratory High School, Rajshahi", degree: "SSC", year: "2020" }
                    ].map((edu, index) => (
                        <motion.div
                            key={index}
                            className={`max-w-md w-full p-8 rounded-2xl shadow-lg transition-all backdrop-blur-lg border border-gray-500/30 $ {
                                darkMode ? 'bg-gray-900/50 text-white' : 'bg-gray-200/50 text-black'
                            }`}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <div className="flex justify-center items-center mb-6">
                                <FaGraduationCap className="text-6xl text-purple-500 animate-pulse" />
                            </div>
                            
                            <h3 className="text-2xl font-semibold mb-2">
                                {edu.school}
                            </h3>
                            
                            <p className="text-lg mb-3 text-gray-400">
                                {edu.degree}
                            </p>
                            
                            <p className="text-sm text-gray-500">
                                <strong>Year:</strong> {edu.year}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;