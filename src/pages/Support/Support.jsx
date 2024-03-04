import React from 'react'
import Footer from '../../components/footerSection/Footer'
import { Link } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";
import quicklinksIcon from '../../assets/images/icons/link.png';
import contactUs from '../../assets/images/icons/contact.png';
import newsLetter from '../../assets/images/icons/News.png';
import UnderDev from '../../components/UnderDevMessage/UnderDev';



const Support = () => {
    const [isNavOpen, setNavOpen] = useState(false);
    const [isUnderDev, setIsUnderDev] = useState(true);


    if(isUnderDev){
        return(
            <UnderDev/>
        )
    }else{
    return (
        <div>
            <div className="w-full  bg-[#A0E6EB] ">
                <div className="flex flex-col lg:flex-row lg:items-stretch ">
                    {/* left */}
                    <div className="w-full lg:w-[46%] xl:1/2 bg-left-showcase flex flex-col items-end  ">
                        {/* mobile nav start*/}
                        <div className="flex items-center justify-end p-3 lg:hidden">
                            <div
                                className=" cursor-pointer"
                                onClick={() => setNavOpen((prev) => !prev)}
                            >
                                {isNavOpen ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                            </div>
                        </div>

                        {isNavOpen && (
                            <div className="flex px-10 py-5 rounded-lg-lg flex-col items-center gap-5 lg:hidden rounded-lg bg-[#38bfc9] absolute z-10 w-full top-12 ">
                                <span className="font-bold text-base text-white  hover:text-[#EC263F]">
                                    <Link to="">Our Partners</Link>
                                </span>
                                <span className="font-bold text-base text-white  hover:text-[#EC263F]">
                                    <Link to="">Become A Partner</Link>
                                </span>
                                <span className="font-bold text-base text-white  hover:text-[#EC263F]">
                                    <Link to="">Giveaway</Link>
                                </span>
                                <span className="font-bold text-base text-white  hover:text-[#EC263F]">
                                    <Link to="">Shop</Link>
                                </span>
                                <button className="font-bold text-base  px-3 py-2 text-[#d4d4d4] bg-black rounded-lg hover:text-white hover:bg-[#51b9c0]">
                                    Contact Us
                                </button>
                            </div>
                        )}

                        {/* mobile nav end*/}                        
                    </div>

                    {/* right */}
                    <div className="w-full lg:w-[54%] xl:1/2 ">
                        <div className="p-3 lg:p-5 flex flex-col gap-16   2xl:max-w-[1200px] ">
                            {/* web-nav */}
                            <nav className="lg:flex items-center justify-end gap-3 xl:gap-5 special:gap-8 hidden">
                                <span className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl hover:text-[#EC263F]">
                                    <Link to="">Our Partners</Link>
                                </span>
                                <span className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl hover:text-[#EC263F]">
                                    <Link to="">Become A Partner</Link>
                                </span>
                                <span className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl hover:text-[#EC263F]">
                                    <Link to="">Giveaway</Link>
                                </span>
                                <span className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl hover:text-[#EC263F]">
                                    <Link to="">Shop</Link>
                                </span>
                                <button className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl px-3 2xl:px-5 special:px-8 py-2 2xl:py-3 special:py-5 text-[#d4d4d4] bg-black rounded-lg hover:text-white hover:bg-[#51b9c0]">
                                    {" "}
                                    Contact Us
                                </button>
                            </nav>    

                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gray-200 text-center py-20'>
                    <h1 className='text-4xl font-bold'>Need a <span className='text-cyan-500'>Support?</span></h1>        
            </div>
            <div className='bg-gray-50 flex items-stretch lg:flex-row flex-col gap-5 py-20'>
                <div className='bg-white shadow-lg py-20 px-10 lg:w-1/3 w-full rounded-lg'>
                        <div className='w-20 h-20 mb-8'>
                            <img src={quicklinksIcon} alt="quick-links"  className='w-full h-full object-contain'/>
                        </div>
                        <h2 className='text-2xl font-bold mb-6'>Quick Links</h2>
                        <Link className='text-xl mb-4' to={'/privacy'} >Privacy Policy</Link><br />
                        <Link className='text-xl mb-4' to={'/conditions'}>Terms and Conditions</Link>
                </div>
                {/* Contact Us */}
                <div className='bg-white shadow-lg py-20 px-10 lg:w-1/3 w-full rounded-lg'>
                        <div className='w-20 h-20 mb-8'>
                            <img src={contactUs} alt="quick-links"  className='w-full h-full object-contain'/>
                        </div>
                        <h2 className='text-2xl font-bold mb-6'>Contact Us</h2>
                        <a href='tel:+61420363993' className='text-xl mb-4'>+61 420 363 993</a><br />
                        <a href='mailto:info@winladsgiveaway.com' className='text-xl mb-4'>info@winladsgiveaway.com</a>
                </div>

                {/* News Letter */}
                <div className='bg-white shadow-lg py-20 px-10 lg:w-1/3 w-full rounded-lg'>
                        <div className='w-20 h-20 mb-8'>
                            <img src={newsLetter} alt="quick-links"  className='w-full h-full object-contain'/>
                        </div>
                        <h2 className='text-2xl font-bold mb-6'>News Letter</h2>
                        <p className='text-xl mb-4'>ABN: 87671535149 <br/>2009/15 Everage St<br/>Moonee Ponds<br/> Victoria<br/>3039</p>
                </div>
            </div>


            <Footer />
        </div>
    )}
}

export default Support