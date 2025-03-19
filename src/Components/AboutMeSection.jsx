import React from "react";

const AboutMeSection = () => {
  return (
    <section id="aboutme" className="py-12 px-4 my-12">
      {/* Section Title */}
      <div className="flex justify-center my-20">
        <h2 className="secondary-font text-5xl text-stone-50 border-b-2 border-emerald-400 0.5">
          About Me
        </h2>
      </div>

      {/* Content Wrapper */}
      <div className="flex max-xl:flex-col items-center">
        {/* Image Section */}
        {/* Uncomment when needed */}

        {/* Text Section */}
        <div className="text-stone-50 text-2xl w-4/5">
          <p>
            Hi! I'm Andrew, a full-stack developer based in Granville, Ohio. I'm
            currently a junior at Denison University, studying Computer Science.
            In my work, I strive to build applications that are accessible,
            scalable, and clean. I often use{" "}
            <span className="text-emerald-400 font-bold">React</span> and{" "}
            <span className="text-emerald-400 font-bold">Tailwind</span> for
            frontend development, along with{" "}
            <span className="text-emerald-400 font-bold">Express</span>,{" "}
            <span className="text-emerald-400 font-bold">MongoDB</span>, and{" "}
            <span className="text-emerald-400 font-bold">Node.js</span> for the
            backend. I'm always eager to explore new technologies and make
            continuous efforts to expand my knowledge.
          </p>

          <p className="mt-4">
            When I'm not working on projects, you can find me playing music,
            getting outside with friends, or tending to my many plants. I've
            been playing the saxophone for almost 10 years and recently picked
            up the guitar. I also keep a variety of plants in my dorm! If you
            ever want to talk about music or plants, or just chat, feel free to
            reach out.
          </p>
        </div>
        <div className="flex justify-center md:w-1/2">
          <img
            src="/Andrew-McCutchan-website-headshot.jpg"
            alt="Andrew McCutchan"
            className="w-96 h-96 ms-10 object-cover rounded border"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
