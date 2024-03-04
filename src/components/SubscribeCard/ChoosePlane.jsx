import { IoCloseSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import white from "../../assets/images/subscribers/white.png";
import Visa from "../../assets/images/rafflesImages/Visa.png";
import Usd from "../../assets/images/rafflesImages/Usd.png";
import bitcoin from "../../assets/images/rafflesImages/bitcoin.png";
import { toast } from "react-toastify";
import ItemLoader from "../../components/Loader/ItemLoader";


const ChoosePlane = ({ onClose, planeId, userId }) => {
  const [loading, setLoading] = useState(false);

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
      if(payURL==null) {
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
      })
      
      console.log(error);
      setLoading(false);
    }
  };

  const handlePointsButtonClick = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/subscribeWithPoints`,
        { subid: planeId, uid: userId }
      );
      if (response.data.status == 200) {
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
  };

  return (
    <div className="" onClick={onClose}>
      <div className="text-white rounded-[40px] flex flex-col bg-gradient-to-br from-[#000000] space-y-4 special:space-y-12 2xl:space-y-8 px-2 to-[#000000] justify-center py-4 special:py-8 2xl:py-6">
        <div className="flex justify-end">
          <button
            className="text-2xl 2xl:text-3xl special:text-4xl hover:scale-105"
            onClick={onClose}
          >
            <IoCloseSharp />
          </button>
        </div>

        <div className="flex flex-col special:px-24 2xl:px-12 px-8 space-y-4 special:space-y-12 2xl:space-y-8 items-center">
          <p className="font-bold text-white text-center xl:text-5xl 2xl:text-6xl special:text-9xl md:5xl text-3xl">
            $ 9.99
          </p>
          <p className="text-white text-center special:text-4xl">User/Month</p>
          {/* <div className="flex justify-center flex-col space-y-2 special:space-y-6 2xl:space-y-4">
            <div className="flex flex-row gap-2 items-center">
              <img
                src={white}
                alt=""
                className="w-3 h-3 2xl:h-5 2xl:w-5 special:w-7 special:h-7"
              />
              <p className="text-white text-sm xl:text-sm md:text-sm 2xl:text-lg special:text-2xl">
                1991 Land Rover Defender 110
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
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
          <p className="text-white text-lg font-bold 2xl:text-xl special:text-4xl">
            Payment Methods
          </p>
          <div className="flex flex-row justify-center items-center gap-4">
            <div className="bg-white hover:bg-white/75 rounded-xl p-2 flex justify-center items-center">
              <button className="hover:scale-110">
                <img
                  src={bitcoin}
                  alt=""
                  className="w-7 h-7 special:h-14 special:w-14 2xl:h-9 2xl:w-9"
                />
              </button>
            </div>
            <div
              className="bg-white hover:bg-white/75 rounded-xl p-2 flex justify-center items-center"
              onClick={handlePointsButtonClick}
            >
              <button className="hover:scale-110">
                <img
                  src={Usd}
                  alt=""
                  className="w-7 h-7 special:h-14 special:w-14 2xl:h-9 2xl:w-9"
                />
              </button>
            </div>
            <div
              className="bg-white hover:bg-white/75 rounded-xl p-2 flex justify-center items-center"
              onClick={handleButtonClick}
            >
              <button className="hover:scale-110">
                {loading ? (
                  <FiLoader />
                ) : (
                  <img
                    src={Visa}
                    alt=""
                    className="w-7 h-7 special:h-14 special:w-14 2xl:h-9 2xl:w-9"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosePlane;
