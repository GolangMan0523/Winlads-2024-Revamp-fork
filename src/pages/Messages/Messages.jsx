import React, { useEffect, useState } from "react";
import TopNav from "../../components/TopNav/TopNav";
import GoldCard from "../../components/GoldCard/GoldCard";
import MainCar from "../../assets/images/MainCar.png";
import backgroundcar from "../../assets/images/background/Background-car.png";
import Cookies from "universal-cookie";
import { HashLoader } from 'react-spinners';
import Message from "../../components/Messages/Message";
import AddedYou from "../../components/Messages/AddedYou";
import { IoIosOptions } from "react-icons/io";
import UnderDev from "../../components/UnderDevMessage/UnderDev";
//THIS PAGE NOT USING ANYMORE

const Messages = () => {
  const cookies = new Cookies(null, { path: '/' });
  const id = cookies.get('wr_token');
  const [loading, setLoading] = useState(false);
  const [isUnderDev, setIsUnderDev] = useState(true);

  useEffect(() => {

  }, [])

  if (isUnderDev) {
    return(
      <UnderDev/>
    )
  } else {
    return (

      <div className="flex relative">
        <div
          className="flex xl:flex-row flex-col xl:justify-between flex-1 mx-5 xl:gap-8 pb-5 space-y-4 xl:space-y-0"
          style={{ backgroundImage: `url(${backgroundcar})` }}
        >
          <div className="flex flex-col space-y-4 flex-1 visible xl:hidden">
            <div className="bg-black rounded-b-3xl py-4">
              <TopNav textColor={"white"} />
              <div className="pt-10">
                <img className="" src={MainCar} alt="main" />
              </div>
            </div>

            <div className="w-full">
              <GoldCard />
            </div>
          </div>
          <div className="flex flex-col space-y-4 flex-1 xl:mx-12">
            <div className="flex flex-col space-y-3">





              {
                loading ? <div className="moonloader-center"><HashLoader
                  color={'#43AEC2'}
                  loading={true}
                  // cssOverride={override}
                  size={50}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                /> </div> : <div className="flex flex-col space-y-2">
                  <form className="form-inline relative mt-4">
                    <input
                      className="form-control mr-sm-2 outline-none bg-gray-300 mb-0 w-full border-none rounded-lg p-3"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      style={{
                        height: "50px",
                      }}
                    />
                    <button className="absolute top-3 right-5">
                      <IoIosOptions className="text-2xl" />
                    </button>
                  </form>
                  <Message />
                  <AddedYou />
                  <Message />

                </div>


              }


            </div>
          </div>
          <div className="xl:flex flex-col space-y-4 flex-1 hidden">
            <div className="bg-black rounded-b-3xl py-4">
              <TopNav textColor={"white"} />
              <div className="pt-10">
                <img className="w-3/4" src={MainCar} alt="main" />
              </div>
            </div>

            <div className="w-full">
              <GoldCard />
            </div>
          </div>
        </div>
      </div>

    );
  }
};

export default Messages;
