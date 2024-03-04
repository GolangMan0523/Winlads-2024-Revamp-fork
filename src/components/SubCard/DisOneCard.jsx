import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import Correct from "../../assets/images/icons/greenCorrect.png";
import { motion } from "framer-motion";

const DisOneCard = ({
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
  handleChosePlan,
  chosenPlan,
  isShowDetails = false,
  popular,
  isDisabled = false,
  specDesc,
}) => {
  const [initial, setShowmore] = useState(1);
  const [btnBgColor, setBtnBgColor] = useState(buttonColor);
  const [showPopular, setShowPopular] = useState(false);

  useEffect(() => {
    setShowPopular(popular);
  }, []);

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
        background: `linear-gradient(180deg, ${bgColorFrom} 0%, ${bgColorTo} 100%)`,
      }}
    >
      {showPopular && (
        <div
          className="flex items-center justify-center gap-2 text-center absolute rounded-t-xl top-0 left-0 w-full py-2 bg-black font-semibold"
          style={{ color: "#fff" }}
        >
          <FaStar className="text-yellow-400" /> Most Popular
        </div>
      )}
      <p
        className={`text-${titleColor} text-center uppercase text-lg lg:text-xl 2xl:text-2xl font-bold md:pb-8 pt-4`}
      >
        {title}
      </p>

      <div className="flex flex-col justify-between items-center text-center md:mb-10 mb-4">
        <p
          className={`font-bold text-lg 2xl:text-xl`}
          style={{ color: titleColor2 }}
        >
          <span className="text-4xl lg:text-5xl">
            {title2} <span className="text-xs uppercase">Free</span>
          </span>{" "}
          <br />
          <span className="text-xs uppercase">
            Accumulating {title2 == "01" ? "Entry" : "Entries"}
          </span>
        </p>
      </div>
      {isShowDetails && (
        <div className="relative flex flex-col border-2 border-black bg-white px-1 py-4 rounded-xl md:mb-10 mb-5 h-full text-md 2xl:text-lg">
          {desc1.slice(0, initial).map((el, key) => (
            <div className="flex flex-row  gap-2 items-center" key={key}>
              <img src={Correct} alt="" />
              <p className={`text-${descColor}`}>{el}</p>
            </div>
          ))}
          {specDesc && (
            <div className="flex flex-row  gap-2 items-center">
              <img src={Correct} alt="" />
              <p className={`text-${descColor}`}>{specDesc}</p>
            </div>
          )}

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
        className={`rounded-md border-2 hover:bg-white disabled:bg-gray-500 hover:text-black cursor-pointer border-white flex flex-row justify-center py-2 hover:scale-105 hover:transition-transform ease-out duration-300 mt-auto text-${buttonTextColor}`}
        style={{ backgroundColor: btnBgColor }}
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
            {chosenPlan === planId ? "SELECTED" : btnword}
          </p>
          {/* <MdKeyboardArrowRight className={`text-${arrowColor}`} /> */}
        </div>
      </button>
    </motion.div>
  );
};

export default DisOneCard;
