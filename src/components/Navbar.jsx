import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaCalendarAlt, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Navigation items matching your section IDs
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },

    { name: "Contact", id: "contact" },
  ];

  // Change navbar styling on scroll and track active section
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }

      // Determine active section
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100; // Add offset to improve detection

      let currentSection = "home";
      sections.forEach((section) => {
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
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

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    setMenuOpen(false);

    // Special case for home - scroll to top
    if (sectionId === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      // Close mobile menu
      setMenuOpen(false);

      // Calculate offset (accounting for fixed header)
      const navbarHeight = scroll ? 64 : 80; // h-16 = 64px, h-20 = 80px
      const offsetTop = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Navbar animation variants with Framer Motion
  const navContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.nav
      className={`sticky top-0 z-50 w-full flex justify-center items-center transition-all duration-500 ease-in-out ${
        scroll ? "bg-black/95 shadow-lg h-16" : "bg-transparent h-20"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-7xl px-4 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="flex flex-col justify-center items-start"
          >
            <span className="text-amber-500 text-2xl font-bold tracking-wider">
              FAMA
            </span>
            <span className="text-white text-xs tracking-wide">
              BARBER & BEAUTY
            </span>
          </Link>
        </motion.div>

        {/* Mobile Menu Icon */}
        <div
          className="lg:hidden text-white text-2xl cursor-pointer z-50"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Nav Items */}
        <motion.ul
          className={`lg:flex lg:items-center lg:ml-12 lg:static lg:opacity-100 lg:h-auto lg:w-auto 
                        ${
                          menuOpen
                            ? "fixed top-20 left-0 w-full h-screen bg-black/95 flex flex-col opacity-100"
                            : "fixed top-20 left-[-100%] opacity-0"
                        } 
                        transition-all duration-500 ease-in-out`}
          variants={navContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item) => (
            <motion.li
              key={item.id}
              className="lg:h-20 lg:mx-4 flex items-center"
              variants={navItemVariants}
            >
              <Link
                to={`/#${item.id}`}
                className={`text-white lg:px-2 py-2 font-medium relative block w-full lg:w-auto text-center lg:text-left px-8 lg:px-0 py-6 lg:py-0 ${
                  activeSection === item.id ? "text-amber-500" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                <span className="relative group">
                  {item.name}
                  <span
                    className={`absolute bottom-[-5px] left-0 h-0.5 bg-amber-500 transition-all duration-300 ${
                      activeSection === item.id
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Contact Number and Book Button */}
        <motion.div
          className={`lg:flex lg:items-center lg:static lg:opacity-100 lg:flex-row
                         ${
                           menuOpen
                             ? "fixed bottom-24 w-full left-0 flex flex-col items-center opacity-100 space-y-6 pt-4"
                             : "hidden opacity-0 lg:opacity-100 lg:flex"
                         } 
                         transition-all duration-500 ease-in-out`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div
            className="flex items-center text-white lg:mr-5 mb-4 lg:mb-0"
            whileHover={{ scale: 1.05 }}
          >
            <FaPhone className="text-amber-500 mr-2" />
            <span>+1 940-612-9127</span>
          </motion.div>
          <motion.div
            whileHover={{
              y: -3,
              boxShadow: "0 10px 15px -3px rgba(251, 191, 36, 0.4)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <Link
              to="/#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="flex items-center bg-gradient-to-r from-amber-600 to-amber-400 text-black px-5 py-2.5 rounded-full font-semibold"
            >
              <FaCalendarAlt className="mr-2" />
              Book Appointment
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
