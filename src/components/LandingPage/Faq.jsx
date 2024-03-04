import React, { useState } from "react";
import FaqItem from "./FaqItem";
import bgFullLogo from "../../assets/images/logo-full.png";
const styles = {
  backgroundImage: "url(src/assets/images/logo-full.png)",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

const Faq = () => {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="bg-chose-plan py-1 px-1 md:px-0" id="faq">
      <h2 className="uppercase text-2xl font-bold text-center my-10">
        Frequently Asked Questions
      </h2>
      <div className="flex items-stretch justify-center md:flex-row flex-col md:px-10">
        <div>
          <FaqItem
            title={"How does the referral program work?"}
            desc={
              "The referral program rewards existing members for inviting new individuals to join our platform. When someone signs up using your unique referral link or code, you earn commissions based on their subscription level."
            }
          />
          <FaqItem
            title={
              "What are the benefits of participating in the referral program?"
            }
            desc={
              "The referral program rewards existing members for inviting new individuals to join our platform. When someone signs up using your unique referral link or code, you earn commissions based on their subscription level."
            }
          />
          <FaqItem
            title={"How can I refer someone to join?"}
            desc={
              "The referral program rewards existing members for inviting new individuals to join our platform. When someone signs up using your unique referral link or code, you earn commissions based on their subscription level."
            }
          />
          <FaqItem
            title={
              "Are there any limitations on the number of referrals I can make?"
            }
            desc={
              "The referral program rewards existing members for inviting new individuals to join our platform. When someone signs up using your unique referral link or code, you earn commissions based on their subscription level."
            }
          />
          {showAll && (
            <>
              <FaqItem
                title={"How are the referral commissions calculated?"}
                desc={
                  "The referral program rewards existing members for inviting new individuals to join our platform. When someone signs up using your unique referral link or code, you earn commissions based on their subscription level."
                }
              />
              <FaqItem
                title={"Can I track my referrals and earned commissions?"}
                desc={
                  "The referral program rewards existing members for inviting new individuals to join our platform. When someone signs up using your unique referral link or code, you earn commissions based on their subscription level."
                }
              />
              <FaqItem
                title={"When do I receive my referral commissions?"}
                desc={
                  "The referral program rewards existing members for inviting new individuals to join our platform. When someone signs up using your unique referral link or code, you earn commissions based on their subscription level."
                }
              />

              <FaqItem
                title={"Is this promotion valid Australia wide?"}
                desc={
                  "The promotion is valid in all states of Australia excluding South Australia."
                }
              />
            </>
          )}
        </div>
        <div style={styles} className="w-full">
          <FaqItem
            title={
              "Are there any terms or conditions for participating in the referral program?"
            }
            desc={
              "The referral program rewards existing members for inviting new individuals to join our platform. When someone signs up using your unique referral link or code, you earn commissions based on their subscription level."
            }
          />
          <FaqItem
            title={
              "Can I refer myself or create multiple accounts to earn commissions?"
            }
            desc={
              "The referral program rewards existing members for inviting new individuals to join our platform. When someone signs up using your unique referral link or code, you earn commissions based on their subscription level."
            }
          />
          <FaqItem
            title={
              "Is there customer support available for any referral-related queries?"
            }
            desc={
              "The referral program rewards existing members for inviting new individuals to join our platform. When someone signs up using your unique referral link or code, you earn commissions based on their subscription level."
            }
          />
          <FaqItem
            title={`Do I earn commissions from the referrals made by the people I've referred?`}
            desc={
              "The referral program rewards existing members for inviting new individuals to join our platform. When someone signs up using your unique referral link or code, you earn commissions based on their subscription level."
            }
          />
          {showAll && (
            <>
              <FaqItem
                title={`Is this an ongoing payment?`}
                desc={`Yes, once you make a purchase your name goes into the draw x the amount of entries you have. You'll receive an email stating the total entries that you have and you can see that total when you login to your WinLads dashboard.`}
              />
              <FaqItem
                title={`Do I receive Entries?`}
                desc={`The referral program rewards existing members for inviting new individuals to join our platform. When someone signs up using your unique referral link or code, you earn commissions based on their subscription level.

                        By participating, you can earn commissions on the subscription fees of individuals you refer. Additionally, you contribute to expanding our community and potentially increasing your passive income.`}
              />
              <FaqItem
                title={`Is the cash tax free?`}
                desc={
                  "If you take the cash it is completely tax free! How good is that!"
                }
              />
              <FaqItem
                title={`Do I need to be watching the live or answer my phone to win?`}
                desc={`No, we will contact the winner ASAP through the details they ve provided during registration which will be presented to us upon entering the winning combination into our system.

                        If we can not contact the winner on the live feed, we will wait and try again later.As per our permits we can NOT redraw unless the prize remains unclaimed for 3 months.`}
              />
            </>
          )}
        </div>
      </div>
      <div className="w-full text-right my-4 md:px-16 px-6">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className=" font-semibold text-xs md:text-md lg:text-md -translate-x-1/3 hover:text-cyan-600"
        >
          {showAll ? "See less" : "See more"}
        </button>
      </div>
    </div>
  );
};

export default Faq;
