import React from "react";

function BodyCard() {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="sm:w-2/3 text-center sm:pr-8 sm:py-8">
        <div className="flex flex-col items-center text-center justify-center">
          <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
            Juan Manuel Ramón Martinez
          </h2>
          <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
          <p className="text-base">
            Data....
          </p>
        </div>
      </div>

      <div className="sm:w-1/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
        <p className="leading-relaxed text-lg mb-4 w-full">
          More data ...
        </p>
      </div>
    </div>
  );
}

export default BodyCard;
