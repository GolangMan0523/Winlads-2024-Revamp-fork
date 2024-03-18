import "./Dashboard.css";
import MainCar from "../../assets/images/MainCar.png";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopNav from "../../components/TopNav/TopNav";
import Loader from "../../components/Loader/Loader";
import axios from "axios";
import { validateCurrentUser } from "../../utils/validateuser";
import DashboardVehicleCard from "../../components/DashboardVehicleCard/DashboardVehicle";
import DashboardWinnerVehicleCard from "../../components/DashboardVehicleCard/DashboardWinnerVehicleCard";
import SmallGoldCard from "../../components/GoldCard/SmallGoldCard";
import { MdOutlineDoNotDisturbOff } from "react-icons/md";
import ItemLoader from "../../components/Loader/ItemLoader";
import SelectRafflePaymentMethod from "../../components/RaffleComponent/SelectRafflePaymentMethod";
import BG from "../../assets/images/HomesideBg.png";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import Cookies from "universal-cookie";
import FreeEntries from "../../assets/images/mazda-bt.png";
import x5 from "../../assets/images/5xEntry.png";
import welocme from "../../assets/images/welcome-bg.png";
import ActiveBanner from "../../assets/images/activeBanner.png";
import {
  createCometChatAccount,
  joinGlobalChatGroup,
} from "../../utils/cometChatCreateUser";
import HomeBG from "../../assets/homeBg.png";
import GoldCard from "../../components/GoldCard/GoldCard";
import CarouselContainer from "../../components/Carousel/Carousel";
import useScrollToTop from "../../utils/useScrollTop";

const Dashboard = () => {
  useScrollToTop();
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [valUser, setValUser] = useState({});
  const navigate = useNavigate();
  const [giveaways, setGiveaways] = useState([]);
  const [giveawaysPast, setGiveawaysPast] = useState([]);
  const [raffleCount, setRaffleCount] = useState([]);
  const [selectGiveawayId, setSelectGiveawayId] = useState("");
  const [selectGiveawayName, setSelectGiveName] = useState("");
  const [price, setPrice] = useState("");
  const [selectPayment, setSelectPayment] = useState(false);
  const [initialLength, setInitSize] = useState(8);
  const cookies = new Cookies(null, { path: "/" });
  const [fiveX, setFiveEx] = useState(1);
  const [sortedGiveaways, setSortedGiveaways] = useState([]);
  const [vehicleGiveaway, setVehiGive] = useState({});
  const [isVerified, setVerified] = useState(false);
  const [mobileVery, setMobileVery] = useState(false);

  useEffect(() => {
    const sortedArray = [...giveaways];
    sortedArray.sort(
      (a, b) => new Date(a.startingtime) - new Date(b.startingtime)
    );
    setSortedGiveaways(sortedArray);
    checkCoupen();
  }, [giveaways]);

  useEffect(() => {
    currentUserValidation().then((us) => {
      createCometChatAccount(us);
      setVerified(us?.verified);
      setMobileVery(us.mobileVerified);
    });
    // if (cookies.get("selected-package-id")) {
    //   navigate("/subscription");
    // }
  }, [raffleCount]);

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK", validator.user);
      setValUser(validator.user);
      getGiveaways();
      getGiveawaysPast();
      getRaffleCount(validator.user.uid);
      return validator.user;
    } else {
      navigate("/login");
    }
  };

  const getGiveaways = async () => {
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/raffleRoundsUpcoming`)
      .then((response) => {
        console.log(response.data.data, "data raffle");
        setGiveaways(response?.data?.data);
        setVehiGive(
          response?.data?.data.filter((g) => g.raffle?.type == "max")[0]
        );
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const getGiveawaysPast = async () => {
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/raffleRoundsPast`)
      .then((response) => {
        console.log(response.data.data, "data raffle");
        const sortedRaffles = response.data.data.sort(
          (a, b) => new Date(b.startingtime) - new Date(a.startingtime)
        );
        setGiveawaysPast(sortedRaffles);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const getRaffleCount = async (valuid) => {
    await axios
      .get(
        ` ${import.meta.env.VITE_SERVER_API}/getUserRafflesCount?uid=${valuid}`
      )
      .then((response) => {
        console.log(response.data, "countData");
        setRaffleCount(response?.data);
        setLoading(false);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setIsLoading(false);
      });
  };

  const handleButton = ({ id, price, name, xValue = 0}) => {
    console.log(name);
    if(id){
      setFiveEx(xValue ? xValue : 1)
      setSelectGiveawayId(id);
      setPrice(price);
      setSelectGiveName(name);
      setSelectPayment(true);
    }else{
      handleButton({
        id: vehicleGiveaway._id,
        price: vehicleGiveaway.price,
        name: vehicleGiveaway.name,
        xValue: 0
      })
    }

  };

  const handleSeeMore = (show) => {
    if (show) {
      setInitSize(giveaways.length);
    } else {
      setInitSize(8);
    }
  };

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
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex relative mx-auto w-full overflow-hidden">
          {/* <SideNav screen="full" name={valUser.name} userId={valUser.uid} /> */}
          {(!isVerified || !mobileVery) && (
            <div className="bg-white p-4 rounded-xl shadow-xl w-full flex items-center justify-between gap-5 absolute top-0 left-0 border text-center">
              <h1>
                Your {!isVerified && "Email "} {!mobileVery && "Mobile"} is not
                verified, please verify from{" "}
                <Link
                  onClick={() =>
                    navigate(!isVerified ? "/verifyEmail" : "/verifyMobile")
                  }
                  className="text-blue-500"
                >
                  here
                </Link>{" "}
              </h1>

              <button
                className="bg-white hover:bg-black p-2 hover:text-white rounded-xl  text-amber-500"
                onClick={() => setVerified(true)}
              >
                X
              </button>
            </div>
          )}
          <div></div>

          {/* home-content */}
          <div className="flex flex-col xl:flex-col flex-1 px-4 gap-5">
            {/* left side */}
            <div className="flex flex-col flex-1 pb-2">
              <div className="block xl:hidden space-y-4">
                <div
                  className=" rounded-b-3xl py-4"
                  // style={{
                  //   backgroundImage: `url(${HomeBG})`,
                  //   backgroundSize: "cover",
                  //   backgroundPosition: "center",
                  // }}
                >
                  <TopNav textColor={"black"} />
                  <div className="pt-5">
                    {/* <motion.img
                      initial={carAnimation.initialMobile}
                      animate={{ x: 0, opacity: 1 }}
                      transition={carAnimation.transition}
                      className="w-4/5"
                      src={MainCar}
                      alt="main"
                    /> */}

                    <div className="text-black w-full text-left mb-3">
                      <p className="font-semibold">Welcome Back</p>
                      <h2 className="text-xl font-bold">
                        {valUser.firstname + " " + valUser.lastname}
                      </h2>
                    </div>

                    <div
                      className="bg-gray-400 w-full flex items-center justify-center p-4 rounded-xl min-h-[300px] sm:min-h-[350px] mb-3"
                      style={{
                        backgroundImage: `url(${welocme})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <SmallGoldCard />
                    </div>

                    <div className="flex justify-center bg-gradient-to-b from-[#45E1FF] to-black relative rounded-xl">
                      <div className="flex flex-col items-center w-full justify-center">
                        {/* <h1 className="text-white uppercase text-base sm:text-lg font-bold pt-3 mb-5">
                          WANT MORE CHANCES?
                        </h1>

                        <div className="max-w-[300px] px-10 md:px-20 md:max-w-[400px]">
                          <img
                            src={FreeEntries}
                            alt=""
                            className="w-full h-full object-contain"
                          />
                        </div>

                        <div className=" absolute left-3 top-10 ">
                          <img
                            src={x5}
                            className="w-[50px] sm:w-[60px] md:w-[80px]"
                          />
                        </div> */}
                        <CarouselContainer handleButton={handleButton} giveaways={giveaways}/>

                        {/* <div className="py-2 flex items-center justify-center gap-2  w-full ">
                          <Link className="w-1/2 flex items-center justify-end ">
                            <button
                              className="bg-white font-semibold text-sm sm:text-base text-black rounded-lg py-2 w-full max-w-64 hover:bg-gray-100/75"
                              onClick={() =>
                                handleButton({
                                  id: vehicleGiveaway._id,
                                  price: vehicleGiveaway.price,
                                  name: vehicleGiveaway.name,
                                  xValue: 5,
                                })
                              }
                            >
                              Get 5x Entries!
                            </button>
                          </Link>

                          <Link
                            to="/subscription"
                            className="w-1/2 flex items-center justify-start"
                          >
                            <button className="bg-[#FF4C00] font-semibold text-sm sm:text-base text-white rounded-lg py-2 w-full  max-w-64 hover:bg-[#FF4C00]/75">
                              Upgrade Subscription
                            </button>
                          </Link>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xl font-semibold pb-4">
                    Upcoming <span className="font-extrabold">Giveaways</span>
                  </p>

                  {loading ? (
                    <div className="flex justify-center">
                      <ItemLoader />
                    </div>
                  ) : sortedGiveaways?.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3  xl:grid-cols-4 gap-2">
                      {sortedGiveaways
                        .slice(0, initialLength)
                        .map((giveaway, key) => (
                          <DashboardVehicleCard
                            sub_status={
                              valUser?.subscription_status !== "noplan"
                            }
                            isSubscribed={true}
                            key={key}
                            id={giveaway?._id}
                            type={giveaway?.raffle?.type}
                            name={giveaway.name}
                            date={giveaway?.startingtime}
                            fromColor={giveaway.raffle?.colorFrom}
                            color={giveaway?.raffle?.color}
                            icon={giveaway.raffle?.image}
                            raffleimage={giveaway.roundimage}
                            eligeble={true}
                            status={1}
                            oneOffPackage={
                              giveaway.raffle?.name === "Vehicle" ? true : false
                            }
                            checkTrial={
                              valUser.trial
                                ? giveaway.raffle?.name === "Vehicle"
                                  ? false
                                  : true
                                : false
                            }
                            onButton={() => {
                              handleButton({
                                id: giveaway?._id,
                                price: giveaway?.price,
                                name: giveaway?.name,
                              });
                            }}
                            bgColor={giveaway.raffle?.color}
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
                    <div className="flex flex-col items-center space-y-2">
                      <MdOutlineDoNotDisturbOff className="w-8 h-8 2xl:w-12 2xl:h-12 special:w-16 special:h-16" />
                      <p className="font-bold text-xl 2xl:text-3xl special:text-4xl">
                        No More Giveaways
                      </p>
                    </div>
                  )}
                </div>
                <div className="flex flex-col space-y-2 w-full xl:w-web pt-4">
                  <p className="text-2xl 2xl:text-2xl special:text-5xl font-semibold mb-2">
                    Previous <span className="font-[800px]">Winners</span>
                  </p>

                  {loading ? (
                    <div className="flex justify-center">
                      <ItemLoader />
                    </div>
                  ) : giveawaysPast.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                      {giveawaysPast
                        .slice(0, initialLength)
                        .map((giveaway, key) => (
                          <DashboardWinnerVehicleCard
                            isSubscribed={true}
                            key={key}
                            type={giveaway.raffle.type}
                            id={giveaway._id}
                            name={giveaway.name}
                            date={giveaway?.endtime}
                            color={giveaway?.raffle?.color}
                            fromColor={giveaway.raffle?.color}
                            icon={giveaway.raffle?.image}
                            price={giveaway?.price}
                            raffleimage={giveaway.roundimage}
                            eligeble={false}
                            winningNumber={
                              giveaway.winningNumber &&
                              giveaway.winningNumber !== "0"
                                ? giveaway.winningNumber
                                : "Reveal Soon"
                            }
                            // winningNumber = {giveaway?.endtime === "2024-01-14T01:00:00.001Z" ? "301763" : giveaway?.endtime === "2024-01-21T01:00:00.001Z" ? "701396" : "301765"}
                            oneOffPackage={
                              giveaway.raffle?.name === "Vehicle" ? true : false
                            }
                            // winner={giveaway?.endtime === "2024-01-14T01:00:00.001Z" ? "Ramesh F" : giveaway?.endtime === "2024-01-21T01:00:00.001Z" ? "Joshua S" : "Joshua A"}
                            winner={
                              giveaway.winner
                                ? (giveaway.winner?.firstname
                                    ? giveaway.winner?.firstname
                                    : "N/A") +
                                  " " +
                                  (giveaway.winner?.lastname
                                    ? giveaway.winner.lastname[0]
                                    : "N/A")
                                : "Reveal Soon"
                            }
                            status={0}
                            // winner={giveaway[0] ? "ramesh fonseka" : giveaway[1] === "Joshua Stephans" ? giveaway[2] === "Joshua a" : }
                            // onButton={() => {
                            //   handleButton({
                            //     id: giveaway?._id,
                            //     price: giveaway?.price,
                            //     name: giveaway?.name,
                            //   });
                            // }}
                          />
                        ))}
                      {giveaways.length > 7 &&
                        (initialLength == 7 ? (
                          <button
                            onClick={() => handleSeeMore(true)}
                            className="flex flex-row justify-center items-center rounded-3xl 2xl:rounded-[30px] special:rounded-[40px] w-full py-2 shadow-lg hover:transition hover:duration-300 hover:ease-in-out hover:brightness-75 cursor-pointer bg-gradient-to-br from-blue-400 to-blue-600 text-white"
                          >
                            See More
                          </button>
                        ) : (
                          <button
                            onClick={() => handleSeeMore(false)}
                            className="flex flex-row justify-center items-center rounded-3xl 2xl:rounded-[30px] special:rounded-[40px] w-full py-2 shadow-lg hover:transition hover:duration-300 hover:ease-in-out hover:brightness-75 cursor-pointer bg-gradient-to-br from-blue-400 to-blue-600 text-white"
                          >
                            See Less
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
                  )}

                  <div className="w-full text-center">
                    {giveaways.length > 8 &&
                      (initialLength == 8 ? (
                        <button
                          onClick={() => handleSeeMore(true)}
                          className="mt-10 flex items-center justify-center mx-auto gap-2"
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
                </div>
              </div>
              <div className="hidden xl:flex flex-col space-y-4 items-end">
                <div className="grid grid-cols-2 w-full mt-5 gap-4 m-2 ">
                  <div className="col-span-1 px-2 ">
                    <div className="text-black w-full text-left">
                      <p className="font-semibold">Welcome Back</p>
                      <h2 className="text-xl font-bold">
                        {valUser.firstname + " " + valUser.lastname}
                      </h2>
                    </div>
                  </div>
                  <div className="col-span-1  flex flex-col justify-center ">
                    <TopNav textColor={"black"} />
                  </div>
                </div>

                <div
                  className=" w-full justify-between flex gap-3 items-stretch rounded-b-3xl space-y-4 relative w-web "
                  // style={{
                  //   backgroundImage: `url(${HomeBG})`,
                  //   backgroundSize: "cover",
                  //   backgroundPosition: "center",
                  // }}
                >
                  <div
                    className="bg-gray-400 w-1/3 flex items-center justify-start p-4 rounded-xl"
                    style={{
                      backgroundImage: `url(${welocme})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* <div className="space-y-8 w-fit">
                      <div className="flex flex-col space-y-2 bg-white/50 backdrop-blur-sm p-4 border-black border-2 rounded-xl">
                        <p className="text-black text-lg font-semibold">
                          Earning Balance
                        </p>
                        <p className="text-3xl text-black">
                          <span className="text-base">$</span>
                          {typeof valUser.balance === "number"
                            ? valUser.balance.toFixed(2)
                            : "0.00"}
                        </p>
                      </div>
                      <SmallGoldCard />
                    </div> */}
                    <div className="w-full py-4">
                      <SmallGoldCard />
                    </div>
                  </div>

                  <div className="flex justify-center flex-col items-center  h-full -translate-y-4  w-2/3 relative rounded-xl">
                    {/* <h1 className="text-white uppercase text-4xl font-bold pt-3">
                      WANT MORE CHANCES?
                    </h1>
                    <div className="w-full p-5">
                      <img
                        src={FreeEntries}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="w-32 absolute left-5 bottom-10">
                      <img src={x5} className="w-full h-full object-contain" />
                    </div> */}
                    <CarouselContainer handleButton={handleButton} giveaways={giveaways}/>
{/* 
                    <div className="pb-2 flex  gap-3 absolute bottom-3">
                      <Link>
                        <button
                          className="bg-white font-semibold text-black rounded-lg py-3 w-64 text-xl hover:bg-gray-100/75"
                          onClick={() =>
                            handleButton({
                              id: vehicleGiveaway._id,
                              price: vehicleGiveaway.price,
                              name: vehicleGiveaway.name,
                              xValue: 5,
                            })
                          }
                        >
                          Get 5x Entries!
                        </button>
                      </Link>
                      <Link to="/subscription">
                        <button className="bg-[#FF4C00] font-semibold text-white rounded-lg py-3 text-xl w-64 hover:bg-[#FF4C00]/75">
                          Upgrade Subscription
                        </button>
                      </Link>
                    </div> */}
                  </div>

                  {/* <motion.img
                    initial={carAnimation.initial}
                    animate={carAnimation.animate}
                    transition={carAnimation.transition}
                    src={MainCar}
                    alt="main"
                    className="w-[480px]"
                  /> */}
                </div>

                <div className="flex flex-col space-y-2 w-full xl:w-web pt-4">
                  <p className="text-2xl 2xl:text-2xl special:text-5xl font-semibold mb-2">
                    Upcoming <span className="font-bold">Giveaways</span>
                  </p>

                  {loading ? (
                    <div className="flex justify-center">
                      <ItemLoader />
                    </div>
                  ) : sortedGiveaways.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                      {sortedGiveaways
                        .slice(0, initialLength)
                        .map((giveaway, key) => (
                          <DashboardVehicleCard
                            sub_status={
                              valUser?.subscription_status !== "noplan"
                            }
                            isSubscribed={valUser?.subscriptonid}
                            key={key}
                            type={giveaway?.raffle?.type}
                            id={giveaway._id}
                            name={giveaway.name}
                            date={giveaway?.endtime}
                            color={giveaway?.raffle?.color}
                            fromColor={giveaway.raffle?.color}
                            icon={giveaway.raffle?.image}
                            price={giveaway?.price}
                            raffleimage={giveaway?.roundimage}
                            eligeble={true}
                            status={1}
                            oneOffPackage={
                              giveaway.raffle?.name === "Vehicle" ||
                              valUser.trial
                                ? true
                                : false
                            }
                            checkTrial={
                              valUser.trial
                                ? giveaway.raffle?.name === "Vehicle"
                                  ? false
                                  : true
                                : false
                            }
                            onButton={() => {
                              handleButton({
                                id: giveaway?._id,
                                price: giveaway?.price,
                                name: giveaway?.name,
                              });
                            }}
                          />
                        ))}
                      {giveaways.length > 7 &&
                        (initialLength == 7 ? (
                          <button
                            onClick={() => handleSeeMore(true)}
                            className="flex flex-row justify-center items-center rounded-3xl 2xl:rounded-[30px] special:rounded-[40px] w-full py-2 shadow-lg hover:transition hover:duration-300 hover:ease-in-out hover:brightness-75 cursor-pointer bg-gradient-to-br from-blue-400 to-blue-600 text-white"
                          >
                            See More
                          </button>
                        ) : (
                          <button
                            onClick={() => handleSeeMore(false)}
                            className="flex flex-row justify-center items-center rounded-3xl 2xl:rounded-[30px] special:rounded-[40px] w-full py-2 shadow-lg hover:transition hover:duration-300 hover:ease-in-out hover:brightness-75 cursor-pointer bg-gradient-to-br from-blue-400 to-blue-600 text-white"
                          >
                            See Less
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
                  )}
                  <div className="w-full text-center">
                    {giveaways.length > 8 &&
                      (initialLength == 8 ? (
                        <button
                          onClick={() => handleSeeMore(true)}
                          className="mt-10 flex items-center justify-center mx-auto gap-2"
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
                </div>

                <div className="flex flex-col space-y-2 w-full xl:w-web pt-4">
                  <p className="text-2xl 2xl:text-2xl special:text-5xl font-semibold mb-2">
                    Previous <span className="font-bold">Winners</span>
                  </p>

                  {loading ? (
                    <div className="flex justify-center">
                      <ItemLoader />
                    </div>
                  ) : giveawaysPast.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
                      {giveawaysPast
                        .slice(0, initialLength)
                        .map((giveaway, key) => (
                          <DashboardWinnerVehicleCard
                            isSubscribed={true}
                            key={key}
                            type={giveaway.raffle.type}
                            id={giveaway._id}
                            name={giveaway.name}
                            date={giveaway?.endtime}
                            color={giveaway?.raffle?.color}
                            fromColor={giveaway.raffle?.color}
                            icon={giveaway.raffle?.image}
                            price={giveaway?.price}
                            raffleimage={giveaway.roundimage}
                            eligeble={false}
                            winningNumber={
                              giveaway.winningNumber &&
                              giveaway.winningNumber !== "0"
                                ? giveaway.winningNumber
                                : "Reveal Soon"
                            }
                            // winningNumber = {giveaway?.endtime === "2024-01-14T01:00:00.001Z" ? "301763" : giveaway?.endtime === "2024-01-21T01:00:00.001Z" ? "701396" : "301765"}
                            oneOffPackage={
                              giveaway.raffle?.name === "Vehicle" ? true : false
                            }
                            // winner={giveaway?.endtime === "2024-01-14T01:00:00.001Z" ? "Ramesh F" : giveaway?.endtime === "2024-01-21T01:00:00.001Z" ? "Joshua S" : "Joshua A"}
                            winner={
                              giveaway.winner
                                ? (giveaway.winner?.firstname
                                    ? giveaway.winner?.firstname
                                    : "Reveal") +
                                  " " +
                                  (giveaway.winner?.lastname
                                    ? giveaway.winner.lastname[0]
                                    : "Soon")
                                : "Reveal Soon"
                            }
                            status={0}
                            // winner={giveaway[0] ? "ramesh fonseka" : giveaway[1] === "Joshua Stephans" ? giveaway[2] === "Joshua a" : }
                            // onButton={() => {
                            //   handleButton({
                            //     id: giveaway?._id,
                            //     price: giveaway?.price,
                            //     name: giveaway?.name,
                            //   });
                            // }}
                          />
                        ))}

                      {giveaways.length > 7 &&
                        (initialLength == 7 ? (
                          <button
                            onClick={() => handleSeeMore(true)}
                            className="flex flex-row justify-center items-center rounded-3xl 2xl:rounded-[30px] special:rounded-[40px] w-full py-2 shadow-lg hover:transition hover:duration-300 hover:ease-in-out hover:brightness-75 cursor-pointer bg-gradient-to-br from-blue-400 to-blue-600 text-white"
                          >
                            See More
                          </button>
                        ) : (
                          <button
                            onClick={() => handleSeeMore(false)}
                            className="flex flex-row justify-center items-center rounded-3xl 2xl:rounded-[30px] special:rounded-[40px] w-full py-2 shadow-lg hover:transition hover:duration-300 hover:ease-in-out hover:brightness-75 cursor-pointer bg-gradient-to-br from-blue-400 to-blue-600 text-white"
                          >
                            See Less
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
                  )}

                  <div className="w-full text-center">
                    {giveaways.length > 8 &&
                      (initialLength == 8 ? (
                        <button
                          onClick={() => handleSeeMore(true)}
                          className="mt-10 flex items-center justify-center mx-auto gap-2"
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
                </div>
              </div>
            </div>

            {/* right-side */}
            {/* <div className="flex flex-col flex-1"> */}
            <img
              src={BG}
              alt=""
              className="absolute right-0 -z-10 md:top-80 top-20 w-72 xl:w-96 md:w-96 special:w-1/4 2xl:w-1/4 special:top-20 opacity-60 2xl:top-40 xl:top-40"
            />
            {/* <div className="graph-section "></div> */}
            {/* </div> */}
          </div>
        </div>
      )}
      {selectPayment && (
        <SelectRafflePaymentMethod
          onClose={() => {
            setFiveEx(1);
            setSelectPayment(false);
          }}
          userId={valUser.uid}
          subPlane={valUser.subscriptionPlan?.data}
          giveawayId={selectGiveawayId}
          price={price}
          fiveEx={fiveX}
          name={selectGiveawayName}
          valUser={valUser}
        />
      )}
    </>
  );
};

export default Dashboard;
