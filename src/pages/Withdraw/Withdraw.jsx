import React, { useEffect, useState } from "react";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";
import User from "../../assets/images/side-bar/User2.png";
import GoldCard from "../../components/GoldCard/GoldCard";
import MainCar from "../../assets/images/MainCar.png";
import backgroundcar from "../../assets/images/background/Background-car.png";
import axios from "axios";
import Cookies from "universal-cookie";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { toast } from "react-toastify";
import ItemLoader from "../../components/Loader/ItemLoader";
import { motion } from "framer-motion";
import { storage } from "../../firebase.config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Link, useNavigate } from "react-router-dom";
import { validateCurrentUser } from "../../utils/validateuser";
import CardComponent from "../../components/cardComponent/CardComponent";
import { RiArrowDropDownLine } from "react-icons/ri";
import CardComponentNoWithdraw from "../../components/cardComponent/CardComponentNoWithdraw";
import directBankIcon from "../../assets/images/icons/direct-bank.svg";
import stripeIcon from "../../assets/images/icons/stripe.svg";
import { IoIosArrowBack } from "react-icons/io";
const Withdraw = () => {
  const cookies = new Cookies(null, { path: "/" });
  const id = cookies.get("wr_token");
  const [withdrawShow, setWithdrawShow] = useState(false);
  const navigate = useNavigate();
  const [withdrawMethod, setWithdrawMethod] = useState(true);
  const [valUser, setValUser] = useState({});
  const [selectMethod, setSelectMethod] = useState("bank");

  const [amount, setAmount] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bnbnumber, setBnbnumber] = useState("")

  const [amountError, setAmountError] = useState(false);
  const [otherError, setOtherError] = useState(false);
  
  useEffect(() => {
    currentUserValidation();
  }, []);

  // const handleDrowpdownChange = (val) => {
  //   setWithdrawMethod(val);
  //   handleShowBank();
  // };

  const handleShowBank = () => {
    setWithdrawShow(!withdrawShow);
  };

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK");
      setValUser(validator.user);
    } else {
      navigate("/login");
    }
  };

  const setTransactions = async (ud) => {
    try {
      if (!amount) {
        setAmountError(true);
        throw Error('')
      }
      if (selectMethod == "bank") {
        if (!accountNumber || !bnbnumber || !bankName) {
          setOtherError(true);
          throw Error('All fields required!')

        }
      }
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/requestFundTransfer`,
        {
          uid: valUser.uid,
          method: selectMethod || "bank",
          bank: bankName,
          accountnumber: accountNumber,
          amount: amount,
          bnbnumber: bnbnumber
        }
      );
      console.log(response);
      if (response.data.status == 200) {
        toast.success('Withdraw request success', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setAmount("");
        setBankName("");
        setAccountNumber("")
        setBnbnumber("");

        //window.location.reload()
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
      if (error.message) {
        toast.error(error.message, {
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
      toast.error(response.data?.data?.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }finally{
      setTimeout(()=>{
          setOtherError(false)
          setAmountError(false)
      },3000)
    }
  };

  const handlePaymentMethod = (val) => {
    setWithdrawShow(false);
    setSelectMethod(val);
    if (val === "stripe") {
      setWithdrawMethod(false);
    }
    if (val === "bank") {
      setWithdrawMethod(true);
    }
  };

  const handleBackward = () => {
    navigate(-1);
  }

  return (
    <div>
      <div className="flex relative">
        <div className="right-side-logo max-xl:hidden"></div>
        <div className="flex xl:flex-row flex-col xl:justify-between flex-1 mx-5 xl:gap-8 pb-5 space-y-0 xl:space-y-0 bg-no-repeat">
          <div className="flex flex-col space-y-4 flex-1 visible xl:hidden">
            <div className="bg-black rounded-b-3xl py-4">
              <TopNav textColor={"white"} />
              <div className="pt-10">
                <img className="" src={MainCar} alt="main" />
              </div>
            </div>
            <CardComponentNoWithdraw />
          </div>
          <button className="absolute top-2 left-2 text-3xl rounded-full bg-white hover:bg-gray-200 cursor-pointer p-2" onClick={() => handleBackward()}><IoIosArrowBack /></button>
          <div className="flex flex-col space-y-4 flex-1 xl:mx-12 ">
            <div className="flex flex-col space-y-3 md:mt-20 mt-0">
              <div className="flex items-center justify-start gap-2">
                <h1 className="text-2xl font-bold">Withdraw Funds</h1>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-black text-sm xl:text-md special:text-xl">
                Payout Amount
              </p>
              <div className="w-full relative flex items-center">

                <input
                  className="bg-[#ECECEC] w-full rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3"
                  placeholder="Payout Amount ($)"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              {
                amountError && <span className="text-red-500 text-xs">This field is required!</span>
              }
            </div>
            <div className="flex flex-col space-y-2 relative">
              <p className="text-black text-sm xl:text-md special:text-xl">
                Withdraw Method
              </p>
              <div
                className="bg-[#ECECEC] flex items-center justify-between text-black rounded-xl cursor-pointer px-2 py-2 focus:outline-none text-xs xl:text-sm special:text-xl special:py-3"
                onClick={handleShowBank}
              >
                <p>{selectMethod == "bank" ? "Direct Bank" : "Stripe"}</p>
                <RiArrowDropDownLine className="text-2xl cursor-pointer" />
              </div>
              {withdrawShow && (
                <div className="absolute top-14 rounded-lg border left-0 w-full p-2 bg-white">
                  <div
                    className="flex flex-col justify-start gap-4 px-3 py-2"
                  // onClick={() => handleDrowpdownChange("bank")}
                  >
                    <div
                      className="flex flex-row items-center gap-2 hover:bg-gray-200 cursor-pointer p-1 rounded-xl"
                      onClick={() => handlePaymentMethod("bank")}
                    >
                      <img src={directBankIcon} alt="icon" className="w-8" />
                      <p>Direct Bank</p>
                    </div>
                    <div
                      className="flex flex-row items-center gap-2 hover:bg-gray-200 cursor-pointer p-1 rounded-xl"
                      onClick={() => handlePaymentMethod("stripe")}
                    >
                      <img src={stripeIcon} alt="icon" className="w-8" />
                      <p>Stripe</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* ONLY FOR BANK WITHDRAW */}
            {withdrawMethod ? (
              <div className="flex flex-col space-y-2">
                <div className="flex flex-col space-y-2">
                  <p className="text-black text-sm xl:text-md special:text-xl">
                    Bank Name
                  </p>
                  <input
                    className="bg-[#ECECEC] rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3"
                    placeholder="Bank Name"
                    type="text"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  ></input>
                  {
                    otherError && <span className="text-red-500 text-xs">This field is required!</span>
                  }
                </div>

                <div className="flex flex-col space-y-2 mb-4">
                  <p className="text-black text-sm xl:text-md special:text-xl">
                    Account Number
                  </p>
                  <input
                    className="bg-[#ECECEC] rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3 appearance-none remove-arrows"
                    placeholder="Account Number"
                    value={accountNumber}
                    type="number"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    style={{ WebkitAppearance: "", MozAppearance: "textfield" }}
                    onChange={(e) => setAccountNumber(e.target.value)}
                  ></input>
                  {
                    otherError && <span className="text-red-500 text-xs">This field is required!</span>
                  }
                </div>
                <div className="flex flex-col space-y-2 mb-4">
                  <p className="text-black text-sm xl:text-md special:text-xl">
                    BSB Number
                  </p>
                  <input
                    className="bg-[#ECECEC] rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3 appearance-none remove-arrows"
                    placeholder="BSB Number"
                    type="number"
                    inputMode="numeric"
                    value={bnbnumber}
                    pattern="[0-9]*"
                    style={{ WebkitAppearance: "", MozAppearance: "textfield" }}
                    onChange={(e) => setBnbnumber(e.target.value)}
                  ></input>
                  {
                    otherError && <span className="text-red-500 text-xs">This field is required!</span>
                  }
                </div>
                <br />
              </div>
            ) : (
              <></>
            )}
            <div
              className="bg-black py-2 text-center rounded-xl cursor-pointer hover:bg-black/75 md:w-1/2 w-full ml-auto"
              onClick={() =>
                setTransactions({
                  withdrawMethod,
                  bankName,
                  accountNumber,
                  amount,
                })
              }
            >
              <p className="text-white font-semibold">Withdraw</p>
            </div>
          </div>
          <div className="xl:flex flex-col space-y-4 flex-1 hidden">
            <div className="bg-black rounded-b-3xl py-4">
              <TopNav textColor={"white"} />
              <div className="pt-10">
                <motion.img
                  initial={{ x: 80, opacity: 0 }}
                  animate={{ x: 80, opacity: 1 }}
                  transition={{ type: "tween", duration: 1, delay: 1 }}
                  className="w-3/4"
                  src={MainCar}
                  alt="main"
                />
              </div>
            </div>

            {/* <div className="w-full">
              <GoldCard />
            </div> */}
            <div>
              <CardComponentNoWithdraw />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
