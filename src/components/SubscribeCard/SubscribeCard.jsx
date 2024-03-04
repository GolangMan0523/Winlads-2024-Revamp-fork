import React, { useEffect, useState } from "react";
import GreenCorrect from "../../assets/images/subcription/Icons.png";
import { FaStar } from "react-icons/fa";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";

const PaymentModal = ({ handleClose, show }) => {
  return (
    <div className={show ? "block" : "hidden"}>
      <section className="modal-main">
        {/* Your payment method form or content goes here */}
        text
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

function SubscribeCard({
  isPopular,
  name,
  gradientFrom,
  gradientTo,
  textColor,
  buttonColor,
  buttonText,
  buttonHoverText,
  buttonHover,
  hoverButtonBorder,
  raffleCount,
  onButtonClick,
  cardBorderColor,
  subId,
  descList = [],
  mPlanId,
  qPlanId,
  yPlanId,
  planeId,
  year,
  quartly,
  month,
  color,
  colorFrom = "#0094FF",
  descL = [],
  id,
  showUnSubModal,
  trailUserTest,
  userSub,
  handleRenew,
}) {
  const cookies = new Cookies(null, { path: "/" });
  const handleChooseButton = () => {
    onButtonClick();
  };
  useEffect(() => {
    const selectedPlaneId = cookies.get("selected-package-id");
    if (selectedPlaneId && selectedPlaneId == id) {
      handleChooseButton();
      cookies.remove("selected-package-id");
    }
  }, []);
  const [initialShow, setInitialShow] = useState(3);

  const handleShowMore = () => {
    if (initialShow == 3) {
      setInitialShow(descList[0].length);
    } else {
      setInitialShow(3);
    }
  };

  const opacity = 0.1;

const hexToRgba = (hex, opacity) => {
  hex = hex.replace(/^#/, '');
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
const dynamicBackgroundColor = hexToRgba(color, opacity);

  return (
    <div
      className={`relative border-2 border-[${color}] text-${textColor} py-8 px-6 special:py-8 2xl:py-8 xl:pt-10 rounded-[10px] flex flex-col cursor-pointer
      ${
        planeId &&
        ((month && planeId === mPlanId) ||
        (quartly && planeId === qPlanId) ||
        (year && planeId === yPlanId)
          )
      }
      `}
      style={{
        background: dynamicBackgroundColor,
      }}
    >
{isPopular && (
  <div
    className="flex items-center justify-center text-center absolute rounded-t-2xl top-[-40px] left-1/2 transform -translate-x-1/2 py-2 bg-black font-semibold w-1/2"
    style={{ color: "#fff" }}
  >
    <FaStar className="text-yellow-500" /> Most Popular
  </div>
)}

      <div className="flex justify-between items-end pt-2">
        <p className="text-lg special:text-3xl 2xl:text-2xl text-centerflex flex-col">
          <p className="text-start font-bold ">{name}</p><p className="text-start">Tier</p>
        </p>
        <p className="text-4xl md:text-4xl">
          {" "}
          {raffleCount}&nbsp;<span className="text-xs">FREE</span>
        </p>{" "}
      </div>
      <p className="font-bold text-center text-sm special:text-2xl 2xl:text-lg mb-3">
        <span className="uppercase text-xs">
          {subId}&nbsp;Accumulating {raffleCount == 1 ? "Entry" : "Entries"}
        </span>
      </p>
      <div
        className={`relative flex justify-center flex-col space-y-4 special:space-y-6 2xl:space-y-4 pb-16 bg-white text-black pt-2 px-2 rounded-xl h-full -2 border-solid border-${cardBorderColor}`}
      >
        {descL.slice(0, initialShow).map((disc, key) => (
          <div
            key={key}
            className="flex flex-row space-x-2 special:gap-4 2xl:gap-4 items-center"
          >
            <img
              src={GreenCorrect}
              alt=""
              className="w-5 h-5 special:h-7 special:w-7 2xl:h-5 2xl:w-5"
            />
            <p className="text-xs special:text-lg 2xl:text-md">{disc}</p>
          </div>
        ))}
        {/* <div className="flex flex-row gap-2 special:gap-4 2xl:gap-4 items-center">
          <img
            src={GreenCorrect}
            alt=""
            className="w-5 h-5 special:h-7 special:w-7 2xl:h-5 2xl:w-5"
          />
          <p className="text-xs special:text-lg 2xl:text-md">
            <span className="font-bold">{raffleCount}&nbsp;Accumulating</span>
            &nbsp;Entries
          </p>
        </div> */}
        {descL.length > 3 && (
          <button
            onClick={() => handleShowMore()}
            className="absolute bottom-1 right-1 text-xs font-semibold text-black"
            // style={{ color: color }}
          >
            {initialShow == 3 ? "View More" : "View Less"}
          </button>
        )}
      </div>

      <div className="">
        {(month && userSub === mPlanId) ||
        (quartly && userSub === qPlanId) ||
        (year && userSub === yPlanId) ? (
          <button
            type="button"
            className={`bg-transparent border-${buttonHover} text-${buttonText} font-semibold uppercase w-full border-2 rounded-xl text-black py-2 px-2 special:py-4 special:px-12 2xl:px-10 text-xs special:text-lg 2xl:text-sm mt-4 mb-2 hover:text-${buttonHoverText} hover:bg-${buttonHover} hover:border-${hoverButtonBorder}`}
            onClick={() => handleRenew(userSub)}
          >
            <p className={``}>Renew</p>
          </button>
        ) : !(
            (month && planeId === mPlanId) ||
            (quartly && planeId === qPlanId) ||
            (year && planeId === yPlanId)
          ) ? (
          <button
            type="button"
            className={`text-${buttonText} font-semibold uppercase w-full border-2 border-transparent rounded-xl text-black py-2 px-2 special:py-4 special:px-12 2xl:px-10 text-xs special:text-lg 2xl:text-sm mt-4 mb-2 hover:text-${buttonHoverText} hover:bg-${buttonHover} hover:border-${hoverButtonBorder}`}
            onClick={handleChooseButton}
            disabled={
              planeId &&
              ((month && planeId === mPlanId) ||
              (quartly && planeId === qPlanId) ||
              (year && planeId === yPlanId)
                ? false
                : true)
            }
            style={{
              background: `${color}`, // Change 0.7 to your desired opacity value
            }}
          >
            <p className="">
              {trailUserTest ? "End Trial Subscription" : "Choose Plan"}
            </p>
          </button>
        ) : (
          <button
            type="button"
            className={`bg-transparent border-${buttonHover} text-${buttonText} font-semibold uppercase w-full border-2 rounded-xl text-black py-2 px-2 special:py-4 special:px-12 2xl:px-10 text-xs special:text-lg 2xl:text-sm mt-4 mb-2 hover:text-${buttonHoverText} hover:bg-${buttonHover} hover:border-${hoverButtonBorder}`}
            onClick={showUnSubModal}
          >
            <p className={``}>
              {trailUserTest ? "End Trial Subscription" : "Unsubscribe"}
            </p>
          </button>
        )}
      </div>
    </div>
  );
}

export default SubscribeCard;
