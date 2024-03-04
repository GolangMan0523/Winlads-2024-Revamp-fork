import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";

const BuyRaffle = ({
  onClose,
  quotation,
  count,
  giveawayId,
  subId,
  userId,
}) => {
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/buyRaffleRound`,
        {
          uid: userId,
          subid: subId,
          roundid: giveawayId,
        }
      );
      if (response.data.status == 200) {
        toast.success("Buy new giveaway!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setLoading(false);
        onClose();
      } else {
        toast.error("Please try again later", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setLoading(false);
        onClose();
      }
      console.log("Response:", response.data);
      console.log("user id:", userId);
      console.log("giv id:", giveawayId);
      console.log("sub id:", subId);

      // const payURL = response.data.payurl;

      // // Redirect the user to the payURL
      // window.location.href = payURL;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {loading ? (
        <div className="moonloader-center">
          <HashLoader
            color={"#43AEC2"}
            loading={true}
            // cssOverride={override}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />{" "}
        </div>
      ) : (
        <div
          className="popup-container bg-white/50 justify-center items-center"
          //   onClick={handleBackdropClick2}
        >
          <div className="popup-content text-white flex flex-col bg-gradient-to-br from-[#000000] space-y-4 special:space-y-12 2xl:space-y-8  to-[#000000] justify-center py-4 special:py-8 2xl:py-4">
            <div className="flex justify-end">
              <button
                className="text-3xl 2xl:text-4xl special:text-5xl hover:scale-105"
                onClick={onClose}
              >
                <IoCloseSharp />
              </button>
            </div>

            <div className="flex flex-col special:px-24 2xl:px-8 px-4 space-y-4 special:space-y-12 2xl:space-y-8">
              <p className="font-bold text-white text-center xl:text-5xl 2xl:text-6xl special:text-9xl md:5xl text-3xl">
                $ 10
              </p>
              <p className="text-white text-center special:text-4xl">
                User/Month
              </p>
              <div className="text-center text-white flex justify-center text-sm special:text-4xl 2xl:text-2xl 2xl:w-96 xl:w-72 special:leading-normal">
                You have purchased&nbsp;{count}&nbsp;number of raffles from the amount of
                <br />
                subscriptions in your account and there are&nbsp;{parseFloat(quotation - count)}
                &nbsp;amount remaining.
              </div>
              <p className="text-white text-sm special:text-4xl 2xl:text-2xl">
                Do you want to buy this?
              </p>
              <div
                className="flex justify-center items-center bg-white rounded-lg text-black py-2 special:py-6 2xl:py-3 font-bold hover:bg-white/75  border border-solid"
                onClick={handleClick}
              >
                <button className="capitalize 2xl:text-2xl special:text-5xl ">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BuyRaffle;
