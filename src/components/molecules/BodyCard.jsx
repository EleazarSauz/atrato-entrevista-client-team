import React from "react";

function BodyCard({ data }) {
  const { email, birthday, phone, analyst, card, name } = data;

  return (
    <div className="sm:pl-12 flex flex-col sm:flex-row">
      <div className="sm:w-3/5 sm:pr-8 sm:py-8">
        <div className="flex flex-col items-start text-center justify-center">
          <p className="text-gray-400 text-sm uppercase">mail</p>
          <p className="text-sm">{email}</p>
        </div>

        <div className="flex flex-col items-start text-center justify-center">
          <p className="mt-4 text-gray-400 text-sm uppercase">
            fecha de nacimiento
          </p>
          <p className="text-sm">{new Date(birthday).toLocaleDateString() }</p>
        </div>

        <div className="flex flex-col items-start text-center justify-center">
          <p className="mt-4 text-gray-400 text-sm uppercase">teléfono</p>
          <p className="text-sm">{phone}</p>
        </div>

        <div className="flex flex-col items-start text-center justify-center">
          <p className="mt-4 text-gray-400 text-sm uppercase">
            analista asignado
          </p>
          <p className="text-sm">{analyst}</p>
        </div>
      </div>

      <div className="sm:w-2/5 sm:pl-8 sm:py-8 sm:border-l-2 border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left hidden sm:block">
        <div className="bg-tertiary-200 p-4">
          <div className="flex flex-col items-start text-center justify-center">
            <p className="text-gray-400 text-sm uppercase">full name</p>
            <p className="text-sm">{name}</p>
          </div>

          <div className="flex flex-col items-start text-center justify-center">
            <p className="mt-4 text-gray-400 text-sm uppercase">
              card number
            </p>
            <p className="text-sm">{card?.cardNumber}</p>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col items-start text-center justify-center">
              <p className="mt-4 text-gray-400 text-sm uppercase">cvv</p>
              <p className="text-sm">{card?.cvv}</p>
            </div>

            <div className="flex flex-col items-start text-center justify-center">
              <p className="mt-4 text-gray-400 text-sm uppercase">pin</p>
              <p className="text-sm">{card?.pin}</p>
            </div>

            <div className="flex flex-col items-start text-center justify-center">
              <p className="mt-4 text-gray-400 text-sm uppercase">exp</p>
              <p className="text-sm">
                  {new Date(card?.date).getMonth()}/{new Date(card?.date).getUTCFullYear()} 
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyCard;
