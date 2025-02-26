import React from "react";
import ProjectCard from "../Components/ProjectCard";

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
      <div className="grid grid-cols-3 gap-6 w-full mx-auto">
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
      </div>
    </>
  );
}

export default Home;
