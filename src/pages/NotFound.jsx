import React from 'react'
import TopNav from '../components/TopNav/TopNav'
import jeepImg from '../assets/images/jeepnp.png';
import BG from "../assets/images/HomesideBg.png";
import { motion } from "framer-motion";
import { carAnimation } from "../animation/animation";

const NotFound = () => {
  return (
    <div>
      <div className='flex items-center justify-between my-10'>
        <div>
        </div>
        <div className='w-full xl:w-1/2 md:px-10'>
          <TopNav />
        </div>
      </div>
      <div className='h-[80vh] flex items-center justify-center max-w-[1680px] mx-auto relative'>
        <div className='flex items-center md:flex-row flex-col justify-center relative'>
          <div className='md:w-1/2 w-full z-10'>
            <div className='w-max mx-auto'>
              <h2 className='text-4xl font-bold'>Oops....</h2>
              <h4 className='text-xl my-4 font-semibold'>Page Not Found</h4>
              <p className=''>This Page doesn`t exist or was removed!</p>
            </div>
          </div>
          <div className='md:w-1/2 w-full z-10 px-10 md:px-0'>
            <div className='w-full mt-48'>
              
              <motion.img
                initial={{x:-200}}
                animate={{x:0}}
                transition={carAnimation.transition}
                className="w-full h-full object-contain"
                src={jeepImg}
                alt="main"
              />
              {/* <img src={jeepImg} alt="jeep-img" className='w-full h-full object-contain z-10' /> */}
            </div>
          </div>
        </div>
        <h1 className='special:text-[600px] xl:text-[500px] text-[50vw] font-extrabold special:right-0 xl:left-1/3 -z-20 special:top-48 2xl:top-32 transfrom -translate-y-1/4 text-[#BFBFBF] absolute'>404</h1>
      </div>

      <img
        src={BG}
        alt=""
        className="absolute right-0 -z-10 bottom-0 w-52 xl:w-96 md:w-96 special:w-1/6 2xl:w-1/5  opacity-60 "
      />
    </div>
  )
}

export default NotFound