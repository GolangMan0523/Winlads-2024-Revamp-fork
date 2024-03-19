import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import b1 from '../../assets/banner1.png'
import b2 from '../../assets/banner2.png'
import b3 from '../../assets/banner3.png'
import b4 from '../../assets/banner4.png'
import { Link } from 'react-router-dom';

const Buttons = ({ handleButton, buttonText= 'Get Entries!' }) => {
    return < div className="pb-2 flex  gap-3 absolute bottom-5 left-1/2 -translate-x-1/2 z-20" >
        <Link>
            <button
                className="bg-white text-black rounded-lg xl:py-3 py-1 px-2 w-max xl:w-64 text-lg xl:text-xl hover:bg-gray-100/75 shadow-xl disabled:bg-gray-200"
                onClick={handleButton}
                disabled={buttonText !==  'Get Entries!' }
            >
                {buttonText}
            </button>
        </Link>
        <Link to="/subscription">
            <button className="bg-[#FF0000] text-white rounded-lg xl:py-3 py-1 px-2 text-lg xl:text-xl w-max xl:w-64 hover:bg-[#FF1111]/75">
                Upgrade Subscription
            </button>
        </Link>
    </div >
}

const CarouselContainer = ({ handleButton, giveaways }) => {
    const tour = giveaways.filter(g=>g.raffle.type=='tour')[0]
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
            interval={5000}
            // onChange={e=>{console.log(e);}}
            className='relative'>
            <div>
                <img src={b1} className='w-full h-full object-contain' />
                <Buttons handleButton={handleButton}  buttonText='Reveal Soon'/>
            </div>
            <div>
                <img src={b2} className='w-full h-full object-contain' />
                <Buttons handleButton={handleButton}  buttonText='Reveal Soon'/>
            </div>
            <div>
                <img src={b3} className='w-full h-full object-contain' />
                <Buttons handleButton={handleButton}  buttonText='Reveal Soon'/>
            </div>
            <div>
                <img src={b4} className='w-full h-full object-contain' />
                <Buttons handleButton={()=>handleButton({id:tour._id,price: tour?.price, name: tour?.name})} />
            </div>
            

        </Carousel>
    )
}

export default CarouselContainer