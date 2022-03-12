import React from 'react'
import { ButtonPrimary, ButtonSecondary, ButtonTertiary } from '../atoms/Buttons'

function FooterCard() {
  return (
    <div className="flex flex-col justify-end sm:flex-row mb-6">

      <div className="text-center hidden sm:block">
        <ButtonSecondary />
      </div>

      <div className="text-center hidden sm:block">
        <ButtonTertiary />
      </div>

      <div className="sm:w-1/5 sm:hidden mt-4">
        <ButtonPrimary />
      </div>
    </div>
  )
}

export default FooterCard