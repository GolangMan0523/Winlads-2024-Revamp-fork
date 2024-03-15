import React, { useState, useEffect } from "react";
import CatJeep from "../../assets/images/rafflesImages/newJeep.png";
import NewVeh from "../../assets/images/newVeh.png";
import { LuInfo } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import Cab from "../../assets/cab.png";

const DashboardVehicleCard = ({
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

  const handleClick = () => {
    onButton();
  };

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
  const btn = hexToRgba(color, 0.5);


  return (
    <>
      <div
        className={`relative flex text-white flex-col justify-between rounded-2xl w-full p-2 shadow-lg hover:transition hover:duration-300 hover:ease-in-out cursor-pointer overflow-hidden `}
        style={{ backgroundColor: bg }}

        // style={{
        //   background: `linear-gradient(180deg, ${color} 0%, #ACACAC 100%)`,
        // }}
        onClick={handleNavigateWon}
      >
        {checkTrial ? (
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
        )}

        <div className="flex flex-col items-center justify-center">
          
          <div className="w-full flex items-center justify-center shadow-lg rounded-2xl ">
            <img src={raffleimage} alt="" className="rounded-lg w-full h-[220px] special:h-[250px]" />
          </div>

          <div className="w-full">
            {" "}
            <div className="flex flex-col px-3 mt-3">
              
              <div className="px-3 flex flex-row justify-between items-center text-black font-bold text-base sm:text-xl special:text-4xl special:p-2">
                <span>{name}</span>
              </div>

              <div className="px-3 flex flex-row justify-between items-center text-black ">
                  {/* <span className="text-sm special:text-lg text-black py-2 special:p-2">
                    {formattedDate}
                  </span> */}
                </div>

              {count && (
                <p className="text-sm text-black px-3">
                  My Entries : {count ? count : "No Entries"}
                </p>
              )}

             

              <div className="flex flex-col">
                {/* <div
                  className="flex flex-col z-10 pr-2 items-end space-y-2 2xl:space-y-4 special:space-y-4  special:py-5  special:  text-right rounded-xl w-full border-2 capitalize hover:bg-black bg-white text-black cursor-pointer py-1 hover:scale-105 hover:transition-transform ease-out duration-300 mt-2 hover:text-white text-sm px-1"
                  style={{ backgroundColor: color }}
                >
                  <div>
                    {winningNumber && (
                      <p className="text-sm special:text-2xl text-black font-semibold">
                        {winningNumber}
                      </p>
                    )}

                    {winner && (
                      <p className="text-xs  special:text-2xl capitalize text-black">
                        Winner : {winner}
                      </p>
                    )}
                  </div>
                </div> */}

                {/* {onePackage && (
                  <div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClick(); // Replace 'childPage' with the appropriate destination for the child div
                      }}
                      className="rounded-md w-full border-2 capitalize hover:bg-black bg-white text-black cursor-pointer py-1 hover:scale-105 hover:transition-transform ease-out duration-300 mt-2 hover:text-white text-sm px-1"
                      style={{ backgroundColor: color }} // Add background color here
                    >
                      one off packages
                    </button>
                  </div>
                )} */}


                {onePackage && (  <button className="rounded-lg capitalize py-3 font-semibold text-black text-sm sm:text-base hover:scale-105 mt-5" style={{ backgroundColor: btn }}>
                one off packages
                </button>)}
              

              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default DashboardVehicleCard;
