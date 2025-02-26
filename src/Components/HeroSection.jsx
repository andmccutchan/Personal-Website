import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <div className="flex w-full justify-center" id="home">
      <div className="flex flex-col">
        <h1 className="text-6xl font-bold text-stone-50">Andrew McCutchan</h1>
        <div className="text-3xl text-emerald-400">
          <TypeAnimation
            sequence={[
              "I am a full-stack developer",
              1000,
              "I am a student",
              1000,
              "I am a musician",
              1000,
              "I am a plant-lover",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>
      </div>
      {/* <img
        src="/Andrew-McCutchan-website-headshot.jpg"
        alt="Andrew McCutchan"
        width="400px"
        height="400px"
      /> */}
    </div>
  );
};

export default HeroSection;
