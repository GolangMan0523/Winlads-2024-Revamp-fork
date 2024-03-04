import jeep2 from "../../assets/images/jeep2.png";
import Car from "../../assets/images/car.jpeg";
import carVideo from "../../assets/images/carAnim.mp4";
import Vector1 from "../../assets/images/Vector1.png";
import Vector2 from "../../assets/images/Vector2.png";
import Vector3 from "../../assets/images/Vector3.png";
import Ellipse2 from "../../assets/images/Ellipse2.png";
import Frame from '../../assets/images/framecar.png'
import googleplay from "../../assets/images/googleplay.png";
import appstore from "../../assets/images/appstore.png";
import Xlgoogleplay from "../../assets/images/2Xlgoogleplay.png";
import Xlappstore from "../../assets/images/2Xlappstore.png";
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

function ChechSecondPage() {
    return (
        <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0 }}
            style={{
                background: "linear-gradient(88deg, #43E3ED -21.82%, #FFE9E9 131.12%)",

            }}
            className="pt-24 overflow-hidden"
        >
            <div className="framecar h-full">
                {/* <img src={Frame} className="w-full" alt="" /> */}
                <br />
                <div className="statuslinks">
                    <div>
                        <h1>750<span>+</span></h1>
                        <span>Australian bussiness partners</span>
                    </div>
                    <div>
                        <h1>750<span>+</span></h1>
                        <span>In savings through our mates rates discounts</span>
                    </div>
                    <div>
                        <h1>1000<span>+</span></h1>
                        <span>Stores you can redeem offers In person or online</span>
                    </div>

                </div>
                <div className="flex justify-center gap-5 mt-4 z-10 mb-10">
                    <img
                        src={appstore}
                        style={{ cursor: "pointer", height: 50 }}
                        className="4xl:hidden md:w-auto hover:opacity-75"
                    />
                    <img
                        src={googleplay}
                        style={{ cursor: "pointer", height: 50 }}
                        className="4xl:hidden md:w-auto hover:opacity-75"
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

                </div>
                <br />
            </div>

            <div className="p-5 md:pl-16 pl-8 h-auto  lg:px-40 xl:px-32 4xl:px-80 relative mt-14" >
                <div className="flex flex-col xl:flex-row xl:justify-between">
                    <motion.div
                        variants={textAnimate}
                        className="xl:w-2/5 w-full xl:max-w-[680px]"
                    >

                        <div className="transition duration-700 hover:scale-105">
                            <h3 className="font-bold mb-2 text-md xl:text-2xl 4xl:text-4xl">Winlads Referral System</h3>
                            <p className="pb-2 text-md xl:text-xl 4xl:text-4xl">
                                Unlock rewards and passive income through Winlads Referral System. Refer friends and family, earn commissions, and watch your network grow organically. Your referrals could be your pathway to ongoing rewards
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
                            <h3 className="font-bold mb-2 text-md xl:text-2xl 4xl:text-4xl">Winlads Urgency Program</h3>
                            <p className="pb-2 text-md xl:text-xl 4xl:text-4xl">
                                Experience the support you need during critical times with Winlads Urgency Program. Submit your proposal through our platform for a chance at assistance, subject to eligibility. We're here to help when it matters most
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
                            <h3 className="font-bold mb-2 text-md xl:text-2xl 4xl:text-4xl">Winlads LuxLife </h3>
                            <p className="pb-2 text-md xl:text-xl 4xl:text-4xl pr-4">
                                Indulge in luxury with Winlads Lux. Experience weekly giveaways and exclusive offerings, elevating your lifestyle and adding a touch of opulence to your .                            </p>
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
            </div>
        </motion.div>
    );
}


export default ChechSecondPage

