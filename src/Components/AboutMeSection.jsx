import React, { useState } from "react";
import { motion } from "motion/react";

const AboutMeSection = () => {
  const [openInfo, setOpenInfo] = useState(false);
  return (
    <div>
      <div className="flex">
        <motion.h2
          className="secondary-font text-5xl text-stone-50 my-2 hover:cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          About Me
        </motion.h2>
        {/* <img src="/arrow.svg" alt="arrow" width="24" height="24" /> */}
      </div>
      {/*
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
      </div>*/}
    </div>
  );
};

export default AboutMeSection;
