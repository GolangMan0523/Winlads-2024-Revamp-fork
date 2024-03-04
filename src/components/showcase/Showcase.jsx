import jeepImg from "../../assets/images/jeep.png";
import logo from "../../assets/images/logo/logo.png";
import win from "../../assets/images/logo/win.png";
import ellipse from "../../assets/images/ellipse.png";
import ham from "../../assets/images/ham.png";
import googleplay from "../../assets/images/googleplay.png";
import appstore from "../../assets/images/appstore.png";
import Xlgoogleplay from "../../assets/images/2Xlgoogleplay.png";
import Xlappstore from "../../assets/images/2Xlappstore.png";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

const imageAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const logoAnimate = {
  offscreen: { y: -30, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1.5 },
  },
};

function Showcase() {
  // ----------------------------------------

  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      className="grid grid-cols-1 gap-2 lg:grid-cols-2"
      style={{
   
        position: "relative",
        background: "linear-gradient(88deg, #43E3ED -21.82%, #FFE9E9 131.12%)",
      }}
    >
      <button
        className="border-black 4xl:text-4xl px-8 py-3 rounded-md 2xl:py-6 items-center text-white buttonBg absolute top-20 lg:right-12 right-2"
      >
        Contact Us
      </button>

      <div>
        <div>
          <img src={ellipse} className="h-auto " />
        </div>
        <img
          className="hidden lg:inline"
          src={logo}
          alt="logo"
          style={{ position: "absolute", top: "0px" }}
        />
        <img
          className="hidden xl:block w-[600px] 4xl:w-[800px]"
          src={win}
          alt="logo"
          style={{
            position: "absolute",
            top: "200px",
            left: "340px",
          }}
        />
        {/* <img
          className="block lg:hidden md:hidden"
          src={ham}
          alt="logo"
          style={{
            position: "absolute",
            top: "85px",
            left: "40px",
          }}
        /> */}
        <motion.img
          variants={logoAnimate}
          className="block xl:hidden md:pl-16 w-[200px] md:w-[400px]"
          src={win}
          alt="logo"
          style={{
            position: "absolute",
            top: "220px",
            left: "40px",
          }}
        />
        <motion.img
          variants={imageAnimate}
          className="hidden lg:block lg:w-[800px] 4xl:w-[1600px] xl:w-[800px]"
          src={jeepImg}
          style={{
            position: "absolute",
            top: "300px",
            left: "40px",
            zIndex: "2",
          }}
        />
        <motion.img
          className="block lg:hidden"
          src={jeepImg}
          style={{
            position: "absolute",
            top: "250px",
            left: "0px",
            // width: "700px",
            zIndex: "2",
          }}
        />
      </div>
      <div className="flex flex-col space-y-4 mx-2 mt-10 md:mt-0 lg:pr-10">
        <div className="hidden lg:block" style={{ height: "40%" }}></div>
        <div className="pt-4 dashcontent-group z-10">
          <p className="font-semibold text-right text-md 4xl:text-4xl xl:text-1xl">
          With over 650+ businesses across 1000+ stores where you can accessexclusive discounts.
          </p>
          <p className="font-semibold text-right text-md 4xl:text-4xl xl:text-1xl mt-3">
          Australia Widefrom only $ 9.99 per month, opt-out anytime
          </p>
        </div>
        <div className="flex justify-end z-10">
          <Link to="/register">
            <div
              className="flex justify-center px-8 py-3 2xl:px-8  border-black 2xl:py-6 2xl:text-xl text-md font-bold items-center text-white buttonBg frontbtns"
              style={{
                //   display: "inline-block",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Sign Up for Free
            </div>
          </Link>
        </div>
       
      </div>
        <br /><br />
    </motion.div>
  );
}

export default Showcase;
