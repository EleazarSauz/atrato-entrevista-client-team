import React, { useState } from "react";
import logo from "../../imgs/ColorLogo.png";
import { ButtonSecondary, ButtonTertiary } from "../atoms/Buttons";

function Filter({ getListUser, loading }) {
  const [statusFilter, setStatusFilter] = useState(null);
  const [userNameFilter, setUserNameFilter] = useState("");
  const [userIDFilter, setUserIDFilter] = useState("");

  const clearFilter = () => {
    setStatusFilter(null);
    setUserNameFilter("");
    setUserIDFilter("");
  };
  return (
    <div className="flex p-5 pt-3 flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
      <div className="flex flex-col items-center">
        <img src={logo} className="h-6" alt="atrato" />

        <h2 className="mt-3 text-2xl font-semibold text-primary-200 hidden md:block">
          Dashboard
        </h2>
      </div>

      <div className="flex flex-wrap items-center text-base justify-center">
        <div className="flex flex-col w-full">
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Nombre de usuario
            </label>
            <input
              onChange={({ target }) => setUserNameFilter(target.value)}
              value={userNameFilter}
              type="text"
              id="name"
              name="name"
              disabled={loading}
              className="w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="userID" className="leading-7 text-sm text-gray-600">
              ID
            </label>
            <input
              onChange={({ target }) => setUserIDFilter(target.value)}
              value={userIDFilter}
              type="text"
              id="userID"
              name="userID"
              disabled={loading}
              className="w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 ease-in-out"
            />
          </div>

          <div className="flex items-center justify-center">
            <div className="inline-flex" role="group">
              <button
                type="button"
                disabled={loading}
                className={`
                        rounded-l
                        px-6
                        py-2
                        border-2 border-primary-100
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        ease-in-out
                        ${
                          statusFilter === 0
                            ? "bg-primary-100 text-white"
                            : "text-primary-100"
                        }
                      `}
                onClick={() => setStatusFilter(0)}
              >
                Pendiente
              </button>
              <button
                type="button"
                disabled={loading}
                className={`
                        px-6
                        py-2
                        border-t-2 border-b-2 border-primary-100
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        ease-in-out
                        ${
                          statusFilter === 1
                            ? "bg-primary-100 text-white"
                            : "text-primary-100"
                        }
                      `}
                onClick={() => setStatusFilter(1)}
              >
                En Proceso
              </button>
              <button
                type="button"
                disabled={loading}
                className={`
                        rounded-r
                        px-6
                        py-2
                        border-2 border-primary-100
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        ease-in-out
                        ${
                          statusFilter === 2
                            ? "bg-primary-100 text-white"
                            : "text-primary-100"
                        }
                      `}
                onClick={() => setStatusFilter(2)}
              >
                Completado
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:flex-col mt-4 md:mt-0">
        <div className="text-center md:mb-4">
          <ButtonSecondary text="buscar" onClick={getListUser} disabled={loading}/>
        </div>

        <div className="text-center ml-4 md:ml-0">
          <ButtonTertiary text="limpiar" onClick={clearFilter} disabled={loading}/>
        </div>
      </div>
    </div>
  );
}

export default Filter;
