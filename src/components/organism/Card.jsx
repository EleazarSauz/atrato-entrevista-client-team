import React from "react";
import BodyCard from "../molecules/BodyCard";
import FooterCard from "../molecules/FooterCard";
import HeaderCard from "../molecules/HeaderCard";

function Card() {
  return (
    <div className="border-2 border-gray-200 bg-gray-100 border-opacity-60 rounded-lg overflow-hidden px-8 my-4 w-full">
      <HeaderCard/>

      <BodyCard/>

      <FooterCard/>
    </div>
  );
}

export default Card;
