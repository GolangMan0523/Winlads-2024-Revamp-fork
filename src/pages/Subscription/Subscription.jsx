import SideNav from "../../components/SideNav/SideNav";
import MainCar from "../../assets/images/MainCar.png";
import GoldCard from "../../components/GoldCard/GoldCard";
import TopNav from "../../components/TopNav/TopNav";
import SubscribeCard from "../../components/SubscribeCard/SubscribeCard";
import { motion } from "framer-motion";
import axios from "axios";
import { MdOutlineDoNotDisturbOff } from "react-icons/md";
import ItemLoader from "../../components/Loader/ItemLoader";
import "./subscription.css";
import { useEffect, useState } from "react";
import SearchField from "../../components/SearchField/SearchField";
import ChoosePlane from "../../components/SubscribeCard/ChoosePlane";
import BG from "../../assets/images/HomesideBg.png";
import homeTopBg from "../../assets/images/HomeTopBg.png";
import { validateCurrentUser } from "../../utils/validateuser";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import SelectRafflePaymentMethod from "../../components/RaffleComponent/SelectRafflePaymentMethod";
import PlanBuyCard from "../../components/plancard/PlanBuyCard";
import FreeEntryCard from "../../components/FreeEntry/FreeEntryCard";
import FreeEntryCardDashboard from "../../components/FreeEntry/FreeEntryCardDashboard";
import OutsideClickHandler from "react-outside-click-handler";
import { toast } from "react-toastify";
import { IoCloseSharp } from "react-icons/io5";
import Vector from "../../assets/images/subcription/Vector.png";
import { LuAlignJustify } from "react-icons/lu";
import useScrollToTop from "../../utils/useScrollTop";

function Subscription() {
  useScrollToTop();
  const [planes, setPlanes] = useState([]);
  const [isYearly, setIsYearly] = useState(false);
  const [isMonthly, setIsMonthly] = useState(true);
  const [isQuartly, setIsQuartly] = useState(false);
  const [choosePlane, setChoosePlane] = useState(false);
  const [loading, setLoading] = useState(true);
  const [Refresh, setRefresh] = useState(false);
  const [selectedPlaneId, setSelectedPlaceId] = useState("");
  const [selectedPlanPrice, setSelectedPlanePrice] = useState("");
  const [showUnsubscribeModal, setUnsubModal] = useState(false);
  const [selectedPlanName, setSelectedPlaneName] = useState("");
  const navigate = useNavigate();
  const cookies = new Cookies(null, { path: "/" });
  const [valUser, setValUser] = useState({});
  const [showRenewModal, setRenewModal] = useState(false);

  const handleButton = (id, price, name) => {
    setChoosePlane(true);
    setSelectedPlaceId(id);
    setSelectedPlanePrice(price);
    setSelectedPlaneName(name);
  };

  const handleYear = (val = false) => {
    setIsYearly(val);
  };

  const handleMonthly = () => {
    setIsMonthly(true);
    setIsQuartly(false);
    setIsYearly(false);
  };

  const handleQuatly = () => {
    setIsQuartly(true);
    setIsMonthly(false);
    setIsYearly(false);
  };

  const handleYearly = () => {
    setIsYearly(true);
    setIsMonthly(false);
    setIsQuartly(false);
  };

  useEffect(() => {
    setLoading(true);
    Promise.all([currentUserValidation(), getPlanes()])
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [Refresh]);

  const logDetailsToDataLayer = () => {
    const data = {
      userId: valUser.uid,
      giveawayId: selectedPlaneId,
      price: selectedPlanPrice,
      name: selectedPlanName,
      planeId: selectedPlaneId,
    };
    console.log("Logging to data layer:", data);
    window.dataLayer.push({
      event: "purchaseDetails",
      data: data,
    });
  };

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log(validator.user);
      setValUser(validator.user);
    } else {
      navigate("/login");
    }
  };

  const getPlanes = async () => {
    return axios
      .get(`${import.meta.env.VITE_SERVER_API}/getSubscriptionPlans`)
      .then((response) => {
        console.log(response.data.data);
        setPlanes(response?.data?.data.sort((a,b)=>(a.raffle_count - b.raffle_count)));
        // setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        // setLoading(false);
      });
  };

  const logDetailsToLocal = (valUser, giveawayId, price, name, planeId) => {
    const data = {
      user: valUser,
      giveawayId: giveawayId || "",
      price: price || "",
      plan_name: name || "",
      plan_id: planeId || "",
    };

    if (typeof localStorage !== "undefined") {
      localStorage.setItem("paymentSuccessData", JSON.stringify(data));
    }

    // Debugging log
    console.log("Logging to localstorage:", data);
  };
  // UNSUBSCRIBE FROM PLAN
  const handleUnsubscribe = async () => {
    try {
      if (!valUser.uid) {
        throw Error("Please Provide a User Id or Login Again");
      }

      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/unsubscribe`,
        { uid: valUser.uid, type: valUser.points ? 'Points' : valUser.crypto ? 'Crypto' : 'Stripe' }    //Crypto Stripe Points
      );
      console.log(response);
      if (response.data.status == 200) {
        cookies.remove("selected-package-id");
        toast.success("Successfully Unsubscribed!");
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    } finally {
      setUnsubModal(false);
      setRefresh((prev) => !prev);
      window.location.reload();
    }
  };

  const handleShowUnsub = () => {
    setUnsubModal((prev) => !prev);
  };

  const handleRenew = async (sb) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/${valUser.points ?  'subscribeWithPoints': 'checkoutSession'}`,
        { subid: valUser.subscription?.subid, uid: valUser.uid }
      );
      console.log("Response:", response.data);

      const payURL = response.data.payurl;
      setLoading(false);
      if (payURL == null) {
        toast.error(response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        window.location.href = payURL;
        logDetailsToDataLayer();
      }
    } catch (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex relative w-full">
        {/* home-content */}
        <div className="xl:flex xl:flex-row flex-col xl:justify-between px-4 special:px-12 2xl:px-8 flex-1 xl:gap-4 special:gap-8 2xl:gap-6 space-y-4 xl:space-y-0">
          <img
            src={homeTopBg}
            alt=""
            className="absolute right-0 -z-10  sm:left-60 "
          />
          {/* left side */}
          <div className="flex flex-col space-y-4 flex-1 special:space-y-8 2xl:space-y-6 relative">
            <div className=" space-y-4 w-full  xl:hidden">
              <div className=" py-4">
                <TopNav textColor={"black"} />
              </div>
            </div>

            {/* <SearchField /> */}
            <div className="flex  items-center xl:pt-4">

            <p className="font-extrabold md:text-2xl xl:text-3xl 2xl:text-3xl special:text-4xl ">
                Subscription
              </p>
            
            </div>

            {/* absolute xl:left-60 left-0 right-0 top-60 bottom-0 flex */}

            {choosePlane && (
              <PlanBuyCard
                onClose={() => setChoosePlane(false)}
                userId={valUser.uid}
                giveawayId={selectedPlaneId}
                price={selectedPlanPrice}
                name={selectedPlanName}
                planeId={selectedPlaneId}
                logDetailsToDataLayer={() =>
                  logDetailsToLocal(
                    valUser,
                    selectedPlaneId,
                    selectedPlanPrice,
                    selectedPlanName,
                    selectedPlaneId
                  )
                }
              />
              // <div className="absolute bottom-0 top-0 left-0 right-0 z-10 bg-white/50">
              //   <div className="flex justify-center items-center 2xl:pt-80 xl:pt-60">
              //     <ChoosePlane
              //       onClose={() => setChoosePlane(false)}
              //       planeId={selectedPlaneId}
              //       userId={valUser.uid}
              //     />
              //   </div>
              // </div>
            )}
          </div>

          {/* right-side */}
          <div className="flex-col flex-1 space-y-4 hidden xl:flex">
            <div className="space-y-4">
            <div className=" py-4">
                <TopNav textColor={"black"} />
              </div>
            </div>
          </div>
        </div>
        {showUnsubscribeModal && (
          <div className="popup-container bg-black/50 justify-center items-center flex">
            <OutsideClickHandler onOutsideClick={() => setUnsubModal(false)}>
              <div className="md:w-96 w-full relative mx-auto rounded-xl bg-white p-10 text-center shadow-lg border-gray-400 border-2 translate-x-5">
                <div
                  className="text-xl absolute top-2 right-2 cursor-pointer"
                  onClick={() => setUnsubModal(false)}
                >
                  <IoCloseSharp />
                </div>
                <h6 className="xl:text-lg text-md font-bold mb-4">
                  Confirm Cancellation
                  <br />
                  <span className="text-xs">
                    If you confirm and end your subscription now, you can still
                    have your subscription until
                    <br />
                    {new Date(valUser.expireDate).toLocaleString("en-GB", {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                      timeZone: "UTC",
                    })}{" "}
                  </span>
                </h6>
                <div className="flex items-center justify-center gap-2">
                  <button
                    className="px-5 py-1 rounded-xl bg-black hover:bg-white text-white hover:text-black"
                    onClick={() => setUnsubModal(false)}
                  >
                    Not now
                  </button>
                  <button
                    className="px-5 py-1 rounded-xl bg-white hover:bg-black border-2 text-black hover:text-white"
                    onClick={handleUnsubscribe}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </OutsideClickHandler>
          </div>
        )}
        {showRenewModal && (
          <div className="popup-container bg-black/50 justify-center items-center flex">
            <OutsideClickHandler onOutsideClick={() => setRenewModal(false)}>
              <div className="md:w-96 w-full relative mx-auto rounded-xl bg-white p-10 text-center shadow-lg border-gray-400 border-2 translate-x-5">
                <div
                  className="text-xl absolute top-2 right-2 cursor-pointer"
                  onClick={() => setRenewModal(false)}
                >
                  <IoCloseSharp />
                </div>
                <h6 className="xl:text-lg text-md font-bold mb-4">
                  Confirm Renew
                  <br />
                  <span className="text-xs">
                    If you confirm and renew your subscription now, Your
                    subscription will renew on <br />{" "}
                    {new Date(valUser.expireDate).toLocaleString("en-GB", {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                      timeZone: "UTC",
                    })}{" "}
                  </span>
                </h6>
                <div className="flex items-center justify-center gap-2">
                  <button
                    className="px-5 py-1 rounded-xl bg-white hover:bg-white text-black hover:text-black"
                    onClick={() => setRenewModal(false)}
                  >
                    Not now
                  </button>
                  <button
                    className="px-5 py-1 rounded-xl bg-black hover:bg-white border-2 text-white hover:text-black"
                    onClick={() => handleRenew()}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </OutsideClickHandler>
          </div>
        )}
      </div>
      
      <div>
        <div className="flex justify-center items-center max-sm:flex-col">
          <div className="pt-10 flex-1 w-full text-center relative">
            <motion.img
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "tween", duration: 1, delay: 1 }}
              className="w-3/4 mx-auto"
              src={MainCar}
              alt="main"
            />
          </div>
          <div className="w-full px-5 sm:px-0 flex-1">
            <GoldCard />
          </div>
        </div>
        <div>
          {loading ? (
            <div className="flex justify-center">
              <ItemLoader />
            </div>
          ) : planes.length > 0 ? (
            <div className="flex flex-col space-y-4 pb-1 justify-center items-center mt-5">
              <div className="flex flex-col">
                <h1 className="text-xl sm:text-4xl special:text-5xl font-semibold">Choose Your Plan</h1>
                <div className="self-end">
                  <img
                    src={Vector}
                    alt="Vector"
                    className="relative bottom-1 sm:bottom-3 left-3  w-[100px] sm:w-fit "
                  />
                </div>
              </div>
              <div className="w-full flex items-center justify-center px-3 sm:px-0">
              <div className="flex flex-row justify-between bg-[#f5f5f5] items-center rounded-full px-2 sm:px-5 py-3 special:py-2 special:px-2 w-1/2 p-10 max-sm:w-full">
                <button
                  type="button"
                  onClick={handleMonthly}
                  className={`${
                    isMonthly ? "bg-black text-white" : ""
                  } text-[9px] sm:text-[10px] font-semibold  xl:text-sm md:text-sm text-center special:py-4 special:text-xl 2xl:text-lg rounded-full py-2 flex-1`}
                >
                  Monthly
                </button>

                <button
                  type="button"
                  onClick={handleQuatly}
                  className={`${
                    isQuartly ? "bg-black text-white" : ""
                  } text-[9px] sm:text-[10px] font-semibold xl:text-sm md:text-sm text-center special:py-4 special:text-xl 2xl:text-lg rounded-full py-2 flex-1`}
                >
                  Quartly <span className="text-[#ee391c]">(Save 10%)</span>
                </button>

                <button
                  type="button"
                  onClick={handleYearly}
                  className={`${
                    isYearly ? "bg-black text-white" : ""
                  } text-[9px] sm:text-[10px] font-semibold xl:text-sm md:text-sm text-center special:py-4 special:text-xl 2xl:text-lg rounded-full py-2 flex-1`}
                >
                  Yearly <span  className="text-[#ee391c]">(Save 20%)</span>
                </button>
              </div>
              </div>
             

              <div
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 special:gap-6 2xl:gap-4 pt-10 ${
                  choosePlane == "true ? bg-white/50"
                }`}
              >
                {planes.map((plane, key) => (
                  <SubscribeCard
                    key={key}
                    id={plane._id}
                    name={plane.name}
                    year={isYearly}
                    quartly={isQuartly}
                    month={isMonthly}
                    isPopular={plane.name == "Platinum" ? true : false}
                    price={
                      isYearly
                        ? plane.annualy
                        : "" | isQuartly
                        ? plane.semiannualy
                        : "" | isMonthly
                        ? plane.monthly
                        : ""
                    }
                    // descList={Array.isArray(plane.desc) ? plane.desc : []}
                    descList={Array.isArray(plane.desc) ? plane.desc : []}
                    descL={
                      isYearly
                        ? Array.isArray(plane.desc)
                          ? plane.desc[2]
                          : []
                        : "" | isQuartly
                        ? Array.isArray(plane.desc)
                          ? plane.desc[1]
                          : []
                        : "" | isMonthly
                        ? Array.isArray(plane.desc)
                          ? plane.desc[0]
                          : []
                        : ""
                    }
                    desc1={plane.desc1}
                    desc2={plane.desc2}
                    desc3={plane.desc3}
                    color={plane.color}
                    colorFrom={plane.colorFrom}
                    // bgColor={
                    //   plane.name == "Starter"
                    //     ? "[#808080]"
                    //     : "black" | (plane.name == "Boomer")
                    //     ? "[#366B71]"
                    //     : "black" | (plane.name == "Platinum")
                    //     ? "white"
                    //     : "black" | (plane.name == "Black")
                    //     ? "black"
                    //     : ""
                    // }
                    // gradientFrom={
                    //   plane.name == "Bronz"
                    //     ? "from-red-400"
                    //     : "black" | (plane.name == "Silver")
                    //     ? "from-gray-200"
                    //     : "black" | (plane.name == "Gold")
                    //     ? "from-[#FFDF37]"
                    //     : ""
                    // }
                    // gradientTo={
                    //   plane.name == "Bronz"
                    //     ? "to-white"
                    //     : "black" | (plane.name == "Silver")
                    //     ? "to-white"
                    //     : "black" | (plane.name == "Gold")
                    //     ? "to-[#9D7C00]"
                    //     : ""
                    // }
                    textColor={plane.name == "Black" ? "white" : "black"}
                    // cardBorderColor={plane.name == "Black" ? "black" : "black"}
                    // borderColor={plane.name == "white" ? "black" : "black"}
                    // buttonColor={
                    //   plane.name == "Starter"
                    //     ? "black"
                    //     : "" | (plane.name == "Boomer")
                    //     ? "black"
                    //     : "" | (plane.name == "Platinum")
                    //     ? "black"
                    //     : "" | (plane.name == "Gold")
                    //     ? "black"
                    //     : "" | (plane.name == "Black")
                    //     ? "white"
                    //     : ""
                    // }
                    buttonText={
                      plane.name == "Starter"
                        ? "white"
                        : "" | (plane.name == "Boomer")
                        ? "white"
                        : "" | (plane.name == "Platinum")
                        ? "white"
                        : "" | (plane.name == "Gold")
                        ? "white"
                        : "" | (plane.name == "Black")
                        ? "black"
                        : ""
                    }
                    buttonHover={
                      plane.name == "Black"
                        ? "black"
                        : plane.name == "Starter"
                        ? "white"
                        : plane.name == "Gold"
                        ? "white"
                        : plane.name == "Black"
                        ? "black"
                        : plane.name == "Boomer"
                        ? "white"
                        : "white"
                    }
                    buttonHoverText={plane.name == "Black" ? "white" : "black"}
                    hoverButtonBorder={
                      plane.name == "Black" ? "black" : "black"
                    }
                    raffleCount={
                      isYearly
                        ? plane.raffle_count_annual
                        : "" | isQuartly
                        ? plane.raffle_count_semiannual
                        : "" | isMonthly
                        ? plane.raffle_count
                        : ""
                    }
                    mPlanId={plane.subid}
                    qPlanId={plane.subidsemiannual}
                    yPlanId={plane.subidannual}
                    onButtonClick={() =>
                      handleButton(
                        isMonthly
                          ? plane.subid
                          : isQuartly
                          ? plane.subidsemiannual
                          : isYearly
                          ? plane.subidannual
                          : "",
                        // plane.desc[0].slice(0, 1),
                        isMonthly
                          ? plane.monthly
                          : isQuartly
                          ? plane.semiannualy
                          : isYearly
                          ? plane.annualy
                          : "",
                        plane.name
                      )
                    }
                    planeId={valUser.sub_id}
                    showUnSubModal={handleShowUnsub}
                    trailUserTest={valUser.trial}
                    userSub={valUser?.subscription?.subid}
                    subStatus={valUser.subscription_status}
                    handleRenew={() => {
                      setRenewModal(true);
                    }}
                  />
                ))}
                {/* <div className=" flex justify-center items-center  ">
                    <FreeEntryCardDashboard />
                  </div> */}
              </div>





              
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-2">
              <MdOutlineDoNotDisturbOff className="w-12 h-12 2xl:w-16 2xl:h-16 special:w-24 special:h-24" />
              <p className="font-bold text-2xl 2xl:text-4xl special:text-6xl">
                No More Subscriptions Plans
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Subscription;
