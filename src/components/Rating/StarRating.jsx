import React from 'react'
import './starating.css'

function StarRating({imageUrl, text,className}) {
    return (
            <div className={`${className}`}>
                <img src={imageUrl} alt="" />
                <p>{text}</p>
            </div>
    )
}

export default StarRating