import "./TopNav.css";
import { Link } from "react-router-dom";
import { GoBellFill } from "react-icons/go";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
// import { messaging } from "../../firebase.config";
import { getMessaging, getToken } from "firebase/messaging";
import OutsideClickHandler from "react-outside-click-handler";
import { useRefresh } from "../../utils/RefreshContext";
import { HiBars3BottomRight } from "react-icons/hi2";
import { HiBars3 } from "react-icons/hi2";


const TopNav = ({ textColor, title }) => {
  const [notShow, setNotShow] = useState(false);
  const { handleMenu, showMenu } = useRefresh();

  const handleClick = () => {
    setNotShow((pre) => true);
  };

  const handleShowMenu = () => {
    handleMenu(false);
  };

  const MenuIcon = ({ direction }) => {
    return (
      <div onClick={() => handleShowMenu()} className="w-[38px] h-[38px] bg-[#6ED9F7] rounded-full flex justify-center items-center">
        <svg className={direction === "right" ? "rotate-180" : ""} width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 9L1 5L5 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    )
  }

  return (
    <div className="flex space-y-4 justify-between">
      <div className="basis-1/2 flex justify-start items-center">
        <span className="navlinks text-2xl w-fit">
          <MenuIcon direction={'right'} />
        </span>
        <p className="font-extrabold md:text-2xl xl:text-3xl 2xl:text-3xl special:text-4xl p-5">
          {title}
        </p>
      </div>

      <div className="basis-1/2 rounded-b-3xl w-full">
        <div
          className={`border-none text-${textColor} flex flex-row items-center justify-between cursor-pointer xl:mx-4 mx-5 w-full  sm:font-bold text-[10px] sm:text-sm xl:text-sm md:text-lg 2xl:text-xl special:text-2xl nav-list-top `}
        >
          {/* <span className="navlinks">
          <Link to="/dashboard">Home</Link>
        </span> */}
          {/* <span className="navlinks">
        <Link to="/notice">Notice</Link>
      </span> */}
          {/* <span className="navlinks">
          <Link to="/giveaways">Giveaway</Link>
        </span> */}
          {/* <span className="navlinks">
          <a href="https://www.winladsgiveaway.com" target="_blank" rel="noreferrer">Giveaway</a>
        </span>
        <span className="navlinks">
          <Link to="/faq">FAQ</Link>
        </span>
        <span className="navlinks">
          <Link to="/support">Support</Link>
        </span> */}


          {/* <span className="navlinks">
          <Link to="/messages" rel="noopener noreferrer">Cashback</Link>
        </span> */}

          <span className="navlinks">
            <Link
              to="https://winlads.com?scroll=footer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Be a Partner
            </Link>
          </span>
          <span className="text-gray-400 font-thin md:block">|</span>
          <span className="navlinks">
            <Link
              to="https://winladsgiveaway.com?scroll=partners"
              target="_blank"
              rel="noopener noreferrer"
            >
              Our Partners
            </Link>
          </span>
          <span className="text-gray-400 font-thin md:block">|</span>

          <span className="navlinks">
            <Link to="/faq" rel="noopener noreferrer">
              FAQ
            </Link>
          </span>

          <span className="navlinks">

            <div className={`p-2 sm:p-3 md:p-4 rounded-full mr-3  relative ${textColor === "black" ? "bg-[#F5F5F5]" : "bg-[#232323]"}`}>
              <GoBellFill
                className="lg:text-[25px] md:text-[21px] sm:text-[18px] text-[16px] "
                onClick={handleClick}
              />

              {notShow && (
                <OutsideClickHandler
                  onOutsideClick={() => setNotShow((pre) => false)}
                >
                  <div className="absolute -bottom-2 sm:bottom-1 right-14 sm:right-16">
                    <div className="bg-white flex flex-col z-50 rounded-xl px-3 py-1 w-60 sm:w-72 border border-solid border-black text-black hover:text-black">
                      <div className="flex justify-end">
                        <IoCloseSharp onClick={() => setNotShow((pre) => false)} size={20} />
                      </div>
                      <p className="text-center text-sm text-[#FF0000] ">No more notification</p>
                    </div>
                  </div>
                </OutsideClickHandler>
              )}


            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
