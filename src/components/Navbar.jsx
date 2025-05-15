import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaCalendarAlt, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Change navbar styling on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full flex justify-center items-center transition-all duration-500 ease-in-out ${
        scroll ? "bg-black/95 shadow-lg h-16" : "bg-transparent h-20"
      }`}
    >
      <div className="w-full max-w-7xl px-4 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex flex-col justify-center items-start animate-fade-in"
        >
          <span className="text-amber-500 text-2xl font-bold tracking-wider">
            FAMA
          </span>
          <span className="text-white text-xs tracking-wide">
            BARBER & BEAUTY
          </span>
        </Link>

        {/* Mobile Menu Icon */}
        <div
          className="lg:hidden text-white text-2xl cursor-pointer z-50"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Nav Items */}
        <ul
          className={`lg:flex lg:items-center lg:ml-12 lg:static lg:opacity-100 lg:h-auto lg:w-auto 
                        ${
                          menuOpen
                            ? "fixed top-20 left-0 w-full h-screen bg-black/95 flex flex-col opacity-100"
                            : "fixed top-20 left-[-100%] opacity-0"
                        } 
                        transition-all duration-500 ease-in-out`}
        >
          {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
            <li key={item} className="lg:h-20 lg:mx-4 flex items-center">
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-white lg:px-2 py-2 font-medium relative block w-full lg:w-auto text-center lg:text-left px-8 lg:px-0 py-6 lg:py-0"
                onClick={() => setMenuOpen(false)}
              >
                <span className="relative group">
                  {item}
                  <span className="absolute bottom-[-5px] left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Number and Book Button */}
        <div
          className={`lg:flex lg:items-center lg:static lg:opacity-100 lg:flex-row animate-slide-in
                         ${
                           menuOpen
                             ? "fixed bottom-24 w-full left-0 flex flex-col items-center opacity-100 space-y-6 pt-4"
                             : "hidden opacity-0"
                         } 
                         transition-all duration-500 ease-in-out`}
        >
          <div className="flex items-center text-white lg:mr-5 mb-4 lg:mb-0">
            <FaPhone className="text-amber-500 mr-2" />
            <span>+1 940-612-9127</span>
          </div>
          <Link
            to="/appointment"
            className="flex items-center bg-gradient-to-r from-amber-600 to-amber-400 text-black px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ease-in-out hover:translate-y-[-3px] hover:shadow-lg hover:shadow-amber-500/40"
          >
            <FaCalendarAlt className="mr-2" />
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
