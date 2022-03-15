import React from "react";
import Card from "../organism/Card";

function ListUser({data, update}) {
  return (
    <div className="flex flex-wrap -m-4 max-w-3xl mx-auto">
      {
        (data.length > 0) ?
        data.map((i, index) => <Card key={index} data={i} update={update}/>)
        :
        <h2 className="mt-3 text-2xl font-semibold text-primary-200 hidden text-center">
          Dashboard
        </h2>
      }
    </div>
  );
}

export default ListUser;
