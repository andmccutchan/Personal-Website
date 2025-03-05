import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "motion/react";

const ProjectsSection = () => {
  const projectInfo = [
    {
      title: "LockSmith",
      image: "/Locksmith-img.png",
      description: (
        <>
          <p>
            <span className="text-emerald-400">LockSmith</span> is a full-stack
            password management app I built from scratch. This project was a
            great learning experience, as it introduced me to full-stack
            development.
          </p>
          <h4 className="font-bold">Key Features:</h4>
          <ul className=" list-disc list-inside">
            <li>Secure user authentication</li>
            <li>Password vault with encryption</li>
            <li>Strong password generator</li>
            <li>Intuitive, responsive UI</li>
          </ul>
          <p>
            LockSmith helped me dive into backend technologies, secure data
            management, and creating user-friendly applications.
          </p>
        </>
      ),
      github: "https://github.com/andmccutchan/LockSmith",
      liveDemo: "https://locksmith.onrender.com/",
    },
    {
      title: "Shortest Path with Dijkstra's Algorithm",
      image: "/graph-project.png",
      description: (
        <>
          <p>
            <span className="text-emerald-400">
              Shortest Path with Dijkstra's Algorithm
            </span>{" "}
            is a C++ command-line interface (CLI) program designed to compute
            the shortest path between a given pair of coordinates.
          </p>
          <h4 className="font-bold">Key Features:</h4>
          <ul className="mt-2 list-disc list-inside">
            <li>
              Implements Dijkstra's algorithm for finding the shortest path
            </li>
            <li>Command-line interface for easy interaction</li>
            <li>Takes input coordinates and calculates the optimal path</li>
            <li>Efficient for finding paths in weighted graphs</li>
          </ul>
          <p className="mt-2">
            This project helped me deepen my understanding of graph algorithms
            and sharpen my C++ programming skills.
          </p>
        </>
      ),
      github: "https://github.com/andmccutchan/Dijkstras-CLI-Program",
      liveDemo: "",
    },
  ];

  return (
    <section className="w-3/4 mx-auto my-30" id="projects">
      <div className="flex justify-center my-20">
        <h2 className="secondary-font text-5xl text-stone-50 relative z-10">
          Projects
          <span className="absolute -left-1 w-full h-1 -bottom-3 rounded bg-emerald-400"></span>
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
