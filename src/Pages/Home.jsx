import React from "react";
import ProjectCard from "../Components/ProjectCard";
import HeroSection from "../Components/HeroSection";

function Home() {
  const projectInfo = [
    {
      title: "LockSmith",
      image: "",
      description: "Password Managment system with encryption and hashing",
      github: "https://github.com/andmccutchan/LockSmith",
      liveDemo: "https://locksmith.onrender.com/",
    },
  ];

  return (
    <>
      <HeroSection />
      {/* <div className="grid grid-cols-3 gap-6 w-full mx-auto">
        {projectInfo.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            liveDemo={project.liveDemo}
            githubLink={project.github}
          />
        ))}
      </div> */}
    </>
  );
}

export default Home;
