import "./ForgotPassword.css";
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

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState("Send Email");
  const [isEmailBlurred, setIsEmailBlurred] = useState(false);

  const [valUser, setValUser] = useState("");

  const [codeState, setCodeState] = useState("forget")


  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const cookies = new Cookies(null, { path: "/" });

  const [loginDisable, setLoginDisable] = useState(true);

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  async function onSignup(e) {
    setIsLoading(true);
    if (codeState == "forget") {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_API}/forgetPassword?email=${email}`
        );
        console.log(response.data)
        if (response.data.status == 200) {
          setCodeState("validate")
          setButtonText("Submit OTP")
          setIsLoading(false);
        } else {
          toast.error("Password reset failed. Please try again", {
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
      } catch (error) {
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
        setIsLoading(false);
      }
    } else if (codeState == "validate") {
      try {
        const data = {
          email: email,
          token: code
        }
        const response = await axios.post(
          `${import.meta.env.VITE_SERVER_API}/validateToken`,
          data
        );
        console.log(response.data)
        if (response.data.status == 200 && response.data.validate) {
          setCodeState("reset")
          setButtonText("Change Password")
          setIsLoading(false);
        } else {
          toast.error("Invalid code. Try again!", {
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
      } catch (error) {
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
        setIsLoading(false);
      }
    } else if (codeState == "reset") {

      if (password != confirmPassword) {
        toast.error("Password does not matched!", {
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
        return;
      }

      try {
        const data = {
          email: email,
          token: code,
          password
        }
        const response = await axios.post(
          `${import.meta.env.VITE_SERVER_API}/resetPassword`,
          data
        );
        console.log(response.data)
        if (response.data.status == 200) {
          setCodeState("validate")
          setButtonText("Change Password")
          setIsLoading(false);
          toast.success("Password changed!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          navigate("/login");
        } else {
          toast.error("Invalid code. Try again!", {
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
      } catch (error) {
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
      navigate("/dashboard");
    } else {
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

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
                  Forgot Password
                </span>

                <form onSubmit={handleSubmit} autoComplete="off" className="">
                  <div className="flex flex-col justify-center gap-5 mt-10">
                    {
                      codeState == "forget" ? <div
                        className={
                          errors.email && touched.email
                            ? "input-div input-error"
                            : "input-div"
                        }
                      >
                        <FcFeedback size={20} />
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          id="email"
                          className="placeholder:text-[16px]"
                          disabled={isEmailBlurred}
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
                      </div> : codeState == "reset" ? <div><div
                        className={
                          errors.code && touched.code
                            ? "input-div input-error"
                            : "input-div"
                        }
                      >
                        <FcDocument size={20} />
                        <input
                          type="password"
                          placeholder="New Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          id="password"
                          className="placeholder:text-[16px]"
                        />
                      </div><br /><div
                        className={
                          errors.code && touched.code
                            ? "input-div input-error"
                            : "input-div"
                        }
                      >
                          <FcDocument size={20} />
                          <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            id="confirm"
                            className="placeholder:text-[16px]"
                          />
                        </div></div> : <div></div>
                    }



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
                    </button>
                    <div className="font-semibold text-lg text-center">
                      <span>New Member? </span>
                      <span>
                        <Link to="/login" className="react-link text-[#157D98]">
                          Login
                        </Link>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ForgotPassword;
