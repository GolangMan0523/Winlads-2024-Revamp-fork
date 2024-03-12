import { useEffect, useState } from "react";
import backgroundcar from "../../assets/images/background/Background-car.png";
import userBUS from "../../assets/images/BusinessCard/userBUS.png";
import smartphoneBUS from "../../assets/images/BusinessCard/smartphoneBUS.png";
import basketballBUS from "../../assets/images/BusinessCard/basketballBUS.png";
import mailBUS from "../../assets/images/BusinessCard/mailBUS.png";
import { IoMdShare } from "react-icons/io";
import { IoMdSave } from "react-icons/io";
import { MdPersonAddAlt1 } from "react-icons/md";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import BCard from "../CardBusiness/CardBusiness";
import "./modal.css";
import { validateCurrentUser } from "../../utils/validateuser";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function BusinessCard() {
  const navigate = useNavigate();
  const [isOrderNow, setOrderNow] = useState(false);
  const [valUser, setValUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState("");
  const [addres2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [bcCard, setBcCard] = useState("");

  const handleShareClick = () => {
    setOrderNow(!isOrderNow);
  };

  const handleRequestButton = () => {
    requestNfcCard();
    setOrderNow(false);
  };

  useEffect(() => {
    currentUserValidation();
  }, []);

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      setValUser(validator.user);
      setAddress(validator.user.address)
      setAddress2(validator.user.address2)
      setCity(validator.user.city)
      setState(validator.user.state)
      setPostalCode(validator.user.postalcode)
      setLoading(false);
    } else {
      navigate("/login");
    }
  };

  const saveBC = async () => {
    await axios
      .get(
        `${import.meta.env.VITE_SERVER_API}/downloadBusinessCard?uid=${valUser.uid
        }`
      )
      .then((response) => {
        console.log(response?.data?.data, "downloadddd");
        setBcCard(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
        // setLoading(false);
      });
  };

  const handleSaveCard = () => {
    saveBC();
  };

  const requestNfcCard = async () => {
    try {
      if (!address || !addres2 || !state || !city || !postalCode) {
        throw Error("One Or More Field is missing");
      }

      const data = {
        uid: valUser.uid,
        name: valUser.firstname + valUser.lastname,
        mobile: valUser.mobile,
        passport: valUser.passport,
        address:
          address + " " + addres2 + " " + state + " " + city + " " + postalCode,
      };
      console.log(data);

      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/requestBusinessCard`,
        data
      );
      if (response.data.status == 200) {
        console.log(response.data);
        toast.success(response.data.message, {
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
      console.log(error.message);

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
  };

  return (
    <div className="flex flex-col space-y-4 special:space-y-16">
      {isOrderNow && (
        <button
          className="p-2 rounded-full bg-white hover:bg-gray-300 w-fit md:text-3xl text-2xl"
          onClick={() => setOrderNow((prev) => !prev)}
        >
          <IoIosArrowBack />
        </button>
      )}

      <div className="flex flex-col special:space-y-5">
        {/* <p className="text-xl font-bold xl:text-xl md:text-xl special:text-4xl">
          Business Card
        </p> */}
        {loading
          ? ""
          : valUser?.subscription_status == "noplan" && (
            <p className="text-xs md:text-lg text-red-500 bg-[#FBEFEF] p-4 block relative font-semibold text-center capitalize">
              You are not eligeble, please subscribe first (Above Starter) !
              <span className=" bg-red-500 p-1 rounded-full h-2/3 absolute top-3 block left-5"></span>
            </p>
          )}
        {valUser?.subscriptionPlan?.data?.name === "Starter" && (
          <p className="text-xs md:text-lg text-red-500 bg-[#FBEFEF] p-4 block relative font-semibold text-center capitalize">
            You are not eligeble,{" "}
            <span className="text-red-500">
              To request a Business Card, kindly upgrade your subscription beyond the Starter level. !
            </span>
            <span className=" bg-red-500 p-1 rounded-full h-2/3 absolute top-3 block left-5"></span>
          </p>
        )}
      </div>
      <div className="flex items-center justify-center">
        <div className="text-left flex flex-col items-center space-y-0 special:space-y-16 ">
          {isOrderNow ? (
            <ShareForm
              firstName={valUser.firstname}
              lastName={valUser.lastname}
              nic={valUser.nic}
              phone={valUser.mobile}
              address={address}
              setAddress={setAddress}
              address2={addres2}
              setAddress2={setAddress2}
              city={city}
              setCity={setCity}
              state={state}
              setState={setState}
              postalCode={postalCode}
              setPostalCode={setPostalCode}
            />
          ) : (
            <BCard />
          )}

          <div className="w-full xl:w-1/2 special:w-2/5 flex gap-16 justify-center pb-10 ">

            {/* <div className="flex flex-col items-center">
              <button className="text-2xl md:text-4xl pro:text-5xl xl:text-2xl special:text-5xl p-3 rounded-[20px] bg-[#CCBAB3] hover:bg-[#D1D5DB]">
                <IoMdShare />
              </button>
              <label className="text-sm md:text-lg pro:text-xl xl:text-sm special:text-2xl">
                {" "}
                Share
              </label>
            </div> */}
            {/* <div className="flex flex-col items-center" onClick={handleSaveCard}>
              <button className="text-2xl md:text-4xl pro:text-5xl xl:text-2xl special:text-5xl p-3 rounded-[20px] bg-[#CCBAB3] hover:bg-[#D1D5DB]">
                <IoMdSave />
              </button>
              <label className="text-sm md:text-lg pro:text-xl xl:text-sm special:text-2xl">
                Save
              </label>
            </div> */}
            <div className="flex flex-col items-center">
              {isOrderNow ? (
                // Display "orderNow" image when isOrderNow is true
                <button
                  className="text-md md:text-lg pro:text-xl xl:text-xl special:text-xl p-3 rounded-[20px] bg-black hover:bg-white hover:text-black hover:border-black border-2 text-white"
                  onClick={handleRequestButton}
                >
                  {/* <MdOutlineAddShoppingCart /> */}
                  Get One
                </button>
              ) : (
                // Display "add" image when isOrderNow is false
                <>
                  <button
                    className={`text-sm capitalize md:text-md pro:text-lg xl:text-md special:text-lg p-3 rounded-[20px] bg-[#FF4C00] text-white hover:bg-white  hover:text-black border-2 hover:border-black ${!valUser.subscriptionid ||
                      (valUser?.subscriptionPlan?.data?.name === "Starter" &&
                        "cursor-not-allowed")
                      }`}
                    onClick={handleShareClick}
                    disabled={
                      valUser.subscription_status == "noplan" ||
                      valUser?.subscriptionPlan?.data?.name === "Starter"
                    }
                  >
                    {/* <MdPersonAddAlt1 /> */} Apply for a Business Card
                  </button>

                  <Link
                    className={`text-xs md:text-xs pro:text-xs xl:text-sm special:text-sm px-3 py-2 my-0 rounded-[20px] hover:text-blue-500`}
                  >
                    {/* <MdPersonAddAlt1 /> */}How to use the card?
                  </Link>
                </>
              )}
              {/* <label className="text-sm md:text-lg pro:text-xl xl:text-sm special:text-2xl">
                {isOrderNow ? "Order Now" : "Request"}
              </label> */}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
function ShareForm({
  onClose,
  phone,
  address,
  setAddress,
  address2,
  setAddress2,
  city,
  setCity,
  state,
  setState,
  postalCode,
  setPostalCode,
  firstName,
  lastName,
  nic,
}) {
  // const [postalAddress, setPostalAddress] = useState();
  useEffect(() => {
    setAddress(address);
    setAddress2(address2);
    setCity(city);
    setState(state);
    setPostalCode(postalCode);
  }, []);

  const handlePostalAddressChange = (e) => {
    setAddress(e.target.value);
    setAddress2(e.target.value);
    setCity(e.target.value);
    state(e.target.value);
    postalCode(e.target.value);
  };

  return (
    <form className="form-contain-reg space-y-5 w-full xl:w-3/5 special:w-3/5 special:space-y-16">
      <p className="text-black text-lg special:pt-5 special:text-2xl">
        Let’s Get Your Card !!
      </p>
      <div className="bg-[#ECECEC] flex flex-row-reverse items-center py-3 px-4 gap-3 rounded-2xl justify-end">
        <input
          type="text"
          placeholder="Your Full Name"
          id="name"
          value={firstName + " " + lastName}
          disabled
          className="bg-[#ECECEC] placeholder:text-gray-500 outline-none w-full special:placeholder:text-2xl"
        />
        {/* <img src={userBUS} alt="user" className="w-8 special:w-14" /> */}
      </div>

      {/* <div className="bg-[#ECECEC] border-black flex flex-row-reverse items-center py-3 px-4 gap-3 rounded-2xl justify-end">
        <input
          type="text"
          placeholder="Your NIC"
          id="passport"
          disabled
          value={nic}
          className="bg-[#ECECEC]e focus:outline-none placeholder:text-gray-500 w-full outline-none special:placeholder:text-2xl"
        />
      </div> */}

      {/* <img src={basketballBUS} alt="passport" className="w-8 special:w-14" /> */}

      <div className="bg-[#ECECEC] flex flex-row-reverse items-center py-3 px-4 gap-3 rounded-2xl justify-end">
        <input
          type="text"
          placeholder="Your Phone Number"
          id="mobile"
          disabled
          value={phone}
          className="bg-[#ECECEC] focus:outline-none placeholder:text-gray-500 w-full outline-none special:placeholder:text-2xl"
        />
        {/* <img src={smartphoneBUS} alt="phone" className="w-8 special:w-14" /> */}
      </div>
      {/* <div className="bg-[#ECECEC] flex flex-row-reverse items-center py-3 px-4 gap-3 rounded-2xl justify-end">
        <input
          type="text"
          placeholder="Your Postal Address"
          id="address"
          value={postalAddress}
          onChange={handlePostalAddressChange}
          className="bg-[#ECECEC] focus:outline-none placeholder:text-gray-500 w-full outline-none special:placeholder:text-2xl"
        />
        <img src={mailBUS} alt="mail" className="w-8 special:w-14" />
      </div> */}
      <div className="flex items-center gap-2">
        <div className=" w-1/2">
          <input
            className="bg-[#ECECEC] rounded-xl py-3 px-4 focus:outline-none placeholder:text-sm placeholder:special:text-xl special:py-3 w-full"
            placeholder="Address Line 1"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></input>
        </div>
        <div className=" w-1/2">
          <input
            className="bg-[#ECECEC] rounded-xl py-3 px-4 focus:outline-none placeholder:text-sm placeholder:special:text-xl special:py-3 w-full"
            placeholder="Address Line 2"
            type="text"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-1/3">
          <input
            className="bg-[#ECECEC] rounded-xl py-3 px-4 focus:outline-none placeholder:text-sm placeholder:special:text-xl special:py-3 w-full"
            placeholder="City"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></input>
        </div>
        <div className="w-1/3">
          <input
            className="bg-[#ECECEC] rounded-xl py-3 px-4 focus:outline-none placeholder:text-sm placeholder:special:text-xl special:py-3 w-full"
            placeholder="State"
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
          ></input>
        </div>
        <div className=" w-1/3">
          <input
            className="bg-[#ECECEC] rounded-xl py-3 px-4 focus:outline-none placeholder:text-sm placeholder:special:text-xl special:py-3 w-full"
            placeholder="Postal Code"
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          ></input>
        </div>
      </div>
    </form>
  );
}

export default BusinessCard;
