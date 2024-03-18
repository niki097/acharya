import React from 'react';
import { Card } from 'flowbite-react';
import vedicAstrologer from '../assets/imgs/vedicAstrologer.svg'
import greenRight from '../assets/imgs/greenRight.svg'
import readingicon from '../assets/imgs/readingicon.svg'
import language from '../assets/imgs/language.svg'


function AstrologerList() {
  return (
   <>
   <div className="astrologer_details_Card w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/5 p-4">
    <div className="astrologer_img">
       <div className="vedic">
        <img src={vedicAstrologer} alt="" />
        </div> 
        <span ></span>
    </div>
    <div className="astrologer_details">
        <div className="name">
        <h5>Lorem ipsum dolor sit.</h5>
        <img src={greenRight} alt="" />
        </div>
        <div className="readingicon flex">
            <img src={readingicon} alt="" />
            <p>Life Astrology, Planetary </p>
        </div>
        <div className="readingicon flex">
            <img src={readingicon} alt="" />
            <p>Hindi, English</p>
        </div>
        <div className="readingicon flex">
            <img src={language} alt="" />
            <p>10 years</p>
        </div>
        <div className="readingicon flex">
            <img src={readingicon} alt="" />
            <p>115/min</p>
            <p>Online</p>
        </div>
    </div>
   </div>
   </>
  );
}

export default AstrologerList;
