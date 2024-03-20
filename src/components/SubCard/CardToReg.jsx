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
      className={`md:hover:translate-y-3 duration-300 md:hover:opacity-90 rounded-2xl min-w-52 xl:min-w-72 md:pt-8 pt-8 pb-2 shadow-lg shadow-gray-400 relative flex flex-col border-2 ${classNames} text-black md:min-w-[300px]`}
      style={{
        background: bgColorFrom  + "AA",
        borderColor: bgColorTo,
        title: "Starter",
        number: "1",
        price: "49.99",
        referral: "10%",
        discounts: "Partner Store Discounts: ",
        discountsPercent: "10%-15%",
        buttonColor: "bg-[#296FB8]",
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

      <div className="flex items-stretch pb-2 px-8">
        <div className="w-2/4 text-left">
          <h1 className="text-xl text font-extrabold">{title}</h1>
          <p className="text-xl font-light">Tier</p>
        </div>
        <div className="w-2/4  text-right">
          <h1 className="text-2xl font-sans">
            <span className="font-black">{title2 * multiplyBy}{" "}</span>
            <span className="text-[12px] font-light">Free</span>
          </h1>
        </div>
      </div>

      <div className="p-[9px]  bg-white/[.46]">
        <p className="text-center font-medium text-xs text-[#282C33]">
          Accumulating {title2 == 1 ? "Entry" : "Entries"}
        </p>
      </div>

      {isShowDetails && (
        <div className="relative flex flex-col mx-6 py-4 rounded-xl h-full ">
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

      <div className="mt-[23px] mx-2 px-2">
        <p
          className=" border border-black/[.13] rounded-lg text-sm font-normal py-3 max-md:text-xs max-md:px-5 w-full "
          // style={{ color: buttonColor }}
          onClick={handleClick}
        >
          {initial == 1 ? "View More" : "See Less"}
        </p>
      </div>

      <div className="m-2 px-2">
        <button
          className={`border hover:opacity-75 hover:-translate-y-0.5 border-black/[.13] rounded-lg text-sm w-full font-bold py-[14px] max-md:text-xs max-md:px-5 ${chosenPlan === planId && currentType === chosenType
            ? `bg-${bgColorTo}`
            : ""
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
          <div className={``} disabled={isDisabled}>
            <p
              className={`  ${chosenPlan === planId && currentType === chosenType
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


    </div>
  );
};

export default SubCard;
