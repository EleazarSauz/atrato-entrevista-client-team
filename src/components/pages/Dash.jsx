import React from "react";
import ListUser from "../templates/ListUser";
import logo from "../../imgs/ColorLogo.png";
import { ButtonSecondary, ButtonTertiary } from "../atoms/Buttons";

function Dash() {
  return (
    <>
      <div className="flex flex-col flex-1 w-full">
        <header className="z-10 bg-white shadow-md fixed w-full">
          <div className="flex p-5 pt-3 flex-col md:flex-row items-center justify-between ">
            <div className="flex flex-col items-center">
              <img src={logo} className="h-6" alt="atrato" />

              <h2 className="mt-3 text-2xl font-semibold text-primary-200 hidden md:block">
                Dashboard
              </h2>
            </div>

            <div className="flex flex-wrap items-center text-base justify-center">
              <div className="flex flex-col w-full">
                <div className="relative mb-4">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Nombre de usuario
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    ID
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 ease-in-out"
                  />
                </div>

                <div className="flex items-center justify-center">
                  <div className="inline-flex" role="group">
                    <button
                      type="button"
                      className={`
                        rounded-l
                        px-6
                        py-2
                        border-2 border-primary-100
                        text-blue-600
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        ease-in-out
                      `}
                    >
                      Pendiente
                    </button>
                    <button
                      type="button"
                      className={`
                        px-6
                        py-2
                        border-t-2 border-b-2 border-primary-100
                        text-blue-600
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        ease-in-out
                      `}
                    >
                      En Proceso
                    </button>
                    <button
                      type="button"
                      className={`
                        rounded-r
                        px-6
                        py-2
                        border-2 border-primary-100
                        text-blue-600
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        ease-in-out
                      `}
                    >
                      Completado
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="text-center mb-4">
                <ButtonSecondary />
              </div>

              <div className="text-center">
                <ButtonTertiary />
              </div>
            </div>
          </div>
        </header>

        <main className="h-full">
          <div className="container px-6 mx-auto grid pt-72">
            

            <ListUser />
          </div>
        </main>
      </div>
    </>
  );
}

export default Dash;
