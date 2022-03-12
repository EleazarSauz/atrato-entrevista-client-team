import React from "react";
import Card from "../organism/Card";

function ListUser({data}) {
  return (
    <div className="flex flex-wrap -m-4">
      {data.map((i, index) => <Card key={index} data={i}/>)}
    </div>
  );
}

export default ListUser;
