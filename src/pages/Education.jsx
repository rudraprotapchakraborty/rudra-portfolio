import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <section
            id="education"
            className={`${
                darkMode ? 'bg-black bg-opacity-80 text-gray-300' : 'bg-white text-gray-800'
            } backdrop-blur-md py-16 px-6 md:px-12`}
        >
            <div className="container mx-auto text-center">
                <motion.h2
                    className={`text-4xl font-semibold mb-8 ${
                        darkMode ? 'text-purple-400' : 'text-purple-600'
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Education
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Amity University Card */}
                    <motion.div
                        className={`max-w-md w-full p-8 rounded-lg shadow-xl transition-all ${
                            darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
                        } hover:scale-105 hover:shadow-2xl`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="flex justify-center items-center mb-6">
                            <FaGraduationCap className="text-6xl text-purple-500" />
                        </div>

                        <h3
                            className={`text-2xl font-semibold mb-2 ${
                                darkMode ? 'text-white' : 'text-black'
                            }`}
                        >
                            Amity University, Kolkata
                        </h3>

                        <p
                            className={`text-lg mb-4 ${
                                darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}
                        >
                            BSc Physics (Honours with Research)
                        </p>

                        <p
                            className={`text-sm mb-4 ${
                                darkMode ? 'text-gray-500' : 'text-gray-700'
                            }`}
                        >
                            <strong>Duration:</strong> 2024-2028
                        </p>
                    </motion.div>

                    {/* Metropolitan College, Rajshahi Card */}
                    <motion.div
                        className={`max-w-md w-full p-8 rounded-lg shadow-xl transition-all ${
                            darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
                        } hover:scale-105 hover:shadow-2xl`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="flex justify-center items-center mb-6">
                            <FaGraduationCap className="text-6xl text-purple-500" />
                        </div>

                        <h3
                            className={`text-2xl font-semibold mb-2 ${
                                darkMode ? 'text-white' : 'text-black'
                            }`}
                        >
                            Metropolitan College, Rajshahi
                        </h3>

                        <p
                            className={`text-lg mb-4 ${
                                darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}
                        >
                            HSC
                        </p>

                        <p
                            className={`text-sm mb-4 ${
                                darkMode ? 'text-gray-500' : 'text-gray-700'
                            }`}
                        >
                            <strong>Year:</strong> 2022
                        </p>
                    </motion.div>

                    {/* Govt. Laboratory High School, Rajshahi Card */}
                    <motion.div
                        className={`max-w-md w-full p-8 rounded-lg shadow-xl transition-all ${
                            darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
                        } hover:scale-105 hover:shadow-2xl`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="flex justify-center items-center mb-6">
                            <FaGraduationCap className="text-6xl text-purple-500" />
                        </div>

                        <h3
                            className={`text-2xl font-semibold mb-2 ${
                                darkMode ? 'text-white' : 'text-black'
                            }`}
                        >
                            Govt. Laboratory High School, Rajshahi
                        </h3>

                        <p
                            className={`text-lg mb-4 ${
                                darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}
                        >
                            SSC
                        </p>

                        <p
                            className={`text-sm mb-4 ${
                                darkMode ? 'text-gray-500' : 'text-gray-700'
                            }`}
                        >
                            <strong>Year:</strong> 2020
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
