import React from "react";

const TechCard = ({ name, imgUrl, bio }) => {
  return (
    <>
      <div className="flex border-stone-50 border-2 rounded w-full h-20 p-4 text-stone-50">
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
