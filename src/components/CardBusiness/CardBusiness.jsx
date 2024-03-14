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
import back from "../../assets/images/BusinessCard/background.png";

const BCard = () => {
  const [bCard, setBCard] = useState("");
  const [valUser, setValUser] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    currentUserValidation();
    //   //bug :  USE EFFECT IS RUNNING INFINITE
  }, []);

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log(validator.user);
      setValUser(validator.user);
      getBCard(validator.user.uid);
    } else {
      navigate("/login");
    }
  };

  const getBCard = async (id) => {
    await axios
      .get(
        `${import.meta.env.VITE_SERVER_API}/getBusinessCard?uid=${id}`
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
          <div className="bg-gray-200 rotate-2 mt-4 rounded-2xl xl:w-3/4 mx-auto">
            <div
              className={`bg-[#6ED9F7] -rotate-2 rounded-[35px] px-4 special:px-8 2xl:px-6 justify-between py-4 special:py-8 2xl:py-4 cursor-pointer `}
            // style={{
            //   background: `linear-gradient(90deg, ${
            //     valUser?.subscriptionPlan?.data?.color
            //       ? valUser?.subscriptionPlan?.data?.color
            //       : "#15803D"
            //   } 0%, #000608 100%)`,
            // }}
            >
              <div className="flex flex-row justify-between item-center py-5 xl:py-5">
                <div className="col-span-8">
                  <img
                    src={bscard}
                    className="w-32 2xl:w-40 special:w-36 md:w-36 brightness-200"
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
              <div className="flex items-center justify-center">

                <span className="  text-black text-xs font-semibold text-center md:text-sm xl:text-lg 2xl:text-xl special:text-xl xl:w-96 w-40">
                  "Connecting Hearts, Uplifting Lives: Our People-Centric Giveaways"

                </span>
                <div className="w-5/6 py-5">
                  <img
                    src={png2}
                    alt=""
                    className="w-full"
                  />
                </div>

              </div>
            </div>
          </div>
          <div
            className="  rounded-[35px] px-4 special:px-8 2xl:px-6 item-center py-2 special:py-4 2xl:pt-4 cursor-pointer relative"
          // style={{
          //   background: `linear-gradient(90deg, ${
          //     valUser?.subscriptionPlan?.data?.color
          //       ? valUser?.subscriptionPlan?.data?.color
          //       : "#15803D"
          //   } 0%, #000608 100%)`,
          // }}
          >
            <div className="space-y-2 xl:space-y-3 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 xl:-translate-y-1/2 flex items-center flex-col">
              <div className="bg-black rounded-full p-1 xl:w-4 xl:h-4" />
              <div className="bg-black rounded-full p-2 xl:p-3 xl:w-5 xl:h-5" />
              <div className="bg-black rounded-full p-3 xl:p-4 xl:w-8 xl:h-8" />
              <div className="bg-black rounded-full p-4 xl:p-6 xl:w-10 xl:h-10" />

            </div>
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
            <div className="flex flex-col space-y-1 mt-20">
              <div className="flex justify-center">
                <img
                  src={bCard.image}
                  className="w-32 xl:w-36 2xl:w-48 special:w-96 md:w-48 border-4 border-black  "
                  alt=""
                />
              </div>

              <span className="text-center md:text-sm xl:text-sm 2xl:text-xl special:text-2xl">
                giveaways@winlads.com.au
              </span>
            </div>
          </div>
        </>
      )
      }
    </div >
  );
};

export default BCard;
