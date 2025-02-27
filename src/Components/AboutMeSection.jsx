import React from "react";
import { motion } from "motion/react";

const AboutMeSection = () => {
  return (
    <div>
      <h2 className="secondary-font text-5xl text-stone-50 my-2">
        About Me{" "}
        <motion.span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </motion.span>
      </h2>
      <div className="flex flex-col w-1/2">
        <p className="text-stone-50 ">
          I'm a junior at Denison University studying computer science, with a
          focus on software development. I specialize in building scalable,
          responsive, and accessible websites that push the boundaries of modern
          web development.
        </p>
        <p className="text-stone-50">
          Outside of school and coding, I'm an avid musician and a plant
          enthusiast. I play in a band on campus, and we've performed everywhere
          from local venues to stages in New York.
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default AboutMeSection;
