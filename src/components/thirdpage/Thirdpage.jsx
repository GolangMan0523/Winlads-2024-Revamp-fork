import jeep3 from "../../assets/images/jeep3.png";
import partner1 from "../../assets/images/partners/partner1.png";
import partner2 from "../../assets/images/partners/partner2.png";
import partner3 from "../../assets/images/partners/partner3.png";
import partner4 from "../../assets/images/partners/partner4.png";
import partner5 from "../../assets/images/partners/partner5.png";
import partner6 from "../../assets/images/partners/partner6.png";
import tick from "../../assets/images/tick.png";
import "./Thirdpage.css";

import { motion, useInView, useAnimation } from "framer-motion";

const imageAnimate = {
  offscreen: { x: -50, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const textAnimate = {
  offscreen: { y: -100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

function Thirdpage() {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0 }}
      style={{
        paddingBottom: "50px",
        height: "auto",
        position: "relative",
        background: "linear-gradient(88deg, #43E3ED -21.82%, #FFE9E9 131.12%)",
      }}
    >

      <div className="lg:grid gap-2 md:pl-8" style={{ marginTop: -30
       }}>
        <div className=" text-center p-2 4xl:p-4 relative xl:mx-32 lg:mx-24 items-center">
      
          <h1 className="uppercase font-bold text-2xl">Welcome to WINLADS</h1>
          <p className="mt-5 font-bold linehi">Get ready to dive into an epic network of over 1,000 Aussie mate-approved stores! We've cherry-picked these spots to give you ripper discounts that'll make your wallet smile. Starting at just $ 9.99 a month, you'll be swimming in savings!</p>
          <p className="mt-5 font-bold linehi">Picture this: you're kicking back, chilling, and earning easy cash—yeah, it's possible! We've got a stash of unreal deals waiting for ya. Plus, sling our program to your mates, and you'll be raking in dosh on the side. No worries, it's that easy!</p>
          <a href="/register" className="inline-block mt-5 mb-5">
            <div className="flex justify-center px-4 py-4 2xl:px-8  border-black 2xl:py-6 2xl:text-xl text-md font-bold items-center text-white buttonBg frontbtns" style={{ borderRadius: '5px', cursor: 'pointer' }}>
              Sign Up for Free
            </div>
          </a>
        </div>

      </div>
      <div className="md:pr-0 2xl:pr-10 mt-2 bg-[#EDFDFD]">
        <br />
        <p className="text-lg 4xl:text-6xl xl:text-3xl md:text-4xl font-bold uppercase tracking-widest p-4 text-center lg:text-4xl lg:text-center 4xl:text-center xl:text-center">
          Some our Partners
        </p>
        <div className="flex justify-center lg:justify-center ml-10 lg:ml-0">
          <div className="m-5">
            <img src={partner5} alt="" className="w-[180px] 2xl:w-[360px]" />
          </div>
          <div className="m-5">
            <img src={partner6} alt="" className="w-[180px] 2xl:w-[360px]" />
          </div>
          {/* <div className="m-5">
            <img src={partner3} alt="" style={{ width: "180px" }} />
          </div>
          <div className="m-5">
            <img src={partner4} alt="" style={{ width: "180px" }} />
          </div> */}
        </div>
        <br />
      </div>
    </motion.div>
  );
}

export default Thirdpage;
