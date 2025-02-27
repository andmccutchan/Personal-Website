import React from "react";
import { motion } from "motion/react";

const ContactMeSection = () => {
  return (
    <div>
      <div className="flex">
        <motion.h2
          className="secondary-font text-5xl text-stone-50 my-2 hover:cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          Contact Me
        </motion.h2>
      </div>
    </div>
  );
};

export default ContactMeSection;
