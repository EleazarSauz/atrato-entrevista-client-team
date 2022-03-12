import React from "react";
import BodyCard from "../molecules/BodyCard";
import FooterCard from "../molecules/FooterCard";
import HeaderCard from "../molecules/HeaderCard";

function Card({data}) {
  return (
    <div className="border-2 border-gray-200 bg-tertiary-100 border-opacity-60 rounded-lg overflow-hidden px-8 mb-12 w-full shadow-lg">
      <HeaderCard data={data}/>

      <BodyCard data={data}/>

      <FooterCard data={data}/>
    </div>
  );
}

export default Card;
