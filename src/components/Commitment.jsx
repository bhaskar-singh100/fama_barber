import React from "react";
import { FaUserTie, FaCut, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";

const Commitment = () => {
  // Animation variants for staggered section elements
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

  // Card grid animation
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  // Individual card animation
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-gray-800 text-white" id="commitment">
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={headerVariants}
          >
            Our Commitment
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-xl text-amber-500 font-semibold mb-4"
            variants={headerVariants}
          >
            Why Choose FAMA Barbershop?
          </motion.p>
          <motion.p
            className="max-w-2xl mx-auto text-gray-300"
            variants={headerVariants}
          >
            What makes us the premier barbershop in Denton, TX.
          </motion.p>
        </motion.div>

        {/* Commitment Points */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto"
          variants={gridVariants}
        >
          {/* Expert Barbers */}
          <MotionCommitmentCard
            icon={<FaUserTie />}
            title="Expert Barbers"
            description="Our team consists of certified barbers with years of experience in classic and modern cutting techniques, beard grooming, and men's styling."
            variants={cardVariants}
          />

          {/* Premium Tools */}
          <MotionCommitmentCard
            icon={<FaCut />}
            title="Premium Tools & Products"
            description="We use only high-quality barbering tools and premium men's grooming products to ensure the best results for your hair and skin."
            variants={cardVariants}
          />

          {/* Classic Experience */}
          <MotionCommitmentCard
            icon={<FaHome />}
            title="Classic Barbershop Experience"
            description="Enjoy a comfortable, clean shop with a classic barbershop atmosphere where you can relax while getting a great cut or shave."
            variants={cardVariants}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

// Enhanced Motion Commitment Card Component
const MotionCommitmentCard = ({ icon, title, description, variants }) => {
  return (
    <motion.div
      className="group relative p-8 bg-gray-700/30 rounded-lg overflow-hidden
                transition-all duration-500 ease-in-out hover:bg-gray-700/50
                hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-2"
      variants={variants}
      whileHover={{
        y: -8,
        boxShadow: "0 10px 25px -5px rgba(251, 191, 36, 0.2)",
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      {/* Animated background shape */}
      <motion.div
        className="absolute -right-16 -top-16 w-32 h-32 bg-amber-500/10 rounded-full"
        initial={{ scale: 0.5, opacity: 0.1 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{
          scale: 1.5,
          opacity: 0.2,
          transition: { duration: 0.7, ease: "easeOut" },
        }}
      />

      {/* Icon with animation */}
      <motion.div
        className="relative z-10 mb-6 flex justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <motion.div
          className="w-20 h-20 flex items-center justify-center rounded-full bg-amber-500 text-black text-3xl"
          whileHover={{
            rotate: 12,
            transition: { duration: 0.3 },
          }}
        >
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
          >
            {icon}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Title with animation */}
      <motion.h3
        className="relative z-10 text-center text-2xl font-bold mb-3 text-white"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileHover={{
          color: "#fcd34d", // amber-300
          transition: { duration: 0.3 },
        }}
      >
        {title}
      </motion.h3>

      {/* Description with animation */}
      <motion.p
        className="relative z-10 text-center text-gray-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        whileHover={{
          color: "#ffffff",
          transition: { duration: 0.3 },
        }}
      >
        {description}
      </motion.p>

      {/* Bottom line accent */}
      <motion.div
        className="absolute bottom-0 left-1/2 h-1 bg-amber-500"
        initial={{ width: "0%", x: "-50%" }}
        whileHover={{
          width: "75%",
          transition: { duration: 0.5, ease: "easeOut" },
        }}
      />
    </motion.div>
  );
};

// Keep the original component for reference
const CommitmentCard = ({ icon, title, description, delay }) => {
  return (
    <div
      className={`group relative p-8 bg-gray-700/30 rounded-lg overflow-hidden animate-slide-up ${delay} 
                      transition-all duration-500 ease-in-out hover:bg-gray-700/50
                      hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-2`}
    >
      {/* Animated background shape */}
      <div
        className="absolute -right-16 -top-16 w-32 h-32 bg-amber-500/10 rounded-full 
                      transform group-hover:scale-150 group-hover:bg-amber-500/20 transition-all duration-700 ease-in-out"
      ></div>

      {/* Icon with animation */}
      <div className="relative z-10 mb-6 flex justify-center">
        <div
          className="w-20 h-20 flex items-center justify-center rounded-full bg-amber-500 text-black text-3xl
                        transform group-hover:rotate-12 transition-transform duration-300 ease-in-out"
        >
          <div className="transform group-hover:scale-110 transition-all duration-300">
            {icon}
          </div>
        </div>
      </div>

      {/* Title with animation */}
      <h3
        className="relative z-10 text-center text-2xl font-bold mb-3 text-white
                     transform transition-all duration-300 ease-in-out
                     group-hover:text-amber-300"
      >
        {title}
      </h3>

      {/* Description with animation */}
      <p
        className="relative z-10 text-center text-gray-300 transition-all duration-300 ease-in-out
                   group-hover:text-white"
      >
        {description}
      </p>

      {/* Bottom line accent */}
      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-amber-500
                     group-hover:w-3/4 transition-all duration-500 ease-in-out"
      ></div>
    </div>
  );
};

export default Commitment;
