import "./GucciCard.css";
import Vector3 from "../../assets/images/Vector3.png";

const GucciCard = () => {
  return (
    <div className="flex flex-col bg-[#4FC8E8] py-4 rounded-[44.99px] xl:space-y-4 space-y-2 px-2 w-full h-fit">
      <div className="flex flex-row justify-between items-center mx-2 rounded-[24.99px] py-4 xl:px-4 px-2 cursor-pointer">
        <p className="text-white text-xl xl:text-2xl font-bold">GUCCI</p>
        <img src={Vector3} alt="arrow" />
      </div>
      <div className="flex flex-row justify-between items-center mx-8">
        <p className="text-white text-xs">00m ago</p>
        <div className="flex flex-col">
          <p className="flex justify-end text-sm">GET 0% off...</p>
          <p className="text-xs">(Terms & Condition apply)</p>
        </div>
      </div>
    </div>
  );
};

export default GucciCard;
