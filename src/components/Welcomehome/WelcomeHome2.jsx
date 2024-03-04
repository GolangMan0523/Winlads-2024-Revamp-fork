import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Apple from '../../assets/images/welcomehome/apple.png';
import Google from '../../assets/images/welcomehome/google.png';
import { motion } from 'framer-motion';
import video from '../../assets/video.mp4';
import { toast } from 'react-toastify';
import axios from 'axios';
const WelcomeHome2 = () => {
  const [uCount , setUserCount]= useState(0);

  const getUserCount = async()=>{
    try {
      const userCount = await axios.get(`${import.meta.env.VITE_SERVER_API}/getUserCount`)
      setUserCount(userCount.data?.users);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getUserCount();
  },[])



  return (
    <div className="w-full relative h-[500px] flex items-center justify-center">
      {/* section 01 with ReactPlayer */}
      {/* <ReactPlayer
        url='https://player.vimeo.com/video/898036697?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
        playing
        loop
        muted
        width='100%'
        height='100%'
        style={{
          minWidth: '100%',
          minHeight: '100%',
        }}
        className="react-player opacity-50"
      /> */}
      <video src={video} className='absolute w-full h-full object-cover top-0 left-0 z-[0]' autoPlay muted loop playsInline></video>
      <div className='absolute w-full h-full top-0 left-0 z-[1]'>
        <div className='w-full h-full bg-gradient-to-b to-black from-[rgba(0,0,0,.5)_75%]'></div>
      </div>
      <div className="mx-auto 2xl:max-w-[2400px] w-full px-3 lg:px-5 py-10 lg:py-16 z-10  relative">

        <div className="flex items-center justify-center 2xl:gap-40 xl:gap-36 lg:gap-32 md:gap-8 sm:gap-6 gap-5 lg:flex-row flex-col">
          <div className="flex flex-col justify-center items-center  ">
            <motion.p
              initial={{ opacity: 0, y: "-40%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
              className="text-[#00F0FF] font-bold text-2xl lg:text3xl xl:text-4xl 2xl:text-6xl"
            >
              {uCount} <span className="text-white">+</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: "40%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
              className="text-white text-center text-sm md:text-base 2xl:text-lg"
            >
              Total Members
            </motion.p>
          </div>

          <div className="flex flex-col justify-center items-center ">
            <motion.p
              initial={{ opacity: 0, y: "-40%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-[#00F0FF] font-bold text-2xl lg:text3xl xl:text-4xl 2xl:text-6xl"
            >
              50 <span className="text-white">%</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: "40%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-white text-center text-sm md:text-base 2xl:text-lg"
            >
              Up to 50% discounts on partners stores
            </motion.p>
          </div>

          <div className="flex flex-col justify-center items-center ">
            <motion.p
              initial={{ opacity: 0, y: "-40%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-[#00F0FF] font-bold text-2xl lg:text3xl xl:text-4xl 2xl:text-6xl"
            >
              $1500
              {/* 200 <span className="text-white">+</span> */}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: "-40%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-white text-center text-sm md:text-base 2xl:text-lg"
            >
              Cashouts
            </motion.p>
          </div>
        </div>
        <div className="flex items-center justify-center xl:gap-8 md:gap-5 gap-3 mt-10">
          <div className="flex justify-center items-center" onClick={()=> toast.warning('Winlads IOS app will launch soon')}>
            <img
              src={Apple}
              alt=""
              className="cursor-pointer hover:scale-105"
            />
          </div>
          <div className="flex justify-center items-center" onClick={()=> toast.warning('Winlads Android app will launch soon')}>
            <img
              src={Google}
              alt=""
              className="cursor-pointer hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* section 02 */}

    </div>
  );
};

export default WelcomeHome2;
