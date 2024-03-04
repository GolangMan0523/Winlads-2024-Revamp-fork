import { useState } from "react";
import crownIcon from "../../assets/images/side-bar/icons/logout1.png";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const Logout = () => {

  const cookies = new Cookies(null, { path: "/" });
  const navigate = useNavigate();

  

  const handleClick = () => {
    cookies.remove("wr_token");
    navigate("/login");
  };

 

  return (
    <div
      className=" p-3 bg-black flex items-center text-white cursor-pointer transition-all duration-300"
      
      onClick={handleClick}
    >
      <div className="flex items-center justify-center">
        <img
          src={crownIcon}
          alt="my-entries"
          className="max-w-8 w-7 md:w-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Logout;
