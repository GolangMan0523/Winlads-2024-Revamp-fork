import React, { useState, useEffect } from "react";
import CatJeep from "../../assets/images/rafflesImages/newJeep.png";
import NewVeh from "../../assets/images/newVeh.png";
import { LuInfo } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import Cab from "../../assets/cab.png";

const DashboardWinnerVehicleCard = ({
  bgColor,
  isSubscribed,
  name,
  date,
  icon,
  fromColor,
  type,
  onButton,
  color,
  raffleimage,
  id,
  eligeble,
  oneOffPackage,
  checkTrial,
  winner,
  winningNumber,
  status,
  sub_status,
  count = "",
}) => {
  const [eligebleOne, setEligebleOne] = useState(true);
  const [onePackage, setOnePackage] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setOnePackage(oneOffPackage);
    setEligebleOne(eligeble);
  }, []);

  const dateObject = new Date(date);
  const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",

    // hour: "numeric",
    // minute: "numeric",
    // second: "numeric",
    timeZone: "UTC", // Set the timeZone option to "UTC"
  };

  const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(
    dateObject
  );

  const handleNavigateWon = () => {
    if (status === 1 && id == "6582b82ea332291cc7752d92") {
      navigate(`/won/${id}`);
    } else {
      ("");
    }
  };

  // Convert hexadecimal to RGBA
  function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  const bg = hexToRgba(color, 0.5);

  return (
    <>
      <div
        className={`flex text-white  rounded-2xl w-full p-2 sm:p-3 shadow-lg hover:transition hover:duration-300 hover:ease-in-out hover:opacity-80 cursor-pointer overflow-hidden max-h-[170px] sm:max-h-[200px] `}
        style={{ backgroundColor: bg }}
        // style={{
        //   background: `linear-gradient(180deg, ${color} 0%, #ACACAC 100%)`,
        // }}

        onClick={handleNavigateWon}
      >
        {/* {checkTrial ? (
          <div className="text-center bg-gradient-to-t from-black to-transparent absolute top-0 left-0 w-full h-full flex items-center justify-center cursor-not-allowed z-20">
            <p className="text-xs md:text-lg font-semibold text-white capitalize">
              You remain ineligible until
              <br /> the end of the trial !
            </p>
          </div>
        ) : (
          eligebleOne &&
          !sub_status &&
          type != "max" && (
            <div className="text-center bg-gradient-to-t from-black to-transparent absolute top-0 left-0 w-full h-full flex items-center justify-center cursor-not-allowed z-20">
              <p className="text-xs md:text-lg font-semibold text-white capitalize">
                You are not eligible,
                <br /> please subscribe first !
              </p>
            </div>
          )
        )} */}

        <div className="flex items-center justify-center  w-full ">
          <div className="w-1/2  h-full  overflow-hidden rounded-2xl shadow-lg">
            <img
              src={raffleimage}
              className=" object-cover rounded-2xl h-full w-full "
              alt=""
            />
          </div>

          <div className="w-1/2  h-full">
            {" "}
            <div className="flex flex-col   h-full justify-between w-full ">
              <div className="mt-2 sm:mt-5">
                <div className="px-3 flex flex-row justify-between items-center text-black font-bold text-base sm:text-xl special:text-4xl special:p-2">
                  <span>{name}</span>
                </div>

                <div className="px-3 flex flex-row justify-between items-center text-black ">
                  <span className="text-sm special:text-lg text-black py-2 special:p-2">
                    {formattedDate}
                  </span>
                </div>
              </div>

              <div className="flex flex-col w-full ">
                <div
                  className="flex flex-col w-[97%] sm:w-[95%] py-1 rounded-r-2xl winner-bg "
                  style={{ backgroundColor: color }}
                >
                  <div className="px-3 w-full">
                    {winner && (
                      <p className="text-sm sm:text-lg font-bold special:text-2xl capitalize text-black  leading-0 ">
                        {winner}
                      </p>
                    )}

                    <div className="flex items-center justify-end ">
                      <span className="text-sm sm:text-base special:text-lg text-black leading-0 ">
                        Winner
                      </span>
                    </div>

                    {winningNumber && (
                      <p className="text-xs   text-black leading-0">
                        {winningNumber}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardWinnerVehicleCard;
