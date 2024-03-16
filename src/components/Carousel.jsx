import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons from react-icons library
import astrologer from '../assets/imgs/astrologer.svg';
import star from '../assets/imgs/star.svg';
import './style.css';

function Carousel() {

    // Custom previous arrow component
    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="slick-arrow-prev" onClick={onClick}>
                <FaChevronLeft />
            </div>
        );
    };

    // Custom next arrow component
    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="slick-arrow-next" onClick={onClick}>
                <FaChevronRight />
            </div>
        );
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />, // Custom previous arrow component
        nextArrow: <NextArrow />,// Custom next arrow component
        responsive: [ // Responsive settings
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3, // Show 3 cards per slide
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2, // Show 1 card per slide
            }
        },
        {
            breakpoint: 500, // Small screens
            settings: {
                slidesToShow: 1, // Show 1 card per slide
            }
        }
    ]
    };
    return (
        <Slider {...settings} className="slick-slider">
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
            <div className="astrologer_card p-6 m-3">
                <div className="astrologer_cardImg">
                    <img src={astrologer} alt="" />
                    <div className="star_img">
                        <img src={star} alt="" />
                        <p>4</p>
                    </div>
                </div>
                <h2>Astro Raj K</h2>
                <h6>₹ 40/min</h6>
                <button className=''>Connect</button>
            </div>
            <div className="astrologer_card p-6 m-3">
                <div className="astrologer_cardImg">
                    <img src={astrologer} alt="" />
                    <div className="star_img">
                        <img src={star} alt="" />
                        <p>4.5</p>
                    </div>
                </div>
                <h2>Astro Priya M</h2>
                <h6>₹ 35/min</h6>
                <button className=''>Connect</button>
            </div>
            <div className="astrologer_card p-6 m-3">
                <div className="astrologer_cardImg">
                    <img src={astrologer} alt="" />
                    <div className="star_img">
                        <img src={star} alt="" />
                        <p>4.5</p>
                    </div>
                </div>
                <h2>Astro Priya M</h2>
                <h6>₹ 35/min</h6>
                <button className=''>Connect</button>
            </div>
        </Slider>
    );
}

export default Carousel;
