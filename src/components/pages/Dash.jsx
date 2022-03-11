import React from "react";
import ListUser from "../templates/ListUser";

function Dash() {
  return (
    <>
      <div className="flex h-screen bg-gray-50">
        <div className="flex flex-col flex-1 w-full">
          <header className="z-10 py-4 bg-white shadow-md fixed w-full">
            <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600">
              {/* Search input here*/}
            </div>
          </header>

          <main className="h-full">
            <div className="container px-6 mx-auto grid pt-12">
              <h2 className="my-6 text-2xl font-semibold text-gray-700 ">
                Dashboard
              </h2>

              <ListUser />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Dash;
