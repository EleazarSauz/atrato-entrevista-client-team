import React from "react";
import Card from "../organism/Card";

function ListUser() {
  return (
    <div className="flex flex-wrap -m-4">
      {[
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
      ].map((i, index) => (
        <Card key={index} data={i}/>
      ))}
    </div>
  );
}

export default ListUser;
