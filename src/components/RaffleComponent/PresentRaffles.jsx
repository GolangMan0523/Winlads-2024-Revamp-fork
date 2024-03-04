import React, {useEffect, useState} from "react";
import Jeep from "../../assets/images/Lottery/Jeep.png";
import max from "../../assets/images/rafflesImages/max.png";
import { GoQuestion } from "react-icons/go";
import { MdOutlineDoNotDisturbOff } from "react-icons/md";
import { validateCurrentUser } from "../../utils/validateuser";
import { Link, useNavigate } from "react-router-dom";
import NewJeep from "../../assets/images/newJeep.png"

const PresentRaffles = ({color, present=[]}) => {

  const [valUser, setValUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    currentUserValidation();
    console.log(valUser, "usrId")
  }, []);

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK", validator.user.balance);
      setValUser(validator.user);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      {present.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 special:gap-4 flex-1">
          {present.map((round, key) => (
            <div
              key={key}
              className={`bg-[#1195D4] hover:bg-[#1195D4]/75 flex cursor-pointer flex-col rounded-3xl px-2 py-2 special:px-4 2xl:px-4 space-y-2 hover:border-black shadow-lg`}
            >
              <div className="flex flex-row justify-between items-center">
                <img
                  src={NewJeep}
                  alt=""
                  className="flex w-36 special:w-96 2xl:w-64"
                />
                <div className="flex flex-col space-y-4 z-10">
                  <p className="text-white text-center font-bold xl:text-xs text-xs special:text-2xl 2xl:text-md">
                    {round.name}
                  </p>
                  <p className="text-[10px] text-center text-white special:text-xl 2xl:text-xs">
                    {round.date}
                  </p>
                </div>
              </div>
              <div className="flex justify-between px-5 items-center">
                <div className="w-11/12 overflow-clip whitespace-nowrap flex gap-2 z-10">
                  <p className="text-white">{round.desc}</p>
                </div>

                <div className="">
                  <GoQuestion />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-2">
          <MdOutlineDoNotDisturbOff className="w-8 h-8 2xl:w-10 2xl:h-10 special:w-16 special:h-16" />
          <p className="font-bold text-xl 2xl:text-3xl special:text-4xl">
            No More Giveaways
          </p>
        </div>
      )}
    </>
  );
};

export default PresentRaffles;
