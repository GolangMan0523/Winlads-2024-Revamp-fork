import React, { useState, useEffect } from "react";
import BG from "../../assets/images/HomesideBg.png";
import TopNav from "../../components/TopNav/TopNav";
import MainCar from "../../assets/images/MainCar.png";
import SearchField from "../../components/SearchField/SearchField";
import { validateCurrentUser } from "../../utils/validateuser";
import { Link, useNavigate } from "react-router-dom";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase.config.js";
import User from "../../assets/images/user4.png";
import { motion } from "framer-motion";
import NoLiveCard from "../../components/Live/NoLiveCard.jsx";
import LiveCard from "../../components/Live/LiveCard.jsx";
import axios from "axios";
import { MdOutlineDoNotDisturbOff } from "react-icons/md";
import ItemLoader from "../../components/Loader/ItemLoader";
import Cookies from "universal-cookie";
import DashboardVehicleCard from "../../components/DashboardVehicleCard/DashboardVehicle";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import SelectRafflePaymentMethod from "../../components/RaffleComponent/SelectRafflePaymentMethod";
import ActiveBanner from "../../assets/banner4.png";
import ActiveBanner1 from "../../assets/banner4.png";
import Doted from "../../assets/images/doted.png";
import useScrollToTop from "../../utils/useScrollTop.jsx";

const OngoingGiveaways = () => {
  useScrollToTop()
  const iframeStyle = {
    width: "100%",
    height: "100%",
    aspectRatio: "16/9",
  };

  const [userImage, setUserImage] = useState("");
  const [valUser, setValUser] = useState({});
  const [liveLink, setLiveLink] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [giveaways, setGiveaways] = useState([]);
  const [selectGiveawayId, setSelectGiveawayId] = useState("");
  const [selectGiveawayName, setSelectGiveName] = useState("");
  const [selectPayment, setSelectPayment] = useState(false);
  const [price, setPrice] = useState("");
  const [sortedGiveaways, setSortedGiveaways] = useState([]);
  const cookies = new Cookies(null, { path: "/" });
  const [initialLength, setInitSize] = useState(8);

  useEffect(() => {
    currentUserValidation();
  }, []);

  useEffect(() => {
    const sortedArray = [...giveaways];
    sortedArray.sort(
      (a, b) => new Date(a.startingtime) - new Date(b.startingtime)
    );
    setSortedGiveaways(sortedArray);
    checkCoupen();
    console.log(sortedArray, "dasd");
  }, [giveaways]);

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK", validator.user);
      setValUser(validator.user);
      getGiveaways(validator.user.uid);
      getProfileImage(validator.user.image);
      // getRaffleCount(validator.user.uid);
    } else {
      navigate("/login");
    }
  };

  const getGiveaways = async (valuid) => {
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/raffleRoundsActive`)
      .then((response) => {
        console.log(response.data.data, "data raffle");
        setGiveaways(response?.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleButton = ({ id, price, name }) => {
    setSelectGiveawayId(id);
    setPrice(price);
    setSelectGiveName(name);
    setSelectPayment(true);
  };

  const handleSeeMore = (show) => {
    if (show) {
      setInitSize(giveaways.length);
    } else {
      setInitSize(8);
    }
  };

  function getProfileImage(img) {
    getDownloadURL(ref(storage, img))
      .then((url) => {
        setUserImage(url);
      })
      .catch((error) => {
        // Handle any errors
      });
  }

  const checkCoupen = () => {
    const checkCode = cookies.get("COUPEN");
    if (checkCode === "WINFREE") {
      // REMOVED THE COOKIE FOR AVOID STUCK IN ENTRIES PAGE,:)
      cookies.remove("COUPEN");
      navigate("/requestEntries");
    }
  };

  return (
    <>
      <div className="flex flex-col xl:px-6 px-4 special:px-12 special:space-y-24 overflow-hidden relative">
        <div className="xl:flex xl:flex-row flex-col xl:justify-between xl:gap-4">
          <img
            src={BG}
            alt=""
            className="absolute right-0 -z-10 top-10 w-72 xl:w-96 md:w-96 special:w-1/4 2xl:w-1/4 special:top-40 opacity-60 hidden xl:block"
          />
          <div className="flex flex-col flex-1">
            <div className="block xl:hidden space-y-4  py-4">
            <TopNav textColor={"black"} />
            </div>
            <div className="flex flex-col 2xl:space-y-8 space-y-6 special:space-y-12">
              {/* <div className="mt-4 xl:pt-0 pb-4 xl:pb-0">
                <SearchField />
              </div> */}
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col space-y-2 special:space-y-8 flex-1">
                  {/* <div className="flex flex-row items-center gap-2 special:gap-4">
                    {userImage ? (
                      <div className="w-12 h-12 special:w-36 special:h-36 rounded-full aspect-square">
                        <img
                          src={userImage}
                          className="w-full h-full object-cover"
                          alt="user"
                        />
                      </div>
                    ) : (
                      <img
                        src={User}
                        alt=""
                        className="w-12 h-12 special:w-36 special:h-36"
                      />
                    )}

                    <div className="flex flex-col space-y-1">
                      <p className="font-bold special:text-4xl">
                        Earning Balance
                      </p>
                      <p className="special:text-6xl">
                        $&nbsp;
                        {typeof valUser.balance === "number"
                          ? valUser.balance.toFixed(2)
                          : "0.00"}
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
              {/* <div className="flex flex-col gap-5">
                <div className="w-full">
                  <iframe
                    title="YouTube Video"
                    src="https://player.vimeo.com/video/899812267?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameBorder="0"
                    className="w-full"
                    allow="autoplay; fullscreen; picture-in-picture;muted"
                    style={iframeStyle}
                  ></iframe>
                </div>
                {liveLink ? (
                  <Link to="/live">
                    <LiveCard />
                  </Link>
                ) : (
             
                  <NoLiveCard />
                )}
              </div> */}
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-1">
              <p className="font-extrabold md:text-2xl xl:text-3xl 2xl:text-3xl special:text-4xl pt-4 xl:pt-0">
                Active Giveaways
              </p>
            </div>

            <div className="flex-col flex-1 space-y-4 hidden xl:flex  py-4">
              <TopNav textColor={"black"} />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2 special:space-y-6 2xl:space-y-4 mt-5">
          <div className="relative">
            <div className="hidden md:block">
              <img src={ActiveBanner} alt="" />
            </div>
            <div className="block md:hidden">
              <img src={ActiveBanner1} alt="" />
            </div>

            <div className="absolute xl:bottom-[-0px]  2xl:right-[20px] xl:left-[-2px] special:bottom-[15px] bottom-0 md:bottom-4 left-[10px] md:left-[20px] ">
              <Link
                to="https://winladsgiveaway.com/#packages"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="capitalize bg-[#FF4C00]  text-white  text-xl font-semibold  md:text-xl xl:text-4xl 2xl:px-24 xl:py-10 xl:px-16 px-12 py-1 special:py-20 special:text-8xl  special:px-40 hover:opacity-75 rounded-lg">
                  Enter Now
                </button>
              </Link>
            </div>
          </div>
          <div className="flex items-start flex-col lg:flex-row pt-8 gap-5  pb-5">
            <div className="lg:w-1/2 xl:w-2/3  w-full">
              <iframe
                title="YouTube Video"
                src="https://player.vimeo.com/video/924707626?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                frameBorder="0"
                className="w-full rounded-xl"
                allow="autoplay; fullscreen; picture-in-picture;muted"
                style={iframeStyle}
              ></iframe>
            </div>

            <div className=" w-full lg:w-1/2 xl:w-1/3    border border-[#5EC1DC] bg-[#EFF9FB] rounded-2xl ">
              <div className="text-xl xl:text-2xl  2xl:text-3xl special:text-6xl  text-white bg-black  rounded-t-2xl  flex justify-center py-4 sm:py-5 special:py-7 ">
                <span>
                  {" "}
                  Giveaway <span className="font-bold">Details</span>
                </span>
              </div>

              <div className="flex flex-col gap-6 px-3 font-semibold  text-sm sm:text-lg special:text-2xl py-5 sm:py-10">
                <div className="flex items-center justify-start gap-2 ">
                  {/* left */}
                  <div className="flex items-center justify-center  relative ">
                    <img src={Doted} alt="" className="w-4" />

                    <div className="absolute -bottom-10 -z-5 border h-10 border-[#CDDEDF]"></div>
                  </div>
                  <span className="font-semibold ">
                  2 x Return flights
                  </span>
                </div>

                <div className="flex items-center justify-start gap-2 ">
                  {/* left */}
                  <div className="flex items-center justify-center  relative ">
                    <img src={Doted} alt="" className="w-4" />

                    <div className="absolute -bottom-10 -z-5 border h-10 border-[#CDDEDF]"></div>
                  </div>
                  <span className="font-semibold ">7 nights accommodation in the earl beachfront suite at the Mulia Resort</span>
                </div>

                <div className="flex items-center justify-start gap-2 ">
                  {/* left */}
                  <div className="flex items-center justify-center  relative ">
                    <img src={Doted} alt="" className="w-4" />

                    <div className="absolute -bottom-10 -z-5 border h-10 border-[#CDDEDF]"></div>
                  </div>
                  <span className="font-semibold ">
                  $2,500 spending money
                  </span>
                </div>

                <div className="flex items-center justify-start gap-2 ">
                  {/* left */}
                  <div className="flex items-center justify-center  relative ">
                    <img src={Doted} alt="" className="w-4" />

                    <div className="absolute -bottom-10 -z-5 border h-10 border-[#CDDEDF]"></div>
                  </div>
                  <span className="font-semibold ">
                  Daily a la carte breakfast at The Lounge or The Living Room, or buffet breakfast at The Café
                  </span>
                </div>

                <div className="flex items-center justify-start gap-2 ">
                  {/* left */}
                  <div className="flex items-center justify-center  relative ">
                    <img src={Doted} alt="" className="w-4" />

                    <div className="absolute -bottom-10 -z-5 border h-10 border-[#CDDEDF]"></div>
                  </div>
                  <span className="font-semibold "> Daily choice of lunch or dinner at The Cafe or Table8, or daily IDR500,000 dine-around credit per person</span>
                </div>

                <div className="flex items-center justify-start gap-2 ">
                  {/* left */}
                  <div className="flex items-center justify-center  relative ">
                    <img src={Doted} alt="" className="w-4" />

                    <div className="absolute -bottom-10 -z-5 border h-10 border-[#CDDEDF]"></div>
                  </div>
                  <span className="font-semibold ">
                    {" "}
                    Unlimited Tropical Temptation Beach Club entry with a complimentary cocktail and cabana discounts per visit
                  </span>
                </div>

                <div className="flex items-center justify-start gap-2 ">
                  {/* left */}
                  <div className="flex items-center justify-center  relative ">
                    <img src={Doted} alt="" className="w-4" />

                    <div className="absolute -bottom-10 -z-5 border h-10 border-[#CDDEDF]"></div>
                  </div>
                  <span className="font-semibold ">Daily afternoon tea at The Lounge from 4pm to 6pm with free-flow cocktails and hors d'oeuvres</span>
                </div>

           
              </div>
            </div>
          </div>

          {/* {loading ? (
            <div className="flex justify-center">
              <ItemLoader />
            </div>
          ) : sortedGiveaways.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
              {sortedGiveaways.slice(0, initialLength).map((giveaway, key) => (
                <DashboardVehicleCard
                  isSubscribed={valUser.subscriptionPlan?.data}
                  key={key}
                  type={giveaway.raffle.type}
                  id={giveaway._id}
                  name={giveaway.name}
                  date={giveaway?.endtime}
                  color={giveaway?.raffle?.color}
                  fromColor={giveaway.raffle?.color}
                  icon={giveaway.raffle?.image}
                  price={giveaway?.price}
                  raffleimage={giveaway.raffle?.raffleimage}
                  eligeble={true}
                  oneOffPackage={giveaway.raffle?.name === "Vehicle" ? true : false}
                  onButton={() => {
                    handleButton({
                      id: giveaway?._id,
                      price: giveaway?.price,
                      name: giveaway?.name,
                    });
                  }}
                />
              ))}
              {giveaways.length > 8 &&
                (initialLength == 8 ? (
                  <button
                    onClick={() => handleSeeMore(true)}
                    className="mt-10 flex items-center justify-center mx-auto gap-2 "
                  >
                    See More <FaAngleDoubleDown />
                  </button>
                ) : (
                  <button
                    onClick={() => handleSeeMore(false)}
                    className="mt-10 flex items-center justify-center mx-auto gap-2"
                  >
                    See Less <FaAngleDoubleUp />
                  </button>
                ))}
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-2 pt-12">
              <MdOutlineDoNotDisturbOff className="w-12 h-12 2xl:w-12 2xl:h-12 special:w-24 special:h-24" />
              <p className="font-bold text-2xl 2xl:text-2xl special:text-6xl">
                No More Giveaways
              </p>
            </div>
          )} */}
          {selectPayment && (
            <SelectRafflePaymentMethod
              onClose={() => setSelectPayment(false)}
              userId={valUser.uid}
              giveawayId={selectGiveawayId}
              price={price}
              name={selectGiveawayName}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default OngoingGiveaways;
