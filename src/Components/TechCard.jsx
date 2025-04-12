import React from "react";

const TechCard = ({ name, imgUrl }) => {
  return (
    <>
      <div className="flex justify-center items-center border border-gray-600 bg-blue-950 rounded-[8px] w-full p-7 text-stone-50 max-lg:p-4">
        <img src={imgUrl} alt={`${name} logo`} />
      </div>
    </>
  );
};

export default TechCard;
