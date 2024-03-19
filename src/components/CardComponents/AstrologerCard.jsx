import React from 'react'
import astrologer from '../../assets/imgs/astrologer.svg'
import star from '../../assets/imgs/star.svg'
import './AstroCard.css'

function AstrologerCard() {
    return (
        <>
            <div className="slick-slider">
                <div className="astrologer_card p-6 m-3">
                    <div className="astrologer_cardImg">
                        <img src={astrologer} alt="" />
                        <div className="star_img">
                            <img src={star} alt="" />
                            <p>5</p>
                        </div>
                    </div>
                    <h2>Astro Vivek K</h2>
                    <h6>₹ 30/min</h6>
                    <button className=''>Connect</button>
                </div>
            </div>
        </>
    )
}

export default AstrologerCard