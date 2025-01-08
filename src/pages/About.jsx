import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Lottie from 'lottie-react';
import animationData from "../assets/lottie/study.json"; // Import your Lottie JSON animation

const About = () => {
    const { darkMode } = useContext(ThemeContext); // Access the darkMode state

    return (
        <section
            id="about"
            className={`${darkMode ? "bg-black bg-opacity-80 text-white" : "bg-white text-black"
                } backdrop-blur-md py-20 px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0`}
        >
            <div className="container mx-auto text-center md:text-left lg:w-1/2">
                {/* Section Title */}
                <motion.h1
                    className={`text-4xl md:text-5xl font-extrabold mb-6 ${darkMode ? "text-purple-400" : "text-purple-600"
                        }`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    About Me
                </motion.h1>

                {/* About Me Content */}
                <motion.div
                    className={`space-y-6 text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-800"
                        }`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <p>
                        Hello! I’m{" "}
                        <span className="text-purple-600 font-semibold">
                            Rudra Protap Chakraborty
                        </span>, a passionate{" "}
                        <span className="text-purple-600 font-semibold">
                            Front-End Developer
                        </span> with a knack for building clean, user-friendly, and visually stunning websites. I specialize in creating interactive web
                        applications using modern technologies like{" "}
                        <span className="text-purple-600 font-semibold">React</span>,{" "}
                        <span className="text-purple-600 font-semibold">JavaScript</span>, and{" "}
                        <span className="text-purple-600 font-semibold">TailwindCSS</span>. My journey into
                        programming started as a curiosity to solve problems, and it has grown into a profession that I
                        love every day.
                    </p>
                    <p>
                        When I am not coding, you’ll likely find me diving deep into the world of{" "}
                        <span className="text-purple-600 font-semibold">physics</span> and pop science
                        books, always eager to understand the universe’s most intricate mysteries. Whether it’s exploring
                        the theories of relativity or quantum mechanics, I enjoy feeding my mind with knowledge that
                        challenges the way I think.
                    </p>
                    <p>
                        I’m also a movie enthusiast—whether it’s the latest blockbuster or a timeless classic, I love
                        getting lost in storytelling and creative cinematography. And occasionally, I take some time
                        off to indulge in gaming, where I can explore new worlds and test my strategic skills in
                        various genres.
                    </p>
                    <p>
                        Every day, I strive to learn something new and push the boundaries of what I can achieve, both
                        as a developer and as an individual. My drive to improve and innovate is what motivates me to
                        keep going, and I can’t wait to see where this journey takes me!
                    </p>
                </motion.div>

                {/* Fun Fact Section */}
                <motion.div
                    className="mt-12 text-lg"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <h2 className={`text-3xl font-semibold mb-4 ${darkMode ? "text-white" : "text-black"}`}>
                        Fun Facts
                    </h2>
                    <ul className={`list-disc pl-5 space-y-3 ${darkMode ? "text-gray-300" : "text-gray-800"}`}>
                        <li>
                            I love reading books that make me see the world in a different light, especially in{" "}
                            <span className="text-purple-600 font-semibold">physics</span> and science.
                        </li>
                        <li>
                            Movies are my escape—they inspire me and often spark creative ideas in my work.
                        </li>
                        <li>
                            Gaming lets me relax and challenge myself in new, exciting ways.
                        </li>
                    </ul>
                </motion.div>
            </div>

            {/* Lottie Animation */}
            <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center items-center">
                <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    className="w-3/4 sm:w-1/2 transition-all duration-500"
                />
            </div>
        </section>
    );
};

export default About;
