import { Link } from "react-router-dom";
import "./Raffle.css";
import { useEffect, useState } from "react";
import CatJeep from "../../assets/images/rafflesImages/newJeep.png";
import NewVeh from "../../assets/images/newVeh.png";

function RaffleDashboardComponent({
  bgColor,
  id,
  name,
  type,
  img,
  date,
  raffleimage,
}) {
  const linearGradient = `linear-gradient(90deg, ${bgColor} 0%, #000000 100%)`;

  return (
    <>
      <Link to={`/giveaway/${id}`} state={{ name, bgColor, raffleimage }} className="w-full">
        <div
          className="flex flex-row items-stretch justify-between pr-2 h-3/4 rounded-3xl pt-4 2xl:rounded-[30px] special:rounded-[40px] w-full shadow-lg hover:transition hover:duration-300 hover:ease-in-out hover:opacity-75"
          style={{ background: linearGradient }}
        >
          <div className="w-36 special:w-96 2xl:w-48 min-w-32 aspect-square">
            <img
              src={raffleimage}
              alt=""
              className="w-full h-full"
              // className=""
            />
          </div>
    

          <div className="flex flex-col space-y-4 w-2/3 py-2">
            {/* <div className="flex justify-end">
              <img
                src={img}
                alt=""
                className="2xl:w-16 xl:w-16 w-16 special:w-24"
              />
            </div> */}
            <div className="flex text-end flex-col z-10 pr-2 space-y-2 2xl:space-y-4 special:space-y-4 pt-4">
              <p className="text-white font-bold xl:text-2xl text-lg special:text-4xl 2xl:text-2xl text-center">
                {name}
              </p>
              {/* <p className="text-[10px] text-white special:text-xl 2xl:text-[10px]">
                {date}
              </p> */}
            </div>
            <div className="grid grid-cols-3 px-5 items-center">
              <div className="col-span-2 flex justify-end gap-2 z-10"></div>
              {/* <div className="col-span-1 justify-end flex">
                <GoQuestion />
              </div> */}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default RaffleDashboardComponent;
