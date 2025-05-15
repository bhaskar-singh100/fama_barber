import React from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaArrowRight, FaFire } from "react-icons/fa";

const ServicePrices = () => {
  return (
    <section className="py-20 bg-gray-800 text-white" id="prices">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-amber-500 text-xl font-semibold mb-3 animate-fade-in">
            Quality Barbering at Fair Prices
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Our Service Prices
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 animate-fade-in">
            Choose from our range of professional barbering services.
          </p>
        </div>

        {/* Price Cards Container */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-6">
          {/* Classic Services */}
          <PriceCard
            title="Classic Services"
            price="25"
            popular={false}
            services={[
              "Men's Haircut",
              "Kids Haircut (12 & under)",
              "Senior Haircut (65+)",
              "Military/First Responder Cut",
              "Basic Beard Trim",
              "Neck & Line Cleanup (between cuts)",
            ]}
            buttonText="Book Now"
            delay="delay-100"
          />

          {/* Premium Services - Most Popular */}
          <PriceCard
            title="Premium Services"
            price="35"
            popular={true}
            services={[
              "Haircut & Beard Combo",
              "Hot Towel Shave",
              "Full Beard Shaping & Design",
              "Color Camo (Gray Blending)",
              "Hair & Scalp Treatment",
              "Head Shave with Hot Towel",
            ]}
            buttonText="Book Now"
            delay="delay-300"
          />

          {/* Packages */}
          <PriceCard
            title="Packages"
            price="50"
            popular={false}
            services={[
              "The Works (Cut, Shave, Treatment)",
              "Father & Son Combo",
              "Groom's Package",
              "Monthly Membership (2 cuts/mo)",
              "First-Time Client Special",
              "Loyalty Program",
            ]}
            buttonText="Inquire"
            delay="delay-500"
          />
        </div>
      </div>
    </section>
  );
};

// Price Card Component
const PriceCard = ({ title, price, popular, services, buttonText, delay }) => {
  return (
    <div
      className={`w-full md:w-72 lg:w-80 xl:w-96 relative rounded-xl overflow-hidden 
      transition-all duration-500 group animate-price-card ${delay}
      ${popular ? "md:scale-110 md:-translate-y-2 z-10" : "z-0"}`}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -right-12 top-7 bg-amber-500 text-black font-bold py-1 px-10 transform rotate-45 shadow-lg">
          <div className="flex items-center">
            <FaFire className="mr-1" />
            <span>Most Popular</span>
          </div>
        </div>
      )}

      {/* Card Header */}
      <div
        className={`p-6 ${popular ? "bg-amber-500 text-black" : "bg-gray-700"}`}
      >
        <h3 className="text-2xl font-bold mb-1">{title}</h3>
        <div className="flex items-baseline">
          <span className="text-lg font-medium">$</span>
          <span className="text-4xl font-bold">{price}</span>
        </div>
      </div>

      {/* Card Body */}
      <div
        className={`p-6 ${
          popular ? "bg-gray-900" : "bg-gray-900/80"
        } h-80 overflow-auto`}
      >
        <ul className="space-y-3">
          {services.map((service, index) => (
            <li
              key={index}
              className="flex items-start group-hover:transform group-hover:translate-x-1 transition-transform duration-300"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <FaCheck
                className={`mt-1 mr-3 flex-shrink-0 ${
                  popular ? "text-amber-500" : "text-gray-400"
                }`}
              />
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Footer */}
      <div className={`p-6 ${popular ? "bg-gray-900/90" : "bg-gray-800/80"}`}>
        <Link
          to={buttonText === "Inquire" ? "/contact" : "/appointment"}
          className={`w-full py-3 px-6 flex justify-center items-center rounded-full font-bold group-hover:shadow-lg
          transition-all duration-300 ${
            popular
              ? "bg-amber-500 hover:bg-amber-600 text-black"
              : "bg-gray-700 hover:bg-gray-600 text-white border border-gray-600"
          }`}
        >
          <span>{buttonText}</span>
          <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
        </Link>
      </div>

      {/* Animated Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-500/50 rounded-xl transition-all duration-500 pointer-events-none"></div>
    </div>
  );
};

export default ServicePrices;
