import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import useDevice from "../hooks/useDevice"; // ⭐ Mobile detection

import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);
  const isDark = darkMode;
  const { isMobile } = useDevice(); // ⭐ Detect phone

  const [formData, setFormData] = useState({ email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
    setFormData({ email: "", message: "" });
  };

  return (
    <footer
    id="footer"
      className={`relative pt-20 pb-12 overflow-hidden transition-all duration-700
      ${isDark ? "bg-[#020617] text-gray-300" : "bg-[#faf2ff] text-gray-800"}`}
    >
      {/* Waves Background */}
      <img
        src="https://raw.githubusercontent.com/ProgrammingHero1/footer-wave/main/waves.svg"
        className={`absolute bottom-0 left-0 w-full pointer-events-none 
          ${isMobile ? "opacity-10" : "opacity-20"}`}
        alt=""
      />

      {/* 4 COLUMN LAYOUT */}
      <div
        className={`relative z-10 max-w-7xl mx-auto px-6 md:px-12 
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14`}
      >
        {/* COLUMN 1 */}
        <div>
          {/* Logo */}
          <button className="flex items-center gap-2 mb-6">
            <img className="w-14" src="/favicon.png" alt="" />

            <div className="flex flex-col items-start leading-[1.05]">
              <span
                className={`text-2xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Rudra Protap
              </span>
              <span
                className={`text-2xl font-bold -mt-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Chakraborty
              </span>
            </div>
          </button>

          <div className="flex items-start gap-3 mb-4">
            <FaMapMarkerAlt className="text-xl text-purple-400" />
            <p>Kolkata, India</p>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <FaEnvelope className="text-xl text-purple-400" />
            <p>rudra@rudraprotap.com</p>
          </div>

          <div className="flex items-start gap-3 mb-6">
            <FaPhone className="text-xl text-purple-400" />
            <p>+91 74393 61200</p>
          </div>

          {/* WhatsApp Box */}
          <div
            className={`rounded-2xl p-5 border ${
              isDark ? "bg-[#0a0f29] border-[#1f2937]" : "bg-white border-gray-200"
            } ${isMobile ? "shadow-none" : "shadow-lg"}`}
          >
            <p className="text-sm opacity-70 mb-1">WhatsApp Anytime</p>

            <div className="flex items-center gap-4">
              <FaPhone className="text-3xl text-purple-500" />
              <div>
                <h2 className="text-lg font-bold">+91 74393 61200</h2>
                <p className="text-sm opacity-70">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h2 className="text-xl font-bold mb-5">Useful Links</h2>

          <ul className="space-y-3">
            {["Home", "About", "Skills", "Education", "Projects", "Contact"].map(
              (item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-purple-400 transition text-[15px]"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h2 className="text-xl font-bold mb-5">Follow Me</h2>

          <div className="flex flex-col gap-4 text-[15px]">
            <a
              href="https://www.facebook.com/rudraprotapchakraborty/"
              target="_blank"
              className="flex items-center gap-3 hover:text-purple-400 transition"
            >
              <FaFacebook className="text-xl" /> Facebook
            </a>

            <a
              href="https://github.com/rudraprotapchakraborty"
              target="_blank"
              className="flex items-center gap-3 hover:text-purple-400 transition"
            >
              <FaGithub className="text-xl" /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/rudraprotapchakraborty/"
              target="_blank"
              className="flex items-center gap-3 hover:text-purple-400 transition"
            >
              <FaLinkedin className="text-xl" /> LinkedIn
            </a>
          </div>
        </div>

        {/* COLUMN 4 — Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: isMobile ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.3 : 0.6 }}
          className={`p-6 rounded-2xl border ${
            isDark ? "bg-[#0f101d]/60 border-[#1e2030]" : "bg-white border-gray-200"
          } ${isMobile ? "shadow-none" : "shadow-md"}`}
        >
          <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-300">
            Quick Message
          </h3>

          <input
            type="email"
            name="email"
            value={formData.email}
            required
            placeholder="Your Email"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full p-3 rounded-xl border mb-3 ${
              isDark
                ? "bg-[#141523] border-[#303244] text-white"
                : "bg-gray-50 border-gray-300"
            }`}
          />

          <textarea
            name="message"
            rows="4"
            required
            placeholder="Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={`w-full p-3 rounded-xl border mb-4 ${
              isDark
                ? "bg-[#141523] border-[#303244] text-white"
                : "bg-gray-50 border-gray-300"
            }`}
          />

          <button
            type="submit"
            className="w-full p-3 rounded-xl font-semibold text-white 
              bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition"
          >
            {sent ? "Sent ✔" : "Send"}
          </button>
        </motion.form>
      </div>

      {/* COPYRIGHT */}
      <div
        className={`mt-14 pt-6 border-t text-center text-sm ${
          isDark ? "border-gray-700 text-gray-400" : "border-gray-300 text-gray-600"
        }`}
      >
        © {new Date().getFullYear()} Rudra Protap Chakraborty — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
