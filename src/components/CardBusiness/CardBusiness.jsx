import { useEffect, useState } from "react";
import bscard from "../../assets/images/BusinessCard/bscard.png";
import Union from "../../assets/images/BusinessCard/Union.png";
import png2 from "../../assets/images/BusinessCard/png2.png";
import Icon from "../../assets/images/BusinessCard/icon.png";
import Rectangle from "../../assets/images/BusinessCard/Rectangle.png";
import axios from "axios";
import { validateCurrentUser } from "../../utils/validateuser";
import { useNavigate } from "react-router-dom";
import ItemLoader from "../../components/Loader/ItemLoader";


const BCard = () => {
  const [bCard, setBCard] = useState("");
  const [valUser, setValUser] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    getBCard();
    currentUserValidation();
  //   //bug :  USE EFFECT IS RUNNING INFINITE
  }, [bCard, valUser]);

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log(validator.user);
      setValUser(validator.user);
    } else {
      navigate("/login");
    }
  };

  const getBCard = async () => {
    await axios
      .get(
        `${import.meta.env.VITE_SERVER_API}/getBusinessCard?uid=${valUser.uid}`
      )
      .then((response) => {
        console.log(response?.data?.data, "img")
        setBCard(response?.data?.data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className={`flex flex-col space-y-4 xl:mx-20 md:mx-20  text-white`}>
      {loading ? (
        <div className="flex justify-center">
          <ItemLoader />
        </div>
      ) : (
        <>
          <div
            className={`bg-[#6ED9F7] rounded-[35px] px-4 special:px-8 2xl:px-6 justify-between py-4 special:py-8 2xl:py-4 cursor-pointer `}
            // style={{
            //   background: `linear-gradient(90deg, ${
            //     valUser?.subscriptionPlan?.data?.color
            //       ? valUser?.subscriptionPlan?.data?.color
            //       : "#15803D"
            //   } 0%, #000608 100%)`,
            // }}
          >
            <div className="flex flex-row justify-between item-center">
              <div className="col-span-8">
                <img
                  src={bscard}
                  className="w-26 2xl:w-24 special:w-36 md:w-36 brightness-200"
                  alt="Winlads Card"
                />
              </div>

              <div className="xl:space-y-2 space-y-1 px-2 col-span-4">
                <img
                  src={Union}
                  className="w-4 special:w-8 md:w-8"
                  alt="Signal"
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="md:mx-20 mx-auto">
                <img
                  src={png2}
                  alt=""
                  className="special:w-4/5  "
                />
              </div>

              <span className="  text-black text-sm text-center md:text-sm xl:text-lg  2xl:text-xs special:text-xl">
                "Connecting hearts, uplifting lives: Our People-centric
                giveaways"
              </span>
            </div>
          </div>
          <div
            className="  rounded-[35px] px-4 special:px-8 2xl:px-6 item-center py-2 special:py-4 2xl:py-4 cursor-pointer"
            // style={{
            //   background: `linear-gradient(90deg, ${
            //     valUser?.subscriptionPlan?.data?.color
            //       ? valUser?.subscriptionPlan?.data?.color
            //       : "#15803D"
            //   } 0%, #000608 100%)`,
            // }}
          >
            {/*  <div className="flex flex-row justify-between item-center">
               <div className="col-span-12">
                <img
                  src={Icon}
                  className="w-8 2xl:w-16 special:w-24 brightness-200"
                  alt="Winlads Card"
                />
              </div> 
            </div>
            */}
            <div className="flex flex-col space-y-1">
              <div className="flex justify-center">
                <img
                  src={bCard.image}
                  className="w-24 xl:w-36 2xl:w-48 special:w-96 md:w-48 border-4 border-black  "
                  alt=""
                />
              </div>

              <span className="text-center md:text-sm xl:text-sm 2xl:text-xl special:text-2xl">
                giveaways@winlads.com.au
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BCard;
