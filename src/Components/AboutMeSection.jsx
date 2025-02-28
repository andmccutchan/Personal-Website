import React, { useState } from "react";
import { motion } from "motion/react";

const AboutMeSection = () => {
  const [openInfo, setOpenInfo] = useState(false);
  return (
    <section>
      <div className="flex">
        <motion.h2
          className="secondary-font text-5xl text-stone-50 my-2 hover:cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          About Me
        </motion.h2>
      </div>
    </section>
  );
};

export default AboutMeSection;
