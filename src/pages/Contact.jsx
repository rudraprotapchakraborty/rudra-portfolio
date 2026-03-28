import { useContext } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../assets/lottie/email.json";
import { ThemeContext } from "../context/ThemeContext";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const containerVar = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVar = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring" } },
};

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);

  const getBentoStyle = () =>
    `flex items-start gap-4 p-8 rounded-[2rem] border backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group ${
      darkMode
        ? "bg-white/5 border-white/10 hover:border-purple-500/50"
        : "bg-white/70 border-gray-200 hover:border-purple-500/50"
    }`;

  return (
    <section
      id="contact"
      className="relative min-h-[80vh] py-32 px-6 lg:px-24 flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div
        variants={containerVar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-7xl mx-auto z-10"
      >
        {/* TITLE */}
        <motion.div variants={itemVar} className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-xl inline-block">
            Let's Collaborate
          </h2>
          <p className={`mt-6 text-xl md:text-2xl font-light ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Ready to push boundaries? Reach out directly.
          </p>
        </motion.div>

        {/* CONTENT AREA */}
        <div className="flex flex-col md:flex-row gap-16 items-center lg:items-start justify-center">

          {/* LEFT: LOTTIE ANIMATION */}
          <motion.div variants={itemVar} className="w-full max-w-md flex justify-center">
             <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-500 opacity-20 blur-[100px] rounded-full" />
                <Lottie animationData={animationData} loop autoplay className="w-full drop-shadow-2xl relative z-10 scale-110" />
             </div>
          </motion.div>

          {/* RIGHT: CONTACT INFO CARDS */}
          <div className="w-full max-w-xl space-y-6">

            {/* Location Card */}
            <motion.div variants={itemVar} className={getBentoStyle()}>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0 relative z-10">
                 <FaMapMarkerAlt className="text-3xl text-purple-500" />
              </div>
              <div className="relative z-10">
                <h3 className={`text-2xl font-bold mb-1 ${darkMode ? "text-white" : "text-black"}`}>Location</h3>
                <p className={`text-lg font-light ${darkMode ? "text-gray-400" : "text-gray-600"}`}>West Bengal, India</p>
              </div>
            </motion.div>

            {/* WhatsApp Card */}
            <motion.div variants={itemVar} className={getBentoStyle()}>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 relative z-10">
                 <FaWhatsapp className="text-3xl text-green-500" />
              </div>
              <div className="relative z-10">
                <h3 className={`text-2xl font-bold mb-1 ${darkMode ? "text-white" : "text-black"}`}>WhatsApp</h3>
                <a href="https://wa.me/8801334509527" target="_blank" rel="noreferrer" className={`text-lg font-light hover:text-green-500 transition-colors ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                   +88 013 3450 9527
                </a>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div variants={itemVar} className={getBentoStyle()}>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 rounded-full bg-pink-500/10 flex items-center justify-center flex-shrink-0 relative z-10">
                 <IoMail className="text-3xl text-pink-500" />
              </div>
              <div className="relative z-10">
                <h3 className={`text-2xl font-bold mb-1 ${darkMode ? "text-white" : "text-black"}`}>Email</h3>
                <a href="mailto:rudra.phymos@gmail.com" className={`text-lg font-light hover:text-pink-500 transition-colors ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                   rudra.phymos@gmail.com
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
