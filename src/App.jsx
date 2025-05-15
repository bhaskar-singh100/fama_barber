import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Commitment from "./components/Commitment";
import Testimonials from "./components/Testimonials";
import ServicePrices from "./components/ServicePrices";
import OurBarbers from "./components/OurBarbers";
import Location from "./components/Location";
import Faq from "./components/Faq";

import Footer from "./components/Footer";
import Contact from "./components/Contact";
// Your other imports

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Your routes and other components */}
        <Hero />
        <Services />
        <Commitment />
        <Testimonials />
        <ServicePrices />
        <OurBarbers />
        <Location />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
