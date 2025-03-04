import React, { useState } from "react";
import { motion } from "motion/react";

const AboutMeSection = () => {
  return (
    <section id="about">
      <div className="flex justify-center">
        <h2 className="secondary-font text-5xl text-stone-50 my-2">About Me</h2>
      </div>
      <div>
        <p className="text-stone-50 w-1/2 mx-auto">
          Hi! I'm Andrew. I am a full-stack developer based in Granville, Ohio.
          I am currently in junior year of college, studying Computer Science at
          Denison University. When I am not typing away at projects, you can
          find me playing music. I have been playing saxophone for almost 10
          years now and have picked up guitar in the last year. I also like to
          think I have a green thumb, as I have a multitude of plant species in
          my dorm.
        </p>
        <p className="text-stone-50 w-1/2 mx-auto">
          I take pride in creating applications that are scalable, accessible,
          and user-friendly. I strive to make sites with refeshing UIs
        </p>
      </div>
    </section>
  );
};

export default AboutMeSection;
