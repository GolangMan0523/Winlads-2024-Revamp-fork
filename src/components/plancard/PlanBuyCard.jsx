import { IoCloseSharp } from "react-icons/io5";
import white from "../../assets/images/subscribers/white.png";
import bitcoin from "../../assets/images/rafflesImages/bitcoin.png";
import Visa from "../../assets/images/rafflesImages/Visa.png";
import Usd from "../../assets/images/rafflesImages/Usd.png";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

const PlanBuyCard = ({ onClose, userId, giveawayId, price, name, planeId, logDetailsToDataLayer}) => {
  const [loading, setLoading] = useState(false);
  const [btnDis, setBtnDisable] = useState(false)
  const [showConfBox, setShowBox] = useState(false)
  const handleButtonClick = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/checkoutSession`,
        { subid: planeId, uid: userId }
      );
      console.log("Response:", response.data);

      const payURL = response.data.payurl;

      setLoading(false);
      if (payURL == null) {
        toast.error(response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        window.location.href = payURL;
        logDetailsToDataLayer();
      }
    } catch (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      console.log(error);
      setLoading(false);
    }
  };

  const handleButtonCrypto = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/checkoutSessionCrypto`,
        { subid: planeId, uid: userId }
      );
      console.log("Response:", response.data);

      const payURL = response.data.payurl;

      setLoading(false);
      if (payURL == null) {
        toast.error(response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        window.location.href = payURL;
        logDetailsToDataLayer();
      }
    } catch (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      console.log(error);
      setLoading(false);
    }
  };

  const handlePointsButtonClick = async () => {
    setBtnDisable(true)
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/subscribeWithPoints`,
        { subid: planeId, uid: userId }
      );
      if (response.data.status === 200) {
        window.dataLayer.push({
          event: 'purchaseDetails',
          data: data
      });
        console.log(response.data.data);
        toast.success(response.data.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        toast.error(response.data.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.log(error);
    }
    setBtnDisable(false)

  };

  return (
    <div
      className="popup-container bg-black/50 justify-center items-center"
      //   onClick={handleBackdropClick}
    >
                  {
       showConfBox && <div className="bg-white z-10 p-5 border rounded-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h2>Are you sure to pay by balance?</h2>
          <div className="w-full flex items-center justify-center my-5 gap-4">
            <button className="bg-black hover:bg-white text-white hover:text-black border px-6 py-2 rounded-xl" disabled={btnDis} onClick={handlePointsButtonClick}>Yes</button>
            <button className="bg-white hover:bg-black text-black hover:text-white border px-6 py-2 rounded-xl" onClick={()=>setShowBox(false)}>No</button>
          </div>
        </div>
      }
      <div className="popup-content text-black flex flex-col bg-white shadow-lg space-y-4 special:space-y-12 2xl:space-y-8 justify-center py-4 special:py-8 2xl:py-6">
        <div className="flex justify-between items-center">
          <p className="text-black text-lg font-bold 2xl:text-xl special:text-4xl">
            {name}
          </p>
          <button
            className="text-3xl 2xl:text-4xl special:text-5xl hover:scale-105"
            onClick={onClose}
          >
            <IoCloseSharp />
          </button>
        </div>

        <div className="flex flex-col special:px-24 2xl:px-8 px-0 space-y-4 special:space-y-12 2xl:space-y-8">
          <p className="font-bold text-black text-center xl:text-4xl 2xl:text-5xl special:text-8xl md:4xl text-2xl">
            $&nbsp;{price}
          </p>
          {/* <p className="text-white text-center special:text-4xl">User/Month</p> */}
          {/* <div className="flex justify-center flex-col space-y-2 special:space-y-6 2xl:space-y-4">
            <div className="flex flex-row gap-4 items-center">
              <img
                src={white}
                alt=""
                className="w-3 h-3 2xl:h-5 2xl:w-5 special:w-7 special:h-7"
              />
              <p className="text-white text-sm xl:text-sm md:text-sm 2xl:text-lg special:text-2xl">
                1991 Land Rover Defender 110
              </p>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <img
                src={white}
                alt=""
                className="w-3 h-3 2xl:h-5 2xl:w-5 special:w-7 special:h-7"
              />
              <p className="text-white text-sm xl:text-sm md:text-sm 2xl:text-lg special:text-2xl">
                {" "}
                2023-SEP-19 TUESDAY
              </p>
            </div>
          </div> */}
          <p className="text-black text-lg font-bold 2xl:text-xl special:text-4xl">
            Payment Methods
          </p>
          <div className="flex flex-row justify-center items-center lg:gap-4 gap-1 text-black">
            <div
              className="bg-white hover:bg-black/5 rounded-xl p-2 flex justify-center items-center cursor-pointer lg:gap-2"
              onClick={handleButtonCrypto}
            >
              <img
                src={bitcoin}
                alt=""
                className="w-7 h-7 special:h-14 special:w-14 2xl:h-9 2xl:w-9"
              />
              <p className="text-xs md:block hidden">Pay by Crypto</p>
            </div>
            <div
              className="bg-white hover:bg-black/5 flex-row item-center gap-1 rounded-xl p-2 flex justify-center items-center cursor-pointer lg:gap-2"
              onClick={()=>setShowBox(true)}
            >
              <img
                src={Usd}
                alt=""
                className="w-7 h-7 special:h-14 special:w-14 2xl:h-9 2xl:w-9"
              />
              <p className="md:text-xs text-[10px]">Pay by Balance</p>
            </div>
            <div
              className="bg-white hover:bg-black/5 flex-row item-center gap-1 rounded-xl p-2 flex justify-center items-center cursor-pointer lg:gap-2"
              onClick={handleButtonClick}
            >
              <img
                src={Visa}
                alt=""
                className="w-7 h-7 special:h-14 special:w-14 2xl:h-9 2xl:w-9"
              />
              <p className="md:text-xs text-[10px]">Pay by Card</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanBuyCard;
