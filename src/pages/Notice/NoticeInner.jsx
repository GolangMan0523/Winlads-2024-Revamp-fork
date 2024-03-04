import SideNav from "../../components/SideNav/SideNav";
import MainCar from "../../assets/images/MainCar.png";
import GoldCard from "../../components/GoldCard/GoldCard";
import TopNav from "../../components/TopNav/TopNav";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import Male from "../../assets/images/notice/Male.png";
import SearchField from "../../components/SearchField/SearchField";
import BG from "../../assets/images/HomesideBg.png";
import bgCar from "../../assets/images/hiddenCar.png";

export const bgStyle = {
  backgroundImage: `url(${bgCar})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
};


function NoticeInner() {
  const [isLoading, setIsLoading] = useState(true);

  // set loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    // <>
    //   {isLoading ? (
    //     <Loader />
    //   ) : (
    //     <div>
    //       <div>
    //         <div className="flex relative max-w-[2048px] mx-auto">
    //           {/* side-nav */}

    //           <SideNav screen="full" />
    //           <div className="flex flex-col flex-1 gap-5">
    //             <div className="invisible lg:visible pt-5">
    //               <TopNav />
    //             </div>

    // <div className="w-full h-[550px] sm:h-[500px] md:h-[450px]  flex flex-col bg-notice-inner ">
    //   <div className="flex items-center justify-center  gap-5 ">
    //     <img src={Male} alt="" className="" />
    //     <div className="">
    //       <p className=" font-semibold text-lg md:text-xl">
    //         Kathryn Murphy
    //       </p>
    //       <p className="text-gray-700">Kathryn sent you $0</p>
    //     </div>
    //   </div>

    //   <div className="mt-5 sm:mt-10 overflow-hidden mx-auto w-4/5 sm:w-2/3 ">
    //     <span className="sm:text-base text-sm text-gray-900">
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //       Veniam harum repellendus exercitationem quos minus. Nulla
    //       nam nihil ipsum exercitationem, voluptates tenetur culpa
    //       tempore accusamus tempora, optio ducimus ea veritatis
    //       autem! Perferendis et inventore porro. Aliquam suscipit
    //       architecto animi iure accusamus numquam beatae, excepturi
    //       rerum quibusdam deserunt, itaque, vitae laborum nam. Lorem
    //       ipsum dolor sit amet, consectetur adipisicing elit. Veniam
    //       harum repellendus laborum nam.
    //     </span>
    //   </div>
    // </div>
    //           </div>

    //           {/* home-content */}
    //           <div className="flex flex-col lg:flex-row  flex-1 mx-5 gap-5">
    //             {/* left side */}
    //             <div className="flex flex-col flex-1 ">
    //               <div className="visible lg:hidden space-y-4">
    //                 <div className="bg-black rounded-b-3xl py-4">
    //                   <TopNav textColor={"white"} />
    //                   <div className="pt-10">
    //                     <motion.img
    //                       initial={carAnimation.initialMobile}
    //                       animate={carAnimation.animate}
    //                       transition={carAnimation.transition}
    //                       className="w-4/5"
    //                       src={MainCar}
    //                       alt="main"
    //                     />
    //                   </div>
    //                 </div>
    //                 <div className="lg:w-2/3 md:w-1/2">
    //                   <GoldCard />
    //                 </div>
    //               </div>
    //               <div className="hidden lg:flex flex-col space-y-4">
    //                 <div className="bg-black rounded-b-3xl space-y-4">
    //                   <div className="flex flex-row items-center bg-[#333333] gap-4 mx-5 rounded-full px-4 mt-5">
    //                     <img src={Spicker} alt="" className="w-8 h-8" />
    //                     <span className="text-sm text-white">
    //                       Your golden card is about to expire in 30 days. Renew
    //                       now!
    //                     </span>
    //                   </div>
    //                   <div className="flex flex-row items-center bottom-0  relative h-[500px]">
    //                     <img
    //                       src={HiddenCar}
    //                       alt="hidden-car"
    //                       className="w-84 h-48"
    //                     />

    //                     <motion.img
    //                       initial={carAnimation.initial}
    //                       animate={carAnimation.animate}
    //                       transition={carAnimation.transition}
    //                       src={MainCar}
    //                       alt="main"
    //                       className="absolute right-5"
    //                     />
    //                   </div>
    //                 </div>
    //                 <div className="">
    //                   <GoldCard />
    //                 </div>
    //               </div>
    //             </div>

    //             {/* right-side */}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </>
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex relative min-h-screen">
          <SideNav screen="screen" />

          {/* home-content */}
          <div className="xl:flex xl:flex-row flex-col xl:justify-between flex-1 px-4 2xl:px-8 special:px-12 xl:gap-4 pb-5 space-y-4 xl:space-y-0 special:gap-8">
            {/* <div className="side-bg" style={{ height: "500px" }}></div> */}
            <img
              src={BG}
              alt=""
              className="absolute right-0 -z-10 top-10 w-72 xl:w-96 md:w-96 special:w-1/3 2xl:w-1/4 special:top-80 opacity-60"
            />
            {/* left side */}
            <div className="flex flex-col space-y-4 flex-1 special:pt-16">
              <div className="visible xl:hidden space-y-4">
                <div className="bg-black rounded-b-3xl py-4">
                  <TopNav textColor={"white"} />
                  <div className="pt-10">
                    <img className="" src={MainCar} alt="main" />
                  </div>
                </div>

                <div className="flex md:flex-row flex-col space-y-2 md:space-y-0 gap-2">
                  <div className="w-full">
                    <GoldCard />
                  </div>
                </div>
              </div>
              {/* <form className="form-inline relative">
                <input
                  className="form-control mr-sm-2 outline-none bg-gray-300 special:placeholder:text-2xl 2xl:placeholder:text-xl"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{
                    border: "none",
                    marginBottom: "0px",
                    width: "100%",
                    height: "50px",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                />
                <button className="absolute top-3 right-5">
                  <IoIosOptions className="text-2xl" />
                </button>
              </form> */}
              <SearchField />
              <div className="w-full justify-start special:space-y-16  flex flex-col bg-notice-inner 2xl:pt-10 special:px-16 special:pt-24" style={bgStyle}>
                <div className="flex items-start gap-5 ">
                  <img src={Male} alt="" className="special:w-36 2xl:w-20" />
                  <div className="">
                    <p className=" font-semibold text-lg md:text-xl special:text-5xl 2xl:text-3xl">
                      Kathryn Murphy
                    </p>
                    <p className="text-gray-700 special:text-4xl 2xl:text-2xl">
                      Kathryn sent you $ 0
                    </p>
                  </div>
                </div>

                <div className="mt-5 sm:mt-10 overflow-hidden mx-auto xl:ml-10">
                  <span className="sm:text-base text-sm text-gray-900 special:text-4xl 2xl:text-2xl special:leading-normal">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Veniam harum repellendus exercitationem quos minus. Nulla
                    nam nihil ipsum exercitationem, voluptates tenetur culpa
                    tempore accusamus tempora, optio ducimus ea veritatis autem!
                    Perferendis et inventore porro. Aliquam suscipit architecto
                    animi iure accusamus numquam beatae, excepturi rerum
                    quibusdam deserunt, itaque, vitae laborum nam. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Veniam harum
                    repellendus laborum nam.
                  </span>
                </div>
              </div>
              {/* <GucciCard /> */}
            </div>

            {/* right-side */}
            <div className="flex-col flex-1 space-y-4 hidden xl:flex">
              <div className=" space-y-4">
                <div className="bg-black rounded-b-3xl py-4">
                  <TopNav textColor={"white"} />
                  <div className="pt-10">
                    <motion.img
                      initial={{ x: 80, opacity: 0 }} // Initial position and opacity (hidden)
                      animate={{ x: 0, opacity: 1 }} // Move and fade in when in view
                      transition={{ type: "tween", duration: 1, delay: 1 }}
                      className="w-full"
                      src={MainCar}
                      alt="main"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <GoldCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NoticeInner;
