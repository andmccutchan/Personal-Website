import React from "react";
import ProjectCard from "../Components/ProjectCard";

function Home() {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 w-5/6">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
}

export default Home;
