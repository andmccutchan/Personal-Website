import React from "react";

const ProjectCard = ({ title, image, description, githubLink, liveDemo }) => {
  return (
    <>
      <div className="border border-gray-50 p-3">
        <h3 className="text-gray-50 text-center text-4xl mb-4 max-md:text-2xl">
          {title}
        </h3>
        <img src="https://placehold.co/600x400" alt="" />
        <p className="text-gray-50 my-2 max-md:hidden">{description}</p>
        <div className="flex max-md:flex-col">
          <a
            href={liveDemo}
            className="w-1/2 text-center border border-gray-50 text-gray-50 hover:bg-gray-50 hover:text-black hover:cursor-pointer max-md:w-full me-1"
            target="_blank"
          >
            View Demo
          </a>
          <a
            href={githubLink}
            className=" w-1/2 text-center border border-gray-50 text-gray-50 hover:bg-gray-50 hover:text-black hover:cursor-pointer max-md:w-full ms-1"
            target="_blank"
          >
            View Source
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
