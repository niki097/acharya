import React from 'react';
import { Card } from 'flowbite-react';
import vedicAstrologer from '../assets/imgs/vedicAstrologer.svg'
import greenRight from '../assets/imgs/greenRight.svg'
import readingicon from '../assets/imgs/readingicon.svg'
import language from '../assets/imgs/language.svg'
import star from '../assets/imgs/star.svg'
import chat from '../assets/imgs/chat.svg'
import './AstroCard.css'

function AstrologerList() {

    return (
        <>
            <div className="astrologer_details_Card">
                <div className="flex w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-4">
                    <div className=".astro_contact_card">
                        <div className="vedic">
                            <img src={vedicAstrologer} alt="" />
                        </div>
                        <div className="astro_rating">
                            <img src={star} alt="" />
                            <p>4.5</p>
                        </div>
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
                <div className="astro_connect_options">
                    <img src={chat} alt="" />
                    <span>chat</span>
                </div>
            </div>
        </>
    );
}

export default AstrologerList;
