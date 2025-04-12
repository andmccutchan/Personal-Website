import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import ProjectsSection from "./Components/ProjectsSection";
import TechStackSection from "./Components/TechStackSection";
import AboutMeSection from "./Components/AboutMeSection";
import ContactMeSection from "./Components/ContactMeSection";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="min-h-screen">
        <HeroSection />
        <AboutMeSection />
        <ProjectsSection />
        <TechStackSection />
        <ContactMeSection />
      </div>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
