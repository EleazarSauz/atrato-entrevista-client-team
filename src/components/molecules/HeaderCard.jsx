import React from "react";

function HeaderCard() {
  return (
    <div className="flex flex-col sm:flex-row mt-8">
      <div className="sm:w-4/5 text-center sm:pr-8 sm:py-8 flex felx-col">
        <div className="w-15 h-15 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-12 h-12"
            viewBox="0 0 24 24"
          >
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx={12} cy={7} r={4} />
          </svg>
        </div>
        <div className="flex flex-col items-start text-center justify-center ml-4">
          <h2 className="font-medium title-font text-gray-900 text-lg">
            Juan Manuel Ramón Martinez
          </h2>
          <p className="text-base">ID: 1234</p>
        </div>
      </div>

      <div className="sm:w-1/5 text-center">
        <div classname="rounded-md shadow">
          <a
            href="#"
            classname="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            ESTATUS
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeaderCard;
