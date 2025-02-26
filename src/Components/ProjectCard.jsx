import React from "react";

const ProjectCard = () => {
  return (
    <>
      <div className="border border-gray-50 p-3">
        <h3 className="text-gray-50 text-center text-4xl">Project Title</h3>
        <img src="https://placehold.co/600x400" alt="" />
        <p className="text-gray-50">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
          quidem, dicta ipsum aspernatur hic vel officia dolor veniam omnis,
          fugit eveniet id sunt quisquam fuga tempore dignissimos quis numquam
          cupiditate!
        </p>
        <button className="w-1/2 border border-gray-50 text-gray-50 hover:bg-gray-50">
          View Demo
        </button>
        <button className="w-1/2 border border-gray-50 text-gray-50 hover:bg-gray-50">
          View Source
        </button>
      </div>
    </>
  );
};

export default ProjectCard;
