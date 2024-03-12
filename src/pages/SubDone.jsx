import Correct from "../assets/images/payment_success/success.png";
import Bg from "../assets/images/MainCar.png";
import { successAnimation } from "../animation/animation";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ImCross } from "react-icons/im";
import Cookies from "universal-cookie";

function SubDone() {
  const controls = useAnimation();
  const [isSuccess, setSuccess] = useState(true);
  const [seconds, setSeconds] = useState(5);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const cookies = new Cookies(null, { path: "/" });

  // Access individual query parameters
  const suc = searchParams.get("suc");
  const round_id = searchParams.get("round_id");

  // User registration 
  const token = searchParams.get("id");


  useEffect(() => {
    // Retrieve data from localStorage
    const storedData = localStorage.getItem("paymentSuccessData");
    console.log("PaymentSuccess page loaded: " + JSON.stringify(storedData));

    if (storedData) {
      const data = JSON.parse(storedData);

      // Pushing data to the data layer
      console.log("push to dataLayer", data);

      window.dataLayer.push({
        event: "purchaseDetails",
        data: data,
      });

      // Clearing data from localStorage
      localStorage.removeItem("paymentSuccessData");
    }
  }, []);

  useEffect(() => {
    if (suc == 0) {
      setSuccess(false);
    } else {
      setSuccess(true);
    }
    controls.start(successAnimation.animate);
    if (token) {
      console.log('Register Token :' + token);
      cookies.set('wr_token', token)

      const intervalId = setInterval(() => {
        setSeconds((prev) => {
          // Ensure that the countdown stops at 0
          if (prev <= 1) {
            clearInterval(intervalId);
            setTimeout(() => {
               navigate("/dashboard");
            }, 3000)
             navigate("/welcome");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => {
        // Clear the interval when the component unmounts
        clearInterval(intervalId);
      };
    } else {
      const intervalId = setInterval(() => {
        setSeconds((prev) => {
          // Ensure that the countdown stops at 0
          if (prev <= 1) {
            clearInterval(intervalId);
            navigate("/dashboard");
            return 0;
          }
          return prev - 1;
        });

        if (seconds < 1) {
          navigate("/dashboard");
        }
      }, 1000);


      return () => {
        // Clear the interval when the component unmounts
        clearInterval(intervalId);
      };
    }

  }, [controls]);



  return (
    <div
      className="flex w-full"
    // style={{
    //   backgroundImage: `url(${Bg})`,
    //   backgroundPosition: "center",
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "contain",
    // }}
    >
      {/* <SideNav screen="screen" /> */}

      <div className="flex flex-col xl:mx-10 mx-5 flex-1 pt-4  items-center justify-center w-full">
        <div className="flex flex-col justify-center items-center container xl:gap-10 lg:gap-8 md:gap-6 sm:gap-5 gap-5">
          <div className=" flex items-center flex-col space-y-5 justify-center">
            {/* <p>You will redirect to the dashboard after {seconds}</p> */}

            <div className='flex flex-col-reverse items-center justify-start gap-5'>
              <div className='flex items-center justify-between w-full lg:w-1/2 bg-[#EFF9FB] p-3 rounded-xl rounded-r-full'>
                <div className='border-l-4 text-xs pl-5 border-orange-600'>
                  <p>You will redirect to the dashboard after <br /> <span className='text-sm xl:text-2xl font-bold'>{isSuccess ? "Subscription Successful !" : "Subscription Fail"}</span></p>
                </div>
                <div className='bg-[#E4EFF0] p-3 rounded-full'>
                  <div className='bg-white p-3 rounded-full'>
                    <div className='bg-orange-600 hover:bg-orange-500 p-10 font-bold text-white rounded-full relative'>
                      <span className='absolute top-1/2 left-1/2 -translate-x-1/2 w-full -translate-y-1/2'>
                        {isSuccess ? (
                          <motion.img
                            src={Correct}
                            alt=""
                            className="w-full"
                            initial="initial"
                            animate={controls}
                            transition={successAnimation.transition}
                          />
                        ) : (
                          <motion.div
                            className="text-center w-full text-6xl text-red-500"
                            initial="initial"
                            animate={controls}
                            transition={successAnimation.transition}
                          >
                            <ImCross className="mx-auto" />
                          </motion.div>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w lg:w-1/4'>
                <img src={Bg} className='w-full h-full object-contain' />
              </div>

            </div>


          </div>
          {/* <p className="font-bold  xl:text-4xl lg:text-5xl md:text-4xl sm:text-3xl text-xl">
            {isSuccess ? "Subscription Successful !" : "Subscription Fail"}
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default SubDone;
