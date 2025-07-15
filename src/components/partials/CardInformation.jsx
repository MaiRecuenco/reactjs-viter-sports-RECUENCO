import React from "react";
import { Link } from "react-router-dom";

const CardInformation = ({
  title,
  description,
  btnBgColor,
  btnBgColorHover,
  to,
  titleColor,
}) => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
        <h2 className={`text-2xl font-bold mb-3 ${titleColor}`}>{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <Link
          to={to}
          className={`inline-block ${btnBgColor} text-white px-4 py-2 rounded ${btnBgColorHover} transition duration-300`}
        >
          Read More
        </Link>
      </div>
    </>
  );
};

export default CardInformation;
