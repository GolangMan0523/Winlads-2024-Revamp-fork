import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const FundTransferForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const onCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="flex-col ">
      <div className="flex flex-col h-full pb-4 md:pt-8 space-y-8">
        <div className="flex flex-col space-y-2">
          <p className="text-black text-sm xl:text-md special:text-xl">
            Bank Name
          </p>
          <input
            className="bg-[#ECECEC] rounded-xl px-2 py-2 focus:outline-none placeholder:text-sm text-sm md:text-lg xl:text-xl 2xl:text-xl special:text-2xl"
            placeholder="Enter Account Number"
            type="text"
          ></input>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-black text-sm xl:text-md special:text-xl">
            Account Number
          </p>
          <input
            className="bg-[#ECECEC] rounded-xl px-2 py-2 focus:outline-none placeholder:text-sm text-sm md:text-lg xl:text-xl 2xl:text-xl special:text-2xl"
            placeholder="Enter Account Number"
            type="number"
          ></input>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-black text-sm xl:text-md special:text-xl">
            Holder Name
          </p>
          <input
            className="bg-[#ECECEC] rounded-xl px-2 py-2 focus:outline-none placeholder:text-sm text-sm md:text-lg xl:text-xl 2xl:text-xl special:text-2xl"
            placeholder="Enter Holder Name"
            type="text"
          ></input>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-black text-sm xl:text-md special:text-xl">
            Purpose of Payment
          </p>
          <input
            className="bg-[#ECECEC] rounded-xl px-2 py-2 focus:outline-none placeholder:text-sm text-sm md:text-lg xl:text-xl 2xl:text-xl special:text-2xl"
            placeholder="Enter Purpose Payment"
            type="text"
          ></input>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-black text-sm xl:text-md special:text-xl">
            Amount
          </p>
          <input
            className="bg-[#ECECEC] rounded-xl px-2 py-2 focus:outline-none placeholder:text-sm text-sm md:text-lg xl:text-xl 2xl:text-xl special:text-2xl"
            placeholder="Enter Amount"
            type="number"
          ></input>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            <input
              id="checkbox"
              type="checkbox"
              checked={isChecked}
              onChange={onCheckboxChange}
              className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />

            <div className="flex flex-row items-center gap-2 ml-2">
              <p
                htmlFor="checked-checkbox"
                className="text-xs special:text-lg font-medium text-black cursor-pointer"
                onClick={() => setIsChecked(!isChecked)}
              >
                {" "}
                I agree with the
              </p>
              <Link to="/conditions" target="_blank" className="yellow-text">
                <p className="text-xs special:text-lg font-medium">
                  terms of use
                </p>
              </Link>
            </div>
          </div>

          <button
            disabled={!isChecked}
            className={`bg-${isChecked ? "black" : "gray-500"} hover:bg-${
              isChecked ? "black/50" : ""
            } rounded-xl px-20 py-2 md:text-xl text-white xl:text-lg 2xl:text-2xl special:text-2xl`}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default FundTransferForm;
