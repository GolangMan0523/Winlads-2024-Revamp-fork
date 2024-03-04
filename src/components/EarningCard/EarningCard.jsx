import React from "react";
import EaringChart from "../../assets/images/EarningChart.png"
  ;
import CardChart from "../chart/CardChart";

const EarningCard = ({ balance = 0 }) => {


  console.log(balance)
  return (
    <div>
      <div className=" rounded-lg flex flex-col bg-black px-5 py-3 space-y-2 cursor-pointer">
        <div className="flex flex-row justify-between items-center">
          <p className="text-[#22CCEE] text-lg md:text-2xl xl:text-3xl">
            Earning Balance
          </p>
          <div className="">
            <p className="text-lg md:text-xl xl:text-2xl text-[#F04438]">0%</p>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p className="text-white text-xl md:text-5xl xl:text-7xl">$ {parseFloat(balance).toFixed(2) || '0.00'}</p>
          <div className="flex flex-col items-end justify-end bottom-0">
            <img src={EaringChart} alt="" className="w-16  xl:w-48  md:w-48 " />

          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningCard;
