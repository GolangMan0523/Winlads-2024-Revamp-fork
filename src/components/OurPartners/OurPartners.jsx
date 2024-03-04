import { motion } from "framer-motion";
import React from "react";
import nontera from "../../assets/images/partners/partner-1.png";
import stripe from "../../assets/images/partners/partner-2.png";
import NewPart from "../../assets/images/partners/partners7.png";

const OurPartners = () => {
  return (
    <div className="bg-service py-5" >
      <motion.p
        initial={{ opacity: 0, y: "-40%" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ duration: 0.5, delay: 0 }}
        viewport={{ once: true }}
        className="text-center mb-4 mt-4 text-base sm:text-lg 2xl:text-xl special:text-3xl font-bold uppercase xl:tracking-[18px] sm:tracking-[16px] tracking-[12px]"
      >
        PARTNERS
      </motion.p>
      <div className="flex justify-center gap-4 md:flex-row flex-col md:px-20 px-10">
        <div className="md:w-1/2 w-full">
          <img src={NewPart} className="w-full h-full object-contain" />
        </div>
        <div className="md:w-1/2 w-full">
          <img src={nontera} className="w-full h-full object-contain" />
        </div>
        <div className="md:w-1/2 w-full">
          <img src={stripe} className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
