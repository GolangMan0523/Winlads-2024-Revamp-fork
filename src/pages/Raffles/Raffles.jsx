import { useEffect, useState } from "react";
import SideNav from "../../components/SideNav/SideNav";
import MainCar from "../../assets/images/MainCar.png";
import TopNav from "../../components/TopNav/TopNav";
import "react-calendar/dist/Calendar.css";
import six from "../../assets/images/rafflesImages/six4.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import bgCar from "../../assets/images/hiddenCar.png";
import SearchField from "../../components/SearchField/SearchField";
import { useParams, useLocation } from "react-router-dom";
import BG from "../../assets/images/HomesideBg.png";
import { validateCurrentUser } from "../../utils/validateuser";
import NewJeep from "../../assets/images/rafflesImages/newJeep.png";
import CatJeep from "../../assets/images/rafflesImages/newJeep.png";
import ItemLoader from "../../components/Loader/ItemLoader";
import NewVeh from "../../assets/images/newVeh.png";

import SelectRafflePaymentMethod from "../../components/RaffleComponent/SelectRafflePaymentMethod";
import NoLive from "../../components/Live/NoLive";
import CardComponent from "../../components/cardComponent/CardComponent";
import AffiliateCard from "../../components/Affiliate/AffiliateCard";

export const bgStyle = {
  backgroundImage: `url(${bgCar})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
};

function Raffles() {
  const [raffleRounds, setRaffleRounds] = useState([]);
  const location = useLocation();
  const { name, bgColor, raffleimage } = location.state;
  const [valUser, setValUser] = useState({});
  const navigate = useNavigate();
  const [initialLength, setInitSize] = useState(8);
  const params = useParams();
  const { raffleId } = useParams();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const [loading, setLoading] = useState(true);
  const [selectPayment, setSelectPayment] = useState(false);
  const [selectedName, setSelectedName] = useState("");
  const [selectGiveawayId, setSelectGiveawayId] = useState("");
  const [price, setPrice] = useState("");
  const [liveLink, setLiveLink] = useState("");

  useEffect(() => {
    getRafflesRounds();
    currentUserValidation();
  }, [raffleRounds, valUser]);

  const handleSeeMore = (show) => {
    if (show) {
      setInitSize(raffleRounds.length);
    } else {
      setInitSize(8);
    }
  };

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK", validator.user.balance);
      setValUser(validator.user);
    } else {
      navigate("/login");
    }
  };

  const getRafflesRounds = async () => {
    await axios
      .get(
        `${import.meta.env.VITE_SERVER_API}/raffleRounds?raffleid=${params.id}`
      )
      .then((response) => {
        console.log(response.data.data);
        setRaffleRounds(response?.data?.data);
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
    setSelectedName(name);
    setSelectPayment(true);
  };

  const linearGradient = `linear-gradient(90deg, ${bgColor} 0%, #000000 100%)`;

  return (
    <>
      <div className="flex flex-row justify-between mx-auto">
        <div className="flex-1">
          {/* home-content */}
          <div className="flex flex-col xl:px-6 px-4 special:px-12 xl:space-y-16 special:space-y-24 space-y-8">
            <div className="xl:flex xl:flex-row flex-col xl:justify-between xl:gap-8 space-y-4 xl:space-y-0">
              <img
                src={BG}
                alt=""
                className="absolute right-0 -z-10 top-10 w-72 xl:w-96 md:w-96 special:w-1/3 2xl:w-1/4 special:top-80 opacity-60"
              />

              {/* left-side */}
              <div className="flex flex-col flex-1">
                <div className="block xl:hidden space-y-4">
                  <div className="bg-black rounded-b-3xl py-4">
                    <TopNav textColor={"white"} />
                    <div className="pt-10">
                      <img className="" src={MainCar} alt="main" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col 2xl:space-y-8 xl:space-y-6 space-y-4 special:space-y-12">
                  <div className="mt-4 xl:pt-0 pb-4 xl:pb-0">
                    <SearchField />
                  </div>
                  <AffiliateCard/>
{/* 
                  <div className="flex flex-row items-center justify-between">
                    <p className="capitalize text-black font-semibold text-xl 2xl:text-2xl special:text-5xl">
                      live Giveaways
                    </p>
                  </div> */}
                  <CardComponent />
                  {/* {raffleRounds.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
                    {raffleRounds
                      ?.slice(0, initialLength)
                      .map((raffle, key) => (
                        <div
                          className={`flex flex-row justify-between pr-2 rounded-3xl items-center 2xl:rounded-[30px] special:rounded-[40px] w-full pt-4 shadow-lg hover:transition hover:duration-300 hover:ease-in-out hover:opacity-75 cursor-pointer }`}
                          style={{ background: linearGradient }}
                          key={key}
                          onClick={() => {
                            handleButton({
                              id: raffle?._id,
                              price: raffle?.price,
                              name: raffle?.name,
                            });
                          }}
                        >
                          <img
                            src={raffleimage}
                            alt=""
                            className="flex w-36 special:w-96 2xl:w-48"
                          />
                          <div className="flex flex-col space-y-4">
                            <div className="flex justify-end">
                              <img
                                src={raffle.img}
                                alt=""
                                className="2xl:w-12 xl:w-8 w-8 special:w-16"
                              />
                            </div>
                            <div className="flex text-end flex-col z-10 pr-2 items-center space-y-2 2xl:space-y-4 special:space-y-4">
                              <p className="text-white font-bold xl:text-[12px] text-xs special:text-4xl 2xl:text-[16px] text-center">
                                {raffle.name}
                              </p>
                              <p className="text-[10px] text-white special:text-xl 2xl:text-[10px]">
                                {new Date(raffle.endtime).toLocaleString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    hour: "numeric",
                                    minute: "numeric",
                                    second: "numeric",
                                  }
                                )}
                              </p>
                            </div>
                            <div className="grid grid-cols-3 px-5 items-center">
                              <div className="col-span-2 flex justify-end gap-2 z-10"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : (
                  <p className="flex justify-center font-semibold 2xl:text-2xl xl:text-xl special:text-4xl text-lg pt-12">
                    No Giveaways
                  </p>
                )} */}
                  {/* <Link to="/live">
                    {liveLink ? (
                      <div className="bg-[#D5B511] hover:bg-[#D5B511]/75 flex-col rounded-3xl px-2 special:px-4 py-1 space-y-2 xl:w-1/2 md:w-1/2  w-full">
                        <div className="flex flex-row justify-between items-center">
                          <img
                            src={NewJeep}
                            alt=""
                            className="flex w-36 special:w-96 2xl:w-36"
                          />
                          <div>
                            <div className="justify-end flex">
                              <div className="flex-col flex">
                                <img
                                  src={six}
                                  alt=""
                                  className="w-12 special:w-36 2xl:w-16"
                                />
                              </div>
                            </div>
                            <div className="flex-row flex justify-end gap-1">
                              <p className="text-white text-[10px] uppercase 2xl:text-sm special:text-lg">
                                live
                              </p>
                              <span className="relative flex h-1.5 w-1.5 special:h-3.5 special:w-3.5 2xl:h-2.5 2xl:w-2.5 flex-col justify-start items-start">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 special:h-3.5 special:w-3.5 2xl:h-2.5 2xl:w-2.5 bg-red-600"></span>
                              </span>
                            </div>

                            <div className="flex text-end flex-col z-10">
                              <p className="text-white font-bold xl:text-xs text-xs special:text-2xl 2xl:text-sm">
                                1991 Land Rover
                                <br /> Defender 110
                              </p>
                              <p className="text-xs text-white special:text-xl 2xl:text-sm">
                                2023-SEP-19 TUESDAY
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 px-5 items-center">
                          <div className="col-span-2 flex justify-end gap-2 z-10">
                            <p className="text-[#4FC8E8] font-bold">R</p>
                            <p className="text-white font-bold">14</p>
                            <p className="text-white font-bold">34</p>
                            <p className="text-white font-bold">38</p>
                            <p className="text-white font-bold">76</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <NoLive />
                    )}
                  </Link> */}
                </div>

                {/* <GucciCard /> */}
              </div>
              {/* right side */}
              <div className="flex-col flex-1 space-y-4 hidden xl:flex">
                <div className="bg-black rounded-b-[50px] py-4">
                  <TopNav textColor={"white"} />
                  <div className="pt-10">
                    <motion.img
                      initial={{ x: 80, opacity: 0 }}
                      animate={{ x: 80, opacity: 1 }}
                      transition={{ type: "tween", duration: 1, delay: 1 }}
                      className="w-3/4"
                      src={MainCar}
                      alt="main"
                    />
                  </div>
                </div>
              </div>
            </div>
            {loading ? (
              <div className="flex justify-center">
                <ItemLoader />
              </div>
            ) : (
              <div className="flex flex-col space-y-2">
                <p className="text-black 2xl:text-2xl md:text-lg font-semibold special:text-4xl">
                  {name || ""}
                </p>
                {raffleRounds.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
                    {raffleRounds
                      ?.slice(0, initialLength)
                      .map((raffle, key) => (
                        <div
                          className={`flex flex-row justify-between pr-2 rounded-3xl items-center 2xl:rounded-[30px] special:rounded-[40px] w-full pt-4 shadow-lg hover:transition hover:duration-300 hover:ease-in-out hover:opacity-75 cursor-pointer }`}
                          style={{ background: linearGradient }}
                          key={key}
                          onClick={() => {
                            handleButton({
                              id: raffle?._id,
                              price: raffle?.price,
                              name: raffle?.name,
                            });
                          }}
                        >
                          
                          <img
                            src={raffleimage}
                            alt=""
                            className="flex w-36 special:w-96 2xl:w-48"
                          />
                          <div className="flex flex-col space-y-4">
                            <div className="flex justify-end">
                              <img
                                src={raffle.img}
                                alt=""
                                className="2xl:w-12 xl:w-8 w-8 special:w-16"
                              />
                            </div>
                            <div className="flex text-end flex-col z-10 pr-2 items-center space-y-2 2xl:space-y-4 special:space-y-4">
                              <p className="text-white font-bold xl:text-[12px] text-xs special:text-4xl 2xl:text-[16px] text-center">
                                {raffle.name}
                              </p>
                              <p className="text-[10px] text-white special:text-xl 2xl:text-[10px]">
                                {new Date(raffle.endtime).toLocaleString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    hour: "numeric",
                                    minute: "numeric",
                                    second: "numeric",
                                  }
                                )}
                              </p>
                            </div>
                            <div className="grid grid-cols-3 px-5 items-center">
                              <div className="col-span-2 flex justify-end gap-2 z-10"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : (
                  <p className="flex justify-center font-semibold 2xl:text-2xl xl:text-xl special:text-4xl text-lg pt-12">
                    No Giveaways
                  </p>
                )}
                {raffleRounds.length > 8 &&
                  (initialLength == 8 ? (
                    <button onClick={() => handleSeeMore(true)} className="">
                      See More
                    </button>
                  ) : (
                    <button onClick={() => handleSeeMore(false)} className="">
                      See Less
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {selectPayment && (
        <SelectRafflePaymentMethod
          giveawayId={selectGiveawayId}
          price={price}
          userId={valUser.uid}
          name={selectedName}
          onClose={() => setSelectPayment(false)}
        />
      )}
    </>
  );
}

export default Raffles;
