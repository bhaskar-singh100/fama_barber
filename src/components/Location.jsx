import React from "react";
import { FaMapMarkerAlt, FaPhone, FaClock, FaEnvelope } from "react-icons/fa";

const Location = () => {
  return (
    <section className="py-20 bg-gray-800 text-white" id="location">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-amber-500 text-xl font-semibold mb-3 animate-fade-in">
            Find Us
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Our Location
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 animate-fade-in">
            Visit our barbershop in the heart of Denton for the ultimate
            grooming experience.
          </p>
        </div>

        {/* Location Content */}
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
          {/* Map Side */}
          <div className="w-full md:w-1/2 animate-slide-in h-[400px] md:h-[450px] rounded-lg overflow-hidden shadow-lg relative group">
            <div className="absolute inset-0 bg-amber-500 rounded-lg transform -translate-x-2 -translate-y-2 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26698.17187170544!2d-97.15578088359375!3d33.21479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c4ca0c088b1d1%3A0x724474cb4814fb1b!2sDenton%2C%20TX!5e0!3m2!1sen!2sus!4v1715752940971!5m2!1sen!2sus"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FAMA Barber Shop Location"
            ></iframe>
          </div>

          {/* Contact Info Side */}
          <div className="w-full md:w-1/2 animate-slide-up">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <FaMapMarkerAlt className="text-amber-500 mr-2" />
                Visit Us
              </h3>

              {/* Address */}
              <div className="mb-6 pl-2 border-l-2 border-amber-500">
                <p className="text-lg">500 N Bell Ave #109,</p>
                <p className="text-lg">Denton, TX 76209, United States</p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-lg">
                  <FaPhone className="text-amber-500 mr-3 w-5" />
                  <a
                    href="tel:+19406129127"
                    className="hover:text-amber-500 transition-colors"
                  >
                    +1 940-612-9127
                  </a>
                </div>
                <div className="flex items-center text-lg">
                  <FaEnvelope className="text-amber-500 mr-3 w-5" />
                  <a
                    href="mailto:info@famabarber.com"
                    className="hover:text-amber-500 transition-colors"
                  >
                    info@famabarber.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <FaClock className="text-amber-500 mr-2" />
                Opening Hours
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-gray-300">Monday - Friday</div>
                <div>9:00 AM - 7:00 PM</div>
                <div className="text-gray-300">Saturday</div>
                <div>8:00 AM - 6:00 PM</div>
                <div className="text-gray-300">Sunday</div>
                <div>Closed</div>
              </div>

              {/* CTA Button */}
              <a
                href="https://www.google.com/maps/dir//Denton,+TX/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block px-6 py-3 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-600 transition-colors w-full text-center"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
