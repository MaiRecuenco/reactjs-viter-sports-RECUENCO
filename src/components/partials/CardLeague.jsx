import React from "react";

const CardLeague = ({title, country, titleColor}) => {
  return (
    <>
      <div className="bg-white p-4 rounded shadow text-center">
        <div className={`text-xl font-bold ${titleColor}`}>{title}</div>
        <div className="text-sm text-gray-600">{country}</div>
      </div>
    </>
  );
};

export default CardLeague;
