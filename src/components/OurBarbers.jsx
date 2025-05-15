import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

// Replace with actual barber images
const jasonImg =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80";
const marcusImg =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80";
const terrenceImg =
  "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80";

const OurBarbers = () => {
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

  // Grid animation for barber cards
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  // Individual barber card animations
  const barberCardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: custom * 0.2,
      },
    }),
  };

  const barbers = [
    {
      id: 1,
      name: "Jason Rodriguez",
      title: "Owner & Master Barber",
      image: jasonImg,
      bio: "With over 15 years of experience, Jason founded FAMA Barbershop to bring premium men's grooming services to Denton. Specializing in classic cuts and straight razor shaves, he combines traditional techniques with modern styles.",
      instagram: "jasoncuts",
      facebook: "jasonbarber",
    },
    {
      id: 2,
      name: "Marcus Williams",
      title: "Senior Barber",
      image: marcusImg,
      bio: "Marcus brings 8 years of experience to FAMA Barbershop. His expertise in fades, beard sculpting, and precision lineup work has earned him a loyal clientele. Known for his attention to detail and consistently flawless cuts.",
      instagram: "marcusthebarber",
      facebook: "marcuswilliamsbarber",
    },
    {
      id: 3,
      name: "Terrence Jackson",
      title: "Barber & Stylist",
      image: terrenceImg,
      bio: "Terrence specializes in modern men's styling, textured cuts, and hair designs. With his creative approach and technical skill, he excels at transforming your look while maintaining your personal style preferences.",
      instagram: "terrence_cuts",
      facebook: "terrencejacksonbarber",
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white" id="barbers">
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
            Expert Stylists
          </motion.h3>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={headerVariants}
          >
            Meet Our Barbers
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-gray-300"
            variants={headerVariants}
          >
            Our team of skilled barbers is dedicated to providing you with the
            perfect cut and grooming experience.
          </motion.p>
        </motion.div>

        {/* Barbers Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto"
          variants={gridVariants}
        >
          {barbers.map((barber, index) => (
            <BarberCard
              key={barber.id}
              barber={barber}
              variants={barberCardVariants}
              custom={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

// Motion Barber Card Component with preserved hover animations
const BarberCard = ({ barber, variants, custom }) => {
  return (
    <motion.div
      className="group max-w-md mx-auto hover:-translate-y-2 transition-transform duration-300"
      variants={variants}
      custom={custom}
      initial="hidden"
      animate="visible"
    >
      {/* Image Container with Overlay */}
      <motion.div
        className="relative mb-6 overflow-hidden rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 + custom * 0.1, duration: 0.5 }}
      >
        <motion.img
          src={barber.image}
          alt={barber.name}
          className="w-full h-[350px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
          initial={{ scale: 1.2, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 + custom * 0.1 }}
        />

        {/* Dark Overlay on Hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300"></div>

        {/* Social Media Icons */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-4">
          <motion.a
            href={`https://instagram.com/${barber.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-black hover:bg-amber-600 transition-colors hover:scale-110 transform duration-300"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.6 + custom * 0.1,
              duration: 0.5,
              ease: "backOut",
            }}
          >
            <FaInstagram size={20} />
          </motion.a>
          <motion.a
            href={`https://facebook.com/${barber.facebook}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-black hover:bg-amber-600 transition-colors hover:scale-110 transform duration-300"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.7 + custom * 0.1,
              duration: 0.5,
              ease: "backOut",
            }}
          >
            <FaFacebook size={20} />
          </motion.a>
        </div>
      </motion.div>

      {/* Barber Name & Title */}
      <div className="text-center mb-4">
        <motion.h3
          className="text-2xl font-bold mb-1 text-amber-500 group-hover:text-white transition-colors duration-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + custom * 0.1, duration: 0.5 }}
        >
          {barber.name}
        </motion.h3>
        <motion.p
          className="text-gray-400 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 + custom * 0.1, duration: 0.5 }}
        >
          {barber.title}
        </motion.p>
      </div>

      {/* Barber Bio */}
      <motion.p
        className="text-gray-300 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 + custom * 0.1, duration: 0.5 }}
      >
        {barber.bio}
      </motion.p>
    </motion.div>
  );
};

export default OurBarbers;
