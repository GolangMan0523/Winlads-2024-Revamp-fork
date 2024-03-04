import React from 'react'
import TopNav from '../../components/TopNav/TopNav'
import jeepImg from '../../assets/images/jeep2.png';
import BG from "../../assets/images/HomesideBg.png";
import { motion } from "framer-motion";
import { carAnimation } from "../../animation/animation";

const UnderDev = () => {
  return (
    <div className='w-full'>
      <div className='flex items-center justify-between my-10 overflow-hidden w-full'>
        <div>
        </div>
        <div className='w-full xl:w-1/2 md:px-10 z-20'>
          <TopNav />
        </div>
      </div>
      <div className=' flex items-center justify-center w-full mx-auto relative'>
        <div className='flex items-center md:flex-row flex-col justify-center relative pt-16 md:pt-12 xl:pt-8 md:mt-0'>
          <div className='md:w-1/2 w-full z-10'>
            <div className='w-max md:mx-auto px-2'>
              <h2 className='text-4xl font-bold'>This feature</h2>
              <h2 className='text-4xl font-bold'>remains unavailable</h2>
              <h2 className='text-4xl font-bold'>at the moment.</h2>
                
            </div>
          </div>
          <div className='md:w-1/2 w-full z-10 px-10 md:px-0'>
            <div className='w-full mt-20'>
              
              <motion.img
                initial={{scale:0.5}}
                animate={{scale:1}}
                transition={carAnimation.transition}
                className="w-full h-full object-contain"
                src={jeepImg}
                alt="main"
              />
              {/* <img src={jeepImg} alt="jeep-img" className='w-full h-full object-contain z-10' /> */}
            </div>
          </div>
        </div>
      </div>

      <img
        src={BG}
        alt=""
        className="absolute right-0 -z-10 bottom-0 w-52 xl:w-96 md:w-96 special:w-1/6 2xl:w-1/5 hidden md:block  opacity-60 "
      />
    </div>
  )
}

export default UnderDev