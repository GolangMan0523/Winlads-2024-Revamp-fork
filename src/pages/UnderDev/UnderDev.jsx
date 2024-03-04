import React from 'react'
import jeepImg from '../../assets/images/jeep2.png';
import BG from "../../assets/images/HomesideBg.png";
import { motion } from "framer-motion";
import { carAnimation } from "../../animation/animation";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const UnderDev = () => {
    const navigate = useNavigate()
    return (
        <div className='w-full relative'>
            <div
                className="absolute top-0 left-4 cursor-pointer"
                onClick={() => navigate(-1)}
            >
                <IoIosArrowBack className="text-black bg-gray-200 rounded-full p-1 w-8 h-8" />
            </div>
            <div className='flex items-center justify-between my-10 overflow-hidden w-full'>
                <div>
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
                                initial={{ scale: 0.5 }}
                                animate={{ scale: 1 }}
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