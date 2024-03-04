import { useEffect, useState } from "react";
import Icon from "../../assets/images/BusinessCard/icon.png";
import Rectangle from "../../assets/images/BusinessCard/Rectangle.png";
import axios from "axios";

const BCardQR = () => {
  const [bCard, setBCard] = useState("");

  useEffect(() => {
    getBCard();
  }, []);

  const getBCard = async () => {
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/getBusinessCard`)
      .then((response) => {
        console.log(response.data.data);
        setBCard(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="bg-black rounded-t-[35px] rounded-b-[35px] px-4 special:px-8 2xl:px-6 item-center py-4 special:py-8 2xl:py-4 cursor-pointer">
      <div className="flex flex-row justify-between item-center">
        <div className="col-span-12">
          <img src={Icon} className="w-8" alt="Winlads Card" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col items-center xl:space-y-2 space-y-1 px-2 col-span-4 py-4">
          <img src={Rectangle} className="w-20" alt="" />
        </div>

        <span className="text-blue text-center md:text-sm xl:text-sm 2xl:text-sm special:text-xl">
          giveaways@winlads.com.au
        </span>
      </div>
    </div>
  );
};

export default BCardQR;
