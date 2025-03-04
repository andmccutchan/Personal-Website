import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "motion/react";
import TechCard from "./TechCard";

const TechStackSection = () => {
  const technologies = [
    {
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
    {
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    },
    {
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    },
  ];

  return (
    <section id="tech">
      <div className="w-full">
        <div className="flex justify-center">
          <h2 className="secondary-font text-5xl text-stone-50 my-2 hover:cursor-pointer">
            Technologies
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-4 w-3/4 mx-auto">
          {technologies.map((tech, element) => (
            <TechCard
              key={element}
              name={tech.name}
              imgUrl={tech.imgUrl}
              bio={tech.bio}
            />
          ))}
          {/* <Marquee gradient gradientColor="#121212">
            <div className="flex space-x-15 ps-15">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                height="60"
                width="60"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                height="60"
                width="60"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                width="60"
                height="60"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                width="60"
                height="60"
              />
              <img
                className="bg-stone-50 border rounded p-1"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                width="60"
                height="60"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                width="60"
                height="60"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                width="60"
                height="60"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                width="60"
                height="60"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                width="60"
                height="60"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                width="60"
                height="60"
              />
            </div>
          </Marquee> */}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
