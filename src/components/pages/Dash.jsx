import React, { useEffect, useState } from "react";
import Modal from "../organism/Modal";
import Filter from "../templates/Filter";
import ListUser from "../templates/ListUser";
import Loading from "../templates/Loading";

function Dash() {
  const [listUser, setListUser] = useState([
    {
      id: "45170",
      name: "Juan",
      secondName: "Manuel",
      paternalName: "Ramón",
      maternalName: "Martinez",
      username: "Bret",
      email: "juanitobanana@gmail.com",
      phone: "1-770-736-8031 x56442",
      birthday: "01/junio/2000",
      status: "P",
      analyst: "Jesús León",
      card: {
        type: "Visa",
        date: "2024-04-11T02:07:11.3601985+00:00",
        fullName: "Ashley Carroll",
        cardNumber: "4674449894158233",
        cvv: "116",
        pin: 2460,
      },
    },
    {
      id: "45170",
      name: "Juan",
      secondName: "Manuel",
      paternalName: "Ramón",
      maternalName: "Martinez",
      username: "Bret",
      email: "juanitobanana@gmail.com",
      phone: "1-770-736-8031 x56442",
      birthday: "01/junio/2000",
      status: "P",
      analyst: "Jesús León",
      card: {
        type: "Visa",
        date: "2024-04-11T02:07:11.3601985+00:00",
        fullName: "Ashley Carroll",
        cardNumber: "4674449894158233",
        cvv: "116",
        pin: 2460,
      },
    },
    {
      id: "45170",
      name: "Juanes",
      secondName: "Manuel",
      paternalName: "Ramón",
      maternalName: "Martinez",
      username: "Bret",
      email: "juanitobanana@gmail.com",
      phone: "1-770-736-8031 x56442",
      birthday: "01/junio/2000",
      status: "P",
      analyst: "Jesús León",
      card: {
        type: "Visa",
        date: "2024-04-11T02:07:11.3601985+00:00",
        fullName: "Ashley Carroll",
        cardNumber: "4674449894158233",
        cvv: "116",
        pin: 2460,
      },
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [modalAddUser, setModalAddUser] = useState(false)

  const BASE_URL = "http://localhost:5000/"

  const getListUser = async () => {
    setLoading(true);
    try {
      const req = await fetch(BASE_URL + "user");
      const dataParse = await req.json();
      console.log("req", dataParse);
      setListUser(dataParse);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const createUser = async (data) => {
    console.log('data', data)
    const req = await fetch(BASE_URL + "user", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    });
    console.log('req.json()',  await req.json())
    await getListUser()
  }


  useEffect(() => {
    getListUser();
  }, []);

  return (
    <>
      <div className="flex flex-col flex-1 w-full">
        <header className="z-10 bg-white shadow-md fixed w-full">
          <Filter getListUser={getListUser} loading={loading} />
        </header>

        {loading ? (
          <Loading />
        ) : (
          <main className="h-full md:pt-72 pt-80">
              <ListUser data={listUser} update={getListUser} />
          </main>
        )}
      </div>
      {
        !loading &&
        <div className="fixed h-14 w-28 bg-primary-100 bottom-12 right-12 rounded-md flex items-center text-white shadow- cursor-pointer" onClick={() => setModalAddUser(true)}>
          <p className="w-full text-center uppercase">Nuevo usuario</p>
          <i className="fas fa-plus mr-2"></i>
        </div>
      }

      <Modal modalActive={modalAddUser} setModalActive={setModalAddUser} submit={createUser} type="add"/>
    </>
  );
}

export default Dash;
