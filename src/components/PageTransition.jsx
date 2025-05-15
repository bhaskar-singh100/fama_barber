import React, { useState, useEffect } from "react";

const PageTransition = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    // Simulate loading time or wait for content to be ready
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Slight delay before showing content for smooth transition
      setTimeout(() => {
        setIsContentVisible(true);
      }, 300);
    }, 1500); // Adjust loading time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900 transition-opacity duration-500 ${
          isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative w-24 h-24 mb-8">
          {/* Custom Barber Pole Animation */}
          <div className="absolute inset-0 border-4 border-amber-500 rounded-full"></div>
          <div className="absolute inset-2 border-4 border-white rounded-full animate-spin-reverse"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-amber-500">FAMA</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white animate-pulse">
          Loading Experience
        </h2>
      </div>

      {/* Main Content */}
      <main
        className={`transition-opacity duration-1000 ${
          isContentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </main>
    </>
  );
};

export default PageTransition;
