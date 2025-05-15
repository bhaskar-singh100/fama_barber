import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
    alert("Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Section */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="animate-fade-in">
            <Link to="/" className="flex flex-col items-start">
              <span className="text-3xl font-bold text-amber-500">FAMA</span>
              <span className="text-sm mt-1">BARBER & BEAUTY</span>
            </Link>
            <p className="mt-4 text-gray-400">Classic cuts with modern style</p>

            {/* Social Icons */}
            <div className="flex mt-6 space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-colors duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-colors duration-300"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h3 className="text-xl font-bold mb-4 border-b border-gray-800 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Gallery", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-amber-500 transition-colors duration-200 flex items-center"
                    >
                      <span className="mr-1">›</span> {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
            <h3 className="text-xl font-bold mb-4 border-b border-gray-800 pb-2">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-400">
                  500 N Bell Ave #109, Denton, TX 76209, United States
                </p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-amber-500 mr-3 flex-shrink-0" />
                <a
                  href="tel:+19408081569"
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-200"
                >
                  +1 940-612-9127
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="animate-fade-in" style={{ animationDelay: "600ms" }}>
            <h3 className="text-xl font-bold mb-4 border-b border-gray-800 pb-2">
              Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates and news.
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-500 w-full"
                required
              />
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-r-lg transition-colors duration-300 flex items-center"
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © {currentYear} FAMA Barbershop. All rights reserved.
            </p>
            <div className="flex space-x-4">
              {["Home", "About", "Services"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
