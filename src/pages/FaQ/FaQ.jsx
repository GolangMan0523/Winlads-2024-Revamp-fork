import MainCar from "../../assets/images/MainCar.png";
import GoldCard from "../../components/GoldCard/GoldCard";
import TopNav from "../../components/TopNav/TopNav";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineDoNotDisturbOff } from "react-icons/md";
import FaQComponent from "../../components/FaQComponent/FaQComponent";
import SearchField from "../../components/SearchField/SearchField";
import { validateCurrentUser } from "../../utils/validateuser";
import ItemLoader from "../../components/Loader/ItemLoader";

function FaQ() {
  const navigate = useNavigate();
  const [valUser, setValUser] = useState({});
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [initialShow, setInitShow] = useState(6);

  useEffect(() => {
    currentUserValidation();
    getFaqs();
  }, []);

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK", validator.user.balance);
      setValUser(validator.user);
      setLoading(false);
    } else {
      navigate("/login");
      setLoading(false);
    }
  };

  const handleSeeMore = (show) => {
    if (show) {
      setInitShow(faqs.length);
    } else {
      setInitShow(6);
    }
  };

  const getFaqs = async () => {
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/getFaqs`)
      .then((response) => {
        console.log(response.data.data);
        setFaqs(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="flex relative min-h-screen">
        {/* home-content */}
        <div className="xl:flex xl:flex-row flex-col xl:justify-between flex-1 mx-5 xl:gap-4 pb-5 space-y-4 xl:space-y-0">
          {/* left side */}
          <div className="side-bg" style={{ height: "500px" }}></div>
          <div className="flex flex-col space-y-4 flex-1">
            <div className="visible xl:hidden space-y-4">
              <div className="bg-black rounded-b-3xl py-4">
                <TopNav textColor={"white"} />
                <div className="pt-10">
                  <img className="w-full" src={MainCar} alt="main" />
                </div>
              </div>
              <div className="flex md:flex-row flex-col space-y-2 md:space-y-0 gap-2">
                <div className="w-full">
                  <GoldCard />
                </div>
              </div>
            </div>
            {/* <div className="special:pt-10">
              <SearchField />
            </div> */}
            <p className="font-bold text-xl special:text-4xl 2xl:text-2xl">
              FAQ
            </p>
            <div className="mt-10">
              {loading ? (
                <div className="flex justify-center">
                  <ItemLoader />
                </div>
              ) : faqs.length > 0 ? (
                faqs
                  .slice(0, initialShow)
                  .map((faq, key) => (
                    <FaQComponent
                      key={key}
                      title={faq.q}
                      desc={faq.a}
                      number={key}
                    />
                  ))
              ) : (
                <div className="flex flex-col items-center space-y-2">
                  <MdOutlineDoNotDisturbOff className="w-12 h-12 2xl:w-16 2xl:h-16 special:w-24 special:h-24" />
                  <p className="font-bold text-2xl 2xl:text-4xl special:text-6xl">
                    No More Faqs
                  </p>
                </div>
              )}
            </div>
            {initialShow == 6 ? (
              <button onClick={() => handleSeeMore(true)}>See More</button>
            ) : (
              <button onClick={() => handleSeeMore(false)}>See Less</button>
            )}
          </div>

          {/* right-side */}
          <div className="flex-col flex-1 space-y-4 hidden xl:flex">
            <div className=" space-y-4">
              <div className="bg-black rounded-b-[50px] special:rounded-b-[90px] py-4">
                <TopNav textColor={"white"} />
                <div className="pt-10">
                  <motion.img
                    initial={{ x: 80, opacity: 0 }} // Initial position and opacity (hidden)
                    animate={{ x: 0, opacity: 1 }} // Move and fade in when in view
                    transition={{ type: "tween", duration: 1, delay: 1 }}
                    className="w-3/4"
                    src={MainCar}
                    alt="main"
                  />
                </div>
              </div>
              <div className="w-full special:pt-10">
                <GoldCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FaQ;
