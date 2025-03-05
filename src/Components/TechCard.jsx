import React from "react";

const TechCard = ({ name, imgUrl, bio }) => {
  return (
    <>
      <div className="flex justify-center items-center bg-gray-700 rounded-2xl w-full p-7 text-stone-50 max-lg:p-4">
        <img src={imgUrl} alt="Logo" />
      </div>
    </>
  );
};

export default TechCard;
