import React from 'react'
import LoginImg from "../../assets/images/MainCar.png";
import succes from "../../assets/images/login/succes.png";
import { motion } from "framer-motion";

function Succesful() {
  return (
    <div className="bg-white-900 items-center justify-center  h-screen">
      <div className="flex flex-col items-center justify-center">
        <div className="hidden md:block transform">
          <motion.img
            initial={{ opacity: 0, x: "-40%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            transition={{ duration: 0.8 }}
            src={LoginImg}
            className="special:w-full h-full md:w-96"
            alt="main-img"
          />
        </div>
        <div className="block md:hidden w-full transform">
          <motion.img
            initial={{ opacity: 0, x: "-40%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            transition={{ duration: 0.8 }}
            src={LoginImg}
            className="w-full h-full"
            alt="main-img"
          />
              </div>
              
        <div className="flex items-center justify-between w-4/5 lg:w-1/2 bg-[#EFF9FB] p-3 rounded-xl rounded-r-full ">
          <div className="border-l-4 pl-5 border-[#5CFE89]">
            <p>
              you will redirected to the dashboard after 1 <br />
              <span className="text-xl xl:text-2xl font-bold">
                Subscription Successful
              </span>
            </p>
          </div>
          <div className="bg-[#E4EFF0] p-3 rounded-full">
            <div className="bg-white p-3 rounded-full">
              <div className="bg-[#5CFE89] p-10 font-bold text-white rounded-full relative">
                <img src={succes} alt="user" className='w-full' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Succesful