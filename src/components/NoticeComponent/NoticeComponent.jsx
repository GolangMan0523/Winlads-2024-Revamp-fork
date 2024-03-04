import pro1 from "../../assets/images/notice/1pro.png";
import Female from "../../assets/images/notice/Female.png";
import Male from "../../assets/images/notice/Male.png";

import morenotice from "../../assets/images/notice/prolist.png";
import { Link } from "react-router-dom";

function NoticeComponent() {
  return (
    <div>
      <ul className="flex  flex-col sm:gap-2 gap-1 special:gap-8 2xl:gap-5">
        <Link to="/notice-inner">
          <li className="flex items-center cursor-pointer border-b justify-between w-full md:w-2/3 px-3 py-1 hover:bg-gray-200 rounded-lg">
            <div className="flex items-center ">
              <img src={Male} alt="" className="special:w-24 w-10" />
              <div className="ml-1 sm:ml-5  text-sm sm:text-base ">
                <p className="special:text-3xl text-xl">Kathryn Murphy</p>
                <p className="special:text-2xl text-lg">Kathryn sent you $ 0</p>
              </div>
            </div>
            <img src={morenotice} alt="" />
          </li>
        </Link>

        <Link to="/notice-inner">
          <li className="flex items-center cursor-pointer border-b justify-between w-full md:w-2/3 px-3 py-1 hover:bg-gray-200 rounded-lg ">
            <div className="flex items-center">
              <img src={Male} alt="" className="special:w-24 w-10" />
              <div className="ml-1 sm:ml-5  text-sm sm:text-base ">
                <p className="special:text-3xl text-xl">Annette Black</p>
                <p className="special:text-2xl text-lg">Annette sent you $ 0</p>
              </div>
            </div>
            <img src={morenotice} alt="" />
          </li>
        </Link>

        <li className="flex items-center cursor-pointer border-b justify-between w-full md:w-2/3 px-3 py-1 hover:bg-gray-200 rounded-lg ">
          <div className="flex items-center">
            <img src={Male} alt="" className="special:w-24 w-10" />
            <div className="ml-1 sm:ml-5  text-sm sm:text-base ">
              <p className="special:text-3xl text-xl">Jerome Bell</p>
              <p className="special:text-2xl text-lg">Jerome sent you $ 0</p>
            </div>
          </div>
          <img src={morenotice} alt="" />
        </li>

        <li className="flex items-center cursor-pointer border-b justify-between w-full md:w-2/3 px-3 py-1 hover:bg-gray-200 rounded-lg ">
          <div className="flex items-center">
            <img src={Female} alt="" className="special:w-24 w-10" />
            <div className="ml-1 sm:ml-5  text-sm sm:text-base ">
              <p className="special:text-3xl text-xll">Albert Flores</p>
              <p className="special:text-2xl text-lg">Albert sent you $ 0</p>
            </div>
          </div>
          <img src={morenotice} alt="" />
        </li>

        <li className="flex items-center cursor-pointer border-b justify-between w-full md:w-2/3 px-3 py-1 hover:bg-gray-200 rounded-lg ">
          <div className="flex items-center">
            <img src={Male} alt="" className="special:w-24 w-10" />
            <div className="ml-1 sm:ml-5  text-sm sm:text-base ">
              <p className="special:text-3xl text-xll">Eleanor Pena</p>
              <p className="special:text-2xl text-lg">Eleanor sent you $ 0</p>
            </div>
          </div>
          <img src={morenotice} alt="" />
        </li>

        <li className="flex items-center cursor-pointer border-b justify-between w-full md:w-2/3 px-3 py-1 hover:bg-gray-200 rounded-lg ">
          <div className="flex items-center">
            <img src={Male} alt="" className="special:w-24 w-10" />
            <div className="ml-1 sm:ml-5  text-sm sm:text-base ">
              <p className="special:text-3xl text-xll">Courtney Henry</p>
              <p className="special:text-2xl text-lg">Courtney sent you $ 0</p>
            </div>
          </div>
          <img src={morenotice} alt="" />
        </li>

        <li className="flex items-center cursor-pointer border-b justify-between w-full md:w-2/3 px-3 py-1 hover:bg-gray-200 rounded-lg ">
          <div className="flex items-center  ">
            <img src={Female} alt="" className="special:w-24 w-10" />
            <div className="ml-1 sm:ml-5  text-sm sm:text-base flex-1">
              <p className="special:text-3xl text-xll">Cody Fisher</p>
              <p className="special:text-2xl text-lg">Cody sent you $ 0</p>
            </div>
          </div>
          <img src={morenotice} alt="" />
        </li>
      </ul>
    </div>
  );
}

export default NoticeComponent;
