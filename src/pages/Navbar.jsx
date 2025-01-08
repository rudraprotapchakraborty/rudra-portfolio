import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa'; // Import moon and sun icons from react-icons
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; // Import HashLink

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('');
    const [scrolling, setScrolling] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // For hamburger menu
    const { darkMode, toggleDarkMode } = useContext(ThemeContext); // Get theme context

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const links = (
        <>
            {['home', 'about', 'skills', 'education', 'projects', 'contact'].map(link => (
                <li key={link}>
                    <HashLink
                        to={`/#${link}`} // Use HashLink for smooth scrolling
                        onClick={() => setActiveLink(link)}
                        className={`${activeLink === link ? 'text-purple-500' : 'text-gray-700'} 
                                    dark:text-gray-300 hover:text-purple-400 dark:hover:text-purple-300 
                                    transition-transform duration-200 ease-in-out transform hover:scale-105`}
                    >
                        {link.charAt(0).toUpperCase() + link.slice(1)}
                    </HashLink>
                </li>
            ))}
        </>
    );

    return (
        <div
            className={`sticky z-50 backdrop-blur-md bg-white dark:bg-gray-900 bg-opacity-50 shadow-xl rounded-full w-11/12 mx-auto md:px-8 md:py-3 transition-all duration-300 ${scrolling ? 'top-0' : 'top-4'} ${darkMode ? 'dark' : ''}`}
        >
            {/* Navbar Content */}
            <div className="flex justify-between items-center">
                {/* Left Section - Logo */}
                <NavLink>
                    <button className="text-xl md:text-2xl font-bold text-purple-400 hover:text-purple-500 transition-transform duration-300 transform hover:scale-105">
                        <p>
                            <span className="text-purple-700 hover:text-purple-800">&lt;R</span>
                            udra
                            <span className="text-purple-700 hover:text-purple-800">/&gt;</span>
                        </p>
                    </button>
                </NavLink>

                {/* Centered Menu for Desktop */}
                <div className="hidden lg:flex">
                    <ul className="flex gap-10">{links}</ul>
                </div>

                <div className='flex items-center gap-4'>
                    {/* Dark Mode Toggle Button */}
                    <button
                        onClick={toggleDarkMode}
                        className="bg-purple-500 text-white dark:bg-purple-700 dark:text-white p-2 rounded-full md:mr-4 shadow-lg hover:bg-purple-600 dark:hover:bg-purple-600 transition-transform duration-300 transform hover:scale-105"
                    >
                        {darkMode ? <FaMoon className="md:text-xl" /> : <FaSun className="md:text-xl" />}
                    </button>

                    {/* Download Resume Button */}
                    <button
                        href="#resume"
                        className="bg-purple-500 text-white dark:bg-purple-700 dark:text-white px-1 py-1 md:px-6 md:py-2 rounded-full shadow-lg hover:bg-purple-600 dark:hover:bg-purple-600 transition-transform duration-300 transform hover:scale-105"
                    >
                        Download Resume
                    </button>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="lg:hidden flex items-center">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu visibility
                        className="btn btn-ghost"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-300 dark:text-gray-200"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <ul className="absolute right-4 top-12 bg-black bg-opacity-90 rounded-lg shadow-xl p-4 space-y-4 z-50">
                            {links}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
