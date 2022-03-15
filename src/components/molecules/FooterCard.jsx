import React from 'react'
import { ButtonPrimary, ButtonSecondary, ButtonTertiary } from '../atoms/Buttons'
import Modal from '../organism/Modal'

function FooterCard({data,
  modalActive,
  setModalActive,
  deleteUser
}) {
  return (
    <div className="flex flex-col justify-end sm:flex-row mb-6">

      <div className="text-center hidden sm:block">
        <ButtonSecondary onClick={() => setModalActive(true)} />
      </div>

      <div className="text-center hidden sm:block">
        <ButtonTertiary onClick={() => deleteUser(data._id)} />
      </div>

      <div className="sm:w-1/5 sm:hidden mt-4">
        <ButtonPrimary />
      </div>
      <Modal defaultValues={data} modalActive={modalActive} setModalActive={setModalActive}/>
    </div>
  )
}

export default FooterCard