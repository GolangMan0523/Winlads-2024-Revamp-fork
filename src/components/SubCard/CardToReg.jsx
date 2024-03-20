import React, { useEffect, useState } from "react";
// import Correct from "../assets/correct.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import Correct from "../../assets/images/icons/greenCorrect.png";
import { motion } from "framer-motion";

const SubCard = ({
  currentType = "monthly",
  bgColorFrom = "#D9E9FF",
  bgColorTo = "#89CCFD",
  titleColor = "black",
  title,
  titleColor2,
  title2,
  price,
  desc1,
  buttonTextColor,
  desc2,
  desc3,
  desc4,
  desc5,
  desc6,
  desc7,
  desc8,
  desc9,
  desc10,
  descColor = "black",
  buttonColor,
  arrowColor,
  btnword,
  mostPopular = false,
  yValue,
  classNames,
  planId,
  mPlanId,
  qPlanId,
  yPlanId,
  handleChosePlan,
  chosenPlan,
  isShowDetails = false,
  popular,
  isDisabled = false,
  specDesc,
  setSubcriptionActive,
  multiplyBy = 1,
  chosenType = "monthly",
}) => {
  const [initial, setShowmore] = useState(1);
  const [btnBgColor, setBtnBgColor] = useState(buttonColor);
  // const [showPopular, setShowPopular] = useState(false);

  // useEffect(() => {
  //   setShowPopular(popular);
  // }, []);

  const switchBtnColor = () => {
    if (btnBgColor == buttonColor) {
      setBtnBgColor("#FFF");
    } else {
      setBtnBgColor(buttonColor);
    }
  };
  const handleClick = () => {
    if (initial == 1) {
      setShowmore(desc1.length);
    } else {
      setShowmore(1);
    }
  };

  const opacity = 1;
  const opacity2 = 1;

  const hexToRgba = (hex, opacity) => {
    hex = hex.replace(/^#/, "");
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };
  const dynamicBackgroundColor = hexToRgba(bgColorFrom, opacity);
  const dynamicBackgroundColor2 = hexToRgba(bgColorFrom, opacity2);

  return (
    <div
      className={`rounded-2xl min-w-52 xl:min-w-72 md:pt-8 pt-14 pb-4 shadow-lg shadow-gray-400 relative flex flex-col border-2 border-black ${classNames} text-black`}
      style={{
        background: bgColorFrom,
        borderColor: bgColorTo,
      }}
    >
      {popular && (
        <div
          className="flex items-center text-sm justify-center text-center absolute rounded-t-2xl top-[-35px]  left-1/2 transform -translate-x-1/2 py-2 bg-black font-semibold w-1/2 "
          style={{ color: "#fff" }}
        >
          <FaStar className="text-yellow-500" /> Most Popular
        </div>
      )}
      <div className="flex justify-between items-start mb-2 pt-2 px-6 text-black">
        <p
          className={`text-black text-center  uppercase text-sm lg:text-xl 2xl:text-2xl`}
        >
          <p className="text-start font-bold ">{title}</p>
          <p className="text-start">Tier</p>
        </p>

        <p className={`font-bold text-lg 2xl:text-xl`}>
          <span className="text-4xl lg:text-5xl">
            {title2 * multiplyBy}{" "}
            <span className="text-xs uppercase">Free</span>
          </span>
        </p>
      </div>
      <p className="font-bold text-center text-sm special:text-2xl 2xl:text-lg mb-3 w-full bg-slate-200">
        <span className="uppercase text-xs w-full text-black">
          Accumulating {title2 == 1 ? "Entry" : "Entries"}
        </span>
      </p>
      {isShowDetails && (
        <div className="relative flex flex-col mx-6 py-4 rounded-xl md:mb-10 mb-5 h-full">
          {/* <div className="flex flex-row items-start gap-2">
            <img src={Correct} alt="" />
            <p
              className={`text-${descColor} text-[8px] 2xl:text-[16px] leading-5`}
            >
              {desc1}
            </p>
          </div> */}
          <div className="flex flex-row  gap-2 items-center">
            <img src={Correct} alt="" />
            <p className={`text-${descColor} text-[10px] 2xl:text-[16px]`}>
              ${price}
            </p>
          </div>
          {desc1.slice(0, initial).map((el, key) => (
            <div className="flex flex-row  gap-2 items-center" key={key}>
              <img src={Correct} alt="" />
              <p className={`text-${descColor} text-[10px] 2xl:text-[16px]`}>
                {el}
              </p>
            </div>
          ))}
          {specDesc && (
            <div className="flex flex-row  gap-2 items-center">
              <img src={Correct} alt="" />
              <p className={`text-${descColor} text-[8px] 2xl:text-[16px]`}>
                {specDesc}
              </p>
            </div>
          )}


        </div>
      )}
      <div className="text-xs font-semibold text-black border-[1px] rounded-md border-gray-300 p-3 mb-2 mx-6">
        <p
          className="capitalize flex justify-center cursor-pointer text-black"
          // style={{ color: buttonColor }}
          onClick={handleClick}
        >
          {initial == 1 ? "View More" : "See Less"}
        </p>
      </div>
      <button
        className={`mx-6 border-2 rounded-md disabled:bg-gray-500 text-white hover:opacity-75 cursor-pointer flex flex-row justify-center py-2 mt-auto ${chosenPlan === planId && currentType === chosenType
          ? `bg-${bgColorTo}`
          : "bg-white"
          }`}
        onClick={() => handleChosePlan(planId)}
        onMouseEnter={() => switchBtnColor()}
        onMouseLeave={() => switchBtnColor()}
        disabled={isDisabled}
        style={{
          color: bgColorTo,
          borderColor: bgColorTo,
          backgroundColor: (chosenPlan === planId && currentType === chosenType) ? bgColorTo : 'white'
        }}
      >
        <div className={`flex flex-row items-center gap-2`} disabled={isDisabled}>
          <p
            className={`text-xs 2xl:text-lg ${chosenPlan === planId && currentType === chosenType
              ? "text-white"
              : ""
              }`}
          >
            {chosenPlan === planId && currentType === chosenType
              ? "SELECTED"
              : btnword}
          </p>
        </div>
      </button>

    </div>
  );
};

export default SubCard;
