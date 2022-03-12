import React from 'react'
import { ButtonSecondary, ButtonTertiary } from '../atoms/Buttons'

function FooterCard() {
  return (
    <div className="flex flex-col justify-end sm:flex-row mb-6">

      <div className="text-center">
        <ButtonSecondary />
      </div>

      <div className="text-center">
        <ButtonTertiary />
      </div>
    </div>
  )
}

export default FooterCard