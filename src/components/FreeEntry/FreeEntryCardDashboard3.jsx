import FreeEntry3 from "../../assets/images/freeEntryImg5.png";

const FreeEntryCardDashboard3 = () => {


  return (
    <div className="rounded-[16px] md:w-full md:h-full w-[220px] shadow-lg bg-black flex items-center shadow-gray-400 relative flex-col ">
      <div className="md:h-full md:w-full">
        <img src={FreeEntry3} alt="" className="2xl:w-full xl:w-full lg:w-10/12 md:w-10/12 rounded-[10px] " />
      </div>
      {/* <div className="absolute bottom-2 left-0 right-0 mx-2 flex justify-center ">
        <div
          className="bg-[#F7B928] text-center py-2 w-10/12  hover:transition-transform ease-out duration-300 text-sm hover:text-black uppercase text-black rounded-lg border border-solid border-black special:py-4"
          onClick={handleClickButton}
        >
            You Are Eligible

        </div>
      </div> */}
    </div>
  );
};

export default FreeEntryCardDashboard3;
