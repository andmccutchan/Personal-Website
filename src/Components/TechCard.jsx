import React from "react";

const TechCard = ({ name, imgUrl, bio }) => {
  return (
    <>
      <div className="flex bg-gray-600 rounded-2xl w-full p-10 text-stone-50">
        <img src={imgUrl} alt={name} className="me-2" />
        <div className="flex flex-col">
          <h3 className="text-2xl">{name}</h3>
          <p>{bio}</p>
        </div>
      </div>
    </>
  );
};

export default TechCard;
