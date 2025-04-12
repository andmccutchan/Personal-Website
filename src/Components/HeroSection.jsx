import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section
      className="flex w-full min-h-screen -mt-16 justify-center items-center"
      id="home"
    >
      <div className="flex justify-between mx-20 max-xl:mx-10">
        <div className="flex flex-col justify-center">
          <h1 className="text-9xl font-bold text-stone-50 inline-block leading-none p-0 m-0 max-lg:text-7xl max-md:text-6xl max-sm:text-5xl">
            Andrew McCutchan
          </h1>
          <div className="text-4xl text-blue-400 secondary-font">
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
        <img
          src="/Andrew-McCutchan-website-headshot.jpg"
          alt="Andrew McCutchan"
          className="w-96 h-96 max-xl:w-72 max-xl:h-72 max-lg:hidden ms-10 object-cover rounded-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;
