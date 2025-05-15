import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "I've been getting my hair cut at FAMA Barbershop for over 2 years now. The attention to detail is unmatched, and the atmosphere is always welcoming. My barber remembers exactly how I like my fade every time!",
      name: "Mike Johnson",
      stars: 5,
    },
    {
      id: 2,
      quote:
        "As someone who's particular about their haircut, I was nervous trying a new place. The team at FAMA took their time to understand what I wanted and delivered exactly that. Will definitely be coming back!",
      name: "David Martinez",
      stars: 5,
    },
    {
      id: 3,
      quote:
        "The hot towel shave experience at FAMA Barbershop is phenomenal! It's the perfect blend of old-school barbering with modern techniques. My beard has never looked better.",
      name: "Chris Taylor",
      stars: 5,
    },
  ];

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

  // Grid animation
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4,
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

  // Star animation variants
  const starVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (index) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.6 + index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.2,
      color: "#fcd34d",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-20 bg-gray-900 text-white" id="testimonials">
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
            Testimonials
          </motion.h3>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={headerVariants}
          >
            What Our Clients Say
          </motion.h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto"
          variants={gridVariants}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              variants={cardVariants}
              index={index}
              starVariants={starVariants}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial, variants, index, starVariants }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg 
                shadow-xl relative overflow-hidden group"
      variants={variants}
      whileHover={{
        y: -8,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      {/* Animated background accent */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-amber-400"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1, originX: 0 }}
        transition={{
          delay: 0.8 + index * 0.2,
          duration: 0.8,
          ease: "easeOut",
        }}
      />

      {/* Quote symbol */}
      <motion.div
        className="absolute top-8 left-8 text-5xl text-amber-500/20 font-serif"
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
      >
        ❝
      </motion.div>

      {/* Testimonial text with growing underline animation */}
      <div className="relative">
        <motion.p
          className="text-gray-300 mb-8 relative z-10 italic text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
        >
          "{testimonial.quote}"
        </motion.p>

        {/* Stars with staggered animation */}
        <div className="flex mb-4">
          {[...Array(testimonial.stars)].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={starVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <FaStar className="text-amber-500 mr-1" />
            </motion.div>
          ))}
        </div>

        {/* Name with slide-in animation on hover */}
        <motion.div
          className="pt-2 border-t border-gray-700 relative overflow-hidden"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }}
        >
          <motion.p
            className="font-bold text-xl"
            whileHover={{ x: 8, color: "#fbbf24" }}
            transition={{ duration: 0.3 }}
          >
            {testimonial.name}
          </motion.p>
        </motion.div>
      </div>

      {/* Corner accent that appears on hover */}
      <motion.div
        className="absolute -bottom-20 -right-20 w-40 h-40 bg-amber-500/5 rounded-full"
        whileHover={{
          scale: 2.5,
          opacity: 0.2,
          transition: { duration: 0.7, ease: "easeOut" },
        }}
      />
    </motion.div>
  );
};

export default Testimonials;
