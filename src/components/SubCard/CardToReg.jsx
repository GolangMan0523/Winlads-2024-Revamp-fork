import React, { useEffect, useState } from "react";
// import Correct from "../assets/correct.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import Correct from "../../assets/images/icons/greenCorrect.png";
import { motion } from "framer-motion";

const SubCard = ({
  currentType ='monthly',
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
  chosenType = 'monthly'
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

  return (
    <motion.div
      initial={{ y: yValue, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5 }}
      className={`rounded-2xl px-2 md:pt-8 pt-14 pb-4 shadow-lg shadow-gray-400 relative flex flex-col border-2 border-black ${classNames}`}
      style={{
        background: `linear-gradient(180deg, ${bgColorFrom} 50%, ${bgColorTo} 100%)`
      }}
    >
      {popular && (
        <div
          className="flex items-center justify-center gap-2 text-center absolute rounded-t-xl top-0 left-0 w-full py-2 bg-black font-semibold"
          style={{ color: "#fff" }}
        >
          <FaStar className="text-yellow-400" /> Most Popular
        </div>
      )}
      <p
        className={`text-${titleColor} text-center uppercase text-sm lg:text-xl 2xl:text-2xl font-bold md:pb-8 pt-4`}
      >
        {title}
      </p>

      {/* <div className="flex flex-row justify-between">
       
        <p className={`text-${titleColor} text-lg lg:text-xl 2xl:text-2xl`}>
          {price}
        </p>
      </div> */}
      <div className="flex flex-col justify-between items-center text-center md:mb-10 mb-4">
        <p
          className={`font-bold text-lg 2xl:text-xl`}
          style={{ color: titleColor2 }}
        >
          <span className="text-4xl lg:text-5xl">
            {title2 * multiplyBy} <span className="text-xs uppercase">Free</span>
          </span>{" "}
          <br />
          <span className="text-xs uppercase">
            Accumulating {title2 == "01" ? "Entry" : "Entries"}
          </span>
        </p>
      </div>
      {isShowDetails && (
        <div className="relative flex flex-col  border-2 border-black bg-white px-1 py-4 rounded-xl md:mb-10 mb-5 h-full">
          {/* <div className="flex flex-row items-start gap-2">
            <img src={Correct} alt="" />
            <p
              className={`text-${descColor} text-[8px] 2xl:text-[16px] leading-5`}
            >
              {desc1}
            </p>
          </div> */}
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

          {/* {showmore && (
            // desc3 && (
            <>
              <div className="flex flex-row items-start gap-2">
                <img src={Correct} alt="" />
                <p
                  className={`text-${descColor} text-[8px] 2xl:text-[16px] leading-5`}
                >
                  {desc2}
                </p>
              </div>
              <div className="flex flex-row items-start gap-2">
                <img src={Correct} alt="" />
                <p
                  className={`text-${descColor} text-[8px] 2xl:text-[16px] leading-5`}
                >
                  {desc3}
                </p>
              </div>
            </>

            // )
          )} */}
          {/* {desc3 && (
          <div className="flex flex-row items-start gap-2">
            <img src={Correct} alt="" />
            <p
              className={`text-${descColor} text-[10px] 2xl:text-[16px] leading-6`}
            >
              {desc3}
            </p>
          </div>
        )} */}
          {/* {desc10 && (
          <div className="flex flex-row items-start gap-2 pb-4">
            <img src={Correct} alt="" />
            <p
              className={`text-${descColor} text-xs 2xl:text-[16px] leading-6`}
            >
              <span className="font-bold">{desc10}&nbsp;Accumulating</span>&nbsp;Entries
            </p>
          </div>
        )} */}
          {/* {showmore && (
          <div>
            <div className="flex flex-row items-start gap-2">
              <img src={Correct} alt="" />
              <p
                className={`text-${descColor} text-xs 2xl:text-[16px] leading-6`}
              >
                {desc4}
              </p>
            </div>
            {desc5 && (
              <div className="flex flex-row items-start gap-2">
                <img src={Correct} alt="" />
                <p
                  className={`text-${descColor} text-xs 2xl:text-[16px] leading-6`}
                >
                  {desc5}
                </p>
              </div>
            )}
            {desc6 && (
              <div className="flex flex-row items-start gap-2">
                <img src={Correct} alt="" />
                <p
                  className={`text-${descColor} text-xs 2xl:text-[16px] leading-6`}
                >
                  {desc6}
                </p>
              </div>
            )}
            {desc7 && (
              <div className="flex flex-row items-start gap-2">
                <img src={Correct} alt="" />
                <p
                  className={`text-${descColor} text-xs 2xl:text-[16px] leading-6`}
                >
                  {desc7}
                </p>
              </div>
            )}
            {desc8 && (
              <div className="flex flex-row items-start gap-2">
                <img src={Correct} alt="" />
                <p
                  className={`text-${descColor} text-xs 2xl:text-[16px] leading-6`}
                >
                  {desc8}
                </p>
              </div>
            )}
            {desc9 && (
              <div className="flex flex-row items-start gap-2">
                <img src={Correct} alt="" />
                <p
                  className={`text-${descColor} text-xs 2xl:text-[16px] leading-6`}
                >
                  {desc9}
                </p>
              </div>
            )}
          </div>
        )} */}

          <div className="absolute bottom-2 right-2">
            <p
              className="capitalize flex justify-end text-[8px] cursor-pointer text-black"
              // style={{ color: buttonColor }}
              onClick={handleClick}
            >
              {initial == 1 ? "See More" : "See Less"}
            </p>
          </div>
        </div>
      )}
      <button
        className={`rounded-md border-2 disabled:bg-gray-500 text-white bg-black hover:opacity-75 cursor-pointer border-white flex flex-row justify-center py-2 mt-auto`}
        // style={{ backgroundColor: btnBgColor }}
        onClick={() => handleChosePlan(planId)}
        onMouseEnter={() => switchBtnColor()}
        onMouseLeave={() => switchBtnColor()}
        disabled={isDisabled}
      >
        <div
          className={`flex flex-row items-center gap-2`}
          disabled={isDisabled}
        >
          <p className={`text-xs 2xl:text-lg`}>
            {(chosenPlan === planId) && (currentType == chosenType) ? "SELECTED" : btnword}
          </p>
          {/* <MdKeyboardArrowRight className={`text-${arrowColor}`} /> */}
        </div>
      </button>
    </motion.div>
  );
};

export default SubCard;
