import "./PurchaseCard.css";
import Vector1 from "../../assets/images/Vector1.png";
import Vector2 from "../../assets/images/Vector2.png";

const PurchaseCard = () => {
  return (
    <div className="flex flex-col bg-black rounded-3xl force:outline-none px-4 py-4">
      <div className="flex flex-row justify-between mb-2">
        <div className="flex flex-col">
          <span className="text-[#22CCEE] xl:text-xl text-md">Purchase Balance</span>
          <span className="text-white text-3xl text-center font-bold">$ 0</span>
        </div>
        <div className="">
          <img src={Vector1} alt="vector1" className="img-fluid" />
        </div>
        <div className="flex flex-col items-end justify-end">
          <span className="text-green-400">0%</span>
        </div>
      </div>
      <hr  />
      <div className="flex flex-row justify-between mt-2">
        <div className="flex flex-col">
          <span className="xl:text-xl text-md text-[#F38744]">Earning Balance</span>
          <span className="text-white text-3xl text-center font-bold">$ 0</span>
        </div>
        <div className="">
          <img src={Vector2} alt="vector2" className="img-fluid" />
        </div>
        <div className="flex flex-col items-end justify-end">
          <span className="text-green-400">0%</span>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCard;
