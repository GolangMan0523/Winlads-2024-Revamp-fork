import React from "react";
import FreeEntry from "../../assets/images/freeEntryImg2.png";

const FreeEntryCard = () => {
  const handleClickButton = () => {
    window.location.href = "https://winlads.com/register?COUPEN=WINFREE";
  };

  return (
    <div className="rounded-2xl xl:w-72 md:w-full w-full   shadow-lg bg-[#F7B928] shadow-gray-400 relative flex flex-col border-2 border-black">
      <div>
        <img
          src={FreeEntry}
          alt=""
          className="xl:w-72 w-full md:w-72  rounded-l-xl"
        />
      </div>
      <div className="absolute bottom-2 left-0 right-0 mx-2 flex justify-center">
        <button
          className="bg-[#F7B928] py-2 w-full hover:scale-105 hover:transition-transform ease-out duration-300 text-xs 2xl:text-lg hover:text-black hover:bg-white uppercase text-black rounded-lg border border-solid border-black"
          onClick={handleClickButton}
        >
          SIGN UP NOW
        </button>
      </div>
    </div>
  );
};

export default FreeEntryCard;
