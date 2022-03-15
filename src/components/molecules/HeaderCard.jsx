import React, { useState } from "react";
import { ButtonPrimary } from "../atoms/Buttons";
import { H4 } from "../atoms/Text";

function HeaderCard({ data, update, setModalActive }) {
  const [dropStatus, setDropStatus] = useState(false);
  const [loading, setLoading] = useState(false)
  const { name, secondName, paternalName, maternalName, _id, status } = data;

  const updateStatus = async (status) => {
    setLoading(true)
    await update(status)
    setLoading(false)
  }

  return (
    <div className="flex flex-col sm:flex-row mt-8 mb-6 sm:mb-0">
      <div className="sm:w-4/5 text-center flex felx-col justify-between sm:justify-start">
        <div className="w-16 h-16 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 hidden sm:block">
          <i className="fas fa-user fa-3x"></i>
        </div>
        <div className="flex flex-col items-start justify-center sm:ml-4">
          <H4 styles="text-primary-200 font-semibold text-left">
            {paternalName
              ? `${name} ${secondName} ${paternalName} ${maternalName}`
              : name}
          </H4>

          <p className="text-base text-gray-400">ID: {_id}</p>
        </div>

        <div onClick={() => setModalActive(true)} className="text-center sm:hidden text-gray-400">
          <i className="fas fa-pen ml-2"></i>
        </div>
      </div>

      <div className="sm:w-1/5 text-center hidden sm:block">
        <ButtonPrimary onClick={() => setDropStatus(!dropStatus)} />

        <div
          id="dropdown"
          className={`${
            !dropStatus && "hidden"
          } z-10 w-36 text-base list-none bg-white rounded shadow absolute`}
        >
          {
            loading ? 
            <div className="py-12 text-primary-100">
              <i className="fas fa-spinner fa-xs fa-spin fa-2x" />
            </div>
            : 
            <ul className="py-0">
              <li
                  onClick={() => updateStatus(1)}
                  className={`block py-2 px-4 text-sm ${status === 1 ? "bg-primary-100 text-white" : "text-primary-100"} hover:bg-primary-100 hover:text-white uppercase cursor-pointer rounded-md`}
                >
                  Pendiente
              </li>
              <li
                  onClick={() => updateStatus(2)}
                  className={`block py-2 px-4 text-sm ${status === 2 ? "bg-primary-100 text-white" : "text-primary-100"} hover:bg-primary-100 hover:text-white uppercase cursor-pointer rounded-md`}
                >
                  En Proceso
              </li>
              <li
                  onClick={() => updateStatus(3)}
                  className={`block py-2 px-4 text-sm ${status === 3 ? "bg-primary-100 text-white" : "text-primary-100"} hover:bg-primary-100 hover:text-white uppercase cursor-pointer rounded-md`}
                >
                  Completado
              </li>
            </ul>
          }
        </div>
      </div>
    </div>
  );
}

export default HeaderCard;
