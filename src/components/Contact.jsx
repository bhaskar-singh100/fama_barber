import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaCalendarAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const contactCardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  const formVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
    },
  };

  const formHeaderVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.6 },
    },
  };

  const formFieldsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.7,
      },
    },
  };

  const formFieldVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 1.2 },
    },
    hover: {
      y: -2,
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.98 },
  };

  const infoItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.5 + custom * 0.2 },
    }),
  };

  const iconContainerVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 10 },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert(
      "Thank you! Your appointment request has been submitted. We will contact you shortly to confirm."
    );

    // Reset form
    setFormData({
      name: "",
      phone: "",
      service: "",
      date: "",
      message: "",
    });
  };

  const services = [
    "Men's Haircut",
    "Beard Trim",
    "Haircut & Beard Combo",
    "Hot Towel Shave",
    "Head Shave",
    "Hair Coloring",
    "Kid's Haircut",
    "Senior's Haircut",
  ];

  return (
    <section className="py-20 bg-gray-800 text-white" id="contact">
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16">
          <motion.h3
            className="text-amber-500 text-xl font-semibold mb-3"
            variants={headerVariants}
          >
            Book Your Appointment
          </motion.h3>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={headerVariants}
          >
            Contact Us
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-gray-300"
            variants={headerVariants}
          >
            Ready for a fresh look? Book your appointment today or contact us
            for any questions.
          </motion.p>
        </motion.div>

        {/* Contact and Form Container */}
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="w-full lg:w-2/5"
            variants={contactCardVariants}
          >
            <motion.div
              className="bg-gray-900 p-8 rounded-lg shadow-lg h-full"
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-8">
                {/* Address */}
                <motion.div
                  className="flex"
                  variants={infoItemVariants}
                  custom={0}
                >
                  <div className="flex-shrink-0">
                    <motion.div
                      className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-black"
                      variants={iconContainerVariants}
                      whileHover={{
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.5 },
                      }}
                    >
                      <FaMapMarkerAlt size={20} />
                    </motion.div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium mb-1">Address</h4>
                    <p className="text-gray-300">
                      500 N Bell Ave #109, Denton, TX 76209, United States
                    </p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  className="flex"
                  variants={infoItemVariants}
                  custom={1}
                >
                  <div className="flex-shrink-0">
                    <motion.div
                      className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-black"
                      variants={iconContainerVariants}
                      whileHover={{
                        scale: 1.1,
                        transition: {
                          duration: 0.3,
                          repeat: 1,
                          repeatType: "reverse",
                        },
                      }}
                    >
                      <FaPhone size={20} />
                    </motion.div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium mb-1">Phone</h4>
                    <motion.p
                      className="text-gray-300"
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <a
                        href="tel: +1 940-612-9127"
                        className="hover:text-amber-500 transition-colors"
                      >
                        +1 940-612-9127
                      </a>
                    </motion.p>
                  </div>
                </motion.div>

                {/* Business Hours */}
                <motion.div
                  className="flex"
                  variants={infoItemVariants}
                  custom={2}
                >
                  <div className="flex-shrink-0">
                    <motion.div
                      className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-black"
                      variants={iconContainerVariants}
                      whileHover={{
                        rotate: 360,
                        transition: { duration: 1, ease: "easeInOut" },
                      }}
                    >
                      <FaClock size={20} />
                    </motion.div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium mb-1">Business Hours</h4>
                    <p className="text-gray-300">Mon-Fri: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-300">Sat: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-300">Sun: Closed</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Booking Form */}
          <motion.div className="w-full lg:w-3/5" variants={formVariants}>
            <motion.form
              onSubmit={handleSubmit}
              className="bg-gray-900 p-8 rounded-lg shadow-lg"
              whileHover={{
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3
                className="text-2xl font-bold mb-6 flex items-center"
                variants={formHeaderVariants}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <FaCalendarAlt className="text-amber-500 mr-2" />
                </motion.div>
                Book an Appointment
              </motion.h3>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                variants={formFieldsContainerVariants}
              >
                {/* Name Input */}
                <motion.div
                  className={`group ${
                    focusedField === "name" ? "scale-105" : ""
                  } transition-transform duration-300`}
                  variants={formFieldVariants}
                >
                  <label className="block text-gray-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter your full name"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                    required
                  />
                </motion.div>

                {/* Phone Input */}
                <motion.div
                  className={`${
                    focusedField === "phone" ? "scale-105" : ""
                  } transition-transform duration-300`}
                  variants={formFieldVariants}
                >
                  <label className="block text-gray-400 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter your phone number"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                    required
                  />
                </motion.div>

                {/* Service Selection */}
                <motion.div
                  className={`${
                    focusedField === "service" ? "scale-105" : ""
                  } transition-transform duration-300`}
                  variants={formFieldVariants}
                >
                  <label className="block text-gray-400 mb-2">Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("service")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all appearance-none"
                    required
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </motion.div>

                {/* Date Picker */}
                <motion.div
                  className={`${
                    focusedField === "date" ? "scale-105" : ""
                  } transition-transform duration-300`}
                  variants={formFieldVariants}
                >
                  <label className="block text-gray-400 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("date")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="dd-mm-yyyy"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                    required
                  />
                </motion.div>
              </motion.div>

              {/* Message */}
              <motion.div
                className={`mb-8 ${
                  focusedField === "message" ? "scale-105" : ""
                } transition-transform duration-300`}
                variants={formFieldVariants}
              >
                <label className="block text-gray-400 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Tell us about your style preferences or any questions you have"
                  rows="4"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full py-4 px-6 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-lg"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span className="flex items-center justify-center">
                  <FaPaperPlane className="mr-2" />
                  Submit
                </span>
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
