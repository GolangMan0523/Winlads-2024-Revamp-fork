import React, { useEffect, useState } from "react";
import TopNav from "../../components/TopNav/TopNav";
import { IoIosArrowBack } from "react-icons/io";
import BG from "../../assets/images/HomesideBg.png";
import Car from "../../assets/images/won/car.png";
import Money from "../../assets/images/won/money.png";
import Makita from "../../assets/images/won/makita.png";
import Gift from "../../assets/images/won/gift.png";
import { useNavigate, useParams } from "react-router-dom";
import ItemLoader from "../../components/Loader/ItemLoader";
import axios from "axios";
import ReactPlayer from "react-player";

const Won = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [round, setRound] = useState({});
  const [isLoading, setLoading] = useState(true);
  const getRound = async () => {
    await axios
      .get(
        `${import.meta.env.VITE_SERVER_API}/getRaffleRound?raffleroundid=${id}`
      )
      .then((response) => {
        console.log(response.data.data, "data raffle");
        setRound(response?.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  useEffect(() => {
    getRound();
  }, []);

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }


  return (
    <div
      className={`flex items-stretch h-screen py-4 relative w-full ${
        round.youtubeLink ? "" : "overflow-hidden"
      }`}
    >
      <div className="w-full">
        <div className="flex flex-col xl:px-6 px-4 special:px-12 2xl:space-y-8 special:space-y-24">
          <div className="flex flex-col flex-1 ">
            <div className="block xl:hidden space-y-4">
              <div className="rounded-b-3xl py-4">
                <TopNav />
              </div>
            </div>
          </div>
          <div className="hidden xl:flex flex-col space-y-4 items-end">
            <div className=" rounded-b-3xl space-y-4 relative w-web">
              <div className="grid grid-cols-2 gap-4 m-2">
                <div
                  className="col-span-1 cursor-pointer"
                  onClick={() => navigate(-1)}
                >
                  <IoIosArrowBack className="text-black bg-gray-200 rounded-full p-1 w-8 h-8" />
                </div>
                <div className="col-span-1">
                  <TopNav textColor={"black"} />
                </div>
              </div>
            </div>
          </div>
          {isLoading ? (
            <div className="flex justify-center">
              <ItemLoader />
            </div>
          ) : (
            <div className="w-full flex max-xl:flex-col xl:pt-12">
              <div className="w-3/5 max-xl:w-full flex flex-col gap-5">
                <div className="flex flex-row gap-4 md:gap-8 xl:hidden items-center">
                  <div
                    className="col-span-1 cursor-pointer"
                    onClick={() => navigate(-1)}
                  >
                    <IoIosArrowBack className="text-black bg-gray-200 rounded-full p-1 w-8 h-8" />
                  </div>
                  <div className="md:text-3xl font-bold special:text-8xl text-xl">
                    {round.name}
                  </div>
                </div>
                <div className="text-4xl font-bold special:text-8xl 2xl:text-6xl max-sm:text-3xl hidden xl:block">
                  {round.name}
                </div>

                <div className="text-xl xl:text-2xl font-normal 2xl:text-3xl special:text-6xl 2xl:pt-8">
                  Draw Date:&nbsp;
                  29/02/2024
                  {/* {new Date(round.startingtime).toLocaleString("en-GB", options)} */}
                </div>

                {round.name == "$1500 Cash Prize" ? (
                  <div className="md:text-sm xl:text-sm font-normal 2xl:text-xl w-3/4 max-xl:w-full special:text-4xl text-xs">
                    Participants must be subscribed to our platform to qualify
                    for the automatic entry. <br />
                    <br />
                    One-off entries can be purchased directly on our platform.{" "}
                    <br />
                    <br />
                    The more entries you have, the higher your chances of
                    winning. <br />
                    <br />
                    The $1500 cash prize will be awarded to the winner.
                  </div>
                ) : round.name == "$1000 Cash Prize" ? (
                  <div className="md:text-sm xl:text-sm font-normal 2xl:text-xl w-3/4 max-xl:w-full special:text-4xl text-xs">
                    Participants must be subscribed to our platform to qualify
                    for the automatic entry. <br />
                    <br />
                    One-off entries can be purchased directly on our platform.{" "}
                    <br />
                    <br />
                    The more entries you have, the higher your chances of
                    winning. <br />
                    <br /> The $1000 cash prize will be awarded to the winner.
                  </div>
                ) : round.name == "Mystery Gift" ? (
                  <div className="md:text-sm xl:text-sm font-normal 2xl:text-xl w-3/4 max-xl:w-full special:text-4xl text-xs">
                    Mystery Gift Extravaganza! We're thrilled to offer you the
                    chance to win an extraordinary mystery gift that promises an
                    unforgettable experience.
                    <br /> <br />
                    Direct One-Off Entries: Purchase direct, one-off entries on
                    Winlads. Each entry opens up new possibilities for claiming
                    the ultimate surprise.
                    <br />
                    <br />
                    Every subscriber is automatically entered into the Mystery
                    Gift Draw. <br />
                    <br />
                    Direct one-off entries can be purchased on our platform,
                    offering additional chances to claim the mystery gift.{" "}
                    <br />
                    The more entries you have, the higher the likelihood of
                    unveiling the ultimate surprise. <br />
                    <br />
                    The draw is open to all our users.
                    <br />
                    <br />
                    The mystery gift will be exclusively revealed to the winner
                    during the winner announcement, adding an extra layer of
                    excitement. Don't miss out on the thrill of anticipation!
                    <br />
                    <br />
                  </div>
                ) : round.name == "Makita Tool Set" ? (
                  <div className="md:text-sm xl:text-sm font-normal 2xl:text-xl w-3/4 max-xl:w-full special:text-4xl text-xs">
                    We are offering a chance to win an exemplary tool kit that
                    embodies precision, durability, and innovation. <br />
                    <br />
                    For those seeking additional entries, one-off entries may be
                    acquired directly through our Winlads Dashboard. Each
                    supplementary entry enhances the likelihood of securing the
                    prestigious Makita tool kit. <br />
                    <br />
                    This comprehensive kit encapsulates Makita's commitment to
                    excellence. Comprising each instrument is meticulously
                    crafted for optimal performance. The tools are presented in
                    an enduring and portable case, offering versatility and
                    convenience for a spectrum of projects. <br />
                    <br />
                    The momentous announcement of the winner will be made on
                    social media.
                  </div>
                ) : (
                  <div></div>
                )}

                {/* <div className="md:text-sm xl:text-sm font-normal 2xl:text-xl w-3/4 max-xl:w-full special:text-4xl text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
                  tellus cras adipiscing enim eu turpis. Dictum fusce ut placerat
                  orci nulla. Tincidunt arcu non sodales neque sodales. Cras
                  tincidunt lobortis feugiat vivamus. Sem integer vitae justo
                  eget. Odio ut sem nulla pharetra diam sit amet nisl. Porttitor
                  massa id neque aliquam vestibulum morbi. Nisl rhoncus mattis
                  rhoncus urna. Morbi tristique senectus et netus et malesuada.
                  Malesuada bibendum arcu vitae elementum curabitur. Amet massa
                  vitae tortor condimentum. Turpis in eu mi bibendum. Sit amet
                  risus nullam eget felis eget nunc lobortis.
                </div> */}
                {round.youtubeLink && (
                  <>
                    <div className="w-3/4">
                      <div className="flex md:hidden">
                        <iframe
                          src="https://player.vimeo.com/video/899812267?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                          width="310"
                          height="200"
                          //   frameborder="0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          title="Winlads"
                        ></iframe>
                      </div>
                      <div className="hidden md:flex pro:hidden xl:hidden pt-2">
                        <iframe
                          src="https://player.vimeo.com/video/899812267?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                          width="690"
                          height="400"
                          //   frameborder="0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          title="Winlads"
                        ></iframe>
                      </div>
                      <div className="hidden pro:flex xl:hidden">
                        <iframe
                          src="https://player.vimeo.com/video/899812267?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                          width="940"
                          height="620"
                          //   frameborder="0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          title="Winlads"
                        ></iframe>
                      </div>
                      <div className="hidden xl:flex 2xl:hidden">
                        <iframe
                          src="https://player.vimeo.com/video/899812267?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                          width="680"
                          height="400"
                          //   frameborder="0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          title="Winlads"
                        ></iframe>
                      </div>
                      <div className="hidden 2xl:flex special:hidden">
                        <iframe
                          src="https://player.vimeo.com/video/899812267?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                          width="780"
                          height="450"
                          //   frameborder="0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          title="Winlads"
                        ></iframe>
                      </div>
                      <div className="hidden special:flex">
                        <iframe
                          src="https://player.vimeo.com/video/899812267?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                          width="1650"
                          height="950"
                          //   frameborder="0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          title="Winlads"
                        ></iframe>
                      </div>
                    </div>

                    <div className="text-xl xl:text-2xl font-normal 2xl:text-3xl special:text-6xl 2xl:pt-4">
                      Other Details
                    </div>
                    <div className="md:text-sm xl:text-sm flex items-start font-normal 2xl:text-xl w-3/4 max-xl:w-full special:text-4xl text-xs">
                      <div className="w-full flex flex-col space-y-3">
                        <p>• 3.5 Tonne Towing Capacity</p>
                        <p>• Apple Carplay</p>
                        <p>• Leather Interior & Roof Racks</p>
                        <p>• Delivered Australia-Wide</p>
                        <p>• Valued at $68,750</p>
                      </div>
                      <div className="w-full flex flex-col space-y-3">
                        <p>• Brand New Mazda BT-50 SP Model</p>
                        <p>• 3.0L Turbo Diesel</p>
                        <p>• 140KW & 450NM of Torque</p>
                        <p>• Crystal LED Headlights</p>
                        <p>• 18 Inch Black Metallic Alloys</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="w-2/5 max-xl:w-full ">
                {round.name === "$1500 Cash Prize" && (
                  <img
                    src={Money}
                    alt="winlad_car"
                    className="absolute right-0 -z-10 bottom-0 2xl:top-80 w-4/12 max-xl:w-10/12 special:bottom-0 max-xl:relative"
                  />
                )}

                {round.name === "$1000 Cash Prize" && (
                  <img
                    src={Money}
                    alt="winlad_car"
                    className="absolute right-0 -z-10 bottom-0 2xl:top-80 w-4/12 max-xl:w-10/12 special:bottom-0 max-xl:relative"
                  />
                )}

                {round.name === "2023 MAZDA BT-50" && (
                  <img
                    src={Car}
                    alt="winlad_car"
                    className="absolute right-0 -z-10 bottom-0 2xl:top-80 w-1/2 max-xl:full special:bottom-0 max-xl:relative"
                  />
                )}

                {round.name === "Makita Tool Set" && (
                  <img
                    src={Makita}
                    alt="winlad_car"
                    className="absolute right-0 -z-10 bottom-0 2xl:top-80 w-4/12 max-xl:w-10/12 special:bottom-0 max-xl:relative"
                  />
                )}

                {round.name === "Mystery Gift" && (
                  <img
                    src={Gift}
                    alt="winlad_car"
                    className="absolute right-0 -z-10 bottom-0 2xl:top-80 w-4/12 max-xl:w-10/12 special:bottom-0 max-xl:relative"
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <img
        src={BG}
        alt=""
        className="absolute right-0 -z-20 bottom-0 2xl:top-2 w-52 xl:w-96 md:w-96 special:w-1/6 2xl:w-2/6 opacity-60 max-xl:hidden"
      />
    </div>
  );
};

export default Won;
