import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Lottie from "lottie-react";
import animationData from "../assets/lottie/study.json";

const About = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <section
            id="about"
            className={`py-20 px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 transition-all duration-500 
                ${darkMode ? "bg-black bg-opacity-90 text-white" : "bg-gray-100 text-gray-900"}`}
        >
            {/* Content Section */}
            <motion.div 
                className="container mx-auto lg:w-1/2 text-center md:text-left"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Title */}
                <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? "text-purple-400" : "text-purple-700"}`}>
                    About Me
                </h1>

                {/* Description */}
                <p className="text-lg leading-relaxed mb-6">
                    Hello! I’m <span className="font-semibold text-purple-600">Rudra Protap Chakraborty</span>, a passionate <span className="font-semibold text-purple-600">Front-End Developer</span> who loves crafting modern, user-friendly web experiences. Specializing in <span className="font-semibold text-purple-600">React</span>, <span className="font-semibold text-purple-600">JavaScript</span>, and <span className="font-semibold text-purple-600">TailwindCSS</span>, I strive to build seamless and visually appealing applications.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                    Beyond coding, I’m deeply fascinated by <span className="font-semibold text-purple-600">physics</span>, always exploring complex concepts like relativity and quantum mechanics. Movies and gaming also fuel my creativity and offer a great escape from reality.
                </p>

                {/* Fun Facts */}
                <div className="mt-8">
                    <h2 className={`text-3xl font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Fun Facts</h2>
                    <ul className="list-disc pl-5 space-y-3">
                        <li>I love diving into physics books that reshape my understanding of the universe.</li>
                        <li>Movies inspire me and often influence my design creativity.</li>
                        <li>Gaming is my go-to stress buster and keeps my strategic thinking sharp.</li>
                    </ul>
                </div>
            </motion.div>

            {/* Lottie Animation */}
            <motion.div 
                className="lg:w-1/2 flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <Lottie 
                    animationData={animationData} 
                    loop 
                    autoplay 
                    className="w-3/4 sm:w-1/2"
                />
            </motion.div>
        </section>
    );
};

export default About;
