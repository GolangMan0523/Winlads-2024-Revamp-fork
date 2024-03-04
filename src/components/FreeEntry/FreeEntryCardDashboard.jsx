import FreeEntry3 from "../../assets/images/freeEntryImg3.png";

const FreeEntryCardDashboard = () => {
  const handleClickButton = () => {
    window.location.href = "https://winlads.com/register?COUPEN=WINFREE";
  };

  return (
    <div className="rounded-[10px] w-full h-full shadow-lg bg-[#F7B928] shadow-gray-400 relative flex flex-col ">
      <div className="h-full w-full">
        <img src={FreeEntry3} alt="" className="2xl:w-9/12 xl:w-full lg:w-10/12 md:w-10/12 sm:w-9/12   w-full h-full  rounded-[10px] " />
      </div>
      <div className="absolute bottom-2 left-0 right-0 mx-2 flex justify-center ">
        <button
          className="bg-[#F7B928] py-2 w-10/12  hover:transition-transform ease-out duration-300 text-sm sm:text-base md:text-lg hover:text-black hover:bg-white uppercase text-black rounded-lg border border-solid border-black special:py-4"
          onClick={handleClickButton}
        >
          GET FREE ENTRIES
        </button>
      </div>
    </div>
  );
};

export default FreeEntryCardDashboard;
