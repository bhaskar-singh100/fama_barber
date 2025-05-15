import React from "react";
import { motion } from "framer-motion";
// Fix imports - import specific icons correctly
import { FaScissors } from "react-icons/fa6";
import {
  GiRazor,
  GiBeard,
  GiHairStrands,
  GiLargePaintBrush,
} from "react-icons/gi";

const Services = () => {
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

  // Service grid animation
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
    <section className="py-20 bg-gray-900 text-white" id="services">
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
            Premium Grooming
          </motion.h3>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={headerVariants}
          >
            Our Barber Services
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-gray-300"
            variants={headerVariants}
          >
            Professional barbering services to keep you looking sharp for
            everyday confidence or special occasions.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={gridVariants}
        >
          {/* Haircuts */}
          <MotionServiceCard
            icon={<FaScissors className="text-5xl text-amber-500 mb-6" />}
            title="Haircuts"
            description="Our skilled barbers deliver precision haircuts tailored to your style and face shape. From classic cuts to modern fades, we ensure you leave looking sharp and confident."
            services={["Classic Cuts", "Modern Styles"]}
            variants={cardVariants}
          />

          {/* Beauty Services */}
          <MotionServiceCard
            icon={<GiHairStrands className="text-5xl text-amber-500 mb-6" />}
            title="Beauty Services"
            description="Enhance your natural beauty with our premium salon services. Our skilled stylists specialize in creating stunning looks, from elegant hairstyles to rejuvenating facial treatments for the ultimate beauty experience."
            services={["Hair Styling", "Facial Treatments"]}
            variants={cardVariants}
          />

          {/* Premium Services */}
          <MotionServiceCard
            icon={<GiHairStrands className="text-5xl text-amber-500 mb-6" />}
            title="Premium Services"
            description="Enhance your look with our premium barbering services including expert hair coloring, revitalizing scalp treatments, and styling for special occasions when you need to look your absolute best."
            services={["Hair Coloring", "Scalp Treatments"]}
            variants={cardVariants}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

// Motion Service Card Component
const MotionServiceCard = ({
  icon,
  title,
  description,
  services,
  variants,
}) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 hover:translate-y-[-5px] group"
      variants={variants}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(251, 191, 36, 0.2)",
        transition: { duration: 0.3 },
      }}
    >
      {/* Icon with animation */}
      <motion.div
        className="flex justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {icon}
      </motion.div>

      {/* Title */}
      <h3 className="text-center text-2xl font-bold mb-4">{title}</h3>

      {/* Description */}
      <p className="text-gray-300 mb-6 text-center">{description}</p>

      {/* Service List */}
      <div className="space-y-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex items-center p-3 bg-gray-900/50 rounded-md transition-all duration-300 group-hover:bg-gray-700/50"
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
          >
            {service === "Classic Cuts" || service === "Modern Styles" ? (
              <FaScissors className="text-amber-500 mr-3" />
            ) : service === "Beard Trims" || service === "Beard Shaping" ? (
              <GiRazor className="text-amber-500 mr-3" />
            ) : (
              <GiLargePaintBrush className="text-amber-500 mr-3" />
            )}
            <span>{service}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Keep the original ServiceCard for reference or if needed
const ServiceCard = ({ icon, title, description, services, delay }) => {
  return (
    <div
      className={`bg-gray-800 rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 hover:translate-y-[-5px] group animate-slide-up ${delay}`}
    >
      {/* Icon */}
      <div className="flex justify-center">{icon}</div>

      {/* Title */}
      <h3 className="text-center text-2xl font-bold mb-4">{title}</h3>

      {/* Description */}
      <p className="text-gray-300 mb-6 text-center">{description}</p>

      {/* Service List */}
      <div className="space-y-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-center p-3 bg-gray-900/50 rounded-md transition-all duration-300 group-hover:bg-gray-700/50"
          >
            {service === "Classic Cuts" || service === "Modern Styles" ? (
              <FaScissors className="text-amber-500 mr-3" />
            ) : service === "Beard Trims" || service === "Beard Shaping" ? (
              <GiRazor className="text-amber-500 mr-3" />
            ) : (
              <GiLargePaintBrush className="text-amber-500 mr-3" />
            )}
            <span>{service}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
