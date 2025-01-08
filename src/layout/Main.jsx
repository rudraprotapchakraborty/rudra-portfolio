import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Footer from "../pages/Footer";
import Navbar from "../pages/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
    const { darkMode, toggleDarkMode } = useContext(ThemeContext); // Accessing context here

    return (
        <div className={darkMode ? "bg-black" : "bg-white"}>
            {/* Pass down the toggleDarkMode function to Navbar */}
            <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;
