import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Card from "../../components/SubCard/SubCard";
import FreeEntryCard from "../FreeEntry/FreeEntryCard";

const ChoosePlane = () => {
  const navigate = useNavigate();
  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: "-40%" }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ duration: 0.5, delay: 0 }}
        className="my-3 text-center text-base sm:text-lg 2xl:text-xl special:text-3xl font-bold xl:tracking-[18px] sm:tracking-[16px] tracking-[12px] uppercase"
      >
        {" "}
        Choose a Subscription plan
      </motion.p>
      <div className="w-full bg-chose-plan">
        <div className="flex flex-col items-center w-full px-3 lg:px-5  py-10 lg:py-16 gap-10">
          <div className="grid xl:grid-cols-5 grid-cols-1 md:grid-cols-2 gap-4 px-3 xs:px-32 md:px-0">
            <Card
              title="Starter Tier"
              // titleColor="white"
              title2="1 ENTRY"
              titleColor2="black"
              // price="$ 9.99"
              desc1="$ 9.99 per month"
              // desc2="Referral Commission: 2.5%"
              desc2="Partner Store Discounts: 10%"
              desc3=""
              desc10="01"
              // descColor="white"
              buttonColor="#0082E1"
              arrowColor="[#01819D]"
              buttonTextColor={"white"}
              btnword="SIGN UP / $9.99 PER MONTH"
              bgColorFrom="#0094FF"
              bgColorTo="#00347C"
              titleColor="black"
              planId={'657c40018406aeb95f876ca2'}
              // btnword="Get started now"
            />
            <Card
              bgColorFrom="#FF4700"
              bgColorTo="#611C00"
              title="Boomer Tier"
              titleColor="black"
              // titleColor="white"
              title2="3 ENTRIES"
              titleColor2="black"
              // price="$ 19.99"
              desc1="$ 19.99 per month"
              // desc2="Referral Commission: 5%"
              desc2="Referral Commission: 4%"
              desc3="Partner Store Discounts: 10%"
              desc4="Be Eligible to Apply Winlad Referral Cards"
              desc5="Access to Winlad Store Cash Back program"
              desc10="03"
              // descColor="white"
              buttonColor="#CF3A00"
              arrowColor="white"
              buttonTextColor="white"
              btnword="SIGN UP / $19.99 PER MONTH"
              planId={'657c757b8406aeb95f876ca7'}
            />
            <Card
              bgColorFrom="#00ECFF"
              bgColorTo="#006168"
              title="Platinum Tier"
              titleColor="black"
              // titleColor="[#01819D]"
              title2="10 ENTRIES"
              titleColor2="black"
              // price="$ 49.99"
              desc1="$ 49.99 per month"
              desc2="Referral Commission: 6%"
              desc3="Partner Store Discounts: 10%-15%"
              desc4="Be Eligible to Apply for Winlad PLATINUM Card"
              desc5="Access to Winlad Store Cash Back program"
              desc6="Access to Winlads Public Events"
              desc7="Access to Upcoming Winlad Apps"
              desc10="10"
              // descColor="[#01819D]"
              buttonColor="#007D87"
              arrowColor="white"
              mostPopular={true}
              buttonTextColor="white"
              btnword="SIGN UP / $49.99 PER MONTH"
              planId={'657c766e8406aeb95f876cac'}
            />
            <Card
              bgColorFrom="#FFBE00"
              bgColorTo="#766000"
              title="Gold Tier"
              titleColor="black"
              // titleColor="white"
              title2="25 ENTRIES"
              titleColor2="black"
              // price="$ 100"
              desc1="$ 100 per month"
              // desc2="Premium Tier"
              desc2="Referral Commission: 25%"
              desc3="Partner Store Discounts: 15%-20%"
              desc4="Be Eligible to Apply for Winlad GOLD Card"
              desc5="Access to Winlad Store Cash Back program"
              desc6="Access to Winlads Urgency Program"
              desc7="Access to Winlads Public Events"
              desc8="Access to upcoming Winlad Apps & Tools"
              desc10="25"
              // descColor="white"
              buttonColor="#000000"
              arrowColor="[#01819D]"
              buttonTextColor={"white"}
              btnword="SIGN UP / $100 PER MONTH"
              planId={'657c775f8406aeb95f876cb1'}
            />
            <Card
              bgColorFrom="#23282E"
              bgColorTo="#000"
              title="Black Tier"
              titleColor="white"
              // titleColor="white"
              title2="150 FREE ENTRIES"
              titleColor2="#FFF"
              // price="$ 500"
              desc1="$ 500 per month"
              desc2="Referral Commission: 50%"
              desc3="Customized Partner Store discount rates ranging upto 20%"
              desc4="Be Eligible to Apply for Winlad BLACK Card"
              desc5="Access to Winlad Store Cash Back program"
              desc6="Exclusive perks and privileges tailored for Black Tier members"
              desc7="Winlads OG member Eligibility after 6 months ( Which Gives an opportunity to make decisions with Voting Power in Winlads DAO system)"
              desc8="Access to Winlads Urgency Program"
              desc9="Access to Winlads limited and Public Events - Access to Winlads apps and tools"
              desc10="150"
              // descColor="white"
              buttonColor="#475A79"
              arrowColor="[#01819D]"
              buttonTextColor={"white"}
              btnword="SIGN UP / $500 PER MONTH"
              classNames={""}
              planId={'657c77b68406aeb95f876cb6'}
            />

            {/* <div className="w-full xl:hidden md:flex  hidden">
              <FreeEntryCard />
            </div> */}
          </div>
          {/* <div className="px-3 xs:px-32 md:px-0 flex md:hidden justify-center mt-4 xl:flex ">
          <FreeEntryCard />
        </div> */}
        </div>
      </div>
    </>
  );
};

export default ChoosePlane;
