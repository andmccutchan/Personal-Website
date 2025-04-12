import React from "react";
import TechCard from "./TechCard";
import { motion } from "motion/react";

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
        <motion.h2
          className="secondary-font text-5xl text-stone-50 my-4 border-b-2 border-blue-400 0.5"
          initial={{ opacity: 0, x: -500 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Technologies
        </motion.h2>
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
