import React, { useState } from "react";
import { FcFeedback, FcUnlock } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "admin@winlads.com" && password === "Admin@123") {
      navigate("/admin-rounds");
    } else {
      console.log("Authentication failed");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center py-4 max-w-[1440px]">
      <p className="text-3xl font-semibold xl:text-4xl pb-12">Admin Login</p>
      <div className="items-center flex flex-col space-y-8">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row items-center gap-2">
            <FcFeedback size={30} />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              className="placeholder:text-[16px] rounded-lg py-1 px-2 w-[300px] border border-solid border-black"
            />
          </div>
          <div className="flex flex-row items-center gap-2">
            <FcUnlock size={30} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="email"
              className="placeholder:text-[16px] rounded-lg py-1 px-2 w-[300px] border border-solid border-black"
            />
          </div>
        </div>
        <button
          className="text-white font-semibold bg-black hover:opacity-75 py-2 rounded-lg px-12"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;


// <div className="flex flex-col space-y-4">
// <div className="flex flex-row space-x-2 justify-between">
//   <div className="bg-gray-300 py-2 px-4">ID</div>
//   <div className="bg-gray-300 py-2 px-4">Name</div>
//   <div className="bg-gray-300 py-2 px-4">Email</div>
//   <div className="bg-gray-300 py-2 px-4">Phone</div>
//   <div className="bg-gray-300 py-2 px-4">Count</div>
// </div>
// </div>