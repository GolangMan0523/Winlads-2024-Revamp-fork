import { useEffect, useState } from "react";
import SideNav from "../../components/SideNav/SideNav";
import MainCar from "../../assets/images/MainCar.png";
import GoldCard from "../../components/GoldCard/GoldCard";
import TopNav from "../../components/TopNav/TopNav";
import HistoryList from "../../components/History/HistoryList";
import bgCar from "../../assets/images/hiddenCar.png";
import BG from "../../assets/images/HomesideBg.png";
import SearchField from "../../components/SearchField/SearchField";
import axios from "axios";
import { validateCurrentUser } from "../../utils/validateuser";
import { useNavigate } from "react-router-dom";

export const bgStyle = {
  backgroundImage: `url(${bgCar})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
};

function History() {
  const [valUser, setValUser] = useState({});
  const [rafflesHistory, setRafflesHistory] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    currentUserValidation();
    getRafflesHistory();
  }, [valUser]);

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK", validator.user);
      setValUser(validator.user);
    } else {
      navigate("/login");
    }
  };

  const getRafflesHistory = async () => {
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/rafflesHistory`)
      .then((response) => {
        console.log(response.data, "history data");
        setRafflesHistory(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="flex relative min-h-screen">
        {/* side-nav */}

        <SideNav screen="full" />

        {/* home-content */}
        <div className="xl:flex xl:flex-row special:gap-12 flex-col xl:justify-between flex-1 xl:px-6 px-4 2xl:px-8 special:px-12 xl:gap-4 pb-5 space-y-4 xl:space-y-0">
          <img
            src={BG}
            alt=""
            className="absolute right-0 -z-10 md:top-80 top-20 w-72 xl:w-96 md:w-96 special:w-1/3 2xl:w-1/4 special:top-80 opacity-60 2xl:top-80 xl:top40"
          />
          {/* left side */}
          <div className="left-side flex flex-col space-y-4 flex-1 special:pt-24 2xl:pt-16 xl:pt-12">
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
            <div className="pb-12 special:pb-24">
              <SearchField />
            </div>
            <div style={bgStyle}>
              <HistoryList />
            </div>
            {/* {rafflesHistory?.map((history, key) => (
              <div key={key}>
                    <p>{history.name}</p>
              </div>
            ))} */}
          </div>

          {/* right-side */}
          <div className="flex-col flex-1 space-y-4 hidden xl:flex">
            <div className=" space-y-4">
              <div className="bg-black rounded-b-3xl py-4">
                <TopNav textColor={"white"} />
                <div className="pt-10">
                  <img className="w-full" src={MainCar} alt="main" />
                </div>
              </div>
              <div className="w-full">
                <GoldCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
