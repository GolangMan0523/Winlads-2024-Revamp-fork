import React, { useState, useRef, useEffect } from "react";
import { IoIosOptions } from "react-icons/io";
import { GoBell } from "react-icons/go";
const Filters = ({
  categoryVal,
  roundVal,
  winStatus,
  validDate,
  entNumber,
  allRounds,
  selectCatValue,
  round,
  numbers,
  // activeEntries = 0,
  myTickets,
}) => {
  const [isCatShow, setIsCat] = useState(false);
  const [isRoundShow, setIsRound] = useState(false);
  const [winShow, setWinShow] = useState(false);

  const [catValue, setCatValue] = useState("Giveaway Category");
  const [roundValue, setRoundVal] = useState("Giveaway Rounds");

  const handleCategoryShow = () => {
    setIsCat((prev) => !prev);
    // setIsCat(distCat)
  };
  const handleRoundsShow = () => {
    setIsRound((prev) => !prev);
  };
  const handleWinShow = () => {
    setWinShow((prev) => !prev);
  };

  const handleCatChange = (val) => {
    setCatValue(val);
    categoryVal(val);
    setIsCat(false);
  };
  const handleRoundChange = (val) => {
    setRoundVal(val);
    roundVal(val);
    setIsRound(false);
  };

  const handleCat = (val) => {
    selectCatValue(val);
    setIsCat(false);
  };

  const handleRound = (id) => {
    round(id);
    setIsRound(false);
  };

  const handleNumbers = (num) => {
    numbers(num);
  };

  return (
    <>
      <h1 className="special:text-4xl xl:text-3xl md:text-xl text-lg font-extrabold mb-2 xl:block hidden">
        My Entries
      </h1>
      <h5 className="mb-5 text-green-600 px-2 xl:px-0">
        Total Active Entries : {myTickets}
      </h5>
      <div className="hidden xl:grid grid-cols-4 mb-4 xl:space-x-2">
        <div className="col-span-1">
          <div
            className="xl:flex items-center justify-between hidden  bg-gray-300 px-4 py-2 w-full rounded-full text-xl font-semibold"
            onClick={handleRoundsShow}
          >
            <p className="2xl:text-sm xl:text-xs text-black">Giveaway Names</p>
            <IoIosOptions className="2xl:text-xl xl:text-sm m-1 cursor-pointer text-black" />
          </div>
          <div
            className="w-full text-ellipsis xl:hidden overflow-hidden flex items-center justify-between bg-gray-300 px-4 py-2 gap-2 rounded-full text-xl font-semibold"
            onClick={handleCategoryShow}
          >
            <p className="2xl:text-sm xl:text-xs text-black">
              Category
            </p>
            <IoIosOptions className="2xl:text-xl xl:text-sm m-1 cursor-pointer flex-shrink-0 text-black" />
          </div>
          {isRoundShow && (
              <div className="bg-white absolute border border-solid border-black rounded-xl p-2 w-48 2xl:w-64 mt-2">
                <div className="flex flex-col justify-center space-y-2">
                  {allRounds &&
                    allRounds?.map((round, key) => (
                      <div key={key}>
                        <p
                          className="text-xs hover:bg-[#F5F5F5] p-1 rounded-lg cursor-pointer"
                          onClick={() => handleRound(round._id)}
                        >
                          {round.name}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            )}
        
        </div>
        {/* Giveaway Rounds */}
        <div className="col-span-3">
          <div className="flex flex-row xl:space-x-4 justify-between">
            <div
              className="flex items-center justify-between xl:hidden  bg-gray-300 px-4 py-2 w-full rounded-full text-xl font-semibold"
              onClick={handleRoundsShow}
            >
              <p className="2xl:text-sm xl:text-xs text-black">
                Giveaway Names
              </p>
              <IoIosOptions className="2xl:text-xl xl:text-sm m-1 cursor-pointer text-black" />
            </div>
            <div
              className="w-96 text-ellipsis overflow-hidden xl:flex hidden items-center justify-between bg-gray-300 px-4 py-2 gap-2 rounded-full text-xl font-semibold"
              onClick={handleCategoryShow}
            >
              <p className="2xl:text-sm xl:text-xs text-black">
                Category
              </p>
              <IoIosOptions className="2xl:text-xl xl:text-sm m-1 cursor-pointer flex-shrink-0 text-black" />
            </div>
            {isCatShow && (
            <div className="bg-white absolute border border-solid border-black cursor-pointer rounded-xl p-2 w-48 2xl:w-64 mt-12">
              <div className="flex flex-col justify-center space-y-2 text-xs">
                <p
                  className="hover:bg-[#F5F5F5] p-1 rounded-lg cursor-pointer"
                  onClick={() => handleCat("i645")}
                >
                  Mistry Box
                </p>
                <p
                  className="hover:bg-[#F5F5F5] p-1 rounded-lg cursor-pointer"
                  onClick={() => handleCat("Gift")}
                >
                  Gift
                </p>
                <p
                  className="hover:bg-[#F5F5F5] p-1 rounded-lg cursor-pointer"
                  onClick={() => handleCat("Cash Prize")}
                >
                  Cash Prize
                </p>
              </div>
            </div>
          )}
           
            <input
              type="number"
              name="entry-number"
              className="bg-gray-300 w-full px-4 rounded-full 2xl:text-sm xl:text-xs font-semibold placeholder:2xl:text-sm placeholder:xl:text-xs  placeholder:text-black outline-none"
              placeholder="Search Entry Numbers"
              onChange={(e) => handleNumbers(e.target.value)}
            />
            <div className="relative bg-gray-300 w-full px-4 py-2 gap-2 rounded-full 2xl:text-sm xl:text-sm font-semibold cursor-pointer overflow-hidden flex items-center justify-center">
              <label
                htmlFor="valid-date"
                className=" text-xs absolute right-10 top-1/2 -translate-y-1/2"
              >
                Valid Date
              </label>
              <input
                type="date"
                name="valid-date"
                className="w-full bg-inherit outline-none text-[12px]"
                placeholder="Valid Date"
                onChange={(e) => validDate(e.target.value)}
                style={{ appearance: 'textfield' }}
              />
            </div>
            <div className="relative cursor-pointer">
              <div
                className="flex items-center w-[170px] justify-between text-black bg-gray-300 px-4 py-3 gap-2 rounded-full text-xl font-semibold"
                onClick={handleWinShow}
              >
                <p className="2xl:text-sm xl:text-xs">Status</p>
              </div>
              {winShow && (
                <div className="bg-white absolute border border-solid border-black rounded-xl p-2 w-24 2xl:w-36 mt-2">
                  <div className="flex flex-col justify-center space-y-2 text-xs">
                    <p className="hover:bg-[#F5F5F5] p-1 rounded-lg">Win</p>
                    <p className="hover:bg-[#F5F5F5] p-1 rounded-lg">Loose</p>
                    <p className="hover:bg-[#F5F5F5] p-1 rounded-lg">Pending</p>
                  </div>
                </div>
              )}
            </div>

            <input
              type="text"
              name="search"
              className="rounded-xl px-4 py-4 outline-none w-full bg-gray-200 xl:hidden"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Entry Numbers */}

        {/* Win Status */}
      </div>
    </>
  );
};

export default Filters;
