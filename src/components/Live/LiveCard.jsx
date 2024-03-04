import vechicle from "../../assets/images/live/vechicle.png";

const LiveCard = () => {
  return (
    <div className="w-full rounded-3xl bg-gradient-to-r from-[#980D0D] to-[#1D0202]  special:h-[90px] h-[80px] text-white flex items-center justify-between relative border">
      <div className="side-car-live  h-full rounded-3xl w-8/12 md:w-7/12 sm:w-7/12 lg:w-1/2 flex items-center justify-end">
        <p className=" text-base sm:text-lg font-semibold">Vehicle</p>
      </div>

      <div className="flex items-center justify-center">
        <img
          src={vechicle}
          alt=""
          className="w-1/2 cursor-pointer hover:scale-105"
        />
      </div>

{/* red light */}
      <div className="absolute right-[-2px] top-[-2px]  border-2 border-white rounded-full">
        <span className="relative flex h-4 w-4 flex-col justify-start items-start">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4  bg-red-600"></span>
        </span>
      </div>
    </div>
  );
};

export default LiveCard;
