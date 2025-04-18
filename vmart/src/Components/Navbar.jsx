import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll effect for background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true); // Change state if scrolled more than 50px
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrolled
          ? "bg-gradient-to-r from-blue-800 via-teal-600 to-green-500 shadow-lg"
          : "bg-gradient-to-r from-purple-700 via-pink-500 to-yellow-400"
      } transition-all duration-300 ease-in-out sticky top-0 z-50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-white text-2xl font-extrabold tracking-wider drop-shadow-lg">
              🌟 V Mart
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden sm:flex space-x-6 text-white font-semibold text-lg">
            <Link
              to="/"
              className="hover:text-yellow-200 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-yellow-200 transition duration-300"
            >
              About
            </Link>
            {/* <Link
              to="/admin"
              className="hover:text-yellow-200 transition duration-300"
            >
              Admin
            </Link> */}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="sm:hidden">
            <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-gradient-to-br from-teal-600 via-blue-400 to-green-300 p-4 space-y-4 text-center font-semibold text-white shadow-md rounded-b-2xl transition-all duration-300 ease-in-out">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-pink-500">
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block hover:text-pink-500">
            About
          </Link>
          {/* <Link to="/admin" onClick={() => setIsOpen(false)} className="block hover:text-pink-500">
            Admin
          </Link> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
