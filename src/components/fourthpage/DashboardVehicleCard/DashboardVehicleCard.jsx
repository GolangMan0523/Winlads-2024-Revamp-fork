import React from "react";
import vehicle from "../../assets/images/Lottery/Jeep.png";
import bg from "../../assets/images/Lottery/gradient-bg.png";

const DashboardVehicleCard = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-yellow-600 via-black to-black w-96 max-sm:w-72 rounded-3xl">
        <div className="flex">
          <div className="flex justify-center items-center ">
            <img src={vehicle} alt="vehicle" className="w-[500px] max-sm:w-60 max-xl:w-80"/>
          </div>
          <div className="w-full flex flex-col justify-center items-center relative right-10 max-sm:right-5 bg-black bg-opacity-30">
            <div className="text-white text-xl font-semibold text-center max-sm:text-base">1991 Land Rover Defender 110</div>
            <div className="text-white text-sm font-semibold max-sm:text-xs">2023-SEP-19 TUESDAY</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardVehicleCard;
