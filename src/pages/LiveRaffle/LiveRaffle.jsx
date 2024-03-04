import { useEffect, useState } from "react";
import liveBackground from "../../assets/images/rafflesImages/LiveBackground.png";
import "./liveRaffle.css";
import { validateCurrentUser } from "../../utils/validateuser";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";
import { toast } from "react-toastify";
import ItemLoader from "../../components/Loader/ItemLoader";

import cutIcon from '../../assets/images/rafflesImages/cutIcon.png'
import { GoUnmute } from "react-icons/go";
import { GoMute } from "react-icons/go";
import { CiPause1, CiPlay1 } from "react-icons/ci";

function LiveRaffle() {
  const [valUser, setValUser] = useState({});
  const [liveLink, setLiveLink] = useState('')
  const [isLoading, setIsLoading] = useState(true);
  const [muted, setMute] = useState(true);
  const [pause, setPause] = useState(false);
  const formattedDate = formatDate(liveLink.startingtime);

  const navigate = useNavigate();

  const getLiveLink = async () => {
    try {
      const data = await axios.get(`${import.meta.env.VITE_SERVER_API}/getLiveRaffleRound`)
      console.log(data.data.data);
      if (data.data.data.message) {
        throw Error(data.data.data.message);
      } else {
        setLiveLink(data.data.data);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    currentUserValidation();
    getLiveLink();
  }, []);

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      //console.log("Session OK");
      setValUser(validator.user);
    } else {
      navigate("/login");
    }
  };

  const handleMute = () => {
    setMute((prev) => !prev);
  }
  const handlePause = () => {
    setPause((prev) => !prev);
  }


  // const currentDate = new Date();
  // const formattedDate = currentDate.toLocaleString();
  return (
    <div
      className="w-full relative"
      style={{
        backgroundImage: `url(${liveBackground})`,
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full flex items-center justify-center">
        {
          !isLoading ? (liveLink?.youtubeLink && <ReactPlayer

            url={liveLink.youtubeLink}
            playing={pause}
            onPlay={() => setPause(true)}
            muted={muted}
            width={'100%'}
            height={'100vh'}
            className="react-player w-full min-h-screen"
          />) :
            <div className="flex justify-center pt-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <ItemLoader />
            </div>
        }

      </div>
      <div className="flex flex-col xl:mx-10 mx-5 flex-1">
        {/* <div className="flex flex-row justify-between items-center">
          <div className="flex items-center justify-center flex-col">
            <img src={max} alt="" className="w-24 special:w-64 2xl:w-48" />
            <div className="text-white text-3xl font-extrabold special:text-5xl 2xl:text-4xl">Lotto MAX</div>
          </div>
          <div className="text-white flex flex-row gap-1 special:gap-2 2xl:gap-2">
            <p className="uppercase text-lg font-semibold 2xl:text-3xl special:text-4xl">live</p>
            <span className="relative flex h-1.5 w-1.5 special:h-3.5 special:w-3.5 2xl:h-2.5 2xl:w-2.5 flex-col justify-start items-start">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 special:h-3.5 special:w-3.5 2xl:h-2.5 2xl:w-2.5 bg-red-600"></span>
            </span>
          </div>
        </div> */}

        <div className="bottom-10 left-0 right-0 absolute xl:ml-0 4xl:ml-0">
          <div className="flex justify-center flex-col items-center space-y-4 special:space-y-8 2xl:space-y-6">
            <div className="flex flex-row gap-4 2xl:gap-6 special:gap-8 items-center">
              <div className="w-10 h-10 2xl:w-12 2xl:h-12 special:w-24 special:h-24 cursor-pointer hover:brightness-75 bg-indigo-900 rounded-full flex items-center justify-center text-white" onClick={handleMute} title="Mute">
                {muted ? <GoMute className="text-xl" /> : <GoUnmute className="text-xl" />}
              </div>
              <div className="w-10 h-10 2xl:w-12 2xl:h-12 special:w-24 special:h-24 cursor-pointer hover:brightness-75 bg-cyan-600 rounded-full flex items-center justify-center text-white" onClick={handlePause} title="Pause/Play">
                {pause ? <CiPause1 className="text-xl" /> : <CiPlay1 className="text-xl" />}
              </div>
              <img src={cutIcon} alt="" className="w-10 h-10 2xl:w-12 2xl:h-12 special:w-24 special:h-24 cursor-pointer hover:brightness-75" onClick={() => navigate('/dashboard')} title="Go to Dashboard" />
            </div>
            <div className="">
              <div
                className="rounded-full px-3 py-1 special:px-12 special:py-7 2xl:px-9 2xl:py-5"
                style={{
                  background:
                    "linear-gradient(98.92deg, #37DBFF 45%, #00529D 83%)",
                }}
              >
                <div className="flex flex-col space-y-1 2xl:space-y-3 special:space-y-5">
                  <div className="flex flex-row items-center gap-5">
                    <div className="text-white font-bold rounded-full bg-[#157D98] h-9 w-9 special:w-24 special:h-24 special:text-4xl 2xl:w-12 2xl:h-12 2xl:text-2xl items-center flex justify-center">
                      {liveLink?.drawNumbers?.letter ? liveLink?.drawNumbers?.letter : '?'}
                    </div>
                    <div className="text-black font-bold h-9 w-9 special:w-24 special:h-24 special:text-4xl 2xl:w-12 2xl:h-12 2xl:text-2xl rounded-full bg-[#D6F6FF] items-center flex justify-center">
                      {liveLink?.drawNumbers?.n1 ? liveLink?.drawNumbers?.n1 : '?'}
                    </div>
                    <div className="text-black font-bold h-9 w-9 special:w-24 special:h-24 special:text-4xl 2xl:w-12 2xl:h-12 2xl:text-2xl rounded-full bg-[#D6F6FF] items-center flex justify-center">
                      {liveLink?.drawNumbers?.n2 ? liveLink?.drawNumbers?.n2 : '?'}
                    </div>
                    <div className="text-black font-bold h-9 w-9 special:w-24 special:h-24 special:text-4xl 2xl:w-12 2xl:h-12 2xl:text-2xl rounded-full bg-[#D6F6FF] items-center flex justify-center">
                      {liveLink?.drawNumbers?.n3 ? liveLink?.drawNumbers?.n3 : '?'}
                    </div>
                    <div className="text-black font-bold h-9 w-9 special:w-24 special:h-24 special:text-4xl 2xl:w-12 2xl:h-12 2xl:text-2xl rounded-full bg-[#D6F6FF] items-center flex justify-center">
                      {liveLink?.drawNumbers?.n4 ? liveLink?.drawNumbers?.n4 : '?'}
                    </div>
                    <div className="text-black font-bold h-9 w-9 special:w-24 special:h-24 special:text-4xl 2xl:w-12 2xl:h-12 2xl:text-2xl rounded-full bg-[#D6F6FF] items-center flex justify-center">
                      {liveLink?.drawNumbers?.n4 ? liveLink?.drawNumbers?.n4 : '?'}
                    </div>
                  </div>
                  <p className="xl:text-sm text-xs special:text-lg 2xl:text-md text-center font-bold text-black">
                    {liveLink.name} | {formattedDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default LiveRaffle;

/* <div className="	">
          <div className="bg-gradient-to-br from-[#37DBFF] to-[#00529D] p-4 rounded-2xl">
            <div className="">
              <div className="flex justify-center items-center gap-4 px-3 py-3 ">
                <input
                  type="text"
                  id="disabled-input-2"
                  aria-label="disabled input 2"
                  className=" bg-[#157D98] text-white text-sm p-1  w-6 cursor-not-allowed  rounded-full flex justify-center items-center"
                  value=" R "
                  disabled
                  readOnly
                />
                <input
                  type="text"
                  id="disabled-input-2"
                  aria-label="disabled input 2"
                  className=" bg-[#D6F6FF] text-black text-sm p-1  w-6 cursor-not-allowed rounded-full"
                  value="14"
                  disabled
                  readOnly
                />
                <input
                  type="text"
                  id="disabled-input-2"
                  aria-label="disabled input 2"
                  className=" bg-[#D6F6FF] text-black text-sm p-1  w-6 cursor-not-allowed rounded-full "
                  value="34"
                  disabled
                  readOnly
                />
                <input
                  type="text"
                  id="disabled-input-2"
                  aria-label="disabled input 2"
                  className=" bg-[#D6F6FF] text-black text-sm p-1  w-6 cursor-not-allowed  rounded-full"
                  value="38"
                  disabled
                  readOnly
                />
                <input
                  type="text"
                  id="disabled-input-2"
                  aria-label="disabled input 2"
                  className=" bg-[#D6F6FF] text-black text-sm p-1  w-6 cursor-not-allowed  rounded-full"
                  value="78"
                  disabled
                  readOnly
                />
              </div>
              <p className="text-black font-subscription flex justify-center items-center  mb-3 ">
                {formattedDate}
              </p>
            </div>
          </div>
        </div> */

const formatDate = (dateTimeString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric', weekday: 'long' };
  const formattedDate = new Date(dateTimeString).toLocaleDateString('en-US', options);
  return formattedDate.toUpperCase();
};
