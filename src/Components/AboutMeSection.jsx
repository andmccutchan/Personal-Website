import React from "react";
import { motion } from "motion/react";

const AboutMeSection = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e7e5e4"
          fill-opacity="1"
          d="M0,192L40,181.3C80,171,160,149,240,165.3C320,181,400,235,480,240C560,245,640,203,720,202.7C800,203,880,245,960,240C1040,235,1120,181,1200,154.7C1280,128,1360,128,1400,128L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      <section
        id="aboutme"
        className="py-5 xl:px-50 lg:px-25 md:px-10 sm:px-10 bg-stone-200"
      >
        {/* Section Title */}
        <div className="flex justify-center my-20">
          <motion.h2
            className="secondary-font text-5xl text-stone-950 border-b-2 border-blue-400"
            initial={{ opacity: 0, x: -500 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
        </div>

        {/* Content Wrapper */}
        <div className="flex max-xl:flex-col">
          {/* Image Section */}
          {/* Uncomment when needed */}

          {/* Text Section */}
          <div className="text-stone-950 text-2xl">
            <p>
              Hi! I'm Andrew, a full-stack developer based in Granville, Ohio.
              I'm currently a junior at Denison University, studying Computer
              Science. In my work, I strive to build applications that are
              accessible, scalable, and clean. I often use{" "}
              <span className="text-blue-400 font-bold">React</span> and{" "}
              <span className="text-blue-400 font-bold">Tailwind</span> for
              frontend development, along with{" "}
              <span className="text-blue-400 font-bold">Express</span>,{" "}
              <span className="text-blue-400 font-bold">MongoDB</span>, and{" "}
              <span className="text-blue-400 font-bold">Node.js</span> for the
              backend. I'm always eager to explore new technologies and make
              continuous efforts to expand my knowledge.
            </p>

            <p className="mt-4">
              When I'm not working on projects, you can find me playing music,
              getting outside with friends, or tending to my many plants. I've
              been playing the saxophone for almost 10 years and recently picked
              up the guitar. I also keep a variety of plants in my dorm! If you
              ever want to talk about music or plants, or just chat, feel free
              to reach out.
            </p>
          </div>
          {/* <div className="flex justify-center md:w-1/2">
          <img
            src="/Andrew-McCutchan-website-headshot.jpg"
            alt="Andrew McCutchan"
            className="w-96 h-96 ms-10 object-cover rounded border"
          />
        </div> */}
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e7e5e4"
          fill-opacity="1"
          d="M0,192L34.3,176C68.6,160,137,128,206,117.3C274.3,107,343,117,411,133.3C480,149,549,171,617,165.3C685.7,160,754,128,823,128C891.4,128,960,160,1029,154.7C1097.1,149,1166,107,1234,112C1302.9,117,1371,171,1406,197.3L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default AboutMeSection;
