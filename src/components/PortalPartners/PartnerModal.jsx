import React, { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const PartnerModal = ({ partner, currentSub , handleClose}) => {
    return (
        <motion.div
            initial={{
                top: '50px',
                opacity: 0
            }}
            animate={{
                top: 0,
                opacity: 1,
            }}
            className='absolute top-0 h-screen overflow-y-auto right-0 py-5 px-5 rounedd-2xl overflow-hidden shadow-xl xl:w-2/5 w-full bg-white'
        >
            <div className='flex items-center justify-between mb-4 py-3 border-b'>
                <span className='text-4xl cursor-pointer hover:text-gray-500' onClick={() => handleClose()}><IoCloseSharp /></span>
            </div>
            <div className='h-72 w-11/12 mx-auto rounded-2xl overflow-hidden mb-2'>
                <img src={partner.logo ? partner.logo : 'https://icon-library.com/images/no-image-available-icon/no-image-available-icon-12.jpg'} className='w-full h-full object-cover' />
            </div>
            <div className=' py-5'>
                <h3 className='text-lg xl:text-xl font-semibold capitalize'>{partner.name}</h3>
                <p className='mb-5'>{partner.desc}</p>
                {/* <p className='text-gray-500 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sit eum rerum quasi ut? Rem, quo facilis quaerat corrupti error nobis illum odit</p>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sit eum rerum quasi ut? Rem, quo facilis quaerat corrupti error nobis illum odit</p> */}

                {/* <div className='flex items-center justify-center gap-2 rounded-full overflow-hidden p-1 bg-white border mb-3'>
                    <div className={`p-1 rounded-full bg-black text-white w-full text-center cursor-pointer`}>
                        Monthly
                    </div>
                    <div className={`p-1 rounded-full bg-white w-full text-center cursor-pointer`}>
                        Quarterly
                    </div>
                    <div className={`p-1 rounded-full bg-white w-full text-center cursor-pointer`}>
                        Yearly
                    </div>
                </div> */}
  
                <div className='flex flex-col space-y-1'>
                    {
                        currentSub.name == 'Starter' ? <div className='bg-blue-400 rounded-xl p-2'>
                            <h1>Starter</h1>
                            <p className='text-sm'>Discount Amount :<span className='font-bold'>10%</span></p>
                        </div> : currentSub.name == 'Boomer' ? <div className='bg-red-400 rounded-xl p-2'>
                            <h1>Boomer</h1>
                            <p className='text-sm'>Discount Amount :<span className='font-bold'>10%</span></p>
                        </div> : currentSub.name == 'Platinum' ? <div className='bg-cyan-400 rounded-xl p-2'>
                            <h1>Platinum</h1>
                            <p className='text-sm'>Discount Amount :<span className='font-bold'>10%</span></p>
                        </div> : currentSub.name == 'Gold' ? <div className='bg-yellow-400 rounded-xl p-2'>
                            <h1>Gold</h1>
                            <p className='text-sm'>Discount Amount :<span className='font-bold'>10%</span></p>
                        </div> : currentSub.name == 'Black' ? <div className='bg-black text-white rounded-xl p-2'>
                            <h1>Black</h1>
                            <p className='text-sm'>Discount Amount :<span className='font-bold'>10%</span></p>
                        </div> : <></>
                    }




                </div>
            </div>
            <div className='flex items-center justify-center gap-2 mb-5'>
                <Link to={partner.websiteurl} target='_blank' className='text-xs xl:text-sm flex items-center gap-2 justify-between border-blue-400 text-blue-400 border p-2 rounded-xl w-max hover:border-blue-600 cursor-pointer hover:text-blue-600'>
                    <div className='text-2xl'>
                        <GiWorld />
                    </div>
                    Website
                </Link>
                <Link to={partner.facebookurl} target='_blank' className='text-xs xl:text-sm flex items-center gap-2 justify-between border-blue-400 text-blue-400 border p-2 rounded-xl w-max hover:border-blue-600 cursor-pointer hover:text-blue-600'>
                    <div className='text-2xl'>
                        <FaFacebook />
                    </div>
                    Facebook
                </Link>
                <Link to={partner.instagramurl} target='_blank' className='text-xs xl:text-sm flex items-center gap-2 justify-between border-blue-400 text-blue-400 border p-2 rounded-xl w-max hover:border-blue-600 cursor-pointer hover:text-blue-600'>
                    <div className='text-2xl'>
                        <FaInstagram />
                    </div>
                    Instagram
                </Link>

            </div>
            <p>Contact :<span className='text-blue-400'>{partner.number}</span></p>
            <p>Email :<span className='text-blue-400'>{partner.email}</span> </p>

        </motion.div>
    )
}


export default PartnerModal