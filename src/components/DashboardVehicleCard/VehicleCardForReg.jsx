import { useState, useEffect } from "react";
import CatJeep from "../../assets/images/rafflesImages/newJeep.png";
import Correct from "../../assets/images/icons/greenCorrect.png";
import NewVeh from "../../assets/images/newVeh.png";
import { LuInfo } from "react-icons/lu";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom/dist";

const VehicleCardForReg = ({
  bgColor,
  name,
  date,
  icon,
  fromColor,
  type,
  onButton,
  color,
  raffleimage,
  id,
  select,
  yValue,
  setSelect,
  setSelectedPlanName,
  setSelPlanPrice,
  setOneOffActive,
  setSubcriptionActive,
  oneOffId,
  price,
  descs,
  handleChoseOneOff,
  multiplyBy = 1,
  discount = 0
}) => {
  const [isChanceOff, setIsChance] = useState();
  const [searchParams] = useSearchParams();

  const handleClick = () => {
    onButton();
  };

  const dateObject = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
    // second: "numeric",
    timeZone: "UTC", // Set the timeZone option to "UTC"
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    dateObject
  );

  const handleClickOneOff = (count, name) => {
    setOneOffActive(true);
    setSubcriptionActive(false);
    console.log(name, "name");
    setSelect(count);
    setSelectedPlanName(name);
    setSelPlanPrice(count * 10);
  };

  const handleCardSelect = (oneOffId) => {
    handleChoseOneOff(oneOffId);
    setSelect(oneOffId);
  };

  useEffect(() => {
    const coup = searchParams.get("ability");
    if (coup == "CHNCEOFF") {
      setIsChance(coup);
    }
  });

  // Convert hexadecimal to RGBA
  function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  return (
    <>
      <div
        className={`border-4 cursor-pointer relative hover:opacity-75 saturate-200 rounded-lg flex flex-col py-4 md:px-2 xl:px-4 px-4 w-full ${select === oneOffId ? "border-black" : ""
          }`}
        style={{
          background: fromColor, border: `2px solid ${color}`
        }}
        onClick={() => handleCardSelect(oneOffId)}
      >
        {
          discount > 0 ? <div className="bg-red-500 px-4 py-1 text-white font-bold absolute top-0 right-0 rounded-sm">
            -{discount}%
          </div> : ''
        }

        <div
          className={` relative font-[1000] xl:text-5xl md:text-5xl mt-8 text-6xl pb-16 md:pb-8 text-center xl:px-4 px-2 text-black`}
        // style={{ lineHeight: "0px" }}
        >
          <div className="flex items-baseline justify-center gap-1">
            {
              multiplyBy == 5 &&
              <div className="relative w-fit">
                <p className="text-4xl lg:text-2xl xl:text-3xl">{name}</p>
                <span className="absolute w-full -rotate-45 h-[2px] bg-black top-1/2 left-0"></span>
              </div>
            }
            <p>{multiplyBy * name} </p>
          </div>
          {/* {
            multiplyBy && false == 5 && <div className="absolute left-2 px-0 bottom-2/3">
              <div className="relative w-fit">
                <p className="text-3xl lg:text-2xl xl:text-xl">{name}</p>
                <span className="absolute w-full -rotate-45 h-[2px] bg-black top-1/2 left-0"></span>
              </div>
            </div>
          } */}


          <p className="xl:text-sm text-xs font-semibold">Free</p>
          <p className="xl:text-sm text-xs font-semibold">Entry Package</p>
        </div>
        <div className=" mb-4 rounded-lg py-4 px-4 border-2 " style={{ background: hexToRgba(color, 0.4) }}>
          <p className="text-center">
            {
              discount > 0 && <div className="w-max relative mx-auto">
                <span className="text-xl">${price}</span>
                <div className="w-full absolute h-[3px] bg-red-500 top-3 left-0 -rotate-6">

                </div>
              </div>
            }

            <span className="font-bold">${price - (price * discount / 100.0)}&nbsp;</span>only
          </p>
          <div
            className={`px-4 py-2 my-2 bg-white text-black rounded-md border border-solid border-black text-${name === "150" ? "white" : "white"
              }`}

          >
            <p className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-black"> ONE OFF PACKAGES</p>
          </div>
        </div>
        <div className="bg-white text-black rounded-lg md:py-4 py-2 text-center px-2 md:text-xs text-[8px] hidden">
          {isChanceOff && (
            <div className="flex items-center gap-2 font-semibold">
              <img src={Correct} className="w-fit" />{" "}
              <p className="text-black  text-center text-xs">
                Mezz Booth & DJ Booth
              </p>
            </div>
          )}
          {descs &&
            descs.map((desc, key) => (
              <div className="flex flex-row items-center gap-1 px-1" key={key}>
                <img src={Correct} className="2xl:w-6 w-4" />
                <p className="text-[6px] xl:text-xs md:text-[8px] 2xl:text-xs">
                  {desc}
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default VehicleCardForReg;
