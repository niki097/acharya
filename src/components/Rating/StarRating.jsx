import React from 'react'
import './starating.css'
import star from '../../assets/imgs/star.svg';

function StarRating() {
    return (
        <div>
            <div className="astro_rating">
                <img src={star} alt="" />
                <p>4.5</p>
            </div>
        </div>
    )
}

export default StarRating