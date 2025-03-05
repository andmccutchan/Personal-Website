import React from "react";

const AboutMeSection = () => {
  return (
    <section id="about" className="py-12 px-4 my-30">
      {/* Section Title */}
      <div className="flex justify-center my-20">
        <h2 className="secondary-font text-5xl text-stone-50 relative">
          About Me
          <span className="absolute -left-1 w-full h-1 -bottom-2 rounded bg-emerald-400"></span>
        </h2>
      </div>
      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        {/* <div className="flex justify-center md:w-1/2">
          <img
            src="/Andrew-McCutchan-website-headshot.jpg"
            alt="Andrew McCutchan"
            className="w-80 h-80 md:w-96 md:h-96 object-cover rounded"
          />
        </div> */}
        {/* Text Section */}
        <div className=" text-stone-50 leading-relaxed text-2xl">
          <p>
            Hi! I'm Andrew, a full-stack developer based in Granville, Ohio. I'm
            currently in my junior year at Denison University, studying Computer
            Science. When I'm not typing away at projects, you can find me
            playing music. I've been playing the saxophone for almost 10 years
            and picked up the guitar last year. I also like to think I have a
            green thumb, as I have a variety of plant species in my dorm.
          </p>
          <p className="mt-4">
            I take pride in creating applications that are scalable, accessible,
            and user-friendly. I strive to make sites with refreshing UIs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
