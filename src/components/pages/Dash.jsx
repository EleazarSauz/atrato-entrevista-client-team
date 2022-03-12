import React, { useEffect, useState } from "react";
import Filter from "../templates/Filter";
import ListUser from "../templates/ListUser";

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
  ])
  const getListUser = async () => {
    const req = await fetch('https://jsonplaceholder.typicode.com/users')
    const dataParse = await req.json()
    console.log('req', dataParse)
    setListUser(dataParse)
  }
  useEffect(() => {
    getListUser()
  }, [])
  
  return (
    <>
      <div className="flex flex-col flex-1 w-full">
        <header className="z-10 bg-white shadow-md fixed w-full">
          <Filter/>
        </header>

        <main className="h-full">
          <div className="container px-6 mx-auto grid pt-72">
            <ListUser data={listUser} />
          </div>
        </main>
      </div>
    </>
  );
}

export default Dash;
