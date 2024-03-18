import { useParams } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import white from "../../assets/images/subscribers/white.png";
import bitcoin from "../../assets/images/rafflesImages/crypto.png";
import payBySub from "../../assets/images/rafflesImages/paybysub.png";
import Visa from "../../assets/images/rafflesImages/Visa.png";
import Usd from "../../assets/images/rafflesImages/Usd.png";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LuInfo } from "react-icons/lu";
import VehicleCardForReg from "../../components/DashboardVehicleCard/VehicleCardForReg";
import ItemLoader from "../Loader/ItemLoader";

const SelectRafflePaymentMethod = ({
  onClose,
  userId,
  giveawayId,
  price,
  name,
  subPlane,
  valUser,
  fiveEx =1
}) => {
  const [count, setCount] = useState(1);
  const [error, setError] = useState('');
  const [coupon, setCoupon] = useState("");
  const navigate = useNavigate();
  const { selectedOneOffPackage } = useParams();
  const [oneOffPackages, setOneOffPackages] = useState([]);
  const [chooseOneOff, setChooseOneOff] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPlanPrice, setSelPlanPrice] = useState("");
  const [selectedPlanName, setSelectedPlanName] = useState("");
  const [select, setSelect] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chosenPlan, setChosenPlan] = useState("");
  const [selectOneOffId, setSelectOneOffId] = useState("");
  const [buttonMode, setButtonMode] = useState(0); //1 =  PaybySub + OneOff  \ 0 = PayBy Balance + PayBy Card
  const logDetailsToDataLayer = (valUser, giveawayId, price, name) => {
    const data = {
      user: valUser,
      giveawayId: giveawayId || "",
      price: price || "",
      plan_name: name || "",
    };

    if (typeof localStorage !== "undefined") {
      localStorage.setItem("paymentSuccessData", JSON.stringify(data));
    }

    // Debugging log
    console.log("Logging to localstorage one off payment:", data);
  };

  useEffect(() => {
    getOneOff();
  }, []);



  const getOneOff = async () => {
    setSelPlanPrice("0.00")
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/getOneoffPlans`)
      .then((response) => {
        setOneOffPackages(response?.data?.data.sort((a,b)=>(a.count - b.count)));
        console.log(response?.data?.data, "datas");
        const selectedOneOff = response?.data?.data.find(
          (pl) => pl._id === selectedOneOffPackage
        );
        setChooseOneOff(selectedOneOff._id);
        // setSelectOneOffId(selectedOneOff.id);
        // setSelectOneOffName(selectedOneOff.name);
        setSelPlanPrice(selectedOneOff.price);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  
  const handleChoseOneOff = (id) => {
    const selectedOneOff = oneOffPackages.find((pl) => pl._id === id);
    setChosenPlan(id);
    setSelectedPlanName(selectedOneOff.name);
    setSelectOneOffId(id);
    setSelPlanPrice(selectedOneOff.price);
  };
  const handleButtonClick = async (selectOneOffId) => {
    if(!selectOneOffId){
      setError('Please Select A One Off Package To Continue!')
      setTimeout(()=>{
        setError('')
      },2000)
      return;
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/buyOneoffRoundWithPayment`,
        {
          uid: userId,
          roundid: giveawayId,
          oneoff_id: selectOneOffId,
          // roundid: selectOneOffId,
          // count: count,
          fivex: fiveEx == 5 ? 1 : 0, 
          coupen: name == 'Bali' ? 'WIN50OFF' : undefined,
        }
      );

      const payURL = response.data.payurl;

      // Redirect the user to the payURL
      logDetailsToDataLayer(valUser, giveawayId, price, name);
      window.location.href = payURL;
    } catch (error) {
      console.log(error);
    }
  };
  const handleButtonCrypto = async () => {
    if(!selectOneOffId){
      setError('Please Select A One Off Package To Continue!')
      setTimeout(()=>{
        setError('')
      },2000)
      return;
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/buyOneoffRoundWithCrypto`,
        {
          uid: userId,
          roundid: giveawayId,
          count: count,
          coupen: name == 'Bali' ? 'WIN50OFF' : undefined,
          oneoff_id: selectOneOffId,
        }
      );

      const payURL = response.data.payurl;

      // Redirect the user to the payURL
      logDetailsToDataLayer(valUser, giveawayId, price, name);
      window.location.href = payURL;
    } catch (error) {
      console.log(error);
    }
  };



  const handlePointsButtonClick = async () => {
    if(!selectOneOffId){
      setError('Please select a one off package to continue!')
      setTimeout(()=>{
        setError('')
      },2000)
      return;
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/buyRaffleRoundWithPoints`,
        {
          uid: userId,
          roundid: giveawayId,
          coupen: name == 'Bali' ? 'WIN50OFF' : undefined
        }
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

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleSubPlane = () => {
    navigate("/subscription");
  };
  return (
    <div className="popup-container bg-black/50 justify-center items-center">
      <div className="popup-content text-black flex flex-col bg-white shadow-lg space-y-4 xl:w-full  special:space-y-12 2xl:space-y-8 justify-center py-4 special:py-8 2xl:py-6">
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

        <div className="flex flex-col special:px-24 2xl:px-0 px-0 space-y-4 special:space-y-12 2xl:space-y-8">
          <p className="font-bold text-black text-center xl:text-5xl 2xl:text-6xl special:text-9xl md:5xl text-3xl">
            ${name == 'Bali' ? selectedPlanPrice/2 : selectedPlanPrice}
          </p>
          <p className="text-red-500 text-sm">{error}</p>

          {loading ? (
            <div className="flex justify-center">
              <ItemLoader />
            </div>
          ) : (
            <div className="flex flex-row items-center overflow-x-auto xl:gap-2">
              {oneOffPackages.map((oneOff, key) => (
                <>
                  <VehicleCardForReg
                    key={key}
                    oneOffId={oneOff._id}
                    type={"vehicle"}
                    name={oneOff.name}
                    price={oneOff.price}
                    descs={oneOff.desc[0]}
                    fromColor={oneOff.colorFrom}
                    color={oneOff.color}
                    date={"2024-02-28"}
                    discount={name == 'Bali' ? 50 : 0}
                    raffleimage={
                      "https://winland.onrender.com/public/images/vehicle.png"
                    }
                    handleChoseOneOff={handleChoseOneOff}
                    select={select}
                    setSelect={setSelect}
                    setSelectedPlanName={setSelectedPlanName}
                    setSelPlanPrice={selectedPlanPrice}
                    multiplyBy={fiveEx}
                  />
                </>
              ))}
            </div>
          )}

          {/* <div className="flex justify-center items-center  flex-col space-y-2">
            <input
              type="text"
              className="rounded-2xl w-[210px] border border-solid border-black placeholder:text-xs text-xs px-4 py-2 placeholder:text-gray-700"
              placeholder="Coupon code"
              value={coupon}
              id="coupon"
              onChange={(e) => setCoupon(e.target.value)}
            />
          </div> */}

          <p className="text-black text-lg font-bold 2xl:text-xl special:text-4xl">
            Payment Methods
          </p>
          <div className="flex flex-row justify-center items-center lg:gap-4 gap-1 text-black">
            {buttonMode ? (
              <>
                {" "}
                <div
                  className="bg-white hover:bg-black/5 flex-row gap-1 rounded-xl p-2 flex justify-center items-center cursor-pointer lg:gap-2 "
                  onClick={handleSubPlane}
                >
                  <img
                    src={payBySub}
                    alt=""
                    className="w-7 h-7 special:h-14 special:w-14 2xl:h-9 2xl:w-9"
                  />
                  <p className="md:text-xs text-[10px]">Pay by Subscription</p>
                </div>
                <div
                  className="bg-white hover:bg-black/5 rounded-xl flex-row gap-1 p-2 flex justify-center items-center cursor-pointer lg:gap-2"
                  onClick={() => setButtonMode(0)}
                >
                  <img
                    src={Usd}
                    alt=""
                    className="w-7 h-7 special:h-14 special:w-14 2xl:h-9 2xl:w-9"
                  />
                  <p className="md:text-xs text-[10px]">One Off Payment</p>
                </div>
              </>
            ) : (
              <>
                <div
                  className="bg-white hover:bg-black/5 rounded-xl flex-row gap-1 p-2 flex justify-center items-center cursor-pointer lg:gap-2"
                  onClick={handlePointsButtonClick}
                >
                  <img
                    src={Usd}
                    alt=""
                    className="w-7 h-7 special:h-14 special:w-14 2xl:h-9 2xl:w-9"
                  />
                  <p className="md:text-xs text-[10px]">Pay by Balance </p>
                </div>
                <div
                  className="bg-white hover:bg-black/5 rounded-xl flex-row gap-1 p-2 flex justify-center items-center cursor-pointer lg:gap-2"
                  onClick={() => handleButtonClick(selectOneOffId)}
                >
                  <img
                    src={Visa}
                    alt=""
                    className="w-7 h-7 special:h-14 special:w-14 2xl:h-9 2xl:w-9"
                  />
                  <p className="md:text-xs text-[10px]">Pay by Card</p>
                </div>
                <div
                  className="bg-white hover:bg-black/5 rounded-xl flex-row gap-1 p-2 flex justify-center items-center cursor-pointer lg:gap-2"
                  onClick={() => handleButtonCrypto()}
                >
                  <img
                    src={bitcoin}
                    alt=""
                    className="w-7 h-7 special:h-14 special:w-14 2xl:h-9 2xl:w-9"
                  />
                  <p className="md:text-xs text-[10px]">Pay by Crypto</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectRafflePaymentMethod;
