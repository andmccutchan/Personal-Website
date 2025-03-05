import React from "react";
import { motion } from "motion/react";
import ContactForm from "./ContactForm";
import Socials from "./Socials";

const ContactMeSection = () => {
  return (
    <section id="contactme">
      {/* Section Title */}
      <div className="flex justify-center my-20">
        <h2 className="secondary-font text-5xl text-stone-50 my-4 relative">
          Contact Me
          <span className="absolute -left-1 w-full h-1 -bottom-2 rounded bg-emerald-400"></span>
        </h2>
      </div>
      <ContactForm />
      <Socials />
    </section>
  );
};

export default ContactMeSection;
