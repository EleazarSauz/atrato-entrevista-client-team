import React, { useState } from 'react'
import { ButtonPrimary, ButtonSecondary, ButtonTertiary } from '../atoms/Buttons'
import Modal from '../organism/Modal'

function FooterCard({data,
  modalActive,
  setModalActive,
  deleteUser
}) {
  const [dropStatus, setDropStatus] = useState(false);

  return (
    <div className="flex flex-col justify-end sm:flex-row mb-6">

      <div className="text-center hidden sm:block">
        <ButtonSecondary onClick={() => setModalActive(true)} />
      </div>

      <div className="text-center hidden sm:block">
        <ButtonTertiary onClick={() => deleteUser(data._id)} />
      </div>

      <div className="sm:w-1/5 sm:hidden mt-4">
        <ButtonPrimary onClick={() => setDropStatus(!dropStatus)} />
        <div
          id="dropdown"
          className={`${
            !dropStatus && "hidden"
          } z-10 w-38 text-base list-none bg-white rounded shadow absolute`}
        >
          <ul className="py-1">
            <li
                className={`block py-2 px-4 text-sm ${data?.status === 1 ? "bg-primary-100 text-white" : "text-primary-100"} hover:bg-primary-100 hover:text-white uppercase cursor-pointer rounded-md`}
              >
                Pendiente
            </li>
            <li
                className={`block py-2 px-4 text-sm ${data?.status === 2 ? "bg-primary-100 text-white" : "text-primary-100"} hover:bg-primary-100 hover:text-white uppercase cursor-pointer rounded-md`}
              >
                En Proceso
            </li>
            <li
                className={`block py-2 px-4 text-sm ${data?.status === 3 ? "bg-primary-100 text-white" : "text-primary-100"} hover:bg-primary-100 hover:text-white uppercase cursor-pointer rounded-md`}
              >
                Completado
            </li>
          </ul>
        </div>
      </div>
      <Modal defaultValues={data} modalActive={modalActive} setModalActive={setModalActive}/>
    </div>
  )
}

export default FooterCard