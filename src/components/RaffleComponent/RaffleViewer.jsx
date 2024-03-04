import React, { useEffect, useState } from "react";
import PresentRaffles from "./PresentRaffles";
import PastRaffles from "./PastRaffles";
import FutureRaffles from "./FutureRaffles";
import "./Raffle.css";
const RaffleViewer = ({ raffleRounds, setShowPopup, showLessPopUp, color, raffleId, past, present, future }) => {
  const [rTime, setRaffleTime] = useState(0);
  const [activeButton, setActiveButton] = useState(0);

  useEffect(() => {}, []);

  const handleRaffleTime = (time) => {
    console.log(time + "TIME CHANGED");
    setRaffleTime(time); //setRaffleRounds(raffleRounds[time])
    setActiveButton(time);
  };
  return (
    <div className="w-full my-24">
      {/*PAST PRESENT FUTURE  */}
      <div className="flex items-center justify-between font-extrabold w-full lg:w-1/2 px-5 ">
        {/* TODO: Change the Value Pased in here to time accordingly */}
        <button
          onClick={() => handleRaffleTime(0)}
          className={`${
            activeButton === 0 ? "active" : ""
          } cursor-pointer p-3 2xl:text-2xl special:text-4xl`}
        >
          PAST
        </button>
        <button
          onClick={() => handleRaffleTime(1)}
          className={`${
            activeButton === 1 ? "active" : ""
          } cursor-pointer p-3 2xl:text-2xl special:text-4xl`}
        >
          PRESENT
        </button>
        <button
          onClick={() => handleRaffleTime(2)}
          className={`${
            activeButton === 2 ? "active" : ""
          } cursor-pointer p-3 2xl:text-2xl special:text-4xl`}
        >
          FUTURE
        </button>
      </div>

      {/*ITEMS*/}
      <div className="flex flex-col space-y-2 md:flex-row gap-2 special:gap-4 md:justify-start w-full flex-wrap lg:flex-nowrap mt-10 md:mt-5 items-center">
        {rTime === 0 ? (
          <PastRaffles setShowPopup={setShowPopup} color={color} past={past} />
        ) : rTime === 1 ? (
          <PresentRaffles setShowPopup={setShowPopup} color={color} present={present} />
        ) : (
          <FutureRaffles
            setShowPopup={setShowPopup}
            showLessPopUP={showLessPopUp}
            color={color}
            raffleId={raffleId}
            future={future}
          />
        )}
      </div>
    </div>
  );
};

export default RaffleViewer;
