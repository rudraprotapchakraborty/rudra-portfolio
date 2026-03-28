import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Footer from "../pages/Footer";
import Navbar from "../pages/Navbar";
import { Outlet } from "react-router-dom";
import FluidBackground from "../components/FluidBackground";

const Main = () => {
    const { darkMode, toggleDarkMode } = useContext(ThemeContext);

    return (
        <div className={`relative min-h-screen ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
            <FluidBackground />
            {/* The rest of the content needs to sit on top of the fixed background */}
            <div className="relative z-10 w-full h-full flex flex-col">
                <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
                <main className="flex-grow">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Main;
