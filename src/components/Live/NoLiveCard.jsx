import vechicle from "../../assets/images/live/vechicle.png";

const NoLiveCard = () => {
  return (
    <div className="w-full rounded-3xl opacity-70 bg-gradient-to-r from-[#980D0D] to-[#1D0202]  special:h-[90px] h-[80px] text-white flex items-center justify-between relative border">
    <div className="side-car-live  h-full rounded-3xl w-full pr-10 flex items-end justify-center flex-col">
      <p className=" text-base sm:text-lg font-semibold">2023 MAZDA BT-50</p>
      <p className=" text-[10px] sm:text-sx md:text-sm ">2024-FEB-28 WEDNESDAY</p>
    </div>

    {/* <div className="flex items-center justify-center gap-3 ">

    
      <img
        src={vechicle}
        alt=""
        className="w-1/2 cursor-pointer "
      />
    </div> */}


  </div>
  )
}

export default NoLiveCard
