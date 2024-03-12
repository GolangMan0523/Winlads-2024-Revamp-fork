import { useState, useEffect } from "react";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { basicSchemasRegister } from "../../schemas/index.js";
import { useFormik } from "formik";
import axios from "axios";
import { auth } from "../../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { MdOutlineNavigateNext } from "react-icons/md";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import "../Login/Login.css";
import { motion } from "framer-motion";
import { validateCurrentUser } from "../../utils/validateuser.js";
import LoginImg from "../../assets/images/MainCar.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import CanceOffFlyer from "../../assets/images/chanceOff.png";
import {
  FcBusinessman,
  FcFeedback,
  FcDiploma1,
  FcButtingIn,
  FcSmartphoneTablet,
  FcUnlock,
  FcTwoSmartphones,
} from "react-icons/fc";
import Card from "../../components/SubCard/CardToReg.jsx";
import DashboardVehicleCard from "../../components/DashboardVehicleCard/DashboardVehicle.jsx";
import VehicleCardForReg from "../../components/DashboardVehicleCard/VehicleCardForReg.jsx";
import FreeEntryCardDashboard2 from "../../components/FreeEntry/FreeEntryCardDashboard2.jsx";
import FreeEntryCardDashboard3 from "../../components/FreeEntry/FreeEntryCardDashboard3.jsx";
import MainCar from "../../assets/images/MainCar.png";
import homeTopBg from "../../assets/images/HomeTopBg.png";

const inputStyle = {
  border: "1px solid #000000",
  borderRadius: "1px",
};

const Register = ({ location }) => {
  const [searchParams] = useSearchParams();
  const { selectedPackage } = useParams();
  const { selectedOneOffPackage } = useParams();
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState("");
  const [verifyDisable, setVerifyDisable] = useState(true);
  const [showOTPBox, setShowOTPBox] = useState(false);
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState("Get OTP");
  const [isChecked, setIsChecked] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const cookies = new Cookies(null, { path: "/" });
  const [fieldDis, setFieldDis] = useState(false);

  const [chosenPlan, setChosenPlan] = useState("");
  const [chosenPlanType, setChosenPlanType] = useState("monthly");
  const [memberShipType, setMemType] = useState("subscription");
  const [plans, setPlans] = useState([]);
  const [refId, setRefId] = useState("");
  const [selectedPlanPrice, setSelPlanPrice] = useState(0.0);
  const [selectedPlanName, setSelectedPlanName] = useState("");
  const [selectedSubId, setSelectedSubId] = useState("");
  const [initialOneOffShow, setInitialOneOffShow] = useState(1);
  const [eligible, setEligible] = useState(false);
  const [showOneOff, setShowOneOff] = useState(true);
  const [count, setCount] = useState("");
  const [select, setSelect] = useState(null);
  const [selectOffName, setSelectOffName] = useState("");
  const [showFreeEntry, setShowFreeEntry] = useState(false);

  const [buttonDis, setBtnDis] = useState(false); //To disable the register button after submitted the request
  const [planDis, setPlanDis] = useState(false);
  const [abilityCoupen, setAbilityCoupen] = useState("");
  const [selectPaymentMethod, setSelectPaymentMethod] = useState("stripe");
  const [endpoint, setEndpoint] = useState("registerWithStripe");
  const [oneOffActive, setOneOffActive] = useState(false);
  const [subcriptionActive, setSubcriptionActive] = useState(false);
  const [oneOffPackages, setOneOffPackages] = useState([]);
  const [chooseOneOff, setChooseOneOff] = useState("");
  const [selectOneOffId, setSelectOneOffId] = useState("");
  const [selectOneOffName, setSelectOneOffName] = useState("");
  const isOnetime = searchParams.get('onetime');
  const [isYearly, setIsYearly] = useState(false);
  const [isMonthly, setIsMonthly] = useState(true);
  const [isQuartly, setIsQuartly] = useState(false);
  const [vehiGiveaway, setVehiGive] = useState({});

  const getRefId = () => {
    let refid = searchParams.get("ref");
    if (refid) {
      cookies.set("affiliate", refid);
      return refid;
    } else {
      refid = cookies.get("affiliate") || undefined;
      return refid;
    }
  };
  const handleMonthly = () => {
    setIsMonthly(true);
    setIsQuartly(false);
    setIsYearly(false);
  };

  const handleQuatly = () => {
    setIsQuartly(true);
    setIsMonthly(false);
    setIsYearly(false);
  };

  const handleYearly = () => {
    setIsYearly(true);
    setIsMonthly(false);
    setIsQuartly(false);
  };

  // set loading
  useEffect(() => {
    // if (selectedPackage) {
    //  cookies.set("selected-package-id", selectedPackage);
    //   setChosenPlan(selectedPackage);
    // }
    getPlanes();
    getOneOff();
    getGiveaways();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    currentUserValidation();
    const mem = searchParams.get("mem");
    if (mem != undefined) {
      // /register?mem=true
      handleMemType({ target: { value: "round" } });
    }

    const ref = getRefId();

    if (ref != undefined) {
      setRefId(ref);
      values.refferalId = ref;
    }
    const checkAbility = searchParams.get("ability");
    if (checkAbility == "WINACCESSEN") {
      setEligible(true);
      setShowOneOff(false);
      setShowFreeEntry(true);
    }
    getFreeEntry();
    if (searchParams.get("from") == "giveaway5x") {
      handleMemType({ target: { value: "round" } });
    }
  }, []);

  const handlePaymentMethod = (val) => {
    if (val === "stripe") {
      setEndpoint("registerWithStripe");
    } else {
      setEndpoint("registerWithCrypto");
    }
  };

  const getPlanes = async () => {
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/getSubscriptionPlans`)
      .then((response) => {
        setPlans(response?.data?.data);
        const selectedPlan = response?.data?.data.find(
          (pl) => pl._id === selectedPackage
        );
        setChosenPlan(selectedPlan._id);
        setSelectedPlanName(selectedPlan.name);
        setSelectedSubId(selectedPlan.subid);
        setSelPlanPrice(selectedPlan.monthly);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const getOneOff = async () => {
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/getOneoffPlans`)
      .then((response) => {
        setOneOffPackages(response?.data?.data.sort((a,b)=>a.count-b.count));
        console.log(response?.data?.data, "datas");
        const selectedOneOff = response?.data?.data.find(
          (pl) => pl._id === selectedOneOffPackage
        );
        setChooseOneOff(selectedOneOff._id);
        setSelectOneOffId(selectedOneOff.id);
        setSelectOneOffName(selectedOneOff.name);
        setSelPlanPrice(selectedOneOff.price);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const onCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  const handleSEOReg = (data) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "sign_up",
      method: "google", //it can be email,facebook, or google. This value is optional
      data: data,
    });
  };

  const logDetailsToLocal = (valUser, giveawayId, price, name, planeId) => {
    const data = {
      user: valUser,
      giveawayId: giveawayId || "",
      price: price || "",
      plan_name: name || "",
      plan_id: planeId || "",
    };

    if (typeof localStorage !== "undefined") {
      localStorage.setItem("paymentSuccessData", JSON.stringify(data));
    }

    // Debugging log
    console.log("Logging to localstorage:", data);
  };

  const saveFormData = async (temp_values, uid) => {
    // console.log(temp_values, uid);
    //Flow 3rd Step
    // let coupen = "";

    const checkAbility = searchParams.get("ability");
    if (checkAbility == "WINACCESSEN") {
      setEligible(true);
      setAbilityCoupen("MAZDABT50S");
    }

    const data = {
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
      password: values.password,
      mobile: "+" + ph,
      nic: values.passport,
      tin: values.tin,
      refferalId: memberShipType === "subscription" ? values.refferalId : "",
      // uid: uid,
      coupen: checkAbility == "WINACCESSEN" ? "MAZDABT50S" : abilityCoupen,
      subid: selectedSubId,
      type: eligible ? "trial" : memberShipType,
      roundid: selectedSubId,
      oneoff_id: selectOneOffId,
      registerLink: window.location.href,
      fivex: 0,   //GET 5 X Entries
      onetime: isOnetime ? 1 : 0,
      verified: true,
      mobileVerified: false
    };

    console.log(data);

    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_API}/checkEmail?email=${values.email}`
    );

    console.log(response.data);
    handleSEOReg(data);
    if (!response.data.exists) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_SERVER_API}/${endpoint}`,
          data
        );
        //cookies.set("wr_token", response.data?.data?._id);
        console.log(response.data, "data");
        if (response.data?.payurl) {
          logDetailsToLocal(
            data,
            selectedSubId,
            selectedPlanPrice,
            selectedPlanName,
            selectedSubId
          );
          cookies.remove("affiliate");

          window.location.href = response.data?.payurl;
        } else {
          console.log("NO PAY");
        }
      } catch (error) {
        console.log(data, "Submitted data");
        toast.error(error.response?.data?.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.error("Error submitting form:", error);
        setBtnDis(false);
      }
    } else {
      toast.error("Email already registered!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setBtnDis(false);
    }
  };

  // THIS IS THE FIRST STEP IN REG FLOW
  async function onSignup(e) {
    setFieldDis(true);
    setPlanDis(true);
    if (!isChecked) {
      toast.error("Please confirm terms and conditions", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    if (oneOffActive == false && subcriptionActive == false) {
      if (memberShipType === "round") {
        toast.warning("Please select any one off package", {
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
        toast.warning("Please select any subscription plan", {
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
      return;
    }
    if (buttonText === "Register") {
      //FLOW 2nd Step
      setBtnDis(true);
      // ValidateOtp();
      // setBtnDis(false);
      validateEmailOTP();
    } else {
      //FLOW 1st Step

      // window.recaptchaVerifier = new RecaptchaVerifier(
      //   auth,
      //   "recaptcha-container",
      //   {}
      // );
      // let verify = window.recaptchaVerifier;
      try {
        const EmailableActive = await axios.get(`https://api.emailable.com/v1/account?api_key=${import.meta.env.VITE_EMAILABLE_LIVE_KEY}`)
        if (EmailableActive.data.available_credits > 1) {
          const res = await axios.get(`https://api.emailable.com/v1/verify?email=${values.email}&api_key=${import.meta.env.VITE_EMAILABLE_LIVE_KEY}`)
          //"state": "undeliverable"  or "risky"
          console.log(res.data);
          if (res.data.state === "undeliverable"|| !res.data.smtp_provider) {
            throw Error("This is not a valid email try another");
          }
        }


        const response = await axios.get(`${import.meta.env.VITE_SERVER_API}/checkMobile?mobile=${ph}`)
        if (response.data.exists) {
          throw Error("Mobile number is already registered!");
        } else {
          const res = await axios.get(`${import.meta.env.VITE_SERVER_API}/checkEmail?email=${values.email}`
          )
          if (res.data.exists) {
            throw Error('Email already exist')
          } else {
            setButtonText("Sending...");
            //Send the OTP for email
            axios.get(
              `${import.meta.env.VITE_SERVER_API}/requestEmailToken?email=${values.email}`
            ).then((res) => {
              console.log(res);
              setShowOTPBox(true);
              setButtonText("Register");
            })
          }

          // setButtonText("Register");
          // signInWithPhoneNumber(auth, "+" + ph, verify)
          //   .then((result) => {
          //     setfinal(result);
          //     setshow(true);
          //     setVerifyDisable(false);
          //     setShowOTPBox(true);
          //     setButtonText("Register");
          //   })
          //   .catch((err) => {
          //     toast.error(err.message, {
          //       position: "top-center",
          //       autoClose: 5000,
          //       hideProgressBar: false,
          //       closeOnClick: true,
          //       pauseOnHover: true,
          //       draggable: true,
          //       progress: undefined,
          //       theme: "colored",
          //     });
          //     //window.location.reload();
          //     setButtonText("Get OTP");
          //   });
        }
      } catch (error) {
        toast.error(error.message);
        setFieldDis(false);
        setPlanDis(false);
        // alert("Mobile number is already registered!");
        setButtonText("Get OTP");
        return
      }

    }
  }
  const validateEmailOTP = async () => {
    try {
      console.log(values.email, otp);
      const validation = await axios.post(`${import.meta.env.VITE_SERVER_API}/validateEmailOtp`, { email: values.email, token: Number(otp) });
      toast.success(validation.data.message);
      saveFormData();
    } catch (error) {
      setBtnDis(false)
      toast.error(error.response.data.message);
    }
  }

  const ValidateOtp = () => {
    if (otp === null || final === null) return;
    final
      .confirm(otp)
      .then((result) => {
        saveFormData(values, result.user.uid);

        // navigate("/welcome");
        // SIGN UP SUCCESS
        // handleSEOReg();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Incorrect or Expired OTP, Please try again!.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setBtnDis(false);
      });
  };

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
        mobile: "",
        passport: "",
        tin: "",
        refferalId: "",
      },
      validationSchema: basicSchemasRegister,
      onSubmit: saveFormData,
    });

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK", validator.user);
      // setTimeout(() => {
      //   navigate("/welcome");
      // }, 3000);
      navigate("/dashboard");
    } else {
      console.log("");
    }
  };

  const getFreeEntry = () => {
    const coupen = searchParams.get("COUPEN");
    if (coupen === "WINFREE") {
      cookies.set("COUPEN", "WINFREE");
      console.log(coupen, "copen");
    }
    const checkAbility = searchParams.get("ability");
    if (checkAbility == "CHNCEOFF") {
      setAbilityCoupen("CHNCEOFF");
    }

    console.log("Assigned Coupen : ", coupen);
  };

  const handleChosePlan = (id) => {
    const selectedPlan = plans.find((pl) => pl._id === id);
    setChosenPlanType(isQuartly ? "quater" : isYearly ? "annual" : "monthly");
    setChosenPlan(id);
    setSelectedPlanName(selectedPlan.name);
    setSelectedSubId(
      isQuartly
        ? selectedPlan.subidsemiannual
        : isYearly
        ? selectedPlan.subidannual
        : selectedPlan.subid
    );
    setSelPlanPrice(
      isQuartly
        ? selectedPlan.semiannualy
        : isYearly
        ? selectedPlan.annualy
        : selectedPlan.monthly
    );
    setSubcriptionActive(true);
    setOneOffActive(false);
  };

  const handleChoseOneOff = (id) => {
    const selectedOneOff = oneOffPackages.find((pl) => pl._id === id);
    setChosenPlan(id);
    setSelectedPlanName(selectedOneOff.name);
    setSelectOneOffId(id);
    setSelPlanPrice(selectedOneOff.price);
    setSubcriptionActive(false);
    setOneOffActive(true);
  };

  const getGiveaways =  () => {
     axios
      .get(`${import.meta.env.VITE_SERVER_API}/raffleRoundsUpcoming`)
      .then((response) => {
        setVehiGive(response?.data?.data.filter((g) => g.raffle?.type == "max")[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleMemType = (e) => {
    setMemType(e.target.value);
    const checkAbility = searchParams.get("ability");
    if (e.target.value == "round") {
      setChosenPlan("");
      setSelectedPlanName("One off round");
      setSelectedSubId(vehiGiveaway._id);
      setSelPlanPrice(0);

      //  setAbilityCoupen("");
    } else {
      if (checkAbility == "CHNCEOFF") {
        setAbilityCoupen("CHNCEOFF");
      }
      setChosenPlan("");
      setSelectedPlanName("");
      setSelectedSubId("");
      setSelPlanPrice(0);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-center">
          {eligible && (
            <div className="py-4 w-full bg-yellow-300 text-center">
              <p className="text-black font-semibold">
                Congratulations! You are eligible for free entry on this
                registration.
              </p>
            </div>
          )}
          <div className="flex items-start justify-center flex-col w-full">
            {/* <div className="login-contain flex items-center justify-center md:flex-row xl:flex-row 4xl:flex-row flex-col"> */}
            <div className="w-full bg-[#78DCF8] pb-40">
              <img src={homeTopBg} alt="" className="absolute right-0 top-0" />
              <div className="pt-10 flex flex-col justify-center items-center">
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: "tween", duration: 1, delay: 1 }}
                  className="w-1/4"
                  src={MainCar}
                  alt="main"
                />
                <h1 className="text-[26px] font-[900]">Create an Account</h1>
              </div>

              {/* SUB PLANS SHOW DESKTOP */}
              <div className="flex justify-center items-center py-10">
                {memberShipType == "subscription" && (
                  <div className="flex flex-row justify-center bg-[#f5f5f5] items-center rounded-full px-5 py-3 special:py-2 special:px-2 w-1/2 p-10 max-sm:w-full">
                    <button
                      type="button"
                      onClick={handleMonthly}
                      className={`${
                        isMonthly ? "bg-black text-white" : ""
                      } text-[10px] text-semibold xl:text-sm md:text-sm text-center special:py-4 special:text-xl 2xl:text-lg rounded-full py-2 flex-1`}
                    >
                      Monthly
                    </button>

                    <button
                      type="button"
                      onClick={handleQuatly}
                      className={`${
                        isQuartly ? "bg-black text-white" : ""
                      } text-[10px] text-semibold xl:text-sm md:text-sm text-center special:py-4 special:text-xl 2xl:text-lg rounded-full py-2 flex-1`}
                    >
                      Quartly <span className="text-[#ee391c]">(Save 10%)</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleYearly}
                      className={`${
                        isYearly ? "bg-black text-white" : ""
                      } text-[10px] text-semibold xl:text-sm md:text-sm text-center special:py-4 special:text-xl 2xl:text-lg rounded-full py-2 flex-1`}
                    >
                      Yearly <span className="text-[#ee391c]">(Save 20%)</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="grid xl:grid-cols-5 md:grid-cols-2 grid-cols-1 justify-start max-sm:justify-center gap-3 w-full relative bottom-32 px-10">
              {/* {abilityCoupen === "CHNCEOFF" && <FreeEntryCardDashboard3 />} */}

              {showFreeEntry && (
                <div className="flex justify-center items-center">
                  <FreeEntryCardDashboard2 />
                </div>
              )}
              {memberShipType == "subscription" ? (
                <>
                  {plans.map((plan, key) => (
                    <Card
                      chosenType={chosenPlanType}
                      currentType={
                        isQuartly ? "quater" : isYearly ? "annual" : "monthly"
                      }
                      mPlanId={plan.subid}
                      qPlanId={plan.subidsemiannual}
                      yPlanId={plan.subidannual}
                      key={key}
                      planId={plan._id}
                      title={plan.name}
                      title2={
                        isMonthly
                          ? plan.raffle_count
                          : isQuartly
                          ? plan.raffle_count_semiannual
                          : isYearly
                          ? plan.raffle_count_annual
                          : ""
                      }
                      titleColor2={"white"}
                      desc1={
                        isMonthly
                          ? plan.desc[0]
                          : isQuartly
                          ? plan.desc[1]
                          : isYearly
                          ? plan.desc[2]
                          : ""
                      }
                      specDesc={
                        abilityCoupen === "CHNCEOFF" ? (
                          plan.name === "Starter" ? (
                            <>
                              Free entries for{" "}
                              <strong> DJ & Mazz Booths</strong>
                            </>
                          ) : (
                            <>
                              Free entries for{" "}
                              <strong> DJ & Mazz Booths</strong>
                            </>
                          )
                        ) : (
                          ""
                        )
                      }
                      isDisabled={planDis}
                      buttonColor={
                        plan.name == "Starter"
                          ? "black"
                          : "" | (plan.name == "Boomer")
                          ? "black"
                          : "" | (plan.name == "Platinum")
                          ? "black"
                          : "" | (plan.name == "Gold")
                          ? "black"
                          : "" | (plan.name == "Black")
                          ? "white"
                          : "black"
                      }
                      arrowColor="[#01819D]"
                      buttonTextColor={plan.name == "Black" ? "black" : "white"}
                      btnword="CHOOSE PLAN"
                      handleChosePlan={handleChosePlan}
                      bgColorFrom={plan.color}
                      bgColorTo={plan.colorFrom}
                      titleColor={"white"}
                      classNames={`basis-[100%] md:basis-[48%] xl:basis-[28%] ${isOnetime && plan.name == 'Starter' ? 'hidden' : ''}`}
                      chosenPlan={chosenPlan}
                      isShowDetails={true}
                      popular={
                        plan.name === "Platinum" && isMonthly ? true : false
                      }
                      multiplyBy={1}
                    />
                  ))}
                </>
              ) : (
                <>
                  {oneOffPackages.map((oneOff, key) => (
                    <VehicleCardForReg
                      key={key}
                      oneOffId={oneOff._id}
                      type={"vehicle"}
                      name={oneOff.name}
                      price={oneOff.price}
                      descs={oneOff.desc[0]}
                      color={oneOff.color}
                      date={"2024-02-28"}
                      raffleimage={
                        "https://winland.onrender.com/public/images/vehicle.png"
                      }
                      handleChoseOneOff={handleChoseOneOff}
                      select={select}
                      setSelect={setSelect}
                      setSelectedPlanName={setSelectedPlanName}
                      setSelPlanPrice={setSelPlanPrice}
                      chooseOneOff={chooseOneOff}
                      multiplyBy={1}
                    />
                  ))}

                  {/* <button className="md:text-sm text-xs text-blue-500">See More</button> */}
                </>
              )}
            </div>
            <div className="flex w-full justify-st items-start sm:divide-x max-sm:flex-col">
              <div className="flex flex-col xl:space-y-2 md:space-y-4 space-y-2 md:mt-10 lg:mt-20 xl:mt-10 special:mt-10 mt-1 mb-10 sm:mb-0 px-10 w-full">
                <span className="text-2xl md:text-4xl xl:text-4xl fw-bold font-bold special:text-8xl">
                  User Info
                </span>
                <form
                  onSubmit={handleSubmit}
                  autoComplete="off"
                  className="form-contain"
                >
                  <div className="flex flex-col justify-center space-y-4 mx-auto xl:mt-4 md:mt-10 mt-4 special:mt-20">
                    <div
                      className={`flex flex-col space-y-4 ${
                        buttonText == "Sending..." || buttonText == "Register"
                          ? "blur-sm"
                          : ""
                      }`}
                    >
                      <div
                        className={
                          errors.firstname && touched.firstname
                            ? "input-div input-error"
                            : "input-div"
                        }
                      >
                        <FcBusinessman size={20} />
                        <input
                          type="text"
                          placeholder="Your First Name"
                          value={values.firstname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          id="firstname"
                          className="placeholder:text-[16px]"
                          disabled={fieldDis}
                        />
                        <small className="text-error">
                          {errors.firstname &&
                            touched.firstname &&
                            errors.firstname}
                        </small>
                      </div>
                      <div
                        className={
                          errors.name && touched.name
                            ? "input-div input-error"
                            : "input-div"
                        }
                      >
                        <FcButtingIn size={20} />
                        <input
                          type="text"
                          placeholder="Your Surname"
                          value={values.lastname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          id="lastname"
                          className="placeholder:text-[16px]"
                          disabled={fieldDis}
                        />
                        <small className="text-error">
                          {errors.lastname &&
                            touched.lastname &&
                            errors.lastname}
                        </small>
                      </div>

                      <div
                        className={
                          errors.email && touched.email
                            ? "input-div input-error"
                            : "input-div"
                        }
                      >
                        <FcFeedback size={20} />
                        <input
                          type="email"
                          placeholder="Your Email Address"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          id="email"
                          className="placeholder:text-[16px]"
                          disabled={fieldDis}
                        />
                        <small className="text-error">
                          {errors.email && touched.email && errors.email}
                        </small>
                      </div>
                      <div
                        className={
                          errors.password && touched.password
                            ? "input-div input-error"
                            : "input-div"
                        }
                      >
                        <FcUnlock size={20} />
                        <input
                          type="password"
                          placeholder="Password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          id="password"
                          className="placeholder:text-[16px]"
                          disabled={fieldDis}
                        />
                        <small className="text-error">
                          {errors.password &&
                            touched.password &&
                            errors.password}
                        </small>
                      </div>

                      <div
                        className={
                          errors.confirmPassword && touched.confirmPassword
                            ? "input-div input-error"
                            : "input-div"
                        }
                      >
                        <FcTwoSmartphones size={20} />
                        <input
                          type="password"
                          placeholder="Confirm Password"
                          value={values.confirmPassword}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          id="confirmPassword"
                          className="placeholder:text-[16px]"
                          disabled={fieldDis}
                        />
                        <small className="text-error">
                          {errors.confirmPassword &&
                            touched.confirmPassword &&
                            errors.confirmPassword}
                        </small>
                      </div>

                      <div
                        className={
                          errors.mobile && touched.mobile
                            ? "input-div input-error"
                            : ""
                        }
                      >
                        <PhoneInput
                          country={"au"}
                          value={ph}
                          onChange={(value, country, e, formattedValue) =>
                            setPh(value)
                          }
                          onBlur={handleBlur}
                          id="mobile"
                          className="placeholder:text-[16px]  border borer-solid focus:outline-none xl:w-full w-full border-black"
                          disabled={fieldDis}
                        />
                        <small className="text-error">
                          {errors.mobile && touched.mobile && errors.mobile}
                        </small>
                      </div>
                      {memberShipType == "subscription" ? (
                        <div
                          className={
                            errors.refferalId && touched.refferalId
                              ? "input-div input-error"
                              : "input-div"
                          }
                        >
                          <FcSmartphoneTablet size={20} />
                          <input
                            type="text"
                            placeholder="Affiliate ID (Optional)"
                            value={values.refferalId || refId}
                            disabled={refId ? true : false || fieldDis}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="refferalId"
                            className="placeholder:text-[16px]"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </form>
              </div>

              <div className="flex flex-col xl:space-y-2 md:space-y-4 space-y-2 md:mt-10 lg:mt-20 xl:mt-10 special:mt-10 mt-1 mb-10 sm:mb-0 px-10 w-full">
                <span className="text-2xl md:text-4xl xl:text-4xl fw-bold font-bold special:text-8xl">
                  Membership Types
                </span>
                <div className="pt-3 special:pt-20 flex flex-col gap-5">
                  {showOneOff && (
                    <div className="bg-white border border-black px-4 py-1 rounded-xl w-full ">
                      <input
                        type="radio"
                        name="selectPack"
                        value={"round"}
                        onChange={handleMemType}
                        checked={memberShipType === "round"}
                      />
                      <label htmlFor="selectPack" className="text-sm">
                        One off package
                      </label>
                    </div>
                  )}
                  <div className="bg-white border border-black px-4 py-1 rounded-xl w-full">
                    <input
                      type="radio"
                      name="selectPack"
                      value={"subscription"}
                      onChange={handleMemType}
                      checked={memberShipType === "subscription"}
                    />
                    <label htmlFor="selectPack" className="text-sm">
                      {" "}
                      Subscription (Most popular accumulating entries)
                    </label>
                  </div>
                  {/* </div> */}
                  <p className="text-sm font-bold border-b border-gray-500">
                    Amount
                  </p>
                  <div className="flex items-start justify-between text-xs text-gray-500 border-b border-gray-500">
                    <p>
                      {selectedPlanName}{" "}
                      {memberShipType === "subscription" ? "Tier" : ""}
                    </p>{" "}
                    <p>${selectedPlanPrice}</p>
                  </div>
                  <div className="flex items-start justify-between text-xs font-bold">
                    <p>Order Total</p> <p>${selectedPlanPrice}</p>
                  </div>
                  <p className="text-sm font-bold border-b">Payment Method</p>
                  <div className="flex flex-row items-center justify-between gap-2 bg-gray-300 rounded-xl p-2 overflow-hidden">
                    <button
                      className={` w-full py-2 px-4 ${
                        selectPaymentMethod === "stripe"
                          ? "bg-black text-white rounded-xl overflow-hidden cursor-not-allowed"
                          : "hover:opacity-75 text-black"
                      }`}
                      onClick={() =>
                        handlePaymentMethod(setSelectPaymentMethod("stripe"))
                      }
                      disabled={selectPaymentMethod === "stripe"}
                    >
                      Pay by card
                    </button>

                    <button
                      className={` w-full py-2 px-4 ${
                        selectPaymentMethod === "crypto"
                          ? "bg-black text-white overflow-hidden rounded-xl cursor-not-allowed"
                          : "hover:opacity-75 text-black"
                      }`}
                      onClick={() =>
                        handlePaymentMethod(setSelectPaymentMethod("crypto"))
                      }
                      disabled={selectPaymentMethod === "crypto"}
                    >
                      Pay by crypto
                    </button>
                  </div>
                  <div className="special:text-xl flex flex-row gap-2 items-center px-10 sm:hidden">
              <input
                id="checkbox"
                type="checkbox"
                checked={isChecked}
                onChange={onCheckboxChange}
                className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <div className="flex flex-row items-center gap-2">
                <p
                  className="text-[10px] xl:text-sm special:text-lg cursor-pointer"
                  onClick={() => setIsChecked(!isChecked)}
                >
                  By checking the box you agree to our
                </p>
                <Link to="/conditions" target="_blank" className="yellow-text">
                  <p className="text-[10px] xl:text-sm  special:text-lg cursor-pointer">
                    Terms of use
                  </p>
                </Link>
              </div>
            </div>
                  <button
                    className={`text-white rounded-xl justify-center px-12 py-2 flex flex-row items-center font-semibold special:text-xl disabled:bg-[#FF4C00] bg-${
                      isChecked ? "black" : "gray-500"
                    } hover:bg-${isChecked ? "black/50" : ""}`}
                    onClick={(e) => onSignup(e)}
                    // onClick={(e) => onSignup(e)}
                    disabled={
                      !isChecked ||
                      buttonDis ||
                      !values.firstname ||
                      !values.lastname ||
                      !values.email ||
                      !values.password ||
                      !values.confirmPassword ||
                      !ph ||
                      !memberShipType
                    }
                    type="submit"
                  >
                    <span className="xl:text-xl md:text-xl special:text-2xl text-lg text-white font-bold">
                      {buttonText}
                    </span>
                    <MdOutlineNavigateNext
                      color={"#fff"}
                      size={40}
                      className=""
                    />
                  </button>

                  <div className="font-semibold text-lg text-center">
                    <span>Already a member? </span>
                    <span>
                      <Link className="react-link text-[#157D98]" to="/login">
                        Login
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {showOTPBox && (
              <div
                className={
                  errors.otp && touched.opt
                    ? "input-div input-error"
                    : "input-div"
                }
              >
                <input
                  type="text"
                  placeholder="OTP Code"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.trim())}
                  // id="tin"
                />
                <small className="text-error">
                  {errors.otp && touched.opt && errors.otp}
                </small>
                {/* <small onClick={resendOTP}>Resend</small> */}
              </div>
            )}

            <div className="special:text-xl flex flex-row gap-2 items-center px-10 pb-10 max-sm:hidden">
              <input
                id="checkbox"
                type="checkbox"
                checked={isChecked}
                onChange={onCheckboxChange}
                className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <div className="flex flex-row items-center gap-2">
                <p
                  className="text-[10px] xl:text-sm special:text-lg cursor-pointer"
                  onClick={() => setIsChecked(!isChecked)}
                >
                  By checking the box you agree to our
                </p>
                <Link to="/conditions" target="_blank" className="yellow-text">
                  <p className="text-[10px] xl:text-sm  special:text-lg cursor-pointer">
                    Terms of use
                  </p>
                </Link>
              </div>
            </div>

            {!final && <div id="recaptcha-container"></div>}
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
