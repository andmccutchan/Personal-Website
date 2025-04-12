import React from "react";
import { motion } from "motion/react";
import ContactForm from "./ContactForm";
import Socials from "./Socials";

const ContactMeSection = () => {
  return (
    <section id="contactme">
      {/* Section Title */}
      <div className="flex justify-center my-20">
        <motion.h2
          className="secondary-font text-5xl text-stone-50 my-4 border-b-2 border-blue-400 0.5"
          initial={{ opacity: 0, x: 500 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>
      </div>
      <ContactForm />
      <Socials />
    </section>
  );
};

export default ContactMeSection;
