import Jip from "../../assets/images/logo-full-col.png";
import { motion } from "framer-motion";

const Benifit = () => {
  return (
    <div className="w-full bg-benifit px-10">
      <div className="flex flex-col items-center w-full px-3 lg:px-5 py-10 lg:py-16 gap-10">
        <motion.p
          initial={{ opacity: 0, y: "-40%" }}
          whileInView={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.5, delay: 0 }}
          viewport={{ once: true }}
          className="text-center text-bse sm:text-lg 2xl:text-xl special:text-3xl font-bold xl:tracking-[18px] sm:tracking-[16px] tracking-[12px] uppercase"
        >
          {" "}
          Explore Exclusive Member Benefit
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: "40%" }}
          whileInView={{ opacity: 1, y: "0" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center w-10/12 mx-auto text-xs sm:text-sm md:text-base xl:text-base special:text-lg"
        >
          Join Us on the Journey: We invite you to join us on this meaningful
          journey of giving back. Together, we can forge a future where
          individuals thrive, communities flourish, and hope prevails. Your
          support and participation in our charitable initiatives empower us to
          create a world where compassion and kindness reign supreme, ensuring
          that no one is left behind.
        </motion.p>

        <div className="flex w-full  flex-col  items-center gap-5 md:gap-8 lg:gap-0 lg:flex-row lg:items-stretch 2xl:max-w-[2400px]">
          {/* left */}
          <div className="w-10/12 lg:w-2/5  flex flex-col  lg:order-1 order-1  gap-5">
            <motion.div
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <p className="text-center lg:text-start text-xs sm:text-sm md:text-base xl:text-base special:text-lg font-bold mb-3">
                Winlads Urgency Program
              </p>
              <p className="text-center lg:text-start text-xs sm:text-sm md:text-base xl:text-base special:text-lg">
                Experience the support you need during critical times with
                Winlads Urgency Program. Submit your proposal through our
                platform for a chance at assistance, subject to eligibility.
                We're here to help when it matters most.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <p className="text-center lg:text-start text-xs sm:text-sm md:text-base xl:text-base special:text-lg font-bold mb-3 text-cyan-700">
                Winlads Referral System
              </p>
              <p className="text-center lg:text-start text-xs sm:text-sm md:text-base xl:text-base special:text-lg text-cyan-700">
                "Unlock rewards and passive income through Winlads Referral
                System. Refer friends and family, earn commissions, and watch
                your network grow organically. Your referrals could be your
                pathway to ongoing rewards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <p className="text-center lg:text-start text-xs sm:text-sm md:text-base xl:text-base special:text-lg font-bold mb-3">
                Winlads OG Club
              </p>
              <p className="text-center lg:text-start text-xs sm:text-sm md:text-base xl:text-base special:text-lg">
                Join the Winlads OG Club, where devoted members shape decisions
                and direction. With a democratic approach to decision-making,
                our members contribute to the essence and evolution of our
                community.
              </p>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: "0" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="w-full"
            >
              <p className="text-center lg:text-start text-xs sm:text-sm md:text-base xl:text-base special:text-lg font-bold mb-3">
                Australia-Wide Rewards
              </p>
              <p className="text-center lg:text-start text-xs sm:text-sm md:text-base xl:text-base special:text-lg">
                Enjoy exclusive discounts and benefits across Australia, from
                Sydney to Perth, making your membership truly worthwhile, no
                matter where you are.
              </p>
            </motion.div> */}
          </div>

          {/* middle car */}
          <div className="w-10/12 lg:w-1/5   flex items-end justify-center  lg:order-2 order-3 ">
            <motion.img
              initial={{ opacity: 0, y: "-70%" }}
              whileInView={{ opacity: 1, y: "0" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              src={Jip}
              alt=""
              className="lg:w-full md:w-10/12 sm:w-9/12 w-8/12"
            />
          </div>

          {/* right  */}
          <div className="w-10/12 lg:w-2/5  flex flex-col lg:order-3 order-2 gap-5 text-cyan-700">
            <motion.div
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <p className="text-center lg:text-end text-xs sm:text-sm md:text-base xl:text-base special:text-lg font-bold mb-3">
                Winlads LuxLife (formerly Winlads Luxury Program)
              </p>
              <p className="text-center lg:text-end text-xs sm:text-sm md:text-base xl:text-base special:text-lg">
                Indulge in luxury with Winlads Lux. Experience weekly giveaways
                and exclusive offerings, elevating your lifestyle and adding a
                touch of opulence to your days.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <p className="text-center lg:text-end text-xs sm:text-sm md:text-base xl:text-base special:text-lg font-bold mb-3 text-black">
                Winlads Club Day
              </p>
              <p className="text-center lg:text-end text-xs sm:text-sm md:text-base xl:text-base special:text-lg text-black">
                is an exhilarating event where car enthusiasts, families, and
                the community come together for a day of automotive excitement
                and entertainment. This special occasion showcases a splendid
                array of cars, from classic beauties to modern marvels,
                gathering in one place.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <p className="text-center lg:text-end text-xs sm:text-sm md:text-base xl:text-base special:text-lg font-bold mb-3">
                Winlads DAO System
              </p>
              <p className="text-center lg:text-end text-xs sm:text-sm md:text-base xl:text-base special:text-lg">
                The Winlads Urgency Program operates as a Decentralized
                Autonomous Organization (DAO), where voting power is equally
                split between the Winlads Core Team and OG (Original Gangster)
                members. For a proposal to secure approval and financial aid, it
                must obtain a majority vote exceeding 51%, ensuring
                transparency, fairness, and accountability in supporting members
                during financial challenges.
              </p>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <p className="text-center lg:text-end text-xs sm:text-sm md:text-base xl:text-base special:text-lg font-bold mb-3">
                Expertise at Your Service
              </p>
              <p className="text-center lg:text-end text-xs sm:text-sm md:text-base xl:text-base special:text-lg">
                Our specialized teams ensure smooth operations, while diverse
                faces represent our brand, ensuring a personalized and
                professional touch
              </p>
            </motion.div> */}

            {/* <motion.div
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: "0" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="w-full"
            >
              <p className="text-center lg:text-end text-xs sm:text-sm md:text-base xl:text-base special:text-lg font-bold mb-3">
                Winlads Lux
              </p>
              <p className="text-center lg:text-end text-xs sm:text-sm md:text-base xl:text-base special:text-lg">
                Elevate your journey with Winlads Lux and get access to luxury
                savings, exclusive benefits, and the chance to win many luxury
                prizes.
              </p>
            </motion.div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benifit;
