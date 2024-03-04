import "./Authentication.css";
import MainImg from "../../assets/images/jip.png";
import { BsCheck } from "react-icons/bs";
import { useState, useRef } from "react";
import OtpInput from "react-otp-input";
import { useLocation } from "react-router-dom";
import { color } from "framer-motion";

const Authentication = () => {
  // const [otpDigits, setOTPDigits] = useState(["", "", "", "", "", ""]);
  // const [verificationStatus, setVerificationStatus] = useState("");
  // const inputRefs = [
  //   useRef(),
  //   useRef(),
  //   useRef(),
  //   useRef(),
  //   useRef(),
  //   useRef(),
  // ];
  // const [color, setColor] = useState("");
  const location = useLocation();
  const final =
    location.state && location.state.final ? location.state.final : null;


  const [otp, setOtp] = useState("");

  // const handleOTPDigitChange = (e, index) => {
  //   const { value } = e.target;
  //   const updatedOTP = [...otpDigits];
  //   updatedOTP[index] = value;
  //   setOTPDigits(updatedOTP);

  //   // Focus on the next input field
  //   if (index < 5) {
  //     inputRefs[index + 1].current.focus();
  //   }
  // };

  // const handleVerifyOTP = () => {
  //   const enteredOTP = otpDigits.join("");
  //   const expectedOTP = "123456"; // Replace with your actual OTP

  //   if (isAllDigitsEntered) {
  //     if (enteredOTP === expectedOTP) {
  //       setVerificationStatus("OTP verified successfully!");
  //       setColor("green");
  //     } else {
  //       setVerificationStatus("Invalid OTP. Please try again.");
  //       setColor("red");
  //     }
  //   } else {
  //     setVerificationStatus("6 numbers of OTP is required!");
  //     setColor("red");
  //   }
  // };

  // Check if all OTP digits are entered
  // const isAllDigitsEntered = otpDigits.every((digit) => digit !== "");

  const ValidateOtp = () => {
    if (otp === null || final === null) return;
    final
      .confirm(otp)
      .then((result) => {
        // success
        console.log("success");
      })
      .catch((err) => {
        alert("Wrong code");
      });
  };

  return (
    <div className="authentication-section">
      <div className="authentication-bg"></div>

      <div>
        <div className="authentication-contain">
          <img src={MainImg} className="img-fluid" alt="main-img" />

          <span className="text-2xl md:text-3xl lg:text-4xl fw-bold font-bold">Authentication</span>

          {/* {color === "" ? (
            <p style={{ fontWeight: "bold" }}>processing....</p>
          ) : (
            <p style={{ color: `${color}`, fontWeight: "bold" }}>
              {verificationStatus}
            </p>
          )} */}

          <div className="form-contain-auth">
            <div>
              <span className="text-lg">
                Please enter the 6-digit code sent to your email{" "}
                <span className="blue-text">winlads@gmail.com</span> for
                verification.
              </span>
            </div>
            {/* 
            <div className='input-div-six-number'>
              {otpDigits.map((digit, index) => (
                <input
                  key={index}
                  type='text'
                  value={digit}
                  onChange={(e) => handleOTPDigitChange(e, index)}
                  maxLength='1'
                  ref={inputRefs[index]}
                />
              ))}
            </div> */}

            <OtpInput
              value={otp}
              onChange={setOtp}
              isInputNum={true}
              numInputs={6}
              containerStyle={'otp-container'}
              // renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
            />

            <div onClick={ValidateOtp} className="btn-main">
              <span>Verify</span>
              {/* <BsCheck color={"#fff"} size={40} className="mt-1" /> */}
            </div>

            <div className="get-code">
              <span>Didn’t receive any code? </span>
              <span>Resend Again</span>
              <div>
                <span className="text-center">Request new code in 00:13s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
