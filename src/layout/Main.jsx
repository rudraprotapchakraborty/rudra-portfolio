import { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Footer from "../pages/Footer";
import Navbar from "../pages/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import FluidBackground from "../components/FluidBackground";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const Main = () => {
    const { darkMode, toggleDarkMode } = useContext(ThemeContext);
    const location = useLocation();
    
    // Add scroll progress line
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Make sure we always start at top on navigation
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const pageVariants = {
        initial: { opacity: 0, scale: 0.98, filter: "blur(10px)" },
        enter: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } },
        exit: { opacity: 0, scale: 1.02, filter: "blur(10px)", transition: { duration: 0.4, ease: "easeInOut" } }
    };

    return (
        <div className={`relative min-h-screen ${darkMode ? "bg-[#0b0a0f] text-white" : "bg-[#faf5ff] text-black"}`}>
            {/* Ambient Background */}
            <FluidBackground />
            
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A855F7] to-[#EC4899] origin-left z-[99999] opacity-80"
                style={{ scaleX }}
            />

            {/* Content Layer */}
            <div className="relative z-10 w-full h-full flex flex-col">
                <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
                
                <AnimatePresence mode="wait">
                    <motion.main 
                        key={location.pathname}
                        variants={pageVariants}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        className="flex-grow origin-top"
                    >
                        <Outlet />
                    </motion.main>
                </AnimatePresence>
                
                <Footer />
            </div>
        </div>
    );
};

export default Main;
