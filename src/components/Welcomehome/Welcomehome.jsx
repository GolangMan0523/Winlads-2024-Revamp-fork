import bgCar from "../../assets/images/Hjeep.png";
import googleplay from "../../assets/images/googleplay.png";
import appstore from "../../assets/images/appstore.png";
import Xlgoogleplay from "../../assets/images/2Xlgoogleplay.png";
import Xlappstore from "../../assets/images/2Xlappstore.png";

import { motion, useInView, useAnimation } from "framer-motion";

export const bgStyle = {
    backgroundImage: `url(${bgCar})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: "auto"
};

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
    offscreen: { y: -20, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        rotate: [0, 10, 0],
        transition: { type: "spring", bounce: 0.4, duration: 1 },
    },
};

const textAnimate2 = {
    offscreen: { y: 20, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        rotate: [0, 10, 0],
        transition: { type: "spring", bounce: 0.4, duration: 1 },
    },
};

function Welcomehome() {
    return (
        <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0 }}
            style={{
                background: "linear-gradient(88deg, #43E3ED -21.82%, #FFE9E9 131.12%)",
            }}
            className="overflow-hidden"
        >
            <div className="md:pr-0 2xl:pr-10 pt-10 pb-4 h-auto" style={{ background: "white" }}
            >

                <div className="xl:hidden">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <div className="flex flex-col space-y-1">
                            <p className="text-[#01819D] xl:text-4xl md:text-4xl 4xl:text-6xl text-2xl font-semibold">
                                7500<span className="text-gray-600">+</span>
                            </p>
                            <p className="text-[10px] text-center">
                                Australian business
                                <br />  partners
                            </p>
                        </div>
                        <div className="flex flex-col space-y-1" style={{ margin: "0px 100px 0px 100px" }}>
                            <p className="text-[#01819D] xl:text-4xl md:text-4xl 4xl:text-6xl text-2xl  font-semibold">
                                1000<span className="text-gray-600">'s</span>
                            </p>
                            <p className="text-[10px] text-center">
                                In savings through
                                <br /> our partner discount
                            </p>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <p className="text-[#01819D] xl:text-4xl md:text-4xl 4xl:text-6xl text-2xl  font-semibold">
                                1000<span className="text-gray-600">+</span>
                            </p>
                            <p className="text-[10px] text-center">
                                Stores you can redeem
                                <br /> offers in person or online
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center z-10">
                        <img
                            src={appstore}
                            style={{ cursor: "pointer", marginRight: "10px" }}
                            className="4xl:hidden w-1/2 md:w-auto"
                        />
                        <img
                            src={googleplay}
                            style={{ cursor: "pointer", marginLeft: "10px" }}
                            className="4xl:hidden w-1/2 md:w-auto"
                        />
                        <img
                            src={Xlappstore}
                            style={{ cursor: "pointer" }}
                            className="hidden 4xl:block"
                        />
                        <img
                            src={Xlgoogleplay}
                            style={{ cursor: "pointer" }}
                            className="hidden 4xl:block"
                        />
                        {/* <div className="background-container">
          <img
              src={winladsCard}
              className="w-16 2xl:w-24 special:w-36 md:w-36"
              alt="Winlads Card"
            />
          </div> */}
                    </div>
                </div>

              {/* <img
                    src={Car}
                    width="100%"
                    height="250px"
                /> */}

                <div className="hidden xl:flex flex-col">
                    {/* <div className="vissible xl:flex-row"> */}
                    <div className="flex flex-row items-center justify-center gap-4">
                        <div className="flex flex-col space-y-1">
                            <p className="text-[#01819D] xl:text-4xl md:text-4xl 4xl:text-6xl text-2xl font-semibold">
                                750<span className="text-gray-600">+</span>
                            </p>
                            <p className="text-[10px] text-center">
                                Australian business
                                <br />  partners
                            </p>
                        </div>
                        <div className="flex flex-col space-y-1" style={{ margin: "0px 100px 0px 100px" }}>
                            <p className="text-[#01819D] xl:text-4xl md:text-4xl 4xl:text-6xl text-2xl  font-semibold">
                                1000<span className="text-gray-600">'s</span>
                            </p>
                            <p className="text-[10px] text-center">
                                In savings through
                                <br /> our partner discount
                            </p>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <p className="text-[#01819D] xl:text-4xl md:text-4xl 4xl:text-6xl text-2xl  font-semibold">
                                1000<span className="text-gray-600">+</span>
                            </p>
                            <p className="text-[10px] text-center">
                                Stores you can redeem
                                <br /> offers in person or online
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-4 z-10">
                        <img
                            src={appstore}
                            style={{ cursor: "pointer", marginRight: "10px" }}
                            className="4xl:hidden w-1/2 md:w-auto"
                        />
                        <img
                            src={googleplay}
                            style={{ cursor: "pointer", marginLeft: "10px" }}
                            className="4xl:hidden w-1/2 md:w-auto"
                        />
                        <img
                            src={Xlappstore}
                            style={{ cursor: "pointer" }}
                            className="hidden 4xl:block"
                        />
                        <img
                            src={Xlgoogleplay}
                            style={{ cursor: "pointer" }}
                            className="hidden 4xl:block"
                        />
                        {/* <div className="background-container">
          <img
              src={winladsCard}
              className="w-16 2xl:w-24 special:w-36 md:w-36"
              alt="Winlads Card"
            />
          </div> */}
                    </div>
                    {/* </div> */}
                </div>
                {/* <img
                    src={Car}
                    width="100%"
                    height="250px"
                /> */}
                {/* <video
                    className="video"
                    width="100%"
                    height="250px"
                    controls
                >
                    <source src={carVideo} type="video/mp4" />
                </video> */}

            </div>

            <div className="vissible xl:flex-row p-5 md:pl-16 pl-8 h-auto lg:h-screen  lg:px-40 xl:px-32 4xl:px-80 relative" style={bgStyle}>

                <p className="font-bold text-center text-lg md:text-xl xl:text-lg 2xl:text-2xl special:text-3xl" style={{ letterSpacing: '12px' }}>
                    WELCOME TO WINLADS
                </p>
                <div className="transition duration-700 hover:scale-105 mt-10">
                    {/* <h3 className="font-bold mb-2 text-md xl:text-2xl 4xl:text-4xl">Homewares, Trades & Services</h3> */}
                    <p className="pb-2 text-md xl:text-xl 4xl:text-4xl text-center">
                        Get ready to dive into an epic network of over 1,000 Aussie mate-approved stores! We've cherry-picked these spots to give you ripper
                    </p>
                    <p className="pb-2 text-md xl:text-xl 4xl:text-4xl text-center">
                        discounts that'll make your wallet smile. Starting at just $ 9.99 a month, you'll be swimming in savings!
                    </p>
                </div>
                <div className="transition duration-700 hover:scale-105 mt-10 mb-10">
                    {/* <h3 className="font-bold mb-2 text-md xl:text-2xl 4xl:text-4xl">Homewares, Trades & Services</h3> */}
                    <p className="pb-2 text-md xl:text-xl 4xl:text-4xl text-center">
                        Picture this: you're kicking back, chilling, and earning easy cash—yeah, it's possible! We've got a stash of unreal deals waiting for ya. Plus,
                    </p>
                    <p className="pb-2 text-md xl:text-xl 4xl:text-4xl text-center">
                        sling our program to your mates, and you'll be raking in dosh on the side. No worries, it's that easy!
                    </p>
                </div>
                <div className="flex justify-center z-10">
                    {/* <Link to="/register"> */}
                    <div
                        className="flex justify-center px-4 py-4 2xl:px-8  border-black 2xl:py-6 2xl:text-xl text-md font-bold items-center text-white buttonBgBlack frontbtns"
                        style={{
                            //   display: "inline-block",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                    >
                        Get Started
                    </div>
                    {/* </Link> */}
                </div>
                {/* <div className="p-5 md:pl-16 pl-8 h-auto lg:h-screen  lg:px-40 xl:px-32 4xl:px-80 relative" >
                <div className="flex flex-col xl:flex-row xl:justify-between">
                    <motion.div
                        variants={textAnimate}
                        className="xl:w-2/5 w-full xl:max-w-[680px]"
                    >

                        <div className="transition duration-700 hover:scale-105">
                            <h3 className="font-bold mb-2 text-md xl:text-2xl 4xl:text-4xl">Homewares, Trades & Services</h3>
                            <p className="pb-2 text-md xl:text-xl 4xl:text-4xl">
                                Homewares, Trades & Services We ve teamed up with the best in the
                                business. Get great deals on Furniture, homeware & decor,
                                electrical, plumbing and more!
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={textAnimate2}
                        className="xl:w-1/3 w-full"
                        style={{
                            //position: "absolute",
                            right: "240px",
                            zIndex: "2",
                        }}
                    >
                        <div className="transition duration-700 hover:scale-105">
                            <h3 className="font-bold mb-2 text-md xl:text-2xl 4xl:text-4xl">Automotive</h3>
                            <p className="pb-2 text-md xl:text-xl 4xl:text-4xl">
                                Your one-stop-shop for exclusive offers from Australia's leading
                                performance & tuning workshops, panel beaters, aftermarket part &
                                accessories, and everything else automotive
                            </p>
                        </div>
                    </motion.div>
                </div>

                <img
                    src={Ellipse2}
                    alt=""
                    className="-z-10 xl:z-[1] hidden"
                    style={{
                        position: "absolute",
                        right: "0px",
                        top: "-500px",
                    }}
                />
                <div className="flex flex-col xl:flex-row xl:justify-between items-center mt-0 md:mt-10">
                    <motion.div
                        variants={textAnimate}
                        className="xl:w-3/5 w-full xl:max-w-[680px]"
                    >
                        <div className="transition duration-700 hover:scale-105">
                            <h3 className="font-bold mb-2 text-md xl:text-2xl 4xl:text-4xl">Merchandise</h3>
                            <p className="pb-2 text-md xl:text-xl 4xl:text-4xl pr-4">
                                Exclusive merchandise offers and designs from both Winlads and our
                                Benefits. Great quality swag from your favourite brands. Including
                                some exclusive designs from bags, T shirts and more.
                            </p>
                        </div>
                    </motion.div>
                    <div
                        className="xl:scale-150 xl:ml-28"
                    >
                        <motion.img
                            variants={imageAnimate}
                            src={jeep2}
                            className="xl:w-1/2 w-full"
                        />
                    </div>
                </div>
            </div> */}
            </div>

            {/* <p className="font-bold text-center text-lg md:text-xl xl:text-lg 2xl:text-2xl special:text-3xl mt-10 mb-10" style={{ letterSpacing: '12px' }}>
                WINLADS SERVICES
            </p>

            <div className="p-5 md:pl-16 pl-8 h-auto lg:h-screen  lg:px-40 xl:px-32 4xl:px-80 relative" >
                <div className="flex flex-col xl:flex-row xl:justify-between">
                    <motion.div
                        variants={textAnimate}
                        className="xl:w-2/5 w-full xl:max-w-[680px]"
                    >

                        <div className="transition duration-700 hover:scale-105">
                            <h3 className="font-bold mb-2 text-md xl:text-2xl 4xl:text-4xl">Homewares, Trades & Services</h3>
                            <p className="pb-2 text-md xl:text-xl 4xl:text-4xl">
                                Homewares, Trades & Services We ve teamed up with the best in the
                                business. Get great deals on Furniture, homeware & decor,
                                electrical, plumbing and more!
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={textAnimate2}
                        className="xl:w-1/3 w-full"
                        style={{
                            //position: "absolute",
                            right: "240px",
                            zIndex: "2",
                        }}
                    >
                        <div className="transition duration-700 hover:scale-105">
                            <h3 className="font-bold mb-2 text-md xl:text-2xl 4xl:text-4xl">Automotive</h3>
                            <p className="pb-2 text-md xl:text-xl 4xl:text-4xl">
                                Your one-stop-shop for exclusive offers from Australia's leading
                                performance & tuning workshops, panel beaters, aftermarket part &
                                accessories, and everything else automotive
                            </p>
                        </div>
                    </motion.div>
                </div>

                <img
                    src={Ellipse2}
                    alt=""
                    className="-z-10 xl:z-[1] hidden"
                    style={{
                        position: "absolute",
                        right: "0px",
                        top: "-500px",
                    }}
                />
                <div className="flex flex-col xl:flex-row xl:justify-between items-center mt-0 md:mt-10">
                    <motion.div
                        variants={textAnimate}
                        className="xl:w-3/5 w-full xl:max-w-[680px]"
                    >
                        <div className="transition duration-700 hover:scale-105">
                            <h3 className="font-bold mb-2 text-md xl:text-2xl 4xl:text-4xl">Merchandise</h3>
                            <p className="pb-2 text-md xl:text-xl 4xl:text-4xl pr-4">
                                Exclusive merchandise offers and designs from both Winlads and our
                                Benefits. Great quality swag from your favourite brands. Including
                                some exclusive designs from bags, T shirts and more.
                            </p>
                        </div>
                    </motion.div>
                    <div
                        className="xl:scale-150 xl:ml-28"
                    >
                        <motion.img
                            variants={imageAnimate}
                            src={jeep2}
                            className="xl:w-1/2 w-full"
                        />
                    </div>
                </div>
            </div> */}
        </motion.div>
    );
}


export default Welcomehome

