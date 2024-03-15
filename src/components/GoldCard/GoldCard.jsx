import "./GoldCard.css";
import { useEffect, useState } from "react";
import { validateCurrentUser } from "../../utils/validateuser";
import { Link, useNavigate } from "react-router-dom";
import Cross from "../../assets/images/subcription/cross.png";
import SubBG from "../../assets/images/subBg.png";
import subBg_2 from "../../assets/images/subBg_2.png";

const GoldCard = () => {
  const navigate = useNavigate();
  const [valUser, setValUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [subDate, setSubDate] = useState("");

  useEffect(() => {
    currentUserValidation();
  }, []);

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK", validator.user);
      setValUser(validator.user);
      setSubDate(valUser.transaction?.endfrom);
      setLoading(false);
    } else {
      navigate("/login");
      setLoading(false);
    }
  };

  const startDateObject = new Date(valUser?.startDate);
  const endDateObject = new Date(valUser?.expireDate);
  const trialEndDateObject = new Date(valUser?.trialend);
  const unsubObject = new Date(valUser.subscription?.cancledat);

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    timeZone: "UTC",
  };

  const endDate = endDateObject.toLocaleString("en-GB", options);
  const startDate = startDateObject.toLocaleString("en-GB", options);
  const trialEndDate = trialEndDateObject.toLocaleString("en-GB", options);
  const unsubDate = unsubObject.toLocaleString("en-GB", options);

  return (
    <>
      {!loading &&
        (valUser?.subscription_status !== "noplan" ? (
          <div className="flex flex-col justify-center items-center ">
            
            <div className="top-card text-white rounded-t-lg flex justify-between items-center px-10 py-3  w-10/12  max-w-[330px] ">
              <span className="max-sm:text-sm">Earning Balance</span>
              <span className="font-bold text-lg max-sm:text-sm">$ {typeof valUser.balance === "number"
                        ? valUser.balance.toFixed(2)
                        : "0.00"}</span>
            </div>

            <div
              className={`relative  ${
                valUser.subscriptionPlan?.data?.name == "Black"
                  ? "border-white"
                  : "border-black"
              } overflow-hidden rounded-xl flex flex-row items-center justify-between cursor-default w-full max-w-md shadow-2xl`}
              // style={{ backgroundColor: valUser ? valUser.subscriptionPlan?.data?.color : "" }}
              style={{
                background: `linear-gradient(308.06deg, #FFBE1D 37.31%, #FFDD89 98.03%)`,
              }}
            >
              {/* <div className="gold-card-inner-sec1"> */}
              <div className="flex flex-col pl-4 py-4">
                <span className="xl:text-4xl font-bold text-3xl 2xl:test-5xl special:text-7xl main-t">
                  {valUser?.startDate && (
                    <p
                      className={`text-xs special:text-lg font-semibold flex justify-start items-center ${
                        valUser.subscriptionPlan?.data?.name == "Black"
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      <span>Member Since</span>&nbsp;<h1 className="bg-[#ee391c] p-1 text-white rounded-full">{startDate}</h1>
                    </p>
                  )}

                  <p
                    className={`uppercase ${
                      valUser.subscriptionPlan?.data?.name == "Black"
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    {valUser.subscriptionPlan?.data?.name}
                  </p>
                  <span className="text-xs font-bold xl:text-xl 2xl:text-2xl special:text-3xl">
                    <p
                      className={`text-sm special:text-lg font-semibold ${
                        valUser.subscriptionPlan?.data?.name == "Black"
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      {valUser.trial && (
                        <>
                          <span>Trial Renews On</span>&nbsp;{trialEndDate}
                        </>
                      )}
                      {valUser.subscription_status === "unsubscribed" ? (
                        <>
                          <span className="font-bold hidden">
                            Current package unsubscribed on&nbsp;{unsubDate},
                          </span>
                          &nbsp;Subscription ends on&nbsp;
                          {endDate}
                        </>
                      ) : valUser.subscription_status === "expired" ? (
                        <>
                          <span>Expire Date On</span>&nbsp;
                          {endDate}
                        </>
                      ) : valUser.subscription_status === "active" ? (
                        <>
                          <span>Auto Renews On</span>&nbsp;
                          {endDate}
                        </>
                      ) : valUser.subscription_status === "noplan" ? (
                        <div className="flex flex-row gap-4 items-center justify-between rounded-lg w-full border-2 border-black py-2 px-4">
                          <img src={Cross} alt="" className="w-12" />
                          <p className="text-white 2xl:text-xl text-lg mbsmalltext">
                            Your subscription is currently inactive
                          </p>
                        </div>
                      ) : (
                        ""
                      )}
                    </p>
                  </span>
                </span>
              </div>

              <div className="flex items-center  absolute right-0 top-0 h-full overflow-hidden">
                {valUser?.subscription_status !== "noplan" ? (
                  valUser.subscription_status === "unsubscribed" ? (
                    <img src={subBg_2} alt="" className="w-auto h-full" />
                  ) : (
                    <img src={subBg_2} alt="" className="w-auto h-full" />
                  )
                ) : (
                  ""
                )}
              </div>


            </div>
          </div>
        ) : (
          <div className="flex flex-row gap-4 items-center justify-between rounded-lg w-full border-2 border-black py-2 px-4">
            <img src={Cross} alt="" className="w-12" />
            <p className="text-black 2xl:text-xl text-lg">
              Your subscription is currently inactive
            </p>
          </div>
        ))}
    </>
  );
};

export default GoldCard;