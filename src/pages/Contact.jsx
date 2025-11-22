import { useContext, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../assets/lottie/email.json";
import { ThemeContext } from "../context/ThemeContext";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
    setFormData({ email: "", message: "" });
  };

  return (
    <motion.section
      id="contact"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className={`py-20 px-6 md:px-12 transition-all duration-700 ${
        darkMode
          ? "bg-[#0b0c14] text-gray-200"
          : "bg-gradient-to-b from-white via-purple-50/40 to-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* TITLE */}
        <h2 className="text-5xl font-extrabold mb-3 bg-gradient-to-r from-[#A855F7] to-[#6C2BD9] bg-clip-text text-transparent">
          Get in Touch
        </h2>

        <p
          className={`text-lg md:text-xl max-w-2xl mx-auto mb-16 ${
            darkMode ? "text-gray-400" : "text-gray-700"
          }`}
        >
          Whether it’s a project, collaboration, or just a friendly chat — I’d love to connect.
        </p>

        {/* CONTENT AREA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

          {/* LEFT: CONTACT INFO CARDS */}
          <div className="space-y-6">

            {/* Location Card */}
            <div
              className={`flex items-start gap-4 p-6 rounded-2xl border shadow-sm ${
                darkMode
                  ? "bg-[#0f101d] border-[#1e2030]"
                  : "bg-white border-gray-200"
              }`}
            >
              <FaMapMarkerAlt className="text-3xl text-purple-500 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="text-sm opacity-80">Kolkata, India</p>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div
              className={`flex items-start gap-4 p-6 rounded-2xl border shadow-sm ${
                darkMode
                  ? "bg-[#0f101d] border-[#1e2030]"
                  : "bg-white border-gray-200"
              }`}
            >
              <FaWhatsapp className="text-3xl text-purple-500 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">WhatsApp</h3>
                <p className="text-sm opacity-80">+91 74393 61200</p>
                <p className="text-sm opacity-80">Available 24/7</p>
              </div>
            </div>

            {/* Email Card */}
            <div
              className={`flex items-start gap-4 p-6 rounded-2xl border shadow-sm ${
                darkMode
                  ? "bg-[#0f101d] border-[#1e2030]"
                  : "bg-white border-gray-200"
              }`}
            >
              <IoMail className="text-3xl text-purple-500 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-sm opacity-80">rudra@rudraprotap.com</p>
              </div>
            </div>

            {/* Animation */}
            <Lottie animationData={animationData} loop autoplay className="w-64 mx-auto mt-6" />
          </div>


        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
