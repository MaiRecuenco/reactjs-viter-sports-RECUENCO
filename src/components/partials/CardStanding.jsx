import React from "react";

const CardStanding = ({teamName, win, lose, pct}) => {
  return (
    <>
      <tr className="border-b">
        <td className="py-2 px-4">{teamName}</td>
        <td className="py-2 px-4 text-center">{win}</td>
        <td className="py-2 px-4 text-center">{lose}</td>
        <td className="py-2 px-4 text-center">{pct}</td>
      </tr>
    </>
  );
};

export default CardStanding;
