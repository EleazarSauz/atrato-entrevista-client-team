import React, { useState } from "react";
import BodyCard from "../molecules/BodyCard";
import FooterCard from "../molecules/FooterCard";
import HeaderCard from "../molecules/HeaderCard";
import Modal from './Modal'


function Card({data, update}) {
  const [modalUser, setModalUser] = useState(false)
  const BASE_URL = "http://localhost:5000/"

  const deleteUser = async (id) => {
    const req = await fetch(BASE_URL + "user/" + id, {
      method: "DELETE",
    });
    await req.json()
    update()
  }

  const updateStatus = async (status) => {
    const req = await fetch(BASE_URL + "user/" + data._id, {
      method: "PUT",
      body: JSON.stringify({...data, status}),
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    });
    await req.json()
    update()
  }

  const updateUserData = async (dataForm) => {
    const req = await fetch(BASE_URL + "user/" + data._id, {
      method: "PUT",
      body: JSON.stringify({...data, ...dataForm}),
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    });
    await req.json()
    update()
  }

  return (
    <div className="border-2 border-gray-200 bg-tertiary-100 border-opacity-60 rounded-lg overflow-hidden px-8 mb-12 w-full shadow-lg">
      <HeaderCard data={data} update={updateStatus}/>

      <BodyCard data={data}/>

      <FooterCard data={data} deleteUser={deleteUser} modalActive={modalUser} setModalActive={setModalUser} />

      <Modal defaultValues={data} modalActive={modalUser} setModalActive={setModalUser} submit={updateUserData} />
    </div>
  );
}

export default Card;
