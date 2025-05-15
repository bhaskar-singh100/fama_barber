import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import HeroImage from "../assets/barber-hero.jpg";

const Hero = () => {
  // Animation variants for staggered text elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Image animation variants
  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section className="w-full bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4 py-20 md:py-28 flex flex-col-reverse md:flex-row items-center">
        {/* Text Content */}
        <motion.div
          className="md:w-1/2 md:pr-10 mt-10 md:mt-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-4"
            variants={itemVariants}
          >
            <span className="text-amber-500">Premium</span> Barber Services in
            Denton
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl mb-6 font-medium"
            variants={itemVariants}
          >
            Classic Cuts, Modern Style Premium Barber Shop
          </motion.h2>

          <motion.p
            className="mb-8 text-gray-300 leading-relaxed"
            variants={itemVariants}
          >
            At FAMA Barbershop, we combine traditional barbering techniques with
            modern styling to give you the perfect look. Our experienced barbers
            deliver precision cuts, beard grooming, and relaxing hot towel
            shaves in a classic barbershop atmosphere.
          </motion.p>

          <motion.div
            className="flex items-center mb-8"
            variants={itemVariants}
          >
            <FaMapMarkerAlt className="text-amber-500 mr-2 text-xl" />
            <address className="not-italic text-gray-300">
              500 N Bell Ave #109, Denton, TX 76209, United States
            </address>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link
              to="/appointment"
              className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:translate-y-[-3px] hover:shadow-lg"
            >
              <FaCalendarCheck className="mr-2" />
              Book Now
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="md:w-1/2"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-amber-500 rounded-lg -z-10"
              initial={{ x: 0, y: 0 }}
              animate={{ x: 12, y: 12 }}
              transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
            ></motion.div>
            <motion.img
              src={HeroImage}
              alt="Professional barber service"
              className="w-full h-auto rounded-lg shadow-2xl object-cover"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 bg-black/80 py-2 px-4 rounded"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <span className="text-amber-500 font-bold">20+ Years</span>
              <span className="text-white"> of Experience</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
