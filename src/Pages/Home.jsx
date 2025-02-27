import React from "react";
import HeroSection from "../Components/HeroSection";
import ProjectsSection from "../Components/ProjectsSection";
import TechStackSection from "../Components/TechStackSection";
import AboutMeSection from "../Components/AboutMeSection";
import ContactMeSection from "../Components/ContactMeSection";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <TechStackSection />
      <ContactMeSection />
    </>
  );
}

export default Home;
