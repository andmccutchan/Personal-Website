import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "motion/react";

const ProjectsSection = () => {
  const projectInfo = [
    {
      title: "LockSmith",
      image: "/Locksmith-img.png",
      description: "Password Managment system with encryption and hashing",
      github: "https://github.com/andmccutchan/LockSmith",
      liveDemo: "https://locksmith.onrender.com/",
    },
    {
      title: "Dijktra's",
      image: "",
      description:
        "A CLI program in C++ used to compuute the shortest path from a given pair of coordinates",
      github: "https://github.com/andmccutchan/Dijkstras-CLI-Program",
      liveDemo: "",
    },
  ];

  return (
    <section>
      <div className="flex">
        <motion.h2
          className="secondary-font text-5xl text-stone-50 my-2 hover:cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          Projects
        </motion.h2>
      </div>
      {/* <div className="grid grid-cols-3 gap-6 w-full mx-auto my-10">
        {projectInfo.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={
              project.image === ""
                ? "https://placehold.co/600x400"
                : project.image
            }
            description={project.description}
            liveDemo={project.liveDemo}
            githubLink={project.github}
          />
        ))}
      </div> */}
    </section>
  );
};

export default ProjectsSection;
