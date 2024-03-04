import "./SideNav.css";
import { useEffect, useState } from "react";
import Credit from "../../assets/images/side-bar/Credit.png";

import User from "../../assets/images/side-bar/User3.png";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, useLocation, useNavigate } from "react-router-dom";
import partners from '../../assets/images/side-bar/icons/part.png'
import supportIcon from '../../assets/images/side-bar/icons/sup.png'
import Logout from "../../assets/images/side-bar/icons/logout1.png";
import Transaction from "../../assets/images/side-bar/icons/transaction1.png";
import News from "../../assets/images/side-bar/icons/news1.png";
import Sub from "../../assets/images/side-bar/icons/subscription1.png";
import Messages from "../../assets/images/side-bar/icons/Messages1.png";
import Business from "../../assets/images/side-bar/icons/bcard.png";
import Affillicate from "../../assets/images/side-bar/icons/Affiliate1.png";
import Promo from "../../assets/images/side-bar/icons/promo.png";
import Form from "../../assets/images/side-bar/icons/forum.png";
import Setting from "../../assets/images/side-bar/icons/settings 1.png";
import Giveaway from "../../assets/images/side-bar/icons/giveaway.png";
import Home from "../../assets/images/side-bar/icons/home.png";
import Entry from "../../assets/images/side-bar/icons/entries.png";
import { validateCurrentUser } from "../../utils/validateuser";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase.config";
import Cookies from "universal-cookie";
import ItemLoader from "../../components/Loader/ItemLoader";
import { useRefresh } from "../../utils/RefreshContext";
import { IoIosArrowDown } from "react-icons/io";
import Past from "../../assets/images/new/past.png";
import Ongoing from "../../assets/images/new/ongoing.png";
import Upcoming from "../../assets/images/new/upcoming.png";

import Giv from "../../assets/images/newIcons/giv.png"
import PromoIcon from "../../assets/images/newIcons/promo.png"
import Aff from "../../assets/images/newIcons/aff.png"
import NewsIcon from "../../assets/images/newIcons/news.png"
import BC from "../../assets/images/newIcons/bc.png"
import SubIcon from "../../assets/images/newIcons/sub.png"
import EntryIcon from "../../assets/images/newIcons/entry.png"
import Trans from "../../assets/images/newIcons/trans.png"


const SideNav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const cookies = new Cookies(null, { path: "/" });

  const [expanded, setExpanded] = useState(true);
  const navigate = useNavigate();
  const [valUser, setValUser] = useState({});
  const [loading, setLoading] = useState(true);
  const { refreshCount, refresh, showMenu, handleMenu, userImage, setUserImage } = useRefresh();
  const location = useLocation();

  const isNavLinkActive = (path) => {
    // Check if the current route matches the path of the navigation link
    return location.pathname === path;
  };

  const expandSidebar = () => {
    setExpanded((pre) => true);

  };

  const notExpandSidebar = () => {
    setExpanded((pre) => false);
  };

  useEffect(() => {
    currentUserValidation();
  }, [refreshCount]);

  const handleClick = () => {
    cookies.remove("wr_token");
    cookies.remove("cc-uid");
    navigate("/login");
  };

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      setValUser(validator.user);
      if (validator.user.image == null) {
        setLoading(false);
      }
      getProfileImage(validator.user.image);
    } else {
      navigate("/login");
    }
  };

  function getProfileImage(img) {
    getDownloadURL(ref(storage, img))
      .then((url) => {
        setUserImage(url);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        // Handle any errors
      });
  }

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => handleMenu(true)}>
      {

        !showMenu && <div className="bg-black/50 backdrop-blur-sm fixed top-0 right-0 w-full h-full z-20" onClick={() => handleMenu(true)}>

        </div>
      }

      <div
        className={`${showMenu ? '-translate-x-full' : 'translate-x-0'} fixed xl:translate-x-0 xl:block xl:relative pt-10 z-30 min-h-screen h-full  space-y-4 side-nav-back transition-all  w-[180px] xl:w-[180px] overflow-y-auto xl:overflow-y-auto`}
      >
        <div
          onClick={expandSidebar}
          className="flex flex-row items-center mb-10 w-full"
        >
          <div className="flex flex-col items-center gap-2 justify-center overflow-hidden relative w-full ">
            <Link to="/profile">
              <div className="flex justify-center items-center w-full">
                {loading ? (
                  <div className="flex justify-center">
                    <ItemLoader />
                  </div>
                ) : userImage ? (
                  <div className="w-[35px] xl:w-[100px] rounded-full overflow-hidden aspect-square">
                    <img
                      src={userImage}
                      className="w-full h-full object-cover"
                      alt="user"
                    />
                  </div>
                ) : (
                  <img
                    src={User}
                    className="w-[40px] xl:w-[100px] rounded-full "
                    alt="user"
                  />
                )}
              </div>
            </Link>

            <div className="side-nav-name text-white  items-center justify-center flex-col  xl:flex">
              <p className="xl:text-sm text-xs font-bold uppercase">{valUser.firstname}</p>
              {/* <p className="text-[10px]">{valUser.uid}</p> */}
            </div>

          </div>
        </div>

        <div className="flex flex-col space-y-4 w-full">
          <div className="flex justify-center items-center">
            <hr className="w-10/12 rounded-xl " />
          </div>

          <div onClick={expandSidebar}>
            <Link to="/dashboard" onClick={() => handleMenu(true)}>
              <button className={`flex flex-row items-center  xl:justify-start justify-start px-5  gap-2 hover:bg-[#36383b] py-2  w-full  ${isNavLinkActive('/dashboard') ? 'bg-[#36383b]' : ''}`}>
                <img src={Home} className="w-[18px]" alt="protect" />

                <span className="">
                  <p className="link-no-underlin flex text-white ">
                    Home
                  </p>
                </span>

              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <button className={`flex gap-2 space-y-2 xl:space-y-0 items-center justify-start px-5 hover:bg-[#36383b] py-2 w-full `}>
              <img src={Giv} className="w-[18px]" alt="protect" />
              <div
                className=" flex  gap-2 items-center"
                onClick={handleDropdownClick}
              >
                <p className="link-no-underlin flex text-white">
                  Giveaways
                </p>

                <IoIosArrowDown className="text-white w-8" />
              </div>
            </button>
          </div>

          {showDropdown && (
            <div className={`bg-black flex flex-col space-y-2 text-xs text-white text-start xl:ml-10 ml-4`}>
              <Link to="/ongoingGiveaways" onClick={() => handleMenu(true)}>
                <div className={`flex flex-row space-x-2 items-center hover:bg-[#36383b] ${isNavLinkActive('/ongoingGiveaways') ? 'bg-[#36383b]' : ''} `}>
                  <img src={Ongoing} alt="" className="w-[18px]" />
                  <p className="cursor-pointer  px-2 py-1">
                    Active
                  </p>
                </div>
              </Link>
              <Link to="/upcomingGiveaways" onClick={() => handleMenu(true)}>
                <div className={`flex flex-row space-x-2 items-center hover:bg-[#36383b] ${isNavLinkActive('/upcomingGiveaways') ? 'bg-[#36383b]' : ''}`}>
                  <img src={Upcoming} alt="" className="w-[18px]" />
                  <p className="cursor-pointer px-2 py-1">
                    Upcoming
                  </p>
                </div>
              </Link>
              <Link to="/pastGiveaways" onClick={() => handleMenu(true)}>
                <div className={`flex flex-row space-x-2 items-center hover:bg-[#36383b] ${isNavLinkActive('/pastGiveaways') ? 'bg-[#36383b]' : ''}`}>
                  <img src={Past} alt="" className="w-[18px]" />
                  <p className="cursor-pointer px-2 py-1">
                    Past
                  </p>
                </div>
              </Link>
            </div>
          )}

          <div onClick={expandSidebar}>
            <Link to="/subscription" onClick={() => handleMenu(true)}>
              <button className={`flex flex-row items-center justify-start px-5 gap-2 hover:bg-[#36383b] py-2 w-full ${isNavLinkActive('/subscription') ? 'bg-[#36383b]' : ''}`}>
                <img src={SubIcon} className="w-[18px]" alt="protect" />
                <span className="">
                  <p className="link-no-underlin  flex text-white">
                    Subscriptions
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/myentries" onClick={() => handleMenu(true)}>
              <button className= {`flex flex-row items-center justify-start px-5 gap-2 hover:bg-[#36383b] py-2 w-full ${isNavLinkActive('/myentries') ? 'bg-[#36383b]' : ''}`}>
                <img src={EntryIcon} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin  xl:flex text-white">
                    My Entries
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/transaction" onClick={() => handleMenu(true)}>
              <button className={`flex flex-row items-center  justify-start px-5  gap-2 hover:bg-[#36383b] py-2  w-full ${isNavLinkActive('/transaction') ? 'bg-[#36383b]' : ''}`}>
                <img src={Trans} className="w-[14px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin   xl:flex text-white ">
                    Transactions
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div className="flex justify-center items-center">
            <hr className="w-10/12 rounded-xl" />
          </div>

          <div onClick={expandSidebar}>
            <Link to="/affiliate" onClick={() => handleMenu(true)}>
              <button className={`flex flex-row items-center justify-start px-5 gap-2 hover:bg-[#36383b] py-2 w-full ${isNavLinkActive('/affiliate') ? 'bg-[#36383b]' : ''}`}>
                <img src={Aff} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin   xl:flex text-white">
                    Affiliate
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/promo" onClick={() => handleMenu(true)}>
              <button className={`flex flex-row items-center justify-start px-5 gap-2 hover:bg-[#36383b] py-2 w-full ${isNavLinkActive('/promo') ? 'bg-[#36383b]' : ''}`}>
                <img src={PromoIcon} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin   xl:flex text-white">
                    Promo Tools
                  </p>
                </span>
              </button>
            </Link>
          </div>
{/* 
          <div onClick={expandSidebar}>
            <Link to="/partners">
              <button className={`flex flex-row items-center justify-start px-5 gap-2 hover:bg-[#36383b] py-2 w-full ${isNavLinkActive('/partners') ? 'bg-[#36383b]' : ''}`}>
                <img src={partners} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin   xl:flex text-white">
                    Partner Disc..
                  </p>
                </span>
              </button>
            </Link>
          </div> */}

          <div onClick={expandSidebar}>
            <Link to="/business-card">
              <button className={`flex flex-row items-center justify-start px-5 gap-2 hover:bg-[#36383b] py-2 w-full ${isNavLinkActive('/business-card') ? 'bg-[#36383b]' : ''}`}>
                <img src={BC} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin   xl:flex text-white">
                    Business Card
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div className="flex justify-center items-center">
            <hr className="w-10/12 rounded-xl" />
          </div>

          <div onClick={expandSidebar}>
            <Link to="/newslist" onClick={() => handleMenu(true)}>
              <button className={`flex flex-row items-center justify-start px-5 gap-2 hover:bg-[#36383b] py-2 w-full ${isNavLinkActive('/newslist') ? 'bg-[#36383b]' : ''}`}>
                <img src={NewsIcon} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin  xl:flex text-white">
                    News
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/groupchat" onClick={() => handleMenu(true)}>
              <button className={`flex flex-row items-center justify-start px-5 gap-2 hover:bg-[#36383b] py-2 w-full ${isNavLinkActive('/groupchat') ? 'bg-[#36383b]' : ''}`}>
                <img src={Messages} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin  xl:flex text-white">
                    ChatRoom
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar} className="hidden">
            <Link to="/forum" onClick={() => handleMenu(true)}>
              <button className={`flex flex-row items-center justify-start px-5 gap-2 hover:bg-[#36383b] py-2 w-full ${isNavLinkActive('/forum') ? 'bg-[#36383b]' : ''}`}>
                <img src={Form} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin  xl:flex text-white">
                    Forum
                  </p>
                </span>
              </button>
            </Link>
          </div>
          <div onClick={expandSidebar}>
            <Link to="/messages">
              <button className={`flex flex-row items-center justify-start px-5 gap-2 hover:bg-[#36383b] py-2 w-full ${isNavLinkActive('/messages') ? 'bg-[#36383b]' : ''}`}>
                <img src={supportIcon} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin  xl:flex text-white">
                    Support
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div className="flex justify-center items-center">
            <hr className="w-10/12 rounded-xl" />
          </div>

          {/* <div onClick={expandSidebar} title="This feature will be available soon">
              <button className="flex flex-row items-center xl:justify-start justify-center xl:px-5 xl:gap-2 hover:bg-[#36383b] py-2 px-2 w-full">
                <img src={Sub} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin hidden xl:flex text-white">
                    Subscription
                  </p>
                </span>
              </button>
          </div> */}

          <div onClick={expandSidebar}>
            <Link to="/profile" onClick={() => handleMenu(true)}>
              <button className={`flex flex-row items-center justify-start px-5 gap-2 hover:bg-[#36383b] py-2 w-full ${isNavLinkActive('/profile') ? 'bg-[#36383b]' : ''}`}>
                <img src={Setting} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin   xl:flex text-white">
                    Settings
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <button
              onClick={handleClick}
              className="flex flex-row items-center justify-start gap-2 px-5 hover:bg-[#36383b] py-2  w-full "
            >
              <img src={Logout} className="w-[18px]" alt="protect" />
              <span className=" mobile-hide">
                <p className="text-white  xl:flex ">Sign out</p>
              </span>
            </button>
          </div>
          <div className="w-full h-32 md:hidden">

          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default SideNav;
