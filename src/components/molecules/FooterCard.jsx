import React, { useState } from 'react'
import { ButtonPrimary, ButtonSecondary, ButtonTertiary } from '../atoms/Buttons'

function FooterCard({data,
  modalActive,
  setModalActive,
  deleteUser,
  update
}) {
  const [dropStatus, setDropStatus] = useState(false);
  const [loading, setLoading] = useState(false)

  const updateStatus = async (status) => {
    setLoading(true)
    await update(status)
    setLoading(false)
  }

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
          } z-10 w-36 text-base list-none bg-white rounded shadow absolute`}
        >
          {
            loading ? 
            <div className="py-12 text-center text-primary-100">
              <i className="fas fa-spinner fa-xs fa-spin fa-2x" />
            </div>
            : 
            <ul className="py-0">
              <li
                  onClick={() => updateStatus(1)}
                  className={`block py-2 px-4 text-sm ${data.status === 1 ? "bg-primary-100 text-white" : "text-primary-100"} hover:bg-primary-100 hover:text-white uppercase cursor-pointer rounded-md`}
                >
                  Pendiente
              </li>
              <li
                  onClick={() => updateStatus(2)}
                  className={`block py-2 px-4 text-sm ${data.status === 2 ? "bg-primary-100 text-white" : "text-primary-100"} hover:bg-primary-100 hover:text-white uppercase cursor-pointer rounded-md`}
                >
                  En Proceso
              </li>
              <li
                  onClick={() => updateStatus(3)}
                  className={`block py-2 px-4 text-sm ${data.status === 3 ? "bg-primary-100 text-white" : "text-primary-100"} hover:bg-primary-100 hover:text-white uppercase cursor-pointer rounded-md`}
                >
                  Completado
              </li>
            </ul>
          }
        </div>
      </div>
      
    </div>
  )
}

export default FooterCard