import { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import animationData from '../assets/lottie/email.json';

import { ThemeContext } from '../context/ThemeContext';
import Lottie from 'lottie-react';
import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { IoMail } from "react-icons/io5";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const Contact = () => {
    const { darkMode } = useContext(ThemeContext);
    const [formData, setFormData] = useState({ email: '', message: '' });
    const [isSent, setIsSent] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSent(true);
        setTimeout(() => setIsSent(false), 3000);
        setFormData({ email: '', message: '' });
    };

    return (
        <motion.section
            id="contact"
            className={`${darkMode ? 'bg-black bg-opacity-80 text-white' : 'bg-white text-black'} 
                backdrop-blur-md py-16 px-6 md:px-12 shadow-lg transition-all duration-500`}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
        >
            <div className="container mx-auto text-center">
                <motion.h2
                    className={`text-4xl font-semibold mb-8 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}
                    variants={fadeInUp}
                >
                    Contact Me
                </motion.h2>

                <motion.p className={`text-lg mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} variants={fadeInUp}>
                    Feel free to reach out to me through any of the following methods or fill out the form below.
                </motion.p>

                <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
                    {/* Form Section */}
                    <motion.form
                        onSubmit={handleSubmit}
                        className={`max-w-lg p-8 mx-auto rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-all duration-500`}
                        variants={fadeInUp}
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-center">Send me a Message</h3>
                        <div className="space-y-4 mb-6">
                            <motion.input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className={`w-full p-4 rounded-xl border-2 ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-black'} focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300`}
                                required
                                whileFocus={{ scale: 1.05 }}
                            />
                            <motion.textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                className={`w-full p-4 rounded-xl border-2 ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-black'} focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300`}
                                rows="5"
                                required
                                whileFocus={{ scale: 1.05 }}
                            />
                        </div>
                        <motion.button
                            type="submit"
                            className={`w-full p-4 text-white rounded-xl shadow-xl ${darkMode ? 'bg-purple-700 hover:bg-purple-600' : 'bg-purple-500 hover:bg-purple-400'} transition-all duration-300`}
                            whileHover={{ scale: 1.05 }}
                        >
                            {isSent ? 'Message Sent!' : 'Send Message'}
                        </motion.button>
                    </motion.form>

                    {/* Lottie Animation */}
                    <motion.div className="flex flex-col justify-center items-center w-full md:w-1/2 mb-12 md:mb-0" variants={fadeInUp}>
                        <Lottie animationData={animationData} loop={true} autoplay={true} className='w-1/2 transition-all duration-500' />
                        <div className="mt-8 gap-2 flex flex-col md:flex-row items-center justify-center">
                            <motion.div className="flex items-center justify-center gap-2" whileHover={{ scale: 1.05 }}>
                                <FaMapMarkerAlt className="text-3xl text-purple-500" />
                                <p className="text-lg">Kolkata, India</p>
                            </motion.div>
                            <motion.div className="flex items-center justify-center gap-2" whileHover={{ scale: 1.05 }}>
                                <FaWhatsapp className="text-3xl text-purple-500" />
                                <p className="text-lg">+917439361200</p>
                            </motion.div>
                            <motion.div className="flex items-center justify-center gap-2" whileHover={{ scale: 1.05 }}>
                                <IoMail className="text-3xl text-purple-500" />
                                <p className="text-lg">rudra.chakraborty@s.amity.edu</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;