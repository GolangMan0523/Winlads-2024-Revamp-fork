import React, { useEffect, useState } from "react";
import Ticket from "../../assets/images/affiliate/affiliate.png";
import Money from "../../assets/images/affiliate/earnings.png";
import { validateCurrentUser } from "../../utils/validateuser";
import axios from "axios";
import ItemLoader from "../../components/Loader/ItemLoader";
import NewEarning from "../../assets/images/new/earnings.png";

import { useNavigate } from "react-router";

const AffiliateCard = () => {
  const [valUser, setValUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [wallet, setWallet] = useState([]);
  const [refferals, setRefferals] = useState({});
  const navigate = useNavigate();
  const [formattedDate, setDate] = useState("");

  useEffect(() => {
    currentUserValidation();
  }, []);

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK", validator.user);
      setValUser(validator.user);
      // getTransactionsFunction();
      getEarning(validator.user.uid);
      getAffiliats(validator.user.uid);

      if (validator.user.transaction?.endfrom) {
        const dateObject = new Date(validator.user.transaction.endfrom);
        const options = { year: "numeric", month: "numeric", day: "numeric" };
        setDate(dateObject.toLocaleString("en-GB", options));
      }
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

  return (
    <div className="bg-white border-gray-300 border border-solid rounded-xl mt-5 ">
      {loading ? (
        <div className="flex justify-center py-12">
          <ItemLoader className="w-9 h-9 2xl:w-9 2xl:h-9 special:w-18 special:h-18 animate-spin" />
        </div>
      ) : (
        <div className="flex flex-col p-2 space-y-4 2xl:space-y-4">
          <div className="flex flex-row border-black border-2 rounded-2xl">
            <div className="from-[#008767] to-black items-center gap-1 bg-gradient-to-r rounded-l-xl flex flex-row flex-1 py-4 md:justify-center xl:justify-center justify-between md:gap-6 xl:gap-6 px-2">
              <div className="w-10 h-10">
                <img
                  src={NewEarning}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-white items-center">
                <p className="font-semibold 2xl:text-xl special:text-2xl text-lg text-center">
                  $
                  {wallet.earning
                    ? Math.floor(wallet.earning * 100) / 100
                    : "0.00"}
                </p>
                <p className="capitalize md:ext-sm text-[10px]">
                  Total Earnings
                </p>
              </div>
            </div>
            <div className="to-[#CBAD11] from-black bg-gradient-to-r items-center gap-1 rounded-r-xl flex flex-row flex-1 py-4 md:justify-center xl:justify-center justify-between md:gap-6 xl:gap-6 px-2">
              <div className="w-10 h-10">
                <img src={Ticket} className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col text-white">
                <p className="font-semibold 2xl:text-xl special:text-2xl text-lg text-center">
                  {String(
                    refferals?.l1count +
                      refferals?.l2count +
                      refferals?.l3count +
                      refferals?.l4count || 0
                  ).padStart(2, "0")}
                </p>
                <p className="capitalize md:ext-sm text-[10px]">
                  Total Affiliates
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col space-y-1 text-black">
              <p className="2xl:text-lg font-semibold capitalize">
                your balance
              </p>
              <p className="font-bold text-4xl">
                $
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
                      valUser.subscriptionPlan?.data?.color === "#22272C"
                        ? "white"
                        : valUser.subscriptionPlan?.data?.color,
                  }}
                >
                  {valUser.subscriptionPlan?.data?.name || "No plan"}
                </p>
              </div>
              <p className="text-black text-sm">{formattedDate || ""}</p>
            </div>
          </div>
          <button
            className={`bg-black py-2 text-center rounded-xl hover:bg-black/75 ${
              !valUser.subscriptionPlan?.data ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={() => navigate("/withdraw")}
            disabled={!valUser.subscriptionPlan?.data}
          >
            <p className="text-white font-semibold">Withdraw</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default AffiliateCard;
