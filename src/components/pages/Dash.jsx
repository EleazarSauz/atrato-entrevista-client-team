import React, { useEffect, useState } from "react";
import Modal from "../organism/Modal";
import Filter from "../templates/Filter";
import ListUser from "../templates/ListUser";
import Loading from "../templates/Loading";

function Dash() {
  const [listUser, setListUser] = useState([]);
  const [listUserFilter, setListUserFilter] = useState([])
  const [loading, setLoading] = useState(false);
  const [modalAddUser, setModalAddUser] = useState(false)
  const [filterText, setFilterText] = useState("")
  const [filterType, setFilterType] = useState("name")
  const [filterStatus, setFilterStatus] = useState(null)

  const BASE_URL = "http://localhost:5000/"

  const getListUser = async () => {
    setLoading(true);
    try {
      const req = await fetch(BASE_URL + "user");
      const dataParse = await req.json();
      console.log("req", dataParse);
      setListUser(dataParse);
      setListUserFilter(dataParse)
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const createUser = async (data) => {
    await fetch(BASE_URL + "user", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    });
    await getListUser()
  }
  
  const filterRules = (listUserParam) => {
    var newListUser = listUserParam
    if(filterType === "id" && filterText) {
      newListUser = newListUser.filter( i => i._id === filterText)
    }
    if(filterType === "name" && filterText) {
      newListUser = newListUser.filter( i => i.name.toLowerCase().includes(filterText.toLowerCase()) )
    }
    
    if(filterStatus) {
      newListUser = newListUser.filter( i => i.status === filterStatus)
    }

    setListUserFilter(newListUser)
  }

  const clearFilter = () => {
    setListUserFilter(listUser)
    setFilterStatus(null);
    setFilterType("name");
    setFilterText("");
  };

  useEffect(() => {
    getListUser();
  }, []);

  return (
    <>
      <div className="flex flex-col flex-1 w-full">
        <header className="z-10 bg-white shadow-md fixed w-full">
          <Filter filterRules={() => filterRules(listUser)} loading={loading}  
            filterText={filterText} setFilterText={setFilterText}
            filterType={filterType} setFilterType={setFilterType}
            filterStatus={filterStatus} setFilterStatus={setFilterStatus}
            clearFilter={clearFilter}
          />
        </header>

        {loading ? (
          <Loading />
        ) : (
          <main className="h-full md:pt-72 pt-72">
              <ListUser data={listUserFilter} update={getListUser} />
          </main>
        )}
      </div>
      {
        !loading &&
        <div className="fixed h-14 w-28 bg-primary-100 bottom-12 right-12 sm:left-12 rounded-md flex items-center text-white shadow- cursor-pointer" onClick={() => setModalAddUser(true)}>
          <p className="w-full text-center uppercase">Nuevo usuario</p>
          <i className="fas fa-plus mr-2"></i>
        </div>
      }

      <Modal modalActive={modalAddUser} setModalActive={setModalAddUser} submit={createUser} type="add"/>
    </>
  );
}

export default Dash;
