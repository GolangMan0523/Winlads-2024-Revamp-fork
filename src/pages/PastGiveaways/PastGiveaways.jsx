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
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { MdOutlineDoNotDisturbOff } from "react-icons/md";
import ItemLoader from "../../components/Loader/ItemLoader";
import DashboardVehicleCard from "../../components/DashboardVehicleCard/DashboardVehicle";
import useScrollToTop from "../../utils/useScrollTop.jsx";

const PastGiveaways = () => {
  useScrollToTop()
  const iframeStyle = {
    width: "100%",
    height: "100%",
    aspectRatio: "16/9",
  };

  const [userImage, setUserImage] = useState("");
  const [valUser, setValUser] = useState({});
  const [liveLink, setLiveLink] = useState("");
  const [loading, setLoading] = useState(true);
  const [giveaways, setGiveaways] = useState([]);
  const navigate = useNavigate();
  const [sortedGiveaways, setSortedGiveaways] = useState([]);
  const [initialLength, setInitSize] = useState(8);

  useEffect(() => {
    getGiveaways();
    currentUserValidation();
  }, []);

  useEffect(() => {
    const sortedArray = [...giveaways];
    sortedArray.sort(
      (a, b) => new Date(b.startingtime) - new Date(a.startingtime)
    );
    setSortedGiveaways(sortedArray);
  }, [giveaways]);

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK");
      setValUser(validator.user);
      getProfileImage(validator.user.image);
    } else {
      navigate("/login");
    }
  };

  const getGiveaways = async () => {
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/raffleRoundsPast`)
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

  function getProfileImage(img) {
    getDownloadURL(ref(storage, img))
      .then((url) => {
        setUserImage(url);
      })
      .catch((error) => {
        // Handle any errors
      });
  }

  const handleSeeMore = (show) => {
    if (show) {
      setInitSize(giveaways.length);
    } else {
      setInitSize(8);
    }
  };
  return (
    <>
      <div className="flex flex-col xl:px-6 px-4 special:px-12  overflow-hidden relative">
        <div className="flex items-center justify-between w-full">
          <div className="xl:flex flex-1 hidden">
            <p className="font-extrabold md:text-2xl xl:text-3xl 2xl:text-3xl special:text-4xl pt-4 xl:pt-0">
              Past Giveaways
            </p>
          </div>

          <div className="flex-col flex-1 space-y-4 flex  py-4">
            <TopNav textColor={"black"} />
          </div>
        </div>

        <div className="flex flex-1 xl:hidden">

          <p className="font-extrabold md:text-2xl xl:text-3xl 2xl:text-3xl special:text-4xl  pt-4 ">
            Past Giveaways
          </p>
        </div>

        <div className="flex xl:flex-row flex-col-reverse xl:justify-between xl:gap-4 xl:space-y-0 mb-5">
          <img
            src={BG}
            alt=""
            className="absolute right-0 -z-10 top-10 w-72 xl:w-96 md:w-96 special:w-1/4 2xl:w-1/4 special:top-40 opacity-60"
          />
          <div className="flex flex-col flex-1 ">
            <div className="flex flex-col ">
              {/* <div className="mt-4 xl:pt-0 pb-4 xl:pb-0">
                <SearchField />
              </div> */}
              <div className="flex flex-row justify-between items-center pt-4">
                <div className="flex flex-col space-y-2 special:space-y-8 flex-1"></div>
              </div>
              <div className="flex flex-col ">
                <div className="w-full">
                  <iframe
                    title="YouTube Video"
                    src="https://player.vimeo.com/video/924707626?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameBorder="0"
                    className="w-full"
                    allow="autoplay; fullscreen; picture-in-picture;muted"
                    style={iframeStyle}
                  ></iframe>
                </div>
                {/* {liveLink ? (
                  <Link to="/live">
                    <LiveCard />
                  </Link>
                ) : (
          
                  <NoLiveCard />
                )} */}
              </div>
            </div>
          </div>
          <div className="flex-col flex-1 space-y-4 flex  ">
            <div className="flex flex-col xl:items-start items-center xl:justify-start justify-center xl:px-20 py-0 xl:py-20  gap-5 pt-4">
              <div className="flex items-left gap-2 special:gap-4">
                {userImage ? (
                  <div className="w-12 h-12 special:w-36 special:h-36 rounded-full aspect-square">
                    <img
                      src={userImage}
                      className="w-full h-full object-cover rounded-full"
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
              </div>

              <div className="flex flex-row items-left gap-2 special:gap-4">
                <div className="special:text-7xl font-extrabold text-5xl font-axiforma tracking-tighter">
                  $&nbsp;
                  {typeof valUser.balance === "number"
                    ? valUser.balance.toFixed(2)
                    : "0.00"}
                </div>
              </div>
              <div className="flex flex-row items-left gap-2 special:gap-4">
                <div className="flex items-center justify-center gap-2">
                  <span className="font-semibold special:text-4xl text-xl text-gray-500">
                    Earning Balance
                  </span>
                  <div className="flex items-center justify-center p-1 special:p-2  px-3 special:px-5 rounded-full shadow-xl cursor-pointer hover:text-white bg-[#FFC128] text-black font-extrabold text-sm special:text-lg">
                    {valUser?.subscriptionPlan?.data?.name || 'N/A'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-2">Major Winners</h2>
        <div className="flex flex-col space-y-2 special:space-y-6 2xl:space-y-4">
          {/* <p className="font-semibold text-lg xl:text-xl 2xl:text-2xl special:text-4xl py-4">
            Past <span className="font-extrabold">Giveaways</span>
          </p> */}
          {loading ? (
            <div className="flex justify-center">
              <ItemLoader />
            </div>
          ) : sortedGiveaways.length > 0 ? (
            <div className="flex overflow-x-scroll w-[87vw]">
            <div className="flex items-stretch justify-center gap-2 w-max">
              {sortedGiveaways.filter((giv)=>(giv.raffle.type == 'max' || giv.raffle.type == 'tour')).map((giveaway, key) => (
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
                  raffleimage={giveaway.roundimage}
                  eligeble={false}
                  winningNumber={
                    giveaway.winningNumber && giveaway.winningNumber !== "0"
                      ? giveaway.winningNumber
                      : "Reveal Soon"
                  }
                  // winningNumber={
                  //   giveaway.winningNumber && giveaway.winningNumber !== "0"
                  //     ? giveaway.winningNumber
                  //     : "Reveal Soon"
                  // }
                  // winningNumber = {giveaway?.endtime === "2024-01-14T01:00:00.001Z" ? "301763" : giveaway?.endtime === "2024-01-21T01:00:00.001Z" ? "701396" : "301765"}
                  oneOffPackage={
                    false
                  }
                  // winner={giveaway?.endtime === "2024-01-14T01:00:00.001Z" ? "Ramesh F" : giveaway?.endtime === "2024-01-21T01:00:00.001Z" ? "Joshua S" : "Joshua A"}
                  // winner={
                  //   giveaway.winner
                  //     ? (giveaway.winner?.firstname
                  //         ? giveaway.winner?.firstname
                  //         : "N/A") +
                  //       " " +
                  //       (giveaway.winner?.lastname
                  //         ? giveaway.winner.lastname[0]
                  //         : "N/A")
                  //     : "Reveal Soon"
                  // }
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
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-2 pt-12">
              <MdOutlineDoNotDisturbOff className="w-12 h-12 2xl:w-12 2xl:h-12 special:w-24 special:h-24" />
              <p className="font-bold text-2xl 2xl:text-2xl special:text-6xl">
                No More Giveaways
              </p>
            </div>
          )}
          <div className="py-5 hidden">
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

        <h2 className="text-xl font-bold mb-2">Weekly Winners</h2>
        <div className="flex flex-col space-y-2 special:space-y-6 2xl:space-y-4">
          {/* <p className="font-semibold text-lg xl:text-xl 2xl:text-2xl special:text-4xl py-4">
            Past <span className="font-extrabold">Giveaways</span>
          </p> */}
          {loading ? (
            <div className="flex justify-center">
              <ItemLoader />
            </div>
          ) : sortedGiveaways.length > 0 ? (
            <div className="flex overflow-x-scroll w-[87vw]">
            <div className="flex items-stretch justify-center gap-2 w-max">
              {sortedGiveaways.filter((giv)=>(giv.raffle.type == 'i645' || giv.raffle.type == 'lottoRed' || giv.raffle.type == 'lottoGreen')).map((giveaway, key) => (
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
                  raffleimage={giveaway.roundimage}
                  eligeble={false}
                  winningNumber={
                    giveaway.winningNumber && giveaway.winningNumber !== "0"
                      ? giveaway.winningNumber
                      : "Reveal Soon"
                  }
                  // winningNumber={
                  //   giveaway.winningNumber && giveaway.winningNumber !== "0"
                  //     ? giveaway.winningNumber
                  //     : "Reveal Soon"
                  // }
                  // winningNumber = {giveaway?.endtime === "2024-01-14T01:00:00.001Z" ? "301763" : giveaway?.endtime === "2024-01-21T01:00:00.001Z" ? "701396" : "301765"}
                  oneOffPackage={
                    false
                  }
                  // winner={giveaway?.endtime === "2024-01-14T01:00:00.001Z" ? "Ramesh F" : giveaway?.endtime === "2024-01-21T01:00:00.001Z" ? "Joshua S" : "Joshua A"}
                  // winner={
                  //   giveaway.winner
                  //     ? (giveaway.winner?.firstname
                  //         ? giveaway.winner?.firstname
                  //         : "N/A") +
                  //       " " +
                  //       (giveaway.winner?.lastname
                  //         ? giveaway.winner.lastname[0]
                  //         : "N/A")
                  //     : "Reveal Soon"
                  // }
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
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-2 pt-12">
              <MdOutlineDoNotDisturbOff className="w-12 h-12 2xl:w-12 2xl:h-12 special:w-24 special:h-24" />
              <p className="font-bold text-2xl 2xl:text-2xl special:text-6xl">
                No More Giveaways
              </p>
            </div>
          )}
          <div className="py-5 hidden">
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

        <div className="flex flex-col space-y-2 special:space-y-6 2xl:space-y-4 hidden">
          {/* <p className="font-semibold text-lg xl:text-xl 2xl:text-2xl special:text-4xl py-4">
            Past <span className="font-extrabold">Giveaways</span>
          </p> */}
          {loading ? (
            <div className="flex justify-center">
              <ItemLoader />
            </div>
          ) : sortedGiveaways.length > 0 ? (
            <div className="flex overflow-x-scroll w-[87vw]">
            <div className="flex items-stretch justify-center gap-2 w-max">
              {sortedGiveaways.map((giveaway, key) => (
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
                  raffleimage={giveaway.roundimage}
                  eligeble={false}
                  winningNumber={
                    giveaway.winningNumber && giveaway.winningNumber !== "0"
                      ? giveaway.winningNumber
                      : "Reveal Soon"
                  }
                  // winningNumber={
                  //   giveaway.winningNumber && giveaway.winningNumber !== "0"
                  //     ? giveaway.winningNumber
                  //     : "Reveal Soon"
                  // }
                  // winningNumber = {giveaway?.endtime === "2024-01-14T01:00:00.001Z" ? "301763" : giveaway?.endtime === "2024-01-21T01:00:00.001Z" ? "701396" : "301765"}
                  oneOffPackage={
                    false
                  }
                  // winner={giveaway?.endtime === "2024-01-14T01:00:00.001Z" ? "Ramesh F" : giveaway?.endtime === "2024-01-21T01:00:00.001Z" ? "Joshua S" : "Joshua A"}
                  // winner={
                  //   giveaway.winner
                  //     ? (giveaway.winner?.firstname
                  //         ? giveaway.winner?.firstname
                  //         : "N/A") +
                  //       " " +
                  //       (giveaway.winner?.lastname
                  //         ? giveaway.winner.lastname[0]
                  //         : "N/A")
                  //     : "Reveal Soon"
                  // }
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
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-2 pt-12">
              <MdOutlineDoNotDisturbOff className="w-12 h-12 2xl:w-12 2xl:h-12 special:w-24 special:h-24" />
              <p className="font-bold text-2xl 2xl:text-2xl special:text-6xl">
                No More Giveaways
              </p>
            </div>
          )}
          <div className="py-5 hidden">
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
    </>
  );
};

export default PastGiveaways;
