import jeep from "../../assets/images/jeep.png";
import Plancard from "../plancard/Plancard";
import { motion } from "framer-motion";
import "./FifthPage.css";

const imageAnimate = {
  offscreen: { y: -20, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

function Fifthpage() {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.1 }}
      className="relative pt-[150px] 4xl:pt-[300px] pb-10"
      style={{
        background: "linear-gradient(88deg, #43E3ED -21.82%, #FFE9E9 131.12%)",
      }}
    >
      <p
        className="w-full  ml-auto text-center xl:mb-4 text-xl 4xl:text- font-bold uppercase tracking-widest p-4 4xl:pb-8 lg:text-4xl xl:text-center xl:pr-16 relative"
        style={{ zIndex: "2" }}
      >
        Choose a Subscription plan
      </p>
      <div className="lg:grid grid-cols-1">
        <div
          className="hidden lg:block"
          style={{ background: "", height: "50px" }}
        ></div>
        <div className="lg:col-span-2 h-auto">
          <div
            className="lg:grid grid-cols-3 gap-2 m-5 relative"
            style={{ zIndex: "2" }}
          >
            <div className="text-black mb-4 lg:mb-0">
              <div
                className="flex flex-col space-y-4 2xl:py-4 2xl:space-y-4 allcolor-white  justify-center items-center rounded-xl m-auto transition duration-700  lg:mr-0"
                style={{
                  // width: "80%",
                  height: '100%',
                  background:
                    "linear-gradient(0deg, #D4D4D4 0%, #D4D4D4 33%)",
                }}
              >
                <p className="mt-4 font-bold p-2 2xl:text-xl border-black rounded-md">
                  Starter Tier                </p>
                <p className="text-4xl 2xl:text-6xl">$ 9.99</p>
                <p className="2xl:text-2xl">User/Month</p>
                <div className="flex flex-col space-y-2 text-center">
                  <p className="2xl:text-2xl"> -Entry Tier</p>
                  <p className="2xl:text-2xl">   - Referral Commission: 2.5%  </p>
                  <p className="2xl:text-2xl">- Partner Store Discounts: 10% discount for 1 month upon sign-up</p>

                  <br></br>                  <br></br><br></br>                  <br></br>
                </div>

                <button
                  className="2xl:text-xl border-2 bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 2xl:py-4 2xl:px-6 rounded"
                  style={{ marginBottom: "10px" }}
                >
                  Basic
                </button>
              </div>
            </div>
            <div className="p-0 mb-4 lg:mb-0" style={{ background: "" }}>
              <div
                className="flex flex-col space-y-4 2xl:py-4 2xl:space-y-4 justify-center items-center rounded-xl transition duration-700"
                style={{
                  // width: "80%",
                  height: '100%',
                  background:
                    "linear-gradient(90deg, #CA9E03 0%, #CA9E03 90%)",
                  margin: "auto",
                }}
              >
                <p className="mt-4 font-bold 2xl:text-xl p-2 border-black rounded-md">
                  Boomer Tier
                </p>
                <p className="text-4xl 2xl:text-6xl">$ 19.99</p>
                <p className="2xl:text-2xl">User/Month</p>
                <div className="flex flex-col space-y-2 text-center">
                  <p className="2xl:text-2xl">
                    -Growth Tier
                  </p>
                  <p className="2xl:text-2xl">    - Referral Commission: 5%</p>
                  <p className="2xl:text-2xl">        - Access to partner store database at a 10% discount for 3 months</p>
                  <p className="2xl:text-2xl">     - Partner Store Discounts: 10% discount for 3 months</p>
          
                  <br></br>                  <br></br> <br />
                </div>

                <button
                  className="2xl:text-xl border-2 bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 2xl:py-4 2xl:px-6 rounded"
                  style={{ marginBottom: "10px" }}
                >
                  Intermediate
                </button>
                        
              </div>
              
            </div>
            <div className="p-0 lg:mb-0 mb-4" style={{ background: "" }}>
              <div
                className="flex flex-col space-y-4 2xl:py-4 2xl:space-y-4 justify-center items-center rounded-xl m-auto transition duration-700 lg:mr-0"
                style={{
                  // width: "80%",
                  height: '100%',
                  background:
                  "linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 90%)",
                }}
              >
                <p className="mt-4 font-bold p-2 2xl:text-xl border-black rounded-md">
                  Platinum Tier
                </p>
                <p className="text-4xl 2xl:text-6xl">$ 49.99</p>
                <p className="2xl:text-2xl">User/Month</p>
                <div className="flex flex-col space-y-2 text-center">
                  <p className="2xl:text-2xl">
                    -Elite Tier
                  </p>
                  <p className="2xl:text-2xl">Winlands Events Invi   - Referral Commission: 10%</p>
                  <p className="2xl:text-2xl">   - Partner Store Database Access:</p>
                  <p className="2xl:text-2xl">     - Access to partner store database at a 10%-15% discount for 3 months</p>
                  <p className="2xl:text-2xl">   - Partner Store Discounts: 10%-15% discount for 6 months</p>
                  <p className="2xl:text-2xl">   - Access to Winlads  Public Events </p>

                </div>

                <button
                  className="2xl:text-xl border-2 bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 2xl:py-4 2xl:px-6 rounded"
                  style={{ marginBottom: "10px" }}
                >
                  Advanced
                </button>
              </div>
            </div>
            <div className="text-white mb-4 lg:mb-0">
              <motion.img
                //variants={imageAnimate}
                src={jeep}
                alt=""
                className="static lg:absolute w-[750px] 4xl:w-[1500px] xl:w-[800px] lg:w-[800px]"
                style={{ top: "48%", left: "-50px", zIndex: "3", pointerEvents: 'none' }}
              />
            </div>
            <div className="text-black mb-4 lg:mb-0">
              <div
                className="flex flex-col space-y-4 2xl:py-4 2xl:space-y-4 justify-center items-center rounded-xl m-auto transition duration-700 md:px-12"
                style={{
                  // width: "80%",
                  height: '100%',
                  background:
                  "linear-gradient(90deg, #FFF400 0%, #CA9E03 90%)",
                  //margin: "auto",
                  //marginRight: "0px",
                }}
              >
                <p className="mt-4 font-bold p-2 2xl:text-xl border-black rounded-md">
                  Gold
                </p>
                <p className="text-4xl 2xl:text-6xl">$ 100</p>
                <p className="2xl:text-2xl">User/Month</p>
                <div className="flex flex-col space-y-2 text-center">
                  <p className="2xl:text-2xl">
                    -  Premium Tier
                  </p>
                  <p className="2xl:text-2xl">   - Referral Commission: 17.5%</p>
                  <p className="2xl:text-2xl">   - Partner Store Database Access</p>
                  <p className="2xl:text-2xl">   - Access to partner store database at a 15% discount for 12 months</p>
                  <p className="2xl:text-2xl">  - Access to Winlads Urgency Program</p>
                  <p className="2xl:text-2xl">  - Access to Winlads  Public Events
                  </p>
                  <br></br>                  <br></br><br></br>                  
                </div>

                <button
                  className="2xl:text-xl border-2 bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 2xl:py-4 2xl:px-6 rounded"
                  style={{ marginBottom: "10px" }}
                >
                  Gold
                </button>
              </div>
            </div>
            <div className="text-white mb-4 lg:mb-0">
              <div
                className="flex flex-col space-y-4 2xl:py-4 2xl:space-y-4 justify-center items-center rounded-xl m-auto transition duration-700 md:px-12"
                style={{
                  height: '100%',
                  // width: "80%",
                  background:
                  "linear-gradient(90deg, #000000 0%, #000000 90%)",
                  //margin: "auto",
                  //marginRight: "0px",
                }}
              >
                <p className="mt-4 font-bold p-2 2xl:text-xl border-black rounded-md">
                  Black
                </p>
                <p className="text-4xl 2xl:text-6xl">$ 500</p>
                <p className="2xl:text-2xl">User/Month</p>
                <div className="flex flex-col space-y-2 text-center">
                  <p className="2xl:text-2xl">
                  - Ultimate Tier

                  </p>
                  <p className="2xl:text-2xl">   - Referral Commission: 25%</p>
                  <p className="2xl:text-2xl">    - Partner Store Discounts rates ranging upto 20%</p>
                  <p className="2xl:text-2xl">      - 12 months access to premium merchant discounts upto 20%.</p>
                  <p className="2xl:text-2xl">        - Exclusive perks and privileges tailored for Black Tier members</p>
                  <p className="2xl:text-2xl">       - Winlads OG member Eligibility after 6 months</p>
                  <p className="2xl:text-2xl">       - Access to Winlads Urgency Program</p>
                  <p className="2xl:text-2xl">       - Access to Winlads limited and Public Events</p>

                </div>

                <button
                  className="2xl:text-xl border-2 bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 2xl:py-4 2xl:px-6 rounded"
                  style={{ marginBottom: "10px" }}
                >
                  Premium
                </button>
              </div>
            </div>

          </div>
        </div>
        <div className="flex justify-center gap-5 flex-wrap">
          <div className="text-white mb-4 lg:mb-0 planmb">

          </div>

        </div>
      </div>
      {/* <motion.img
        //variants={imageAnimate}
        src={jeep}
        alt=""
        className="static lg:absolute w-[750px] 4xl:w-[1500px] xl:w-[800px] lg:w-[800px]"
        style={{ top: "48%", left: "0px", zIndex: "3", pointerEvents: 'none' }}
      /> */}
    </motion.div>
  );
}

export default Fifthpage;
