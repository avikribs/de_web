import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import IndustrySolutions from "./components/IndustrySolutions";
import TechnologyStack from "./components/TechnologyStack";
import CaseStudies from "./components/CaseStudies";
import CompetitiveAdvantage from "./components/CompetitiveAdvantage";
import Testimonials from "./components/Testimonials";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import RoofingCaseStudy from "./components/RoofingCaseStudy";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="industries">
        <IndustrySolutions />
      </div>
      <div id="solutions">
        <TechnologyStack />
      </div>
      <div id="case-studies">
        <CaseStudies />
      </div>
      <div id="about">
        <CompetitiveAdvantage />
      </div>
      <div id="contact">
        <ContactCTA />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-study/roofing" element={<RoofingCaseStudy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
