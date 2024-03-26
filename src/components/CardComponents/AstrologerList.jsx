import React, { useState } from 'react';

import vedicAstrologer from '../../assets/imgs/vedicAstrologer.svg'
import lifeAstrologer from '../../assets/imgs/lifeAstrologer.svg'
import greenRight from '../../assets/imgs/greenRight.svg'
import readingicon from '../../assets/imgs/readingicon.svg'
import language from '../../assets/imgs/language.svg'
import experience from '../../assets/imgs/experience.svg'
import rupee from '../../assets/imgs/rupee.svg'
import chat from '../../assets/imgs/chat.svg'
import call from '../../assets/imgs/call.svg'
import video from '../../assets/imgs/video.svg'
import star from '../../assets/imgs/star.svg';
import './AstroCard.css'
import StarRating from '../Rating/StarRating';4
import '../../assets/media.css'

function AstrologerList({title, body}) {
    const[onlineState, setOnlineState]=useState(true);
    

    return (
        <>
            <div className={`astrologer_details_Card ${onlineState ? 'online' : 'offline'}`}>
                <div className="flex w-full sm:w-full md:w-full p-4 astrologer_details_Card_inner">
                    <div className="astro_contact_card">
                        <div className="vedic">
                            <img src={lifeAstrologer} alt="" />
                        </div>
                           <StarRating imageUrl={star} text="4.5" className='s_rating-1'/>
                    </div>
                    <div className="astrologer_details">
                        <div className="name">
                            <h5>{}</h5>
                            <img src={greenRight} alt="" />
                        </div>
                        <div className="readingicon">
                            <img src={readingicon} alt="" />
                            <p>Life Astrology, Planetary Aspects </p>
                        </div>
                        <div className="readingicon">
                            <img src={language} alt="" />
                            <p>Hindi, English</p>
                        </div>
                        <div className="readingicon">
                            <img src={experience} alt="" />
                            <p>10 years</p>
                        </div>
                        <div className="readingicon">
                            <img src={rupee} alt="" />
                            <p className='font-bold'>115/min</p>
                            <p className={onlineState? 'online-text' :'offline-text'}>
                            {onlineState ? 'Online' : 'Offline'}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="astro_connect_options">
                    <StarRating imageUrl={chat} text="Chat" className="s_rating-2 "/>
                    <StarRating imageUrl={call} text="Call" className="s_rating-2 "/>
                    <StarRating imageUrl={video} text="Video call" className="s_rating-2"/>
                  
                </div>
            </div>
        </>
    );
}

export default AstrologerList;
