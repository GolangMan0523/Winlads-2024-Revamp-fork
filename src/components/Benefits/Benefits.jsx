import "./benefits.css";
import imageicon1 from "../../assets/images/Benefits/Icon1.png";
import imageicon2 from "../../assets/images/Benefits/Icon2.png";
import imageicon3 from "../../assets/images/Benefits/Icon3.png";
import imageicon4 from "../../assets/images/Benefits/Icon4.png";
import imageicon5 from "../../assets/images/Benefits/Icon5.png";
import imageicon6 from "../../assets/images/Benefits/Icon6.png";
import VanImage from "../../assets/images/services/service-1.png";
import { motion } from "framer-motion";

function Benefits() {
  return (
    <div>
      <div className="flex flex-col xl:px-20 mx-5">
        {/* <div className="flex flex-col md:flex-row ">
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between mx-5 ">
            <h1 className="partner-title text-4xl font-extrabold mt-0 ml-0">
              Explore Exclusive Member <br></br>
              Benefit
            </h1>

            <div className="xl:w-full md:w-2/3 ">
              <motion.img
                initial={{ opacity: 0, x: "10%" }}
                whileInView={{ opacity: 1, x: 1 }}
                transition={{ duration: 0.6 }}
                src={VanImage}
                alt="Your Logo"
                className="w-full md:w-2/3 mx-auto md:mx-0 "
              ></motion.img>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col xl:flex-row xl:justify-between mx-5 xl:mx-20 items-center">
          <p className="text-3xl xl:text-4xl font-bold">
            Explore Exclusive Member
            <br />
            Benefit
          </p>
          <div className="xl:w-full md:w-2/3 flex-1 flex justify-end">
            <motion.img
              initial={{ opacity: 0, x: "10%" }}
              whileInView={{ opacity: 1, x: 1 }}
              transition={{ duration: 0.6 }}
              src={VanImage}
              alt="Your Logo"
              className="w-full md:w-2/3 mx-auto md:mx-0 "
            ></motion.img>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ml-2">
          <div className="mobile-gap">
            <div className="card rounded-3xl mb-0  hover-up">
              <div className="card-body p-6">
                <img
                  className="icon w-10 h-10 m-2 ml-2"
                  src={imageicon1}
                  alt="saving"
                ></img>
                <h5 className="card-title font-semibold text-xl">
                  Thrill of the draw
                </h5>
                <p className="card-text">
                  Experience the rush of our exciting class-leading promotions.
                  Could you be the next lucky winner?
                </p>
              </div>
            </div>
          </div>
          <div className="mobile-gap">
            <div className="card rounded-3xl mb-0  hover-up">
              <div className="card-body p-6">
                <img
                  className="icon w-10 h-10 m-2 ml-2"
                  src={imageicon2}
                  alt="saving"
                ></img>
                <h5 className="card-title font-semibold text-xl">
                  Community of Enthusiast
                </h5>
                <p className="card-text">
                  Join a community of classic car enthusiasts. Share the
                  excitement, the anticipation, and the joy of winning!
                </p>
              </div>
            </div>
          </div>
          <div className="mobile-gap">
            <div className="card rounded-3xl mb-5  hover-up">
              <div className="card-body p-6">
                <img
                  className="icon w-10 h-10 m-2 ml-2"
                  src={imageicon3}
                  alt="saving"
                ></img>
                <h5 className="card-title font-semibold text-xl">
                  Expert support
                </h5>
                <p className="card-text">
                  Got questions or need assistance? Our professional support
                  team is always ready to help you navigate your journey with
                  us.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-2">
          <div className="mobile-gap">
            <div className="card rounded-3xl mb-5 custom-background-price">
              <div className="card-body p-6 ">
                <img
                  className="icon w-10 h-10 m-2 ml-2"
                  src={imageicon4}
                  alt="saving"
                ></img>
                <h5 className="card-title font-semibold text-xl">
                  Frequent draws
                </h5>
                <p className="card-text">
                  We conduct our membership draws frequently, increasing your
                  chances of changing your life forever.
                </p>
              </div>
            </div>
          </div>
          <div className="mobile-gap">
            <div className="card rounded-3xl mb-5  hover-up">
              <div className="card-body p-6">
                <img
                  className="icon w-10 h-10 m-2 ml-2"
                  src={imageicon5}
                  alt="saving"
                ></img>
                <h5 className="card-title font-semibold text-xl">
                  Exclusive discounts
                </h5>
                <p className="card-text">
                  Unlock access to substantial discounts at businesses across
                  Australia, all for a low monthly membership fee.
                </p>
              </div>
            </div>
          </div>
          <div className="mobile-gap">
            <div className="card rounded-3xl mb-5  hover-up">
              <div className="card-body p-6">
                <img
                  className="icon w-10 h-10 m-2 ml-2"
                  src={imageicon6}
                  alt="saving"
                ></img>
                <h5 className="card-title font-semibold text-xl">
                  Trusted Benefitship
                </h5>
                <p className="card-text">
                  We ve partnered with reputable businesses nationwide to ensure
                  our members receive only the best deals and offers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-2">
          <div className="mobile-gap">
            <div className="card rounded-3xl mb-5  hover-up">
              <div className="card-body p-6">
                <img
                  className="icon w-10 h-10 m-2 ml-2"
                  src={imageicon1}
                  alt="saving"
                ></img>
                <h5 className="card-title font-semibold text-xl">
                  Expertise at Your Service
                </h5>
                <p className="card-text">
                  Our specialized teams ensure smooth operations, while diverse
                  faces represent our brand, ensuring a personalized and
                  professional touch.
                </p>
              </div>
            </div>
          </div>
          <div className="mobile-gap">
            <div className="card rounded-3xl mb-5  hover-up">
              <div className="card-body p-6">
                <img
                  className="icon w-10 h-10 m-2 ml-2"
                  src={imageicon2}
                  alt="saving"
                ></img>
                <h5 className="card-title font-semibold text-xl">
                  Australia-Wide Rewards
                </h5>
                <p className="card-text">
                  Enjoy exclusive discounts and benefits across Australia, from
                  Sydney to Perth, making your membership truly worthwhile, no
                  matter where you are.
                </p>
              </div>
            </div>
          </div>
          <div className="mobile-gap">
            <div className="card rounded-3xl mb-5  hover-up">
              <div className="card-body p-6">
                <img
                  className="icon w-10 h-10 m-2 ml-2"
                  src={imageicon3}
                  alt="saving"
                ></img>
                <h5 className="card-title font-semibold text-xl">
                  Winlads Lux
                </h5>
                <p className="card-text">
                  Elevate your journey with Winlads Lux and get access to luxury
                  savings, exclusive benefits, and the chance to win many luxury
                  prizes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
