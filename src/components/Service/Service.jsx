import Jip from "../../assets/images/services/jip.png";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: "-40%" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ duration: 0.5, delay: 0 }}
        viewport={{ once: true }}
        className="text-center my-3 text-base sm:text-lg 2xl:text-xl special:text-3xl font-bold uppercase xl:tracking-[18px] sm:tracking-[16px] tracking-[12px]"
      >
        {" "}
        WINLADS SERVICES
      </motion.p>
      <div className="w-full bg-service px-10">
        <div className="flex flex-col items-center w-full px-3 lg:px-5 py-10 lg:py-16 gap-10">

          <div className="flex w-full  flex-col  items-center gap-5 md:gap-8 lg:gap-0 lg:flex-row lg:items-stretch 2xl:max-w-[2400px]">
            {/* left */}
            <div className="w-10/12 lg:w-1/3  flex flex-col  justify-center gap-5 md:gap-8 lg:gap-10 xl:gap-16 special:gap-10 lg:order-1 order-1">
              <motion.div
                initial={{ opacity: 0, x: "-10%" }}
                whileInView={{ opacity: 1, x: "0", borderRadius: '20px' }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full"
                viewport={{ once: true }}
                style={{ overflow: 'hidden' }}
                whileHover={{ padding: '10px', background: 'white' }}
              >
                <p className="mb-3 lg:mb-5 xl:mb-6 special:mb-8  text-center lg:text-end text-xs sm:text-sm md:text-base xl:text-base special:text-lg  font-bold">
                  Access to Extravagance
                </p>
                <p className=" text-center lg:text-end text-xs sm:text-sm md:text-base xl:text-base special:text-lg ">
                  As a member of Winlads LuxeLife Rewards, you gain access to a
                  curated collection of opulent items that cater to your
                  discerning tastes. Our draws feature an array of luxurious
                  products, promising an upscale lifestyle that transcends
                  ordinary experiences.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: "-10%" }}
                whileInView={{ opacity: 1, x: "0", borderRadius: '20px' }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="w-full"
                viewport={{ once: true }}
                whileHover={{ padding: '10px', background: 'white' }}
              >
                <p className=" mb-3 lg:mb-5 xl:mb-6 special:mb-8 text-center lg:text-end text-xs sm:text-sm md:text-base xl:text-base special:text-lg  font-bold"         id="partners">
                  Exclusive Luxury Draw Experience
                </p>
                <p className=" text-center lg:text-end text-xs sm:text-sm md:text-base xl:text-base special:text-lg ">
                  Participate in our elite luxury draws held regularly, where the
                  chance to win grandiose prizes becomes an integral part of your
                  Winlads membership. These draws are meticulously designed to
                  offer both men and women the opportunity to acquire bespoke,
                  premium items that exude sophistication and refinement.
                </p>
              </motion.div>
            </div>

            {/* middle car */}
            <div className="w-10/12 lg:w-1/3   flex items-center justify-center lg:order-2 order-3 ">
              <motion.img
                initial={{ opacity: 0, y: "-40%" }}
                whileInView={{ opacity: 1, y: "0" }}
                transition={{ duration: 0.5 }}
                src={Jip}
                viewport={{ once: true }}
                alt=""
                className="lg:w-full md:w-10/12 sm:w-9/12 w-8/12"
              />
            </div>

            {/* right  */}
            <div className="w-10/12 lg:w-1/3  flex flex-col  justify-center gap-5 md:gap-8 lg:gap-10 xl:gap-16 special:gap-10 lg:order-3 order-2">
              <motion.div
                initial={{ opacity: 0, x: "-10%" }}
                whileInView={{ opacity: 1, x: "0", borderRadius: '20px' }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="w-full"
                whileHover={{ padding: '10px', background: 'white' }}
              >
                <p className="mb-3 lg:mb-5 xl:mb-6 special:mb-8 lg:text-start text-center text-xs sm:text-sm md:text-base xl:text-base special:text-lg  font-bold">
                  Elevating Your Lifestyle with Winlads
                </p>
                <p className="lg:text-start text-center text-xs sm:text-sm md:text-base xl:text-base special:text-lg ">
                  At Winlads, we understand the allure of luxury and aim to make
                  it an accessible reality for our members. The LuxeLife Rewards
                  program encapsulates the epitome of elegance and extravagance,
                  ensuring that every member relishes the experience of living
                  life in the lap of luxury.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: "-10%" }}
                whileInView={{ opacity: 1, x: "0", borderRadius: '20px' }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="w-full"
                whileHover={{ padding: '10px', background: 'white' }}
              >
                <p className="mb-3 lg:mb-5 xl:mb-6 special:mb-8 lg:text-start text-center text-xs sm:text-sm md:text-base xl:text-base special:text-lg  font-bold">
                  Empowering Lives Through Winlads
                </p>
                <p className="lg:text-start text-center text-xs sm:text-sm md:text-base xl:text-base special:text-lg ">
                  A Journey of Giving Back At Winlads, our pursuit extends beyond
                  creating exceptional experiences; it encompasses a heartfelt
                  dedication to transforming lives and fostering positive change
                  within communities. We firmly believe in the profound impact of
                  giving back and are driven by a vision to make a meaningful
                  difference in the lives of individuals worldwide.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
