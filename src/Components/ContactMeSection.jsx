import React from "react";
import { motion } from "motion/react";
import ContactForm from "./ContactForm";

const ContactMeSection = () => {
  return (
    <section>
      <div className="flex">
        <motion.h2
          className="secondary-font text-5xl text-stone-50 my-2 hover:cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          Contact Me
        </motion.h2>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactMeSection;
