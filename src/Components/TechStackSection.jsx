import React from "react";
import TechCard from "./TechCard";

const TechStackSection = () => {
  const technologies = [
    {
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      name: "React",
    },
    {
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      name: "Javascript",
    },
    {
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      name: "MongoDB",
    },
    {
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      name: "Python",
    },
    {
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      name: "Node.js",
    },
    {
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      name: "Tailwind",
    },
    {
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      name: "Express.js",
    },
    {
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
      name: "C++",
    },
  ];

  return (
    <section className="my-30" id="technologies">
      <div className="flex justify-center my-20">
        <h2 className="secondary-font text-5xl text-stone-50 my-4 relative">
          Technologies
          <span className="absolute -left-1 w-full h-1 -bottom-3.5 rounded bg-emerald-400"></span>
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-4 w-1/2 mx-auto max-lg:grid-cols-2">
        {technologies.map((tech, index) => (
          <TechCard key={index} imgUrl={tech.imgUrl} name={tech.name} />
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
