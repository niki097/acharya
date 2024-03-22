import React from 'react'
import astrologer from '../../assets/imgs/astrologer.svg'
import star from '../../assets/imgs/star.svg'
import './AstroCard.css'
import StarRating from '../Rating/StarRating'

function AstrologerCard() {
    return (
        <>
            <div className="astro_card">
                <div className="astrologer_card m-3">
                    <div className="astrologer_cardImg">
                        <img className='astrologerImage' src={astrologer} alt="" />
                        <StarRating imageUrl={star} text="4.5" className='s_rating-3' />
                    </div>
                    <h2>Astro Vivek K</h2>
                    <h6>₹ 30/min</h6>
                    <button type='submit'>Connect</button>
                </div>
            </div>
        </>
    )
}

export default AstrologerCard