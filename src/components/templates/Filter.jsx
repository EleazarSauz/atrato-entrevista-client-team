import React from "react";
import logo from "../../imgs/ColorLogo.png";
import { ButtonSecondary, ButtonTertiary } from "../atoms/Buttons";

function Filter({
  filterRules,
  loading,
  filterText,
  setFilterText,
  filterType,
  setFilterType,
  filterStatus,
  setFilterStatus,
  clearFilter,
}) {
  return (
    <div className="flex p-5 pt-3 flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-2 md:mb-0">
        <img src={logo} className="h-6" alt="atrato" />

        <h2 className="mt-3 text-2xl font-semibold text-primary-200 hidden md:block">
          Dashboard
        </h2>
      </div>

      <div className="flex flex-wrap items-center text-base justify-center">
        <div className="flex flex-col w-full">
          <div className="relative mb-6">
            <div className="flex items-center justify-center w-full">
              <button
                type="button"
                disabled={loading}
                className={`
                        rounded-tl
                        px-6
                        py-2
                        border-2 border-primary-100
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        ease-in-out
                        w-1/2
                        ${
                          filterType === "name"
                            ? "bg-primary-100 text-white"
                            : "text-primary-100"
                        }
                      `}
                onClick={() => setFilterType("name")}
              >
                Nombre Usuario
              </button>

              <button
                type="button"
                disabled={loading}
                className={`
                        rounded-tr
                        px-6
                        py-2
                        border-2 border-l-0 border-primary-100
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        ease-in-out
                        w-1/2
                        ${
                          filterType === "id"
                            ? "bg-primary-100 text-white"
                            : "text-primary-100"
                        }
                      `}
                onClick={() => setFilterType("id")}
              >
                ID usuario
              </button>
            </div>
            <input
              onChange={({ target }) => setFilterText(target.value)}
              value={filterText}
              type="text"
              id="name"
              name="name"
              disabled={loading}
              className="w-full bg-white rounded-b border-2 border-t-0 border-primary-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 ease-in-out"
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
                          filterStatus === 1
                            ? "bg-primary-100 text-white"
                            : "text-primary-100"
                        }
                      `}
                onClick={() => setFilterStatus(1)}
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
                          filterStatus === 2
                            ? "bg-primary-100 text-white"
                            : "text-primary-100"
                        }
                      `}
                onClick={() => setFilterStatus(2)}
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
                          filterStatus === 3
                            ? "bg-primary-100 text-white"
                            : "text-primary-100"
                        }
                      `}
                onClick={() => setFilterStatus(3)}
              >
                Completado
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:flex-col mt-4 md:mt-0">
        <div className="text-center md:mb-4">
          <ButtonSecondary
            text="filtrar"
            icon="fas fa-filter"
            onClick={filterRules}
            disabled={loading}
          />
        </div>

        <div className="text-center ml-4 md:ml-0">
          <ButtonTertiary
            text="limpiar"
            icon="fas fa-broom"
            onClick={clearFilter}
            disabled={loading}
          />
        </div>
      </div>
    </div>
  );
}

export default Filter;
