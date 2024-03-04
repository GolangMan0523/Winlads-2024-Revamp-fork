import { useEffect, useState } from "react";
import TopNav from "../../components/TopNav/TopNav";
import Filters from "../../components/MyEntries/Filters";
import { MdDone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import EntriPagination from "../../components/MyEntries/EntriPagination";
import { IoIosTimer } from "react-icons/io";
import noMore from "../../assets/images/icons/no-more.svg";
import { validateCurrentUser } from "../../utils/validateuser";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ItemLoader from "../../components/Loader/ItemLoader";

import { PiBookmarkSimpleLight } from "react-icons/pi";
import { LuMinus } from "react-icons/lu";

const recodeCount = 10;

const MyEntries = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [valUser, setValUser] = useState({});
  const navigate = useNavigate();
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pastGiveaways, setPastGiveaways] = useState([]);
  const [dataCount, setDataCount] = useState(0);
  const [catValue, setCatValue] = useState("");
  const [round, setRound] = useState("");
  const [number, setNumber] = useState("");
  const [allRounds, setAllRounds] = useState([]);
  const [totalEntries, setTotEntries] = useState(0);

  const [myGiveaways, setMyGiveaways] = useState([]);

  useEffect(() => {
    currentUserValidation();
  }, []);

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK", validator.user);
      setValUser(validator.user);
      getMyGiveaways(validator.user.uid, 1, 10, catValue, round, number);
    } else {
      navigate("/login");
      console.log("");
    }
  };

  const getMyGiveaways = async (id, from, to, catValue, roundId, number) => {
    setIsLoading(true);
    let baseUrl = `${
      import.meta.env.VITE_SERVER_API
    }/myRaffleRounds?uid=${id}&from=${from}&to=${to}`;

    if (catValue !== "") {
      baseUrl += `&category=${catValue}`;
    }

    if (roundId !== "") {
      baseUrl += `&round=${roundId}`;
    }

    if (number !== "") {
      baseUrl += `&numbers=${number}`;
    }

    await axios
      .get(baseUrl)
      .then((response) => {
        console.log(response.data.data, "data raffle");
        setMyGiveaways(response.data.data.future);
        setPastGiveaways(response.data.data.past);
        console.log(response.data.data.past, "past status");
        getAllRounds();
        const onePage = Math.ceil(response.data.data.count / recodeCount);
        setDataCount(response.data.data.count);
        setTotEntries(response.data.data.activeRounds);
        setPageCount(onePage);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const pagination = (no) => {
    const fromNo = recodeCount * (no - 1) + 1;
    const toNo = recodeCount * no;
    setCurrentPage(no);
    getMyGiveaways(valUser.uid, fromNo, toNo, catValue, round, number);
  };

  const categories = (cat) => {
    setCatValue(cat);
    getMyGiveaways(valUser.uid, 1, 10, cat, round, number);
  };

  const rounds = (round) => {
    setRound(round);
    getMyGiveaways(valUser.uid, 1, 10, catValue, round, number);
  };

  const getNumbers = (number) => {
    setNumber(number);
    getMyGiveaways(valUser.uid, 1, 10, catValue, round, number);
  };

  const getAllRounds = async () => {
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/raffleRoundsAllCategories`)
      .then((response) => {
        console.log(response.data.data, "data");
        setAllRounds(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  return (
    <div className="flex items-stretch justify-center w-full py-4">
      <div className="w-full">
        <div className="flex flex-col xl:flex-col flex-1 px-1 gap-5 w-full">
          {/* left side */}
          <div className="flex flex-col flex-1 ">
            <div className="block xl:hidden space-y-4">
              <div className=" rounded-b-3xl py-4">
                <TopNav />
              </div>
            </div>
          </div>
          <div className="hidden xl:flex flex-col space-y-4 items-end">
            <div className=" rounded-b-3xl space-y-4 relative w-web">
              <div className="grid grid-cols-2 gap-4 m-2">
                <div className="col-span-1"></div>
                <div className="col-span-1">
                  <TopNav textColor={"black"} />
                </div>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="px-0 md:px-10 relative">
            <Filters
              allRounds={allRounds}
              round={rounds}
              selectCatValue={categories}
              numbers={getNumbers}
              myTickets={totalEntries || "Loading"}
            />
            <div className="flex items-center justify-between xl:hidden px-2 my-5">
              <h1 className="text-xl font-bold">My Entries</h1>
              <IoIosTimer className="text-2xl font-bold" />
            </div>
            {isLoading ? (
              <div className="flex justify-center">
                <ItemLoader />
              </div>
            ) : (
              <>
                {dataCount > 0 ? (
                  <div className="flex flex-col space-y-2">
                    {myGiveaways.map((giveaway, key) => (
                      <div
                        key={key}
                        className="xl:grid grid-cols-4 px-2 xl:px-0 flex flex-col xl:items-center"
                      >
                        <div
                          className="col-span-1 justify-center items-center rounded-full flex xl:hidden"
                          // style={{ backgroundColor: giveaway?.raffle?.color }}

                          // style={{
                          //   background: `linear-gradient(90deg, ${giveaway.raffle?.color} 0%, #000608 100%)`,
                          // }}
                        >
                          <div className="justify-center bg-gray-300 items-center py-2 flex">
                            {/* <p className="text-black capitalize text-xs">
                              {giveaway?.raffle.name}
                            </p> */}
                            <img
                              src={giveaway.raffle?.raffleimage}
                              alt=""
                              className="w-10"
                            />
                            {/* <div
                              className="text-black capitalize rounded-lg py-1 items-center text-xs px-2"
                              style={{
                                backgroundColor: giveaway.raffle?.color,
                              }}
                            >
                              {giveaway?.raffle.name}
                            </div> */}
                            {/* <PiBookmarkSimpleLight className="text-white" /> */}
                          </div>
                        </div>
                        <div className="w-full hidden xl:block pl-2">
                          <p className="capitalize text-xs">
                            {giveaway.round.name}
                          </p>
                        </div>
                        <div className="py-3 text-xs 2xl:text-sm pl-2 pr-2 xl:rounded-b-none rounded-b-2xl xl:flex col-span-3 xl:items-center justify-between space-y-1 xl:space-y-0">
                          <div className=" md:w-1/3 w-full block xl:hidden">
                            <p className="capitalize">{giveaway.round.name}</p>
                          </div>
                          <div className="md:w-1/3 justify-center items-center rounded-full hidden xl:flex xl:pr-16 2xl:pr-36 special:pr-[600px]">
                            <div className="justify-center items-center py-2 flex">
                              <img
                                src={giveaway.raffle?.raffleimage}
                                alt=""
                                className="w-10"
                              />
                            </div>
                          </div>
                          <div className=" md:w-1/3 w-full xl:pl-8">
                            <p>{giveaway.entryNumber}</p>
                          </div>
                          <div className="flex flex-row justify-between 2xl:gap-36 xl:gap-12 md:w-1/3 w-full">
                            <p className="text-xs">
                              {/* {giveaway.round.endtime} */}{" "}
                              {new Date(giveaway.round.endtime).toLocaleString(
                                "en-GB",
                                {
                                  year: "numeric",
                                  month: "numeric",
                                  day: "numeric",
                                  hour: "numeric",
                                  minute: "numeric",
                                  second: "numeric",
                                  timeZone: "UTC",
                                }
                              )}
                            </p>
                          </div>
                          <div className="xl:w-48 w-24">
                            {" "}
                            {
                              giveaway.winstatus === "pending" ? (
                                <div className="rounded-full px-2 py-2 bg-[#F8C541]">
                                  Pending..
                                </div>
                              ) : giveaway.winstatus === "win" ? (
                                <div className="rounded-full px-2 py-2 bg-[#00D82F]">
                                  Win..
                                </div>
                              ) : (
                                <div className="rounded-full px-2 py-2 bg-[#F92626]">
                                  Lost..
                                </div>
                              )

                              // <RxCross1 />
                            }
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* {pastGiveaways.length > 0 && (
                      <hr className="h-[2px] bg-gray-300 my-10 w-11/12 mx-auto" />
                    )}

                    {pastGiveaways?.map((giveaway, key) => (
                      <div
                        key={key}
                        className="xl:grid grid-cols-5 px-2 xl:px-0 flex flex-col"
                      >
                        <div
                          className="col-span-1 flex justify-between items-center "
                          style={{ backgroundColor: giveaway?.raffle?.color }}
                        >
                          <div className="flex flex-row justify-between items-center pl-2 w-full">
                            <p className="text-black capitalize text-xs">
                              {giveaway?.raffle.name}
                            </p>
                            <PiBookmarkSimpleLight />
                          </div>
                        </div>
                        <div className="bg-blue-100 py-3 text-xs 2xl:text-sm xl:pr-4 pl-2 pr-2 xl:pl-4 xl:rounded-b-none rounded-b-2xl xl:flex col-span-4 xl:items-center justify-between space-y-1 xl:space-y-0">
                          <div className="md:w-1/3 w-full">
                            <p className="capitalize">{giveaway.round.name}</p>
                          </div>
                          <div className="md:w-1/3 w-full">
                            <p>{giveaway.entryNumber}</p>
                          </div>
                          <div className="flex flex-row justify-between 2xl:gap-36 xl:gap-12 md:w-1/3 w-full">
                            <p className="text-xs xl:text-sm">
                              {" "}
                              {new Date(giveaway.round.endtime).toLocaleString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                  hour: "numeric",
                                  minute: "numeric",
                                  second: "numeric",
                                  timeZone: "UTC",
                                }
                              )}
                            </p>
                          </div>
                          <div className="md:w-48">
                            {giveaway.winstatus === "win"
                              ? "Won"
                              : giveaway.winstatus === "lost"
                              ? "Lost"
                              : "Pending"}
                          </div>
                        </div>
                      </div>
                    ))} */}

                    <EntriPagination
                      pageCount={pageCount}
                      buttonClick={pagination}
                      currentPage={currentPage}
                      setCurrentPage={pagination}
                    />
                  </div>
                ) : (
                  <div className="w-52 mx-auto my-52">
                    {" "}
                    <img
                      src={noMore}
                      alt="empty"
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEntries;
