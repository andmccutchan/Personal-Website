import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section
      className="flex w-full min-h-screen -mt-16 justify-center items-center"
      id="home"
    >
      <div className="flex flex-col justify-center">
        <div className="flex flex-col mt-5">
          <h1 className="text-9xl font-bold text-stone-50 max-lg:text-8xl max-md:text-7xl max-sm:text-5xl">
            Andrew McCutchan
          </h1>
          <div className="text-4xl text-emerald-400 secondary-font">
            <TypeAnimation
              sequence={[
                "full-stack developer",
                3000,
                "student",
                3000,
                "musician",
                3000,
                "plant-enthusiast",
                3000,
              ]}
              speed={30}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
