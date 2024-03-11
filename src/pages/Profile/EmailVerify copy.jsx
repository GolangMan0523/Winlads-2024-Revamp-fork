import "../ForgotPW/ForgotPassword.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainImg from "../../assets/images/jip.png";
import { MdOutlineNavigateNext } from "react-icons/md";
import Loader from "../../components/Loader/Loader";
import { useFormik } from "formik";
import axios from "axios";
import Cookies from "universal-cookie";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { validateCurrentUser } from "../../utils/validateuser.js";
import LoginImg from "../../assets/images/MainCar.png";
import "react-phone-input-2/lib/style.css";
import { FcFeedback, FcDocument } from "react-icons/fc";
import { ImSpinner8 } from "react-icons/im";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase.config";

const MobileVerify = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [showOtpBox, setShowOTPBox] = useState(false);
    const navigate = useNavigate();
    const [buttonText, setButtonText] = useState("Send OTP");
    const [final, setfinal] = useState(true);
    const [valUser, setValUser] = useState("");

    const [codeState, setCodeState] = useState("request")


    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");

    const [loginDisable, setLoginDisable] = useState(true);

    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
    };

     function onSignup(e) {
        setIsLoading(true);
        setfinal(false)
        let verify;
        console.log(auth);
        if (codeState == "request") {
            try {
                window.recaptchaVerifier = new RecaptchaVerifier(
                    auth,
                    "recaptcha-container",
                    {}
                );
                verify = window.recaptchaVerifier;
            } catch (error) {
                console.log(error);
                return
            }


            signInWithPhoneNumber(auth, valUser.mobile, verify)
                .then((result) => {
                    console.log(result);
                    setfinal(result);
                    //setshow(true);
                    //  setVerifyDisable(false);
                    setCodeState('validate')
                    setButtonText("Verify");
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
                    setCodeState("request")
                    setButtonText("Send OTP");
                });
        } else if (codeState == "validate") {
            try {
                ValidateOtp();

                setIsLoading(false);
            } catch (error) {
                console.log(error);
                toast.error(error.response.data.message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setIsLoading(false);
            }
        }
    }
    useEffect(() => {
        currentUserValidation();
    }, []);

    const currentUserValidation = async () => {
        const validator = await validateCurrentUser();
        if (validator.validatorBl) {
            console.log("Session OK", validator.user);
            setValUser(validator.user);

        } else {
            navigate('/login')
            console.log("");
        }
    };

    // Set loading
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
        useFormik({
            initialValues: {
                email: "",
            },
            //   validationSchema: basicSchemasLogin,
            onSubmit,
        });

    const ValidateOtp = () => {
        if (code === null || final === null) return;
        console.log(code);
        final
            .confirm(code)
            .then((result) => {
                const data = {
                    id:valUser._id,
                    uid:valUser.uid,
                    mobileVerified: true,
                    email:valUser.email
                }
                console.log(email);
                // Handle change mobileVerified state here
                axios.post(`${import.meta.env.VITE_SERVER_API}/editUser`,data).then((res)=>{
                    console.log(res);
                    toast.success("Success");
                }).catch((err)=>{
                    console.log(err);
                    toast.error("Error while updating verified state", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });  
                })
                navigate("/profile");
                // SIGN UP SUCCESS
              
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

            });
    };

    return (
        <>
            <>
                <div className="h-screen flex justify-center bg-image">
                    <div className="flex items-center md:flex-row flex-col xl:justify-between gap-12 max-w-[1440px] px-10 xl:px-20">
                        <div className="hidden md:block transform flex-1">
                            <motion.img
                                initial={{ opacity: 0, x: "-40%" }}
                                whileInView={{ opacity: 1, x: "0%" }}
                                transition={{ duration: 0.8 }}
                                src={LoginImg}
                                className="xl:w-full h-full md:w-96"
                                alt="main-img"
                            />
                        </div>
                        {/* Mobile View Jeep */}
                        <div className="block md:hidden w-full transform">
                            <motion.img
                                initial={{ opacity: 0, x: "-40%" }}
                                whileInView={{ opacity: 1, x: "0%" }}
                                transition={{ duration: 0.8 }}
                                src={LoginImg}
                                className="w-full h-full"
                                alt="main-img"
                            />
                        </div>

                        {/* </div> */}
                        <div className="flex flex-col">
                            <span className="text-2xl md:text-2xl xl:text-5xl font-bold special:text-4xl">
                                Verify Your Mobile
                            </span>

                            <form onSubmit={handleSubmit} autoComplete="off" className="">
                                <div className="flex flex-col justify-center gap-5 mt-10">
                                    {
                                        codeState == "request" ? <div
                                            className={
                                                errors.email && touched.email
                                                    ? "input-div input-error"
                                                    : "input-div"
                                            }
                                        >
                                            <FcFeedback size={20} />
                                            <input
                                                type="tel"
                                                placeholder="Mobile Number"
                                                value={valUser.mobile || ''}
                                                onChange={(e) => setEmail(e.target.value)}
                                                id="email"
                                                className="placeholder:text-[16px]"
                                                disabled
                                            />
                                            <small className="text-error">
                                                {errors.email && touched.email && errors.email}
                                            </small>
                                        </div> : codeState == "validate" ? <div
                                            className={
                                                errors.code && touched.code
                                                    ? "input-div input-error"
                                                    : "input-div"
                                            }
                                        >
                                            <FcDocument size={20} />
                                            <input
                                                type="text"
                                                placeholder="Code"
                                                value={code}
                                                onChange={(e) => setCode(e.target.value)}
                                                id="code"
                                                className="placeholder:text-[16px]"
                                            />
                                        </div> : <div></div>
                                    }

                                    {!final && <div id="recaptcha-container"></div>}
                                    {/* <div id="recaptcha-container"></div> */}

                                    <button
                                        className={`px-12 w-full py-2 flex justify-center flex-row items-center rounded-lg bg-${loginDisable ? "black" : "gray-500"
                                            } hover:bg-${loginDisable ? "black/75" : ""}`}
                                        onClick={(e) => onSignup(e)}
                                        type="submit"
                                        disabled={!loginDisable}
                                    >
                                        <span className="xl:text-2xl text-sm text-white font-bold">
                                            {buttonText}
                                        </span>
                                        <MdOutlineNavigateNext
                                            color={"#fff"}
                                            className="inline-block mt-0 text-2xl"
                                        />
                                        {
                                            isLoading && <span className="text-cyan-500 animate-spin"><ImSpinner8 /></span>

                                        }
                                        <div className="sp"></div>
                                    </button>
                                    {/* <div className="font-semibold text-lg text-center">
                      <span>New Member? </span>
                      <span>
                        <Link to="/login" className="react-link text-[#157D98]">
                          Login
                        </Link>
                      </span>
                    </div> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>

        </>
    );
};

export default MobileVerify;
