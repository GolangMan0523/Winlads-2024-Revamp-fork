import React, { useState } from "react";
import { motion } from "framer-motion";

const faqList = [
  {
    title: "How does the referral program work?",
    desc: "The referral program rewards existing members for inviting new individuals to join our platform. When someone signs up using your unique referral link or code, you earn commissions based on their subscription level.",
  },
  {
    title: "What are the benefits of participating in the referral program?",
    desc: "By participating, you can earn commissions on the subscription fees of individuals you refer. Additionally, you contribute to expanding our community and potentially increasing your passive income.",
  },
  {
    title: "How can I refer someone to join?",
    desc: "You can refer someone by sharing your unique referral link or code provided in your dashboard. Ask them to sign up using that link or code, and once they become a member, you'll start earning commissions.",
  },
  {
    title: "Are there any limitations on the number of referrals I can make?",
    desc: "There's typically no limit on the number of referrals you can make. The more people you refer who become members, the more you can earn in commissions.",
  },
  {
    title: "How are the referral commissions calculated?",
    desc: "Referral commissions are calculated based on the subscription level of the person you refer. The percentage of commission is predetermined and varies according to different subscription tiers.",
  },
  {
    title: "Can I track my referrals and earned commissions?",
    desc: "Yes, you can track your referrals and earned commissions through your personal dashboard. It provides detailed information on the number of referrals made and the commissions earned.",
  },
  {
    title: "When do I receive my referral commissions?",
    desc: "Commissions are typically credited to your account monthly, based on the subscriptions of the members you've referred. The exact payout schedule may vary.",
  },
  {
    title:
      "Are there any terms or conditions for participating in the referral program?",
    desc: "Yes, there might be specific terms and conditions associated with the referral program. These can include eligibility criteria, guidelines for using referral links, and the structure of commission payouts.",
  },
  {
    title:
      "Can I refer myself or create multiple accounts to earn commissions?",
    desc: "No, the referral program generally prohibits self-referrals or creating multiple accounts to earn commissions. Violation of this policy may result in the termination of referral benefits.",
  },
  {
    title:
      "Is there customer support available for any referral-related queries?",
    desc: "Yes, our customer support team is available to assist you with any queries or issues related to the referral program. You can reach out to them via admin@winlads.com",
  },
  {
    title:
      "Do I earn commissions from the referrals made by the people I've referred?",
    desc: " Yes, our multi-level referral system allows you to earn commissions not only from the direct referrals you make but also from the referrals made by those individuals. When the people you've referred subscribe and further refer others, you can earn commissions from their referrals as well, creating a network of earnings that extends through multiple levels.",
  },
];

const Faq = () => {
  const [activeAccordion, setActiveAccordion] = useState(1);
  const [initialShow, setInitShow] = useState(6);

  const toggleAccordion = (accordionId) => {
    setActiveAccordion(accordionId === activeAccordion ? null : accordionId);
  };

  const isAccordionActive = (accordionId) => {
    return (
      accordionId === activeAccordion ||
      (activeAccordion === 1 && accordionId === 1)
    );
  };

  const handleSeeMore = (show) => {
    if (show) {
      setInitShow(faqList.length);
    } else {
      setInitShow(6);
    }
  };

  return (
    <div className="flex flex-col bg-[#00ECFF] py-4 special:py-12 md:py-8 xl:px-24 px-4">
      <motion.p
        initial={{ opacity: 0, y: "-40%" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ duration: 0.5, delay: 0 }}
        viewport={{ once: true }}
        className="text-center pb-4 text-bse sm:text-lg 2xl:text-xl special:text-3xl font-bold xl:tracking-[18px] sm:tracking-[16px] tracking-[12px] uppercase"
      >
        {" "}
        Faq
      </motion.p>
      <div
        id="accordion-collapse"
        data-accordion="collapse"
        className="my-3 special:flex special:flex-col special:gap-10 special:pt-10"
      >
        <div>
          {faqList.slice(0, initialShow).map((faq, key) => (
            <div key={key}>
              <h2 id="accordion-collapse-heading-1">
                <button
                  type="button"
                  className={`flex flex-col justify-between w-full py-4 px-4 mb-2 font-medium text-black-500 rounded-3xl focus:bg-white dark:text-black-400 bg-white border border-[#dcdcdc] special:border-4 2xl:border-2 special:rounded-[40px] hover:bg-[#D1D5DB] active:bg-gray-400`}
                  onClick={() => toggleAccordion(key + 1)}
                  aria-expanded={isAccordionActive(key + 1)}
                  aria-controls="accordion-collapse-body-1"
                >
                  <div className="flex flex-row justify-between items-center w-full gap-2">
                    <span className="font-bold special:text-xl 2xl:text-sm special:py-5 text-start">
                      {faq.title}
                    </span>
                    <svg
                      data-accordion-icon
                      className={`w-3 h-3 special:w-6 special:h-6 rotate-180 shrink-0 ${
                        isAccordionActive(key + 1) ? "rotate-0" : ""
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 10 6"
                    >
                      <path d="M9 5 5 1 1 5" />
                    </svg>
                  </div>

                  <div
                    id="accordion-collapse-body-1"
                    className={`py-2 px-2 rounded-3xl ${
                      isAccordionActive(key + 1) ? "" : "hidden"
                    }`}
                    aria-labelledby="accordion-collapse-heading-1"
                  >
                    <p className="mb-2 text-black special:text-lg 2xl:text-md text-sm text-start special:py-3 special:rounded-[40px]">
                      {faq.desc}
                    </p>
                  </div>
                </button>
              </h2>
              {/* <div
                id="accordion-collapse-body-1"
                className={`p-5   bg-gray-200 rounded-3xl mb-2 ${
                  isAccordionActive(key + 1) ? "" : "hidden"
                }`}
                aria-labelledby="accordion-collapse-heading-1"
              >
                <p className="mb-2 text-black special:text-lg 2xl:text-md text-xs special:py-3 special:rounded-[40px]">
                  {faq.desc}
                </p>
              </div> */}
            </div>
          ))}
          <div className="flex justify-center items-center">
            {initialShow == 6 ? (
              <button onClick={() => handleSeeMore(true)}>See More</button>
            ) : (
              <button onClick={() => handleSeeMore(false)}>See Less</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
