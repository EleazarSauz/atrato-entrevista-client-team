import React from "react";
import { ButtonPrimary } from "../atoms/Buttons";
import { H4 } from "../atoms/Text";

function HeaderCard({data}) {
    const { 
        name,
        secondName,
        paternalName,
        maternalName,
        id 
    } = data
  return (
    <div className="flex flex-col sm:flex-row mt-8">
      <div className="sm:w-4/5 text-center flex felx-col">
        <div className="w-16 h-16 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
          <i className="fas fa-user fa-3x"></i>
        </div>
        <div className="flex flex-col items-start text-center justify-center ml-4">
          <H4 styles="text-primary-200 font-semibold">{`${name} ${secondName} ${paternalName} ${maternalName}`}</H4>

          <p className="text-base text-gray-400">ID: {id}</p>
        </div>
      </div>

      <div className="sm:w-1/5 text-center">
        <ButtonPrimary />
      </div>
    </div>
  );
}

export default HeaderCard;
