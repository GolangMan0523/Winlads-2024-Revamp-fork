import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import b1 from '../../assets/banner1.png'
import b2 from '../../assets/banner2.png'
import b3 from '../../assets/banner3.png'
const CarouselContainer = () => {
    return (
        <Carousel
            showThumbs={false}
            autoPlay={true}
            showArrows={false}
            swipeable={true}
            infiniteLoop={true}
            // centerMode={true}
            emulateTouch={true}
            showStatus={false}
            width={''} 
            showIndicators={false}
            // onChange={e=>{console.log(e);}}
            className='relative'>
            <div>
                <img src={b1} className='w-full h-full object-contain' />

            </div>
            <div>
                <img src={b2} className='w-full h-full object-contain' />

            </div>
            <div>
                <img src={b3} className='w-full h-full object-contain' />

            </div>

        </Carousel>
    )
}

export default CarouselContainer