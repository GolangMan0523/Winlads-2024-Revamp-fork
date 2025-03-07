import React, { useEffect, useState } from "react";
// import Ticket from "../../assets/images/cardComponent/ticket.png";
// import Money from "../../assets/images/cardComponent/money.png";
import { validateCurrentUser } from "../../utils/validateuser";
import axios from "axios";
import ItemLoader from "../../components/Loader/ItemLoader";
import Ticket from "../../assets/images/affiliate/affiliate.png";
import Money from "../../assets/images/new/earnings.png";


const CardComponentNoWithdraw = () => {
  const [valUser, setValUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [loadingWallet, loadingSetWallet] = useState(true);
  const [wallet, setWallet] = useState([]);
  const [refferals, setRefferals] = useState(0);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    currentUserValidation();
  }, [refresh]);

  const triggerRefresh = ()=>{
    setRefresh((prev)=> !prev);
  }

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK", validator.user);
      setValUser(validator.user);
      getEarning(validator.user.uid);
      getAffiliats(validator.user.uid);
      // getTransactionsFunction();
    } else {
      setLoading(false);
    }
  };

  const getEarning = async (valuid) => {
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/getPointBalances?uid=${valuid}`)
      .then((response) => {
        setWallet(response?.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const getAffiliats = async (valuid) => {
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/getRefferals?uid=${valuid}`)
      .then((response) => {
        console.log(response.data);
        setRefferals(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  // const getTransactionsFunction = async () => {
  //   await axios
  //     .get(
  //       `${import.meta.env.VITE_SERVER_API}/getTransactions?uid=${valUser.uid}`
  //     )
  //     .then((response) => {
  //       console.log(response.data.data);
  //       setWallet(response?.data?.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setLoading(false);
  //     });
  // };

  const dateObject = new Date(valUser.transaction?.endfrom);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = dateObject.toLocaleString("en-US", options);

  return (
    <div className="bg-white border-gray-300 border border-solid rounded-xl">
      {loading ? (
        <div className="flex justify-center py-12">
          <ItemLoader className="w-9 h-9 2xl:w-9 2xl:h-9 special:w-18 special:h-18 animate-spin" />
        </div>
      ) : (
        <div className="flex flex-col p-2 space-y-4 2xl:space-y-4">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col space-y-1 text-black">
              <p className="2xl:text-lg font-semibold capitalize">
                your balance
              </p>
              <p className="font-semibold">
                ${" "}
                {typeof valUser.balance === "number"
                  ? valUser.balance.toFixed(2)
                  : "0.00"}
              </p>
            </div>
            <div className="flex flex-col space-x-1">
              <div className="bg-black rounded-full py-1 text-center px-2">
                <p
                  style={{
                    color:
                      !valUser.subscriptionPlan?.data?.color ||
                        valUser.subscriptionPlan?.data?.color === "#000000"
                        ? "white"
                        : valUser.subscriptionPlan?.data?.color,
                  }}
                >
                  {valUser.subscriptionPlan?.data?.name || "No Plan"}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="from-[#008767] to-black bg-gradient-to-r rounded-l-xl flex flex-row flex-1 py-4 md:justify-center xl:justify-center justify-between md:gap-6 xl:gap-6 px-2">
              <img src={Money} alt="" className="w-10 h-10" />
              <div className="flex flex-col text-white">
                <p className="font-semibold 2xl:text-xl special:text-2xl text-lg">
                  $&nbsp;{" "}
                  {wallet.earning
                    ? Math.floor(wallet.earning * 100) / 100
                    : "0.00"}
                </p>
                <p className="capitalize md:ext-sm text-[10px]">
                  Total Earnings
                </p>
              </div>
            </div>
            <div className="to-[#CBAD11] from-black bg-gradient-to-r rounded-r-xl flex flex-row flex-1 py-4 md:justify-center xl:justify-center justify-between md:gap-6 xl:gap-6 px-2">
              <img src={Ticket} alt="" className="w-10 h-10" />
              <div className="flex flex-col text-white">
                <p className="font-semibold 2xl:text-xl special:text-2xl text-lg">
                  {refferals?.l1count +
                    refferals?.l2count +
                    refferals?.l3count +
                    refferals?.l4count || 0}
                </p>
                <p className="capitalize md:ext-sm text-[10px]">
                  Total Affiliates
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardComponentNoWithdraw;
