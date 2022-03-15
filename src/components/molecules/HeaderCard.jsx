import React from "react";
import { ButtonPrimary } from "../atoms/Buttons";
import { H4 } from "../atoms/Text";

function HeaderCard({data}) {
    const { 
        name,
        secondName,
        paternalName,
        maternalName,
        _id 
    } = data
  return (
    <div className="flex flex-col sm:flex-row mt-8 mb-6 sm:mb-0">
      <div className="sm:w-4/5 text-center flex felx-col justify-between sm:justify-start">
        <div className="w-16 h-16 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 hidden sm:block">
          <i className="fas fa-user fa-3x"></i>
        </div>
        <div className="flex flex-col items-start justify-center sm:ml-4">
          <H4 styles="text-primary-200 font-semibold text-left">{ paternalName ? `${name} ${secondName} ${paternalName} ${maternalName}` : name}</H4>

          <p className="text-base text-gray-400">ID: {_id}</p>
        </div>

        <div className="text-center sm:hidden text-gray-400">
            <i className="fas fa-pen ml-2"></i>
        </div>
      </div>

      <div className="sm:w-1/5 text-center hidden sm:block">
        <ButtonPrimary />
      </div>
    </div>
  );
}

export default HeaderCard;
