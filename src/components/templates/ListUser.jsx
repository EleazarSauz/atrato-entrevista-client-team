import React from "react";
import Card from "../organism/Card";

function ListUser({data, update}) {
  return (
    <div className="flex flex-wrap -m-4 max-w-3xl mx-auto">
      {data.map((i, index) => <Card key={index} data={i} update={update}/>)}
    </div>
  );
}

export default ListUser;
