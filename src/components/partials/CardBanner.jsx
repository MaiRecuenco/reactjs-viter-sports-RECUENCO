import React from "react";

const CardBanner = ({ title, background, description }) => {
  return (
    <>
      <div
        className={`${background} bg-gradient-to-r text-white p-8 rounded-lg shadow-lg mb-8`}
      >
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl">{description}</p>
      </div>
    </>
  );
};

export default CardBanner;
