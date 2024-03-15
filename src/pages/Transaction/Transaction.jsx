import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import GoldCard from "../../components/GoldCard/GoldCard";
import TopNav from "../../components/TopNav/TopNav";
import MainCar from "../../assets/images/MainCar.png";
import Transfer from "../../assets/images/transaction/transfer-outlined.png";
import Save from "../../assets/images/transaction/save-outlined.png";
import Slip from "../../assets/images/transaction/slip-outlined.png";
import "react-calendar/dist/Calendar.css";
import Profit from "../../assets/images/transaction/profit.png";
import ShoppingBag from "../../assets/images/transaction/shopping-bag.png";
import axios from "axios";
import { validateCurrentUser } from "../../utils/validateuser";
import Stripe from "../../assets/images/transaction/strip.png";
import Fund from "../../assets/images/transaction/fund.png";
import Sub from "../../assets/images/transaction/sub.png";
import Balance from "../../assets/images/transaction/balance.png";
import ItemLoader from "../../components/Loader/ItemLoader";
import FundTransferForm from "../../components/fundTransfer/FundTransferForm";
import BG from "../../assets/images/HomesideBg.png";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Line from "../../assets/images/line.png";
import NewBalance from "../../assets/images/new/balance.png";
import NewEarning from "../../assets/images/new/earnings.png";
import NewPurcahase from "../../assets/images/new/purchase.png";
import EntriPagination from "../../components/MyEntries/EntriPagination";

const recodeCount = 10;

const Transaction = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();
  const [wallet, setWallet] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [transactionsCom, setTransactionsCom] = useState(true);
  const [initialShow, setInitShow] = useState(5);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [valUser, setValUser] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    currentUserValidation();
  }, []);

  const handleSeeMore = (show) => {
    if (show) {
      setInitShow(transactions.length);
    } else {
      setInitShow(5);
    }
  };

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK", validator.user);
      setValUser(validator.user);
      getEarning(validator.user.uid);
      getTransactionsFunction(validator.user.uid, 1, 10);
    } else {
      navigate("/login");
    }
  };

  const getEarning = async (valuid) => {
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/getPointBalances?uid=${valuid}`)
      .then((response) => {
        console.log(response.data);
        setWallet(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const getTransactionsFunction = async (valuid, from, to) => {
    setLoading(true);
    await axios
      .get(
        `${
          import.meta.env.VITE_SERVER_API
        }/getTransactions?uid=${valuid}&from=${from}&to=${to}`
      )
      .then((response) => {
        console.log(response.data.data);
        setTransactions(response?.data?.data);
        const onePage = Math.ceil(response.data.count / recodeCount);
        setPageCount(onePage);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const pagination = (no) => {
    const fromNo = recodeCount * (no - 1) + 1;
    const toNo = recodeCount * no;
    setCurrentPage(no);
    getTransactionsFunction(valUser.uid, fromNo, toNo);
  };

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "UTC",
  };
  

  

  // const startDateObject = new Date(transactions?.startfrom);

  // const options = { year: "numeric", month: "numeric", day: "numeric" };
  // const startDate = startDateObject.toLocaleString("en-US", options);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  const handleDateChange = (newDate) => {
    // Handle date change logic here
    setDate(newDate);
  };

  const toggleCalendar = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chartOptions = {
    series: [1, 1, 1],
    options: {
      chart: {
        type: "donut",
      },
      legend: {
        position: "bottom",
      },
      labels: [
        "Card Transactions",
        "Digital Transactions",
        "Earning Transactions",
      ],
    },
  };

  const handleButtonClick = () => {
    setTransactionsCom(false);
  };

  const handleBackClick = () => {
    setTransactionsCom(true);
  };

  const chartWidth = windowWidth > 700 ? 400 : windowWidth - 80;

  return (
    <div>
      <div className="flex relative  w-full overflow-hidden">
        <div className="xl:flex xl:flex-row flex-col xl:justify-between px-3 special:px-12 2xl:px-8 flex-1 xl:gap-8 special:gap-16 2xl:gap-12 space-y-4 xl:space-y-0">
          {/* <img
            src={BG}
            alt=""
            className="absolute right-0 -z-10 top-40 w-72 xl:w-96 md:w-96 special:w-1/4 2xl:w-1/4 special:top-60 opacity-60 2xl:top-40"
          /> */}
          <div className="flex flex-col space-y-4 flex-1 special:space-y-8 2xl:space-y-6">
            {transactionsCom ? (
              <div className="block xl:hidden space-y-4">
                <div className=" rounded-b-3xl py-4">
                  <TopNav textColor={"black"} />
                  <div className="pt-10 flex items-center justify-center">
                    <img className="w-8/12" src={MainCar} alt="main" />
                  </div>
                </div>

                <div className="flex md:flex-col flex-col space-y-2 md:space-y-0 gap-2">
                  {/* <div className="w-full">
                  <GoldCard />
                </div> */}
                  <div
                    className="bg-black rounded-2xl text-white text-center py-2 text-sm  hover:bg-black/75 cursor-pointer hidden"
                    onClick={handleButtonClick}
                  >
                    <p>Fund transfer</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="block xl:hidden pb-12">
                <TopNav color="black" />
              </div>
            )}
            <div className="flex flex-col space-y-1">
              <p className="font-extrabold md:text-2xl xl:text-3xl 2xl:text-3xl special:text-4xl">
                Transactions
              </p>
            </div>
            <div className="flex xl:flex-col md:flex-row flex-col gap-1 xl:gap-2 md:gap-6 2xl:text-2xl special:text-3xl">
              
              <div className="flex py-2 xl:px-3 md:px-4  flex-row px-2 cursor-default ">
                <div className="flex-1 w-full">
                  <p className=" text-black font-extrabold  font text-4xl md:text-xl xl:text-xl 2xl:text-5xl special:text-8xl">
                    ${Math.floor(wallet.balance * 100) / 100 || "0.00"}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="py-2 text-[#6B6B6B] text-sm md:text-lg  2xl:text-xl special:text-2xl">
                      Your Balance
                    </p>

                    <div className="flex uppercase items-center justify-center  p-1 special:p-2  px-3 special:px-5 rounded-full shadow-xl cursor-pointer hover:text-white bg-[#FFC128] text-black font-extrabold text-sm special:text-lg">
                    {valUser?.subscriptionPlan?.data?.name}
                  </div>

                  </div>
                </div>
              </div>


              <div className="flex  items-center justify-evenly">
               
                <div className=" py-2    md:px-4 cursor-default ">
                  <div className="flex ">
                    <img
                      src={NewEarning}
                      alt=""
                      className="w-6 h-6 md:h-20 md:w-20 xl:h-12 xl:w-12 max-w-screen-sm"
                    />
                    <div>
                      <div className="px-10 text-black font-extrabold text-lg md:text-xl xl:text-xl 2xl:text-2xl special:text-3xl">
                        $
                        {wallet.earning
                          ? Math.floor(wallet.earning * 100) / 100 || "0.00"
                          : "0.00"}
                      </div>
                    </div>
                  </div>
                  <p className="py-5 text-[#6B6B6B] text-sm md:text-lg xl:text-sm 2xl:text-xl special:text-2xl">
                    Total Earnings
                  </p>
                </div>

                <div className="h-full border"></div>

                <div className=" py-2   md:px-4 cursor-default ">
                  <div className="flex">
                    <img
                      src={NewPurcahase}
                      alt=""
                      className="w-6 h-6 md:h-20 md:w-20 xl:h-12 xl:w-12 max-w-screen-sm"
                    />

                    <p className=" px-8 text-black font-extrabold text-lg md:text-xl xl:text-xl 2xl:text-2xl special:text-3xl">
                      $
                      {wallet.purchase
                        ? Math.floor(wallet.purchase * 100) / 100 || "0.00"
                        : "0.00"}
                    </p>
                  </div>
                  <p className="py-4 text-[#6B6B6B] text-sm md:text-lg xl:text-sm 2xl:text-xl special:text-2xl">
                    Total Purchase
                  </p>
                </div>
              </div>

              
            </div>
            {transactionsCom ? (
              ""
            ) : (
              <div className="block xl:hidden flex-col space-y-2">
                <IoArrowBackCircleOutline
                  className="hover:scale-110 text-2xl"
                  onClick={handleBackClick}
                />

                <FundTransferForm />
              </div>
            )}
          </div>

          {transactionsCom ? (
            <div className="flex-col flex-1 space-y-4 hidden xl:flex">
              <div className="space-y-4">
                <div className=" rounded-b-3xl py-4">
                  <TopNav textColor={"black"} />
                  <div className="pt-10">
                    <motion.img
                      initial={{ x: 80, opacity: 0 }}
                      animate={{ x: 80, opacity: 1 }}
                      transition={{ type: "tween", duration: 1, delay: 1 }}
                      className="w-2/4"
                      src={MainCar}
                      alt="main"
                    />
                  </div>
                </div>

                <div
                  className="bg-black rounded-2xl hidden text-white text-center py-2 special:py-4 2xl:text-lg text-sm special:text-2xl hover:bg-black/75 cursor-pointer"
                  onClick={handleButtonClick}
                >
                  <p>Fund transfer</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="hidden xl:flex flex-1 flex-col pt-6">
              <div className="pb-12">
                <TopNav />
              </div>
              <img src={Line} alt="" />
              <div className="flex flex-col">
                <IoArrowBackCircleOutline
                  className="text-2xl 2xl:text-4xl special:text-6xl hover:scale-110"
                  onClick={handleBackClick}
                />
                <FundTransferForm />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col space-y-4 flex-1 px-10">
        <div className="flex justify-between items-center">
          <p className="font-bold text-xl md:text-xl xl:text-lg 2xl:text-xl special:text-2xl">
            Transactions
          </p>
        </div>
        {loading ? (
          <div className="flex justify-center">
            <ItemLoader />
          </div>
        ) : transactions.length > 0 ? (
          <div className="flex flex-col space-y-1">
            {transactions?.map((transaction, key) => (
              <div
                key={key}
                className="flex flex-row items-center justify-between hover:bg-gradient-to-r hover:from-[#6ed9f746] via-transparent  hover:to-transparent px-4 py-3  cursor-default border-b relative t-main"
              >
                
                <div className="flex flex-row items-center gap-2">
                  <div className="flex flex-col">
                    <p className="text-black capitalize font-bold">{transaction.mode}</p>
                    <div className="flex flex-col">
                      <p className={`capitalize text-xs text-gray-400`}>
                        {new Date(transaction.startfrom).toLocaleString(
                          "en-GB",
                          options
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div>
                    <p
                      className={`text-${
                        transaction.transactiontype == "DR"
                          ? "red-400"
                          : "green-400"
                      } text-lg font-bold`}
                    >
                      ${Math.floor(transaction.amount * 100) / 100}
                    </p>
                  </div>
                  <p className="capitalize text-xs text-gray-400 text-end">
                    {transaction.type}
                  </p>
                </div>
              </div>
            ))}
            <EntriPagination
              setCurrentPage={pagination}
              buttonClick={pagination}
              pageCount={pageCount}
              currentPage={currentPage}
            />
          </div>
        ) : (
          <p className="flex justify-center text-lg text-black">
            No transactions data
          </p>
        )}

        {/* Display Card Purchase */}
        {selectedOption === "Card Transaction" && (
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-2 items-center">
              <img
                src={Transfer}
                alt=""
                className="special:w-20 special:h-20 xl:w-14 xl:h-14 md:w-12 md:h-12 w-8 h-8"
              />
              <div className="flex flex-col">
                <p className="text-sm md:text-lg xl:text-xl 2xl:text-2xl special:text-3xl">
                  Car Purchase
                </p>
                <p className="text-xs md:text-xl xl:text-lg 2xl:text-xl special:text-2xl">
                  Auto Loan
                </p>
              </div>
            </div>
            <p className="text-[#4FC8E8] font-semibold xl:text-lg 2xl:text-2xl special:text-4xl">
              -$ 250
            </p>
          </div>
        )}

        {/* Display House Purchase */}
        {selectedOption === "Digital Transaction" && (
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-2 items-center">
              <img
                src={Slip}
                alt=""
                className="special:w-20 special:h-20 xl:w-14 xl:h-14 md:w-12 md:h-12 w-8 h-8"
              />
              <div className="flex flex-col">
                <p className="text-sm md:text-lg xl:text-xl 2xl:text-2xl special:text-3xl">
                  Houses Purchase
                </p>
                <p className="text-xs md:text-xl xl:text-lg 2xl:text-xl special:text-2xl">
                  Airbnb home
                </p>
              </div>
            </div>
            <p className="text-[#059713] font-semibold xl:text-lg 2xl:text-2xl special:text-4xl">
              $ 2250
            </p>
          </div>
        )}

        {/* Display Transport */}
        {selectedOption === "Earning Transaction" && (
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-2 items-center">
              <img
                src={Save}
                alt=""
                className="special:w-20 special:h-20 xl:w-14 xl:h-14 md:w-12 md:h-12 w-8 h-8"
              />
              <div className="flex flex-col">
                <p className="text-sm md:text-lg xl:text-xl 2xl:text-2xl special:text-3xl">
                  Transport
                </p>
                <p className="text-xs md:text-xl xl:text-lg 2xl:text-xl special:text-2xl">
                  Uber pathao
                </p>
              </div>
            </div>
            <p className="text-[#059713] font-semibold xl:text-lg 2xl:text-2xl special:text-4xl">
              $ 250
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Transaction;
