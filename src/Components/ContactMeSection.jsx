import React from "react";
import { motion } from "motion/react";
import ContactForm from "./ContactForm";
import Socials from "./Socials";

const ContactMeSection = () => {
  return (
    <section>
      <div className="flex justify-center">
        <h2 className="secondary-font text-5xl text-stone-50 my-2 hover:cursor-pointer">
          Contact Me
        </h2>
      </div>
      <ContactForm />
      <Socials />
    </section>
  );
};

export default ContactMeSection;
