import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "motion/react";

const ProjectsSection = () => {
  const projectInfo = [
    {
      title: "LockSmith",
      image: "/Locksmith-img.png",
      description:
        "LockSmith is a fullstack password management appplication that I recently completed. This was a fun and challenging project for me since I had almost no knowledge of creating a full-stack application.",
      github: "https://github.com/andmccutchan/LockSmith",
      liveDemo: "https://locksmith.onrender.com/",
    },
    {
      title: "Dijktra's",
      image: "/graph-project.png",
      description:
        "A CLI program in C++ used to compuute the shortest path from a given pair of coordinates",
      github: "https://github.com/andmccutchan/Dijkstras-CLI-Program",
      liveDemo: "",
    },
  ];

  return (
    <section className="w-3/4 mx-auto my-10">
      <div className="flex justify-center">
        <h2 className="secondary-font text-5xl text-stone-50 my-2 hover:cursor-pointer">
          Projects
        </h2>
      </div>
      <div className="flex flex-col">
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
      </div>
    </section>
  );
};

export default ProjectsSection;
