import React, { useState } from "react";

const ProjectCard = ({ title, image, description, githubLink, liveDemo }) => {
  const [viewDetails, setViewDetails] = useState(false);
  const handleOpen = () => {};

  return (
    <div className="border border-gray-600 h-auto rounded-[8px] w-3/4 mx-auto bg-gray-800">
      <div className="flex w-full p-3 justify-between">
        <h3 className="text-gray-400 text-4xl">{title}</h3>
        <a
          className="flex justify-center items-center px-6 rounded border-2 border-emerald-600 bg-emerald-400 hover:bg-emerald-500"
          href="/"
        >
          View Details
        </a>
      </div>
      <img
        src={image}
        alt={`${title} image`}
        className="grayscale transition-all duration-300 hover:grayscale-0"
      />
    </div>
    // <section className="my-6 bg-gray-700 p-6 rounded-2xl">
    //   <div className="flex flex-col">
    //     <h3 className="text-stone-50 text-4xl mb-6 secondary-font underline max-lg:text-center">
    //       {title}
    //     </h3>

    //     <div className="flex flex-col sm:flex-row sm:gap-6">
    //       {/* Project Image */}
    //       <div className="flex items-center w-full sm:w-1/2 mb-4 sm:mb-0 max-lg:hidden">
    //         <img
    //           src={image}
    //           alt={`${title} project screenshot`}
    //           className="grayscale transition-all duration-300 ease-in-out hover:grayscale-0 w-full h-96 object-cover rounded-2xl "
    //           aria-describedby={`description-${title}`}
    //         />
    //       </div>

    //       {/* Project Description and Links */}
    //       <div className="flex flex-col w-1/2 max-lg:w-full justify-between">
    //         <div id={`description-${title}`} className="text-stone-50 mb-4">
    //           {description}
    //         </div>

    //         <div className="flex flex-col sm:flex-row gap-2">
    //           {/* Live Demo Button */}
    //           {liveDemo && (
    //             <a
    //               href={liveDemo}
    //               className="flex justify-center items-center text-center w-full sm:w-1/2 bg-emerald-400 text-stone-950 hover:bg-emerald-500 p-2 rounded"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               aria-label={`View live demo of ${title}`}
    //             >
    //               View Demo
    //             </a>
    //           )}

    //           {/* GitHub Link Button */}
    //           <a
    //             href={githubLink}
    //             className={`${
    //               liveDemo ? "sm:w-1/2 sm:ml-2" : "w-full"
    //             } flex justify-center items-center p-2 text-center bg-emerald-400 text-stone-950 hover:bg-emerald-500 hover:text-black rounded`}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             aria-label={`View source code for ${title}`}
    //           >
    //             View Source
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default ProjectCard;
