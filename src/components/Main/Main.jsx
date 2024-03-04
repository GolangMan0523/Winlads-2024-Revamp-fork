import "./main.css";
import { AiFillApple } from "react-icons/ai";
import { BiLogoPlayStore } from "react-icons/bi";
import { IoIosLogIn } from "react-icons/io";


function Main() {
return (
  <div className="main">
    <div className="header-container">
      <h1 className="H-tiitle">Australias Biggest &</h1>
      <h1 className="H-tiitle"> Best Rewards Club</h1>
    </div>
    <p className="H-paragraph">
      With over 650+ businesses across 1000+ stores where you can access
      <br></br>
      exclusive discounts Australia Wide <br></br>
      from only $ 19.99 per month, opt-out anytime <br></br>
    </p>

    <div className="flex xl:flex-row flex-col justify-center items-center gap-4 mt-4">
      <div className="flex flex-row text-white items-center gap-2 cursor-pointer py-4 px-12 rounded-lg bg-gray-500 hover:bg-blue-400 ">
        <AiFillApple size={20} /> App store
      </div>
      <div className="flex flex-row text-white items-center gap-2 cursor-pointer py-4 px-10 rounded-lg bg-gray-500 hover:bg-blue-400">
        <BiLogoPlayStore size={20} /> Google play
      </div>
      {/* <div className="flex flex-row text-white items-center gap-2 cursor-pointer py-4 px-12 rounded-lg bg-gray-500 hover:bg-blue-400">
        <IoIosLogIn size={20} /> Join now
      </div> */}
    </div>
  </div>
);
}

export default Main;
