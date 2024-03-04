import jeep2 from "../../assets/images/jeep2.png";
// import Ellipse3 from "../../assets/images/Ellipse3.png";
import dragon from "../../assets/images/dragon.png";
import dragon2 from "../../assets/images/dragon2.png";
import cloud from "../../assets/images/cloud.png";
import pineapple from "../../assets/images/pineapple.png";
import watermelon from "../../assets/images/watermelon.png";

import { motion, useInView, useAnimation } from "framer-motion";

const imageAnimate = {
  offscreen: { y: -100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};
const textAnimate = {
  offscreen: { y: 20, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

function Gallery() {
  return (
    <>
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.1 }}
        className="lg:hidden  block mg:hidden 2xl:hidden"
        style={{
          background:
            "linear-gradient(88deg, #43E3ED -21.82%, #FFE9E9 131.12%)",
        }}
      >
        {/* <p className="text-lg font-bold text-center uppercase tracking-widest p-4">
          Explore Exclusive MemberBenefit
        </p> */}
        <p className="font-bold text-center text-lg md:text-xl xl:text-lg 2xl:text-2xl special:text-3xl mb-5" style={{ letterSpacing: '12px' }}>
          @Winlads
        </p>
        <div className="transition duration-700 hover:scale-105">
          {/* <h3 className="font-bold mb-2 text-md xl:text-2xl 4xl:text-4xl">Homewares, Trades & Services</h3> */}
          <p className="pb-2 text-md xl:text-xl 4xl:text-4xl text-center">
            Follow Us On Instagram
          </p>
        </div>
        222
        <div>
          <img src={jeep2} alt="" style={{ width: "750px" }} />
        </div>
      </motion.div>
      {/* --------------------------------------------------------------- */}
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.1 }}
        className="relative hidden lg:block 2xl:block md:hidden"
        style={{
          background:
            "linear-gradient(88deg, #43E3ED -21.82%, #FFE9E9 131.12%)",
        }}
      >
        {/* <p
          className="text-4xl 4xl:text-8xl lg:text-4xl xl:text-4xl font-bold text-right uppercase tracking-widest p-4 relative md:mx-auto 2xl:mx-10"
          style={{ zIndex: "2" }}
        >
          22Explore Exclusive MemberBenefit
        </p> */}
        <p className="font-bold text-center text-lg md:text-xl xl:text-lg 2xl:text-2xl special:text-3xl mb-5" style={{ letterSpacing: '12px', zIndex: "2" }}>
          @Winlads
        </p>
        <div className="transition duration-700 hover:scale-105">
          {/* <h3 className="font-bold mb-2 text-md xl:text-2xl 4xl:text-4xl">Homewares, Trades & Services</h3> */}
          <p className="pb-2 text-md xl:text-xl 4xl:text-4xl text-center">
            Follow Us On Instagram
          </p>
        </div>
        <div className="gallery-image lg:col-span-2 h-[500px]">
          <div className="lg:grid grid-cols-3 gap-0 m-0 p-4 relative">
            <div className="grid-cols-6">
              <img src={dragon} alt="" className="w-full h-auto p-4" style={{ height: "21%"}}/>
              <img src={dragon2} alt="" className="w-full h-auto p-4" />
            </div>
            <div className="grid-cols-3">
              <img src={cloud} alt="" className="w-full p-4" style={{ height: "20%"}}/>
              <img src={watermelon} alt="" className="w-full h-auto p-4" style={{ height: "20%"}}/>
            </div>
            <div className="grid-cols-3">
              <img src={pineapple} alt="" className="w-full h-auto p-4" style={{ height: "40%"}} />
            </div>
          </div>
          {/* <div className="lg:grid grid-cols-2 gap-0 m-0 p-0 relative">
    <img src={pineapple} alt="" className="w-full h-auto" />
  </div> */}
        </div>
        <div className="flex justify-center">
          {/* <motion.img
            variants={imageAnimate}
            // variants={{
            //   hidden: { opacity: 0, y: 75 },
            //   visible: { opacity: 1, y: 0 },
            // }}
            // initial="hidden"
            // animate={"visible"}
            // transition={{ duration: 0.5, delay: 0.25 }}
            src={jeep2}
            alt=""
            className="absolute 4xl:w-[1500px] lg:w-[400px] xl:w-[550px] special:w-[950px]"
            style={{ top: "30%", zIndex: "2" }}
          /> */}
        </div>
        {/* <img
          src={Ellipse3}
          alt=""
          className="absolute"
          style={{ top: "-50px", right: "0px", zIndex: "1" }}
        /> */}
      </motion.div>
    </>
  );
}

export default Gallery;

