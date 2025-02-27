import React from "react";
import Marquee from "react-fast-marquee";

const TechStackSection = () => {
  return (
    <div className="w-full secondary-font text-5xl text-stone-50">
      <h2>Tech Stack</h2>
      <div className="w-3/4 mx-auto">
        <Marquee gradient gradientColor="#121212">
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
        </Marquee>
      </div>
    </div>
  );
};

export default TechStackSection;
