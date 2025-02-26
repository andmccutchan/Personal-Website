import React from "react";

const HeroSection = () => {
  return (
    <div className="flex w-full">
      <h1 className="text-6xl font-bold text-stone-50">Andrew McCutchan</h1>
      <div className="border rounded-full overflow-hidden">
        <img
          src="/Andrew-McCutchan-website-headshot.jpg"
          alt="Andrew McCutchan"
          width="400px"
          height="400px"
        />
      </div>
    </div>
  );
};

export default HeroSection;
