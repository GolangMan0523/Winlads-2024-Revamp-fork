import MainCar from "../../assets/images/MainCar.png";
import GoldCard from "../../components/GoldCard/GoldCard";
import TopNav from "../../components/TopNav/TopNav";
import BusinessCardComponent from "../../components/BCard/BusinessCard";
import SearchField from "../../components/SearchField/SearchField";
import BG from "../../assets/images/HomesideBg.png";
import { useEffect, useState } from "react";
import { validateCurrentUser } from "../../utils/validateuser";
import { Link, useNavigate } from "react-router-dom";


function BusinessCard() {
  const [valUser, setValUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    currentUserValidation();
  }, []);

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK", validator.user);
      setValUser(validator.user);
      console.log(validator.user);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="w-full">
      <div className="flex relative min-h-screen w-full overflow-hidden" >
        {/* side-nav */}

        {/* home-content */}
        <div className="xl:flex xl:flex-row flex-col xl:justify-between flex-1 mx-5 xl:gap-4 pb-5 space-y-4 xl:space-y-0">
        <img
            src={BG}
            alt=""
            className="absolute right-0 -z-10 top-40 w-72 xl:w-96 md:w-96 special:w-1/4 2xl:w-1/4 special:top-60 opacity-60 2xl:top-40"
          />
          {/* left side */}
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
            {/* <SearchField /> */}
            <BusinessCardComponent />
          </div>

          {/* right-side */}
          <div className="flex-col flex-1 space-y-4 hidden xl:flex">
            <div className="space-y-4">
              <div className="bg-black rounded-b-[50px] special:rounded-b-[90px] py-4">
                <TopNav textColor={"white"} />
                <div className="pt-10">
                  <img className="w-3/4" src={MainCar} alt="main" />
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

export default BusinessCard;
