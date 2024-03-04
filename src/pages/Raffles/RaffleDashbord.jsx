import RaffleDashboardComponent from "../../components/RaffleComponent/RaffleDashboardComponent";
import SideNav from "../../components/SideNav/SideNav";
import MainCar from "../../assets/images/MainCar.png";
import TopNav from "../../components/TopNav/TopNav";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { validateCurrentUser } from "../../utils/validateuser";
import axios from "axios";
import { motion } from "framer-motion";
import six from "../../assets/images/rafflesImages/six4.png";
import { GoQuestion } from "react-icons/go";
import SearchField from "../../components/SearchField/SearchField";
import User from "../../assets/images/user4.png";
import BG from "../../assets/images/HomesideBg.png";
import bgCar from "../../assets/images/hiddenCar.png";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase.config.js";
import ItemLoader from "../../components/Loader/ItemLoader";

import CatJeep from "../../assets/images/rafflesImages/newJeep.png";
import NoLive from "../../components/Live/NoLive.jsx";
import LiveCard from "../../components/Live/LiveCard.jsx";
import NoLiveCard from "../../components/Live/NoLiveCard.jsx";

export const bgStyle = {
  backgroundImage: `url(${bgCar})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
};

const iframeStyle = {
  // position: 'absolute',
  // top: 0,
  // left: 0,
  width: '100%',
  height: '100%',
  aspectRatio:'16/9'
};

function RaffleDashbord() {
  const [raffles, setRaffles] = useState([]);
  const [value, onChange] = useState(new Date());
  const [valUser, setValUser] = useState({});
  const [userImage, setUserImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [initialLength, setInitSize] = useState(8);
  const [liveLink, setLiveLink] = useState("");

  const navigate = useNavigate();

  const getLiveLink = async () => {
    try {
      const data = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/getLiveRaffleRound`
      );
      if (data.data.data.message) {
        throw Error(data.data.data.message);
      } else {
        setLiveLink(data.data.data);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    currentUserValidation();
    getRaffles();
    getLiveLink();
  }, []);

  const handleSeeMore = (show) => {
    if (show) {
      setInitSize(raffles.length);
    } else {
      setInitSize(8);
    }
  };

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

  const getRaffles = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/raffles`)
      .then((response) => {
        console.log(response.data.data, "data");
        setRaffles(response?.data?.data);
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

  return (
    <>
      <div className="flex flex-col xl:px-6 px-4 special:px-12 special:space-y-24 space-y-8 overflow-hidden relative">
        <div className="xl:flex xl:flex-row flex-col xl:justify-between xl:gap-4 space-y-4 xl:space-y-0">
          <img
            src={BG}
            alt=""
            className="absolute right-0 -z-10 top-10 w-72 xl:w-96 md:w-96 special:w-1/4 2xl:w-1/4 special:top-40 opacity-60"
          />
          {/* left side */}
          <div className="flex flex-col flex-1">
            <div className="block xl:hidden space-y-4">
              <div className="bg-black rounded-b-3xl py-4">
                <TopNav textColor={"white"} />
                <div className="pt-10">
                  <img className="" src={MainCar} alt="main" />
                </div>
              </div>
            </div>
            <div className="flex flex-col 2xl:space-y-8 space-y-6 special:space-y-12">
              <div className="mt-4 xl:pt-0 pb-4 xl:pb-0">
                <SearchField />
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col space-y-2 special:space-y-8 flex-1">
                  <div className="flex flex-row items-center gap-2 special:gap-4">
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
                        $&nbsp;{valUser.balance || "0.00"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
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
                  // <NoLive />
                  <NoLiveCard/>
                )}
              </div>
            </div>
            <div className="flex xl:flex-row md:flex-row flex-col xl:justify-between gap-2">
              <div className="xl:flex md:flex items-end flex-1 w-full"></div>
            </div>
          </div>

          {/* right-side */}
          <div className="flex-col flex-1 space-y-4 hidden xl:flex">
            <div className="bg-black rounded-b-[50px] py-4">
              <TopNav textColor={"white"} />
              <div className="pt-10">
                <motion.img
                  initial={{ x: 80, opacity: 0 }} // Initial position and opacity (hidden)
                  animate={{ x: 60, opacity: 1 }} // Move and fade in when in view
                  transition={{ type: "tween", duration: 1, delay: 1 }}
                  className="w-3/4"
                  src={MainCar}
                  alt="main"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2 special:space-y-6 2xl:space-y-4">
          <p className="font-semibold text-lg xl:text-xl 2xl:text-2xl special:text-4xl">
            Giveaway Categories
          </p>
          {loading ? (
            <div className="flex justify-center">
              <ItemLoader />
            </div>
          ) : raffles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 2xl:gap-4 special:gap-4">
              {raffles.slice(0, initialLength).map((raffle, key) => (
                <RaffleDashboardComponent
                  key={key}
                  bgColor={raffle.color}
                  id={raffle._id}
                  name={raffle.name}
                  type={raffle.type}
                  img={raffle.image}
                  date={raffle.date}
                  raffleimage={raffle?.raffleimage}
                />
              ))}
              {raffles.length > 8 &&
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
          ) : (
            <p className="flex justify-center font-semibold 2xl:text-2xl xl:text-xl special:text-4xl text-lg">
              No Giveaways
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default RaffleDashbord;
