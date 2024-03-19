import React from 'react'
import leo from '../assets/imgs/leo.svg'
import './AstroCard.css'

function HoroscopeCard() {
  return (
    <>
    <div className="horoscope_card m-2 p-4 grid justify-center text-center">
        <img src={leo} alt="aries" />
        <p className='font-bold p-3 mt-3 text-2xl'>Leo</p>
    </div>
    </>
  )
}

export default HoroscopeCard