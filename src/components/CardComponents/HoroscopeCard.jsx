import React from 'react';
import leo from '../../assets/imgs/leo.svg';
import './AstroCard.css';

function HoroscopeCard() {
  return (
    <div className="container mx-auto flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="p-4 text-center">
            <div className="horoscope_card m-2 p-4 grid justify-center text-center">
              <img src={leo} alt="aries" />
              <p className='font-bold p-3 mt-3 text-2xl'>Leo</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HoroscopeCard;
