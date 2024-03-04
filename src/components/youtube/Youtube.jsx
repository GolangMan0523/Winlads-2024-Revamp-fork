import carVideo from "../../assets/images/youtube/carAnim.mp4";
import ReactPlayer from "react-player";
import P1 from "../../assets/images/youtube/p1.png";
import P2 from "../../assets/images/youtube/p2.png";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const Youtube = () => {
  const videoUrl =
    "https://drive.google.com/uc?id=1dWgx17FgPmv6jfN-oN0X6MGLdM4rytOL";

  return (
    <div className="w-full mb-8" id="our-partners">
      <div className="w-full mx-auto bg-youtube py-4">
        <div className="flex mx-auto 2xl:max-w-[2400px] w-full items-center justify-center">
          {/* <div className="w-11/12 r-player">
            <ReactPlayer
              // url={videoUrl}
              controls={true}
              loop={true}
              width="100%"
              height="100%"
              playing={true}
              muted={true}
            />
          </div> */}
        </div>
      </div>
      
      {/* <motion.p
            initial={{ opacity: 0, y: "-40%" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ duration: 0.5, delay: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4 mt-4 text-base sm:text-lg 2xl:text-xl special:text-3xl font-bold uppercase xl:tracking-[18px] sm:tracking-[16px] tracking-[12px]"
          >
            SOME OUR PARTNERS
          </motion.p> */}
      <div className="flex flex-col space-y-2">
            <div className="flex flex-row items-center bg-gradient-to-r from-[#E83F3F] to-[#A20505] py-2 w-full h-[70px]">
              <Marquee>
                <div className="flex flex-row space-x-8">
                <p className="text-white text-lg hidden">|</p>
                  <p className="text-white font-bold text-lg">Stripe</p>
                  <p className="text-white text-lg">|</p>
                  <p className="text-white font-bold text-lg">Stripe</p>
                  <p className="text-white text-lg">|</p>
                  <p className="text-white font-bold text-lg">Stripe</p>
                  <p className="text-white text-lg">|</p>
                  <p className="text-white font-bold text-lg">Stripe</p>
                  <p className="text-white text-lg">|</p>
                  <p className="text-white font-bold text-lg">Stripe</p>
                  <p className="text-white text-lg">|</p>
                  <p className="text-white font-bold text-lg">Stripe</p>
                  <p className="text-white text-lg">|</p>
                  <p className="text-white font-bold text-lg">Stripe</p>
                  <p className="text-white text-lg">|</p>
                  <p className="text-white font-bold text-lg">Stripe</p>
                  <p className="text-white text-lg">|</p>
                  <p className="text-white font-bold text-lg">Stripe</p>
                  <p className="text-white text-lg">|</p>
                  <p className="text-white font-bold text-lg">Stripe</p>
                  <p className="text-white text-lg">|</p>
                  <p className="text-white font-bold text-lg">Stripe</p>
                  <p className="text-white text-lg">|</p>
                  <p className="text-white font-bold text-lg">Stripe</p>
                  <p className="text-white text-lg">|</p>
                  <p className="text-white font-bold text-lg">Stripe</p>
                  <p className="text-white text-lg">|</p>
                  <p className="text-white font-bold text-lg">Stripe</p>
                  <p className="text-white text-lg">|</p>
                  <p className="text-white font-bold text-lg">Stripe</p>
                  <p className="text-white text-lg">|</p>
                  <p className="text-white font-bold text-lg">Stripe</p>
                  <p className="text-white text-lg">|</p>
                  <p className="text-white font-bold text-lg">Stripe</p>
                  <p className="text-white text-lg">|</p>
                  
                </div>
              </Marquee>
            </div>
            {/* <img src={Stripe} className="w-full" /> */}
            {/* <img src={Nontera} className="w-full" /> */}

            <div className="flex flex-row items-center bg-white border-2 border-[#01819D] py-2 w-full h-[70px]">
              <Marquee direction="right">
                <div className="flex flex-row space-x-8">
                <p className="text-white text-lg hidden">|</p>
                  <p className="text-[#01819D] font-bold text-xl uppercase">
                    Nontera
                  </p>
                  <p className="text-[#01819D] text-lg">|</p>
                  <p className="text-[#01819D] font-bold text-xl uppercase">
                    Nontera
                  </p>
                  <p className="text-[#01819D] text-lg">|</p>
                  <p className="text-[#01819D] font-bold text-xl uppercase">
                    Nontera
                  </p>
                  <p className="text-[#01819D] text-lg">|</p>
                  <p className="text-[#01819D] font-bold text-xl uppercase">
                    Nontera
                  </p>
                  <p className="text-[#01819D] text-lg">|</p>
                  <p className="text-[#01819D] font-bold text-xl uppercase">
                    Nontera
                  </p>
                  <p className="text-[#01819D] text-lg">|</p>
                  <p className="text-[#01819D] font-bold text-xl uppercase">
                    Nontera
                  </p>
                  <p className="text-[#01819D] text-lg">|</p>
                  <p className="text-[#01819D] font-bold text-xl uppercase">
                    Nontera
                  </p>
                  <p className="text-[#01819D] text-lg">|</p>
                  <p className="text-[#01819D] font-bold text-xl uppercase">
                    Nontera
                  </p>
                  <p className="text-[#01819D] text-lg">|</p>
                  <p className="text-[#01819D] font-bold text-xl uppercase">
                    Nontera
                  </p>
                  <p className="text-[#01819D] text-lg">|</p>
                  <p className="text-[#01819D] font-bold text-xl uppercase">
                    Nontera
                  </p>
                  <p className="text-[#01819D] text-lg">|</p>
                  <p className="text-[#01819D] font-bold text-xl uppercase">
                    Nontera
                  </p>
                  <p className="text-[#01819D] text-lg">|</p>
                  <p className="text-[#01819D] font-bold text-xl uppercase">
                    Nontera
                  </p>
                  <p className="text-[#01819D] text-lg">|</p>
                  <p className="text-[#01819D] font-bold text-xl uppercase">
                    Nontera
                  </p>
                  <p className="text-[#01819D] text-lg">|</p>
                  <p className="text-[#01819D] font-bold text-xl uppercase">
                    Nontera
                  </p>
                  <p className="text-[#01819D] text-lg">|</p>
                  <p className="text-[#01819D] font-bold text-xl uppercase">
                    Nontera
                  </p>
                  <p className="text-[#01819D] text-lg">|</p>
                  <p className="text-[#01819D] font-bold text-xl uppercase">
                    Nontera
                  </p>
                  <p className="text-[#01819D] text-lg">|</p>
                  <p className="text-[#01819D] font-bold text-xl uppercase">
                    Nontera
                  </p>
                  <p className="text-[#01819D] text-lg">|</p>
                  <p className="text-[#01819D] font-bold text-xl uppercase">
                    Nontera
                  </p>
                  <p className="text-[#01819D] text-lg">|</p>
                  <p className="text-[#01819D] font-bold text-xl uppercase">
                    Nontera
                  </p>
                  <p className="text-[#01819D] text-lg">|</p>
                  <p className="text-[#01819D] font-bold text-xl uppercase">
                    Nontera
                  </p>
                  <p className="text-[#01819D] text-lg">|</p>
                  <p className="text-[#01819D] font-bold text-xl uppercase">
                    Nontera
                  </p>
                  <p className="text-[#01819D]text-lg">|</p>
                  <p className="text-[#01819D] font-bold text-xl uppercase">
                    Nontera
                  </p>
                  <p className="text-[#01819D] text-lg">|</p>
                  <p className="text-[#01819D] font-bold text-xl uppercase">
                    Nontera
                  </p>
                  <p className="text-[#01819D] text-lg">|</p>
                  <p className="text-[#01819D] font-bold text-xl uppercase">
                    Nontera
                  </p>
                  <p className="text-[#01819D] text-lg">|</p>
                  <p className="text-[#01819D] font-bold text-xl uppercase">
                    Nontera
                  </p>
                  <p className="text-[#01819D] text-lg">|</p>
                  <p className="text-[#01819D] font-bold text-xl uppercase">
                    Nontera
                  </p>
                  <p className="text-[#01819D] text-lg">|</p>
                  <p className="text-[#01819D] font-bold text-xl uppercase">
                    Nontera
                  </p>
                  <p className="text-[#01819D] text-lg">|</p>
                  <p className="text-[#01819D] font-bold text-xl uppercase">
                    Nontera
                  </p>
                  <p className="text-[#01819D] text-lg">|</p>
                  <p className="text-[#01819D] font-bold text-xl uppercase">
                    Nontera
                  </p>
                  <p className="text-[#01819D] text-lg">|</p>
                  <p className="text-[#01819D] font-bold text-xl uppercase">
                    Nontera
                  </p>
                  <p className="text-[#01819D] text-lg">|</p>
                </div>
              </Marquee>
            </div>
          </div>
      {/* <div className="w-full bg-white flex items-center justify-center py-10 lg:py-16">
        <div className="flex flex-col items-center justify-center 2xl:max-w-[2400px] lg:gap-8 gap-5">
          <motion.p
            initial={{ opacity: 0, y: "-40%" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ duration: 0.5, delay: 0 }}
            className="text-center text-base sm:text-lg 2xl:text-xl special:text-3xl font-bold uppercase xl:tracking-[18px] sm:tracking-[16px] tracking-[12px]"
          >
            SOME OUR PARTNERS
          </motion.p>

          <div className="flex items-center justify-center special:gap-16 xl:gap-10 lg:gap-8 md:gap-6 sm:gap-5 gap-4">
            <div className="flex items-center justify-center">
              <motion.img
                initial={{ opacity: 0, x: "-10%" }}
                whileInView={{ opacity: 1, x: "0" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                src={P1}
                alt=""
                className="special:w-full xl:w-11/12 lg:w-10/12 md:w-8/12 w-8/12"
              />
            </div>
            <div className="flex items-center justify-center">
              <motion.img
                initial={{ opacity: 0, x: "10%" }}
                whileInView={{ opacity: 1, x: "0" }}
                transition={{ duration: 0.5, delay: 0.6 }}
                src={P2}
                alt=""
                className="special:w-full xl:w-11/12 lg:w-10/12 md:w-8/12 w-8/12"
              />
            </div>
          </div>

       
        </div>
      </div> */}
    </div>
  );
};

export default Youtube;
