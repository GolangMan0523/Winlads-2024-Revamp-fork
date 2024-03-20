import React, { useEffect, useState } from "react";
import Ticket from "../../assets/images/affiliate/affiliate.png";
import Money from "../../assets/images/affiliate/earnings.png";
import { validateCurrentUser } from "../../utils/validateuser";
import axios from "axios";
import ItemLoader from "../../components/Loader/ItemLoader";
import NewEarning from "../../assets/images/new/earnings.png";
import Count from "./Count";

import { useNavigate } from "react-router";

const AffiliateCard = () => {
  const [valUser, setValUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [wallet, setWallet] = useState([]);
  const [refferals, setRefferals] = useState({});
  const navigate = useNavigate();
  const [formattedDate, setDate] = useState("");
  const [affCount, setAffCount] = useState({
    l1count:0,
    l2count:0,
    l3count:0,
    l4count:0
  });

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
      getAffiliatsCount(validator.user.uid)

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
  const getAffiliatsCount = async (uid) => {
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/getRefferals?uid=${uid}`)
      .then((response) => {
        console.log(response.data);
        setAffCount(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className="bg-white px-2 border-gray-300 border border-solid rounded-xl mt-5 ">
      {loading ? (
        <div className="flex justify-center py-12">
          <ItemLoader className="w-9 h-9 2xl:w-9 2xl:h-9 special:w-18 special:h-18 animate-spin" />
        </div>
      ) : (
        <>
        <div className="flex justify-between px-3">
        <div className="flex items-center">
          <div className="flex-1">
            <p className="text-black font-bold  font text-lg md:text-xl xl:text-xl 2xl:text-5xl special:text-3xl font-axiforma">
              $
              {typeof valUser.balance === "number"
                ? valUser.balance.toFixed(2)
                : "0.00"}
            </p>
            <div className="flex items-center gap-2">
              <p className="2xl:text-lg p-1 font-semibold capitalize text-gray-600">
                your balance
              </p>
              <span className="bg-yellow-500 uppercase text-sm py-1 px-2 text-black font-extrabold rounded-full">
                {valUser?.subscriptionPlan?.data?.name || 'N/A'}
              </span>
            </div>
          </div>
        </div>
        <div>
          <Count
            count={
              affCount?.l1count +
                affCount?.l2count +
                affCount?.l3count +
                affCount?.l4count || 0
            }
          />
        </div>
      </div>
        <div className="flex  items-center justify-evenly">
          <div className="py-2    md:px-4 cursor-default">
            <div className="flex ">
              <img
                src={NewEarning}
                alt=""
                className="w-6 h-6 md:h-20 md:w-20 xl:h-12 xl:w-12 max-w-screen-sm"
              />
              <div>
                <div className="px-10 text-black font-bold text-lg md:text-5xl xl:text-xl 2xl:text-2xl special:text-3xl">
                  $
                  {wallet.earning
                    ? Math.floor(wallet.earning * 100) / 100 || "0.00"
                    : "0.00"}
                </div>
              </div>
            </div>
            <p className="py-4 text-[#6B6B6B] text-sm md:text-lg xl:text-sm 2xl:text-xl special:text-2xl">
              Total Earnings
            </p>
          </div>

          <div className="h-full border"></div>

          <div className="py-2   md:px-4 cursor-default ">
            <div className="flex">
              <img
                src={Ticket}
                alt=""
                className="w-6 h-6 md:h-20 md:w-20 xl:h-12 xl:w-12 max-w-screen-sm"
              />

              <p className=" px-8 text-black font-bold text-lg md:text-5xl xl:text-xl 2xl:text-2xl special:text-3xl">
                {String(
                  refferals?.l1count +
                  refferals?.l2count +
                  refferals?.l3count +
                  refferals?.l4count || 0
                ).padStart(2, "0")}
              </p>
            </div>
            <p className="py-4 text-[#6B6B6B] text-sm md:text-lg xl:text-sm 2xl:text-xl special:text-2xl">
              Total Affiliates
            </p>
          </div>
        </div>
        </>
      )}

      <button
        className={`bg-[#FF4C00] py-3  w-full sm:py-4 text-center rounded-xl hover:bg-black/75 ${!valUser.subscriptionPlan?.data
            ? "cursor-not-allowed"
            : "cursor-pointer"
          }`}
        onClick={() => navigate("/withdraw")}
        disabled={!valUser.subscriptionPlan?.data}
      >
        <p className="text-white text-sm md:text-lg xl:text-sm 2xl:text-xl special:text-2xl  font-semibold">
          Withdraw
        </p>
      </button>
    </div>
  );
};

export default AffiliateCard;
