import React from "react";

const ProjectCard = ({ title, image, description, githubLink, liveDemo }) => {
  return (
    <section className="my-3 bg-gray-700 p-6 rounded-2xl">
      <div className="flex flex-col">
        <h3 className="text-stone-50 text-4xl mb-4 max-md:text-2xl secondary-font">
          {title}
        </h3>
        <div className="flex me-6">
          <div className="w-1/2">
            <img
              src={image}
              alt={`${title} project image`}
              className="grayscale transition-all duration-300 ease-in-out hover:grayscale-0 text-stone-50 w-full h-96 object-cover"
            />
          </div>
          <div className="flex flex-col w-1/2 ms-6 justify-between">
            <p className="text-stone-50 max-md:hidden">{description}</p>
            <div className="flex max-md:flex-col max-md:align-middle">
              {liveDemo !== "" ? (
                <a
                  href={liveDemo}
                  className="w-1/2 text-center bg-emerald-400 text-stone-950 hover:bg-emerald-500 hover:cursor-pointer max-md:w-full me-1 p-2 rounded"
                  target="_blank"
                >
                  View Demo
                </a>
              ) : null}
              <a
                href={githubLink}
                className={`${
                  liveDemo === "" ? "w-full" : "w-1/2 ms-1"
                } flex justify-center items-center p-2 text-center bg-emerald-400 text-stone-950 hover:bg-emerald-500 hover:text-black hover:cursor-pointer max-md:w-full rounded`}
                target="_blank"
              >
                View Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
