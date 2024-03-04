import React, { useState } from 'react'
import Slider from "react-slick";
import binance from "../../assets/images/avatar/av-7.png"
import coin from "../../assets/images/avatar/av-6.png";
import pancake from "../../assets/images/avatar/av-5.png";
import smart from "../../assets/images/avatar/av-8.png";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './sliderComponent.css';
const SliderComponent = ({direction =  1}) => {
    const [settings] = useState({
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: direction,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: 'linear',

        
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 1150,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 6,
              },
            },
        ]
    });

    return (
        <div className='slider-container mb-0'>
            <Slider {...settings} className='mb-0 '>
            <div className='slide'>
                <img className="w-full" src={binance} alt="logo"/>
            </div>
            <div className='slide'>
                <img className="w-full" src={coin} alt="logo"/>
            </div>
            <div className='slide'>
                <img className="w-full" src={pancake} alt="logo"/>
            </div>
            <div className='slide'>
                <img className="w-full" src={smart} alt="logo"/>
            </div>
            <div className='slide'>
                <img className="w-full" src={binance} alt="logo"/>
            </div>
            <div className='slide'>
                <img className="w-full" src={coin} alt="logo"/>
            </div>
            <div className='slide'>
                <img className="w-full" src={pancake} alt="logo"/>
            </div>
            <div className='slide'>
                <img className="w-full" src={smart} alt="logo"/>
            </div>
            <div className='slide'>
                <img className="w-full" src={binance} alt="logo"/>
            </div>
            <div className='slide'>
                <img className="w-full" src={coin} alt="logo"/>
            </div>
            <div className='slide'>
                <img className="w-full" src={pancake} alt="logo"/>
            </div>
            <div className='slide'>
                <img className="w-full" src={smart} alt="logo"/>
            </div>

        </Slider>
        </div>
    )
}

export default SliderComponent