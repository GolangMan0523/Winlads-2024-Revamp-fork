const DisOneVehicleCard = ({
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
}) => {
  const handleClick = () => {
    onButton();
  };

  const dateObject = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    dateObject
  );

  const handleClickOneOff = (count, name) => {
    console.log(name, "name");
    setSelect(count);
    setSelectedPlanName(name);
    setSelPlanPrice(count * 10);
  };

  return (
    <>
      <div
        className={`bg-gradient-to-t border-2 cursor-pointer to-[#0094FF] from-[#00347C] hover:opacity-75 rounded-lg flex flex-col py-4 md:px-2 px-4  ${
          select === "01" ? "border-black" : ""
        }`}
        onClick={() => handleClickOneOff("1", "1 Free entry package")}
      >
        <p className="text-black font-semibold xl:text-2xl md:text-xl text-lg xl:pb-8 pb-12 md:pb-4 text-center">
          1 Entry
        </p>
        <div className="bg-white text-black rounded-lg md:py-4 py-2 text-center px-2 md:text-xs text-[8px]">
          $ 10
        </div>
      </div>
      <div
        className={`bg-gradient-to-t border-2 to-[#FC4701] from-[#661E01] hover:opacity-75 rounded-lg flex flex-col py-4 md:px-2 px-4  ${
          select === "03" ? " border-black" : ""
        }`}
        onClick={() => handleClickOneOff("3", "3 Free entries package")}
      >
        <p className="text-black font-semibold cursor-pointer xl:text-2xl md:text-xl text-lg xl:pb-8 pb-12 md:pb-4 text-center">
          3 Entries
        </p>
        <div className="bg-white text-black rounded-lg md:py-4 py-2 text-center px-2  md:text-xs text-[8px]">
          $ 30
        </div>
      </div>
      <div
        className={`bg-gradient-to-t border-2 to-[#01E9FC] from-[#01666D] hover:opacity-75 rounded-lg flex flex-col py-4 md:px-2 px-4  ${
          select === "10" ? "border-black" : ""
        }`}
        onClick={() => handleClickOneOff("10", "10 Free entries package")}
      >
        <p className="text-black font-semibold cursor-pointer xl:text-2xl md:text-xl text-lg xl:pb-8 pb-12 md:pb-4 text-center">
          10 Entries
        </p>
        <div className="bg-white text-black rounded-lg md:py-4 py-2 text-center px-2  md:text-xs text-[8px]">
          $ 100
        </div>
      </div>
      <div
        className={`bg-gradient-to-t border-2 to-[#F5B701] from-[#796201] hover:opacity-75 rounded-lg flex flex-col py-4 md:px-2 px-4  ${
          select === "25" ? "border-black" : ""
        }`}
        onClick={() => handleClickOneOff("25", "25 Free entries package")}
      >
        <p className="text-black font-semibold cursor-pointer xl:text-2xl md:text-xl text-lg xl:pb-8 pb-12 md:pb-4 text-center">
          25 Entries
        </p>
        <div className="bg-white text-black rounded-lg md:py-4 py-2 text-center px-2  md:text-xs text-[8px]">
          $ 250
        </div>
      </div>
      <div
        className={`bg-gradient-to-t border-2 to-[#22282D] from-[#010101] hover:opacity-75 rounded-lg flex flex-col py-4 md:px-2 px-4  ${
          select === "150" ? "border-black" : ""
        }`}
        onClick={() => handleClickOneOff("150", "150 Free entries package")}
      >
        <p className="text-white font-semibold cursor-pointer xl:text-2xl md:text-xl text-lg xl:pb-8 pb-12 md:pb-4 text-center">
          150 Entries
        </p>
        <div className="bg-white text-black rounded-lg md:py-4 py-2 text-center px-2  md:text-xs text-[8px]">
          $ 1500
        </div>
      </div>
      {/* </motion.div> */}
    </>
  );
};

export default DisOneVehicleCard;
