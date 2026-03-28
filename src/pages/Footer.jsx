import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import useDevice from "../hooks/useDevice";
import MagneticButton from "../components/MagneticButton";

import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);
  const { isMobile } = useDevice();
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
      className={`relative pt-32 pb-12 overflow-hidden transition-all duration-700
      ${darkMode ? "bg-[#0b0a0f] text-gray-300" : "bg-[#faf5ff] text-gray-800"}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center">
        
        {/* MEGA MAGNETIC HOOK */}
        <div className="w-full border-b border-gray-500/20 pb-20 mb-16 text-center flex flex-col items-center justify-center">
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-lg md:text-xl font-medium tracking-widest uppercase text-purple-500 mb-6"
          >
             Have an idea?
          </motion.p>
          
          <MagneticButton>
             <h1 className={`text-6xl md:text-[8rem] font-black leading-none tracking-tighter cursor-pointer ${darkMode ? "text-white" : "text-black"}`}>
                Let's Talk
             </h1>
          </MagneticButton>
          
          <div className="mt-12 flex items-center justify-center">
             <a href="mailto:rudra.phymos@gmail.com" className={`px-10 py-5 rounded-full font-bold text-lg border transition-all hover:bg-purple-500 hover:text-white hover:border-purple-500 ${darkMode ? "border-white/20 text-white" : "border-black/20 text-black"}`}>
                rudra.phymos@gmail.com
             </a>
          </div>
        </div>

        {/* BOTTOM METADATA GRID */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <img className="w-10 h-10 object-contain" src="/favicon.png" alt="Logo" />
              <div className="flex flex-col leading-tight">
                <span className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>Rudra Protap</span>
                <span className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>Chakraborty</span>
              </div>
            </div>
            <p className="opacity-70 text-sm max-w-xs mt-2">
              Transforming complex problems into elegant, scaleable, and fluid digital experiences.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold uppercase tracking-widest opacity-50 mb-2">Navigation</h3>
            {["Home", "About", "Skills", "Education", "Projects", "Contact"].map((item, i) => (
              <a key={i} href={`#${item.toLowerCase()}`} className="hover:text-purple-500 transition-colors w-max font-medium">
                {item}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold uppercase tracking-widest opacity-50 mb-2">Socials</h3>
            <a href="https://github.com/rudraprotapchakraborty" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-purple-500 transition-colors w-max font-medium">
              <FaGithub className="text-xl" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/rudraprotapchakraborty/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-purple-500 transition-colors w-max font-medium">
              <FaLinkedin className="text-xl" /> LinkedIn
            </a>
            <a href="https://www.facebook.com/rudraprotapchakraborty/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-purple-500 transition-colors w-max font-medium">
              <FaFacebook className="text-xl" /> Facebook
            </a>
          </div>

          {/* Quick Form */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold uppercase tracking-widest opacity-50 mb-6">Quick Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className={`relative rounded-xl overflow-hidden border focus-within:border-purple-500 transition-colors ${darkMode ? "bg-white/5 border-white/10" : "bg-white/70 border-gray-200"}`}>
                <input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="w-full bg-transparent px-4 py-3 outline-none"
                />
              </div>
              <div className={`relative rounded-xl overflow-hidden border focus-within:border-purple-500 transition-colors ${darkMode ? "bg-white/5 border-white/10" : "bg-white/70 border-gray-200"}`}>
                <textarea
                  placeholder="Message"
                  rows="2"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  className="w-full bg-transparent px-4 py-3 outline-none resize-none"
                />
              </div>
              <button type="submit" className="mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:opacity-90 transition-opacity">
                {sent ? "Sent!" : "Send"}
              </button>
            </form>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="w-full mt-24 flex flex-col md:flex-row items-center justify-between text-sm opacity-50 border-t border-gray-500/20 pt-8">
           <p>© {new Date().getFullYear()} Rudra Protap Chakraborty.</p>
           <p className="mt-2 md:mt-0">Crafted with React, Framer Motion & Passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
