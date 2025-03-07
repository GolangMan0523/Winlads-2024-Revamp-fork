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

const inputStyle = {
  border: "1px solid #000000",
  borderRadius: "1px",
};

const Register = ({ location }) => {
  const [searchParams] = useSearchParams();
  const { selectedPackage } = useParams();
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
  const [memberShipType, setMemType] = useState("subscription");
  const [plans, setPlans] = useState([]);
  const [refId, setRefId] = useState("");
  const [eligible, setEligible] = useState(false);
  const [showOneOff, setShowOneOff] = useState(true);
  const [showFreeEntry, setShowFreeEntry] = useState(false);

  const [buttonDis, setBtnDis] = useState(false); //To disable the register button after submitted the request
  const [planDis, setPlanDis] = useState(false);
  const [abilityCoupen, setAbilityCoupen] = useState("");


  const getRefId = () => {
    let refid = searchParams.get("ref");
    if (refid) {
      cookies.set('affiliate', refid)
      return refid
    } else {
      refid = cookies.get('affiliate') || undefined
      return refid
    }
  }

  // set loading
  useEffect(() => {
    // if (selectedPackage) {
    //  cookies.set("selected-package-id", selectedPackage);
    //   setChosenPlan(selectedPackage);
    // }
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
  }, []);


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
      uid: uid,
      coupen: checkAbility == "WINACCESSEN" ? "MAZDABT50S" : abilityCoupen,
      type: eligible ? "trial" : memberShipType,
//Used the same variable for store roundid OR subid
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
          `${import.meta.env.VITE_SERVER_API}/register`,
          data
        );
        navigate("/dashboard")
        //cookies.set("wr_token", response.data?.data?._id);
        console.log(response.data, "data");
          
      } catch (error) {
        console.log(data, "Submitted data");
        toast.error("Error submitting login credentials", {
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

  function onSignup(e) {
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

    if (buttonText === "Register") {
      setBtnDis(true);
      ValidateOtp();
      // setBtnDis(false);
    } else {
      setButtonText("Sending...");
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {}
      );
      let verify = window.recaptchaVerifier;
      axios
        .get(`${import.meta.env.VITE_SERVER_API}/checkMobile?mobile=${ph}`)
        .then((response) => {
          if (response.data.exists) {
            toast.error("Mobile number is already registered!", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            // alert("Mobile number is already registered!");
            setButtonText("Get OTP");
          } else {
            signInWithPhoneNumber(auth, "+" + ph, verify)
              .then((result) => {
                setfinal(result);
                setshow(true);
                setVerifyDisable(false);
                setShowOTPBox(true);
                setButtonText("Register");
              })
              .catch((err) => {
                toast.error(err.message, {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
                //window.location.reload();
                setButtonText("Get OTP");
              });
          }
        })
        .catch((error) => {
          console.error("Error checking mobile:", error);
          toast.error("An error occurred while checking the mobile number.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          // alert("An error occurred while checking the mobile number.");
          setButtonText("Get OTP");
        });
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

    console.log(coupen, "copen 2");
  };



  const handleMemType = (e) => {
    setMemType(e.target.value);
    const checkAbility = searchParams.get("ability");
    if (e.target.value == "round") {
      //  setAbilityCoupen("");
    } else {
      if (checkAbility == "CHNCEOFF") {
        setAbilityCoupen("CHNCEOFF");
      }
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-center bg-image">
          {eligible && (
            <div className="py-4 w-full bg-yellow-300 text-center">
              <p className="text-black font-semibold">
                Congratulations! You are eligible for free entry on this
                registration.
              </p>
            </div>
          )}

          <div className="flex items-start justify-between gap-12 md:flex-row flex-col px-10 xl:px-20 max-w-[1440px]">
            {/* <div className="login-contain flex items-center justify-center md:flex-row xl:flex-row 4xl:flex-row flex-col"> */}
            <div className="">
              <div className="hidden md:block  transform">
                {abilityCoupen === "CHNCEOFF" ? (
                  <motion.img
                    initial={{ opacity: 0, x: "-40%" }}
                     whileInView={{ opacity: 1, x: "0%" }}
                    transition={{ duration: 0.8 }}
                    src={CanceOffFlyer}
                    className="w-full p-10 h-full pt-4 xl::pt-0"
                    alt="main-img"
                 />

                ) : (
                  <motion.img
                    initial={{ opacity: 0, x: "-40%" }}
                    whileInView={{ opacity: 1, x: "0%" }}
                    transition={{ duration: 0.8 }}
                    src={LoginImg}
                    className="w-full h-full"
                    alt="main-img"
                  />
                )}
              </div>
              {/* Mobile View Jeep */}
              <div className="block md:hidden w-full transform">
                {abilityCoupen === "CHNCEOFF" ? (
                   <motion.img
                     initial={{ opacity: 0, x: "-40%" }}
                     whileInView={{ opacity: 1, x: "0%" }}
                     transition={{ duration: 0.8 }}
                     src={CanceOffFlyer}
                     className="w-full p-0 md:p-10 h-full pt-4 xl::pt-0"
                     alt="main-img"
                   />
  
                ) :
                  <motion.img
                    initial={{ opacity: 0, x: "-40%" }}
                    whileInView={{ opacity: 1, x: "0%" }}
                    transition={{ duration: 0.8 }}
                    src={LoginImg}
                    className="w-full h-full"
                    alt="main-img"
                  />}
              </div>

              {/* SUB PLANS SHOW DESKTOP */}
              {/* <div className="hidden md:grid xl:grid-cols-3 md:grid-cols-2 justify-start gap-3">

                {showFreeEntry && (
                  <div className="flex justify-center items-center">
                    <FreeEntryCardDashboard2 />
                  </div>
                )}
                {memberShipType == "subscription" ? (
                  <>
                    {plans.map((plan, key) => (
                      <Card
                        key={key}
                        planId={plan._id}
                        title={plan.name + " Tier"}
                        title2={plan.raffle_count}
                        titleColor2={plan.name == "Black" ? "white" : "black"}
                        desc1={plan.desc[0]}
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
                        buttonTextColor={
                          plan.name == "Black" ? "black" : "white"
                        }
                        btnword="CHOOSE PLAN"
                        handleChosePlan={handleChosePlan}
                        bgColorFrom={plan.color}
                        bgColorTo={plan.colorFrom}
                        titleColor={plan.name == "Black" ? "white" : "black"}
                        classNames={
                          "basis-[100%] md:basis-[48%] xl:basis-[28%]"
                        }
                        chosenPlan={chosenPlan}
                        isShowDetails={true}
                        popular={plan.name === "Platinum" ? true : false}
                      />
                    ))}
                  </>
                ) : (
                  <>
                    <VehicleCardForReg
                      type={"vehicle"}
                      name={"2023 MAZDA BT-50"}
                      date={"2024-02-28"}
                      color={"#D51111"}
                      fromColor={"#D51111"}
                      raffleimage={
                        "https://winland.onrender.com/public/images/vehicle.png"
                      }
                      select={select}
                      setSelect={setSelect}
                      setSelectedPlanName={setSelectedPlanName}
                      setSelPlanPrice={setSelPlanPrice}
                    />
        
                  </>
                )}
              </div> */}
            </div>
            <div className="flex flex-col xl:space-y-2 md:space-y-4 space-y-2 md:mt-10 lg:mt-20 xl:mt-10 special:mt-10 mt-1 mb-10 sm:mb-0 ">
              <span className="text-2xl md:text-4xl xl:text-4xl fw-bold font-bold special:text-8xl">
                Create an Account
              </span>
              <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className="form-contain"
              >
                <div className="flex flex-col justify-center space-y-4 mx-auto xl:mt-4 md:mt-10 mt-4 special:mt-20">
                  <div
                    className={`flex flex-col space-y-4 ${buttonText == "Sending..." || buttonText == "Register"
                      ? "blur-sm"
                      : ""
                      }`}
                  >
                    <div
                      className={
                        errors.name && touched.name
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
                        {errors.name && touched.name && errors.name}
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
                        {errors.name && touched.name && errors.name}
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
                        {errors.password && touched.password && errors.password}
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

                    {/* <div
                    className={
                      errors.passport && touched.passport
                        ? "input-div input-error"
                        : "input-div"
                    }
                  >
                    <FcDiploma1 size={20} />
                    <input
                      type="text"
                      placeholder="Your Nic Number"
                      value={values.passport}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="passport"
                      className="placeholder:text-[16px]"
                      disabled={fieldDis}
                    />
                 
                  </div> */}

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
                        className="placeholder:text-[16px]  border borer-solid focus:outline-none xl:w-96 w-full border-black"
                        disabled={fieldDis}
                      />
                      <small className="text-error">
                        {errors.mobile && touched.mobile && errors.mobile}
                      </small>
                    </div>
                    {
                      memberShipType == 'subscription' ? <div
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
                        : <></>
                    }
                  
                

                    {/* </div> */}
                   
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
                        onChange={(e) => setOtp(e.target.value)}
                      // id="tin"
                      />
                      <small className="text-error">
                        {errors.otp && touched.opt && errors.otp}
                      </small>
                      {/* <small onClick={resendOTP}>Resend</small> */}
                    </div>
                  )}

                  <div className="special:text-xl flex flex-row gap-2 items-center">
                    {" "}
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
                      <Link
                        to="/conditions"
                        target="_blank"
                        className="yellow-text"
                      >
                        <p className="text-[10px] xl:text-sm  special:text-lg cursor-pointer">
                          Terms of use
                        </p>
                      </Link>
                    </div>
                  </div>

                  {!final && <div id="recaptcha-container"></div>}

                  <button
                    className={`text-white rounded-xl justify-center px-12 py-2 flex flex-row items-center font-semibold special:text-xl disabled:bg-gray-500 bg-${isChecked ? "black" : "gray-500"
                      } hover:bg-${isChecked ? "black/50" : ""}`}
                    onClick={(e) => onSignup(e)}
                    // onClick={(e) => onSignup(e)}
                    disabled={!isChecked || buttonDis}
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
              </form>
            </div>
            {/* </div> */}
          </div>

          {/* MEMBERSHIP TYPE */}
          {/* <div className="flex items-center justify-between gap-12 md:flex-row flex-col px-10 xl:px-20 max-w-[1440px]">
            <div className="w-full">

            </div>
            <div className="w-full">
              <p>Membership Types</p>
              <hr />
              <div className="bg-white border border-black px-4 py-2 rounded-xl w-full">
                <input type="radio" name="selected" />
                <label htmlFor="selected"> One off package</label>
              </div>

            </div>
          </div> */}
        </div>
      )}
    </>
  );
};

export default Register;
