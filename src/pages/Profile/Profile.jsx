import React, { useEffect, useState } from "react";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";
import User from "../../assets/images/side-bar/User2.png";
import GoldCard from "../../components/GoldCard/GoldCard";
import MainCar from "../../assets/images/MainCar.png";
import Vrfy from "../../assets/images/icons/Verified2.png";
import NotVrfy from "../../assets/images/icons/Unverified2.png";
import backgroundcar from "../../assets/images/background/Background-car.png";
import NewEarning from "../../assets/images/new/earnings.png";

import axios from "axios";
import Cookies from "universal-cookie";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { toast } from "react-toastify";
import ItemLoader from "../../components/Loader/ItemLoader";
import { motion } from "framer-motion";
import { storage } from "../../firebase.config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Link, useNavigate } from "react-router-dom";
import { validateCurrentUser } from "../../utils/validateuser";
import AffiliateCard from "../../components/Affiliate/AffiliateCard";
import { useRefresh } from "../../utils/RefreshContext";
import { IoIosClose } from "react-icons/io";
import { MdDone } from "react-icons/md";
import Count from "../../components/Affiliate/Count";
import Ticket from "../../assets/images/affiliate/affiliate.png";
import { LuAlignJustify } from "react-icons/lu";

const Profile = () => {
  const cookies = new Cookies(null, { path: "/" });
  const { refreshCount, refresh, userImage, setUserImage } = useRefresh();
  const id = cookies.get("wr_token");
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const [valUser, setValUser] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [nic, setNic] = useState("");
  const [tin, setTin] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [profile, setProfile] = useState("");
  const [loading, setLoading] = useState(false);
  const [license, setLicense] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [refferalId, setRefferalId] = useState();
  const [localImage, setLocalImage] = useState("");
  const [affCount, setAffCount] = useState([]);
  const [wallet, setWallet] = useState([]);
  const [refferals, setRefferals] = useState([]);

  // const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    getUserData();
  }, [refreshCount]);

  const onCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setProfile(file);
      const reader = new FileReader(); // Create a new FileReader
      reader.onload = () => {
        setLocalImage(reader.result); // Set the state with the URL of the uploaded image
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };
  const handleRemoveLocalImage = () => {
    setLocalImage(userImage);
    //setProfile(null);
  };
  const getEarning = async (valuid) => {
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/getPointBalances?uid=${valuid}`)
      .then((response) => {
        setWallet(response?.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const getUserData = async () => {
    setLoading(true);
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/validate?id=${id}`)
      .then((response) => {
        console.log(response.data.data);
        setUserData(response?.data?.data);
        setMobile(response?.data?.data.mobile);
        // setName(response?.data?.data.name);
        setFirstName(response?.data?.data.firstname);
        setLastName(response?.data?.data.lastname);
        setUserId(response?.data?.data.uid);

        getEarning(response?.data?.data.uid);
        getReffeles(response?.data?.data.uid);
        getAffiliatsCount(response?.data?.data.uid);

        setEmail(response?.data?.data.email);
        setNic(response?.data?.data.nic);
        setTin(response?.data?.data.tin);
        setDob(response?.data?.data.dob);
        setAddress(response?.data?.data.address);
        setAddress2(response?.data?.data.address2);
        setCity(response?.data?.data.city);
        setState(response?.data?.data.state);
        setPostalcode(response?.data?.data.postalcode);
        setUserImage(response?.data?.data.image);
        setRefferalId(response?.data?.data.rafflesId);
        //console.log(response?.data?.data.image);
        if (response?.data?.data.image != undefined) {
          getProfileImage(response?.data?.data.image);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.log(error);
      });
  };

  const updateUserDatails = async () => {
    setIsChecked(false);
    let profileImageName = `${userId}_username`;
    if (profile) {
      const storageRef = ref(storage, profileImageName);
      const image = await uploadBytes(storageRef, profile).then((snapshot) => {
        console.log("profile image upload");
        refresh();
      });
    }
    // if (!profile) {
    //   profileImageName = null;
    // }
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/editUser`,
        {
          id: userData._id,
          firstname: firstName,
          lastname: lastName,
          email,
          mobile,
          nic,
          tin,
          dob,
          address,
          address2,
          city,
          state,
          postalcode,
          image: profileImageName,
        }
      );

      if (response.data.status == 200) {
        toast.success("Profile details updated!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setLoading(false);
        setIsChecked(false);
        setProfile(null);
        refresh();
      } else {
        toast.error("Cannot update your profile. Please try again later", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setLoading(false);
        setIsChecked(true);
      }
    } catch (err) {
      console.log("CATCH STATEMENT");
      console.log(err);
      toast.error(err.response.data.message);
      setLoading(false);
      setIsChecked(false);
    }
  };

  function getProfileImage(img) {
    getDownloadURL(ref(storage, img))
      .then((url) => {
        setUserImage(url);
        console.log(url, "imgg");
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        // Handle any errors
      });
  }

  useEffect(() => {
    currentUserValidation();
  }, []);

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK", validator.user);
      setValUser(validator.user);
    } else {
      navigate("/login");
    }
  };
  const getAffiliatsCount = async (uid) => {
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/getRefferals?uid=${uid}`)
      .then((response) => {
        console.log(response.data);
        setAffCount(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const getReffeles = async (uid) => {
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/getRefferals?uid=${uid}`)
      .then((response) => {
        console.log(response.data.l1);
        setRefferals(response.data.l1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-[#F2F5FB] w-full h-full">
      <div className="flex relative w-full">
        <div className="flex xl:flex-row flex-col xl:justify-between flex-1 mx-5 xl:gap-8 pb-0 space-y-4 xl:space-y-0 bg-no-repeat w-full">
          <div className="flex flex-col space-y-4 flex-1 xl:hidden">
            <div className=" rounded-b-3xl pt-4">
              <div className="flex flex-col py-3  w-full ">
                <TopNav textColor={"black"} />
                <p className="font-extrabold md:text-2xl xl:text-3xl 2xl:text-3xl special:text-4xl block  xl:hidden pt-4 ml-5">
                  Setting
                </p>

                {/* <LuAlignJustify className="sm:hidden w-7 h-7" /> */}
              </div>
              {/* <TopNav textColor={"black"} /> */}
              <div className="pt-0 -mb-10 max-sm:hidden">
                <img className="w-2/3" src={MainCar} alt="main" />
              </div>
            </div>
            {/* <AffiliateCard /> */}
          </div>
          <div className="flex flex-col space-y-4 flex-1 xl:mx-4">
            <div className="flex flex-col space-y-3">
              <div className="flex justify-between items-center py-3 max-sm:hidden">
                <p className="font-extrabold md:text-2xl xl:text-3xl 2xl:text-3xl special:text-4xl hidden xl:block pt-4">
                  Setting
                </p>
              </div>
              {loading ? (
                <div className="flex justify-center pt-12">
                  <ItemLoader />
                </div>
              ) : (
                <>
                  <div className="flex justify-between max-sm:justify-center max-sm:items-center px-3 md:mt-10">
                    <div className="flex max-sm:justify-center items-center">
                      <div className="flex-1">
                        <p className="text-black font-extrabold text-4xl md:text-2xl xl:text-4xl 2xl:text-5xl special:text-3xl max-sm:text-center">
                          $
                          {typeof valUser.balance === "number"
                            ? valUser.balance.toFixed(2)
                            : "0.00"}
                        </p>
                        <div className="flex gap-3">
                          <p className="2xl:text-lg p-1 font-semibold capitalize text-gray-600">
                            your balance <span className="bg-yellow-500 text-sm font-extrabold px-2 py-1 uppercase rounded-full">{valUser?.subscriptionPlan?.data?.name}</span>
                          </p>
                          {/* <h1 className="bg-[#ee391c] p-1 px-2 text-white rounded-full">
                            boomer
                          </h1> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex pt-4 max-sm:divide-x max-sm:justify-between">
                    <div className="flex-1 py-0 md:px-4 cursor-default border-r-2">
                      <div className="flex items-baseline">
                        <img
                          src={NewEarning}
                          alt=""
                          className="w-6 h-6 md:h-20 md:w-20 xl:h-12 xl:w-12 max-w-screen-sm"
                        />
                        <div>
                          <div className="px-5 text-black font-bold text-lg md:text-5xl xl:text-xl 2xl:text-2xl special:text-3xl">
                            $
                            {wallet.earning
                              ? Math.floor(wallet.earning * 100) / 100 || "0.00"
                              : "0.00"}
                          </div>
                        </div>
                      </div>
                      <p className="py-5 text-[#6B6B6B] text-sm md:text-lg xl:text-sm 2xl:text-xl special:text-2xl">
                        Total Earnings
                      </p>
                    </div>

                    <div className="flex-1 py-0 text-center md:px-2 cursor-default">
                      <div className="flex max-sm:justify-end justify-center items-baseline">
                        <img
                          src={Ticket}
                          alt=""
                          className="w-6 h-6 md:h-20 md:w-20 xl:h-12 xl:w-12 max-w-screen-sm"
                        />

                        <p className=" px-5 text-black font-bold text-lg md:text-5xl xl:text-xl 2xl:text-2xl special:text-3xl">
                          {String(
                            refferals?.l1count +
                              refferals?.l2count +
                              refferals?.l3count +
                              refferals?.l4count || 0
                          ).padStart(2, "0")}
                        </p>
                      </div>
                      <p className="py-4 text-[#6B6B6B] text-sm md:text-lg xl:text-sm 2xl:text-xl special:text-2xl">
                        Total Affiliates
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center w-full px-5 pb-10 xl:pb-0 xl:pt-20">
                    <button
                      className={`bg-[#FF4C00] py-3 sm:py-4 text-center rounded-xl hover:bg-black/75 w-full ${
                        !valUser.subscriptionPlan?.data
                          ? "cursor-not-allowed"
                          : "cursor-pointer"
                      }`}
                      onClick={() => navigate("/withdraw")}
                      disabled={!valUser.subscriptionPlan?.data}
                    >
                      <p className="text-white text-sm md:text-lg xl:text-sm 2xl:text-xl special:text-2xl  font-semibold">
                        Withdraw
                      </p>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="xl:flex flex-col space-y-4 flex-1 hidden">
            <div className=" rounded-b-3xl pt-4">
              <TopNav textColor={"black"} />
              <div className="pt-0">
                <motion.img
                  initial={{ x: 80, opacity: 0 }}
                  animate={{ x: 80, opacity: 1 }}
                  transition={{ type: "tween", duration: 1, delay: 1 }}
                  className="w-2/3"
                  src={MainCar}
                  alt="main"
                />
              </div>
            </div>

            {/* <div className="w-full">
              <GoldCard />
            </div> */}
            {/* <div>
              <AffiliateCard />
            </div> */}
          </div>
        </div>
      </div>
      {/* <form className="mx-auto relative">
        {userImage ? (
          <div className="special:w-28 w-16 2xl:w-20 aspect-square mx-auto rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={localImage ? localImage : userImage}
            />
          </div>
        ) : (
          <img
            src={localImage ? localImage : User}
            alt="profile-pic"
            className="special:w-16 2xl:w-16 xl:w-14 w-14"
          />
        )}

        <label
          htmlFor="profile"
          className="z-10 absolute -bottom-3 right-1/2 text-2xl bg-gray-200 rounded-full p-1 cursor-pointer"
        >

          <MdOutlinePhotoCamera />
        </label>
        <input
          type="file"
          className="hidden"
          name="profile"
          id="profile"
          onChange={handleProfileImageChange}
        />
      </form> */}

      {profile && (
        <p className="text-center text-xs flex items-center justify-center gap-2">
          {profile?.name}{" "}
        </p>
      )}
      {/* <span className="text-xl cursor-pointer" onClick={handleRemoveLocalImage}><IoIosClose/></span> */}
      <div className=" items-center justify-center gap-2 hidden">
        {/* <div className="bg-green-300 border border-0.5 border-black p-0.5 w-fit special:px-3">
<p
className="w-fit special:text-xl "
style={{ fontSize: "8px" }}
>
Level 1
</p>
</div> */}
        {/* <p className="special:text-xl">Verified User</p> */}
        <p className="special:text-xl">{valUser.name}</p>
      </div>

      <div className="flex flex-col space-y-2 special:space-y-5 px-10 mb-20">
        {/* <div className="flex flex-col space-y-2">
          <p className="text-[#999999] text-sm xl:text-md special:text-xl ml-2">
            User ID
          </p>
          <input
            className="border bg-transparent font-bold rounded-xl px-5 py-4 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-lg special:py-5 special:px-7  special:text-lg"
            placeholder="Enter User Name"
            type="text"
            value={userData?.uid}
            disabled
          ></input>
        </div> */}
        <div className="flex items-center gap-2 max-sm:flex-col">
          <div className="flex flex-col w-1/2 space-y-2 max-sm:w-full">
            <p className="text-[#999999] text-sm xl:text-md special:text-xl ml-2">
              First Name
            </p>
            <input
              className="bg-slate-100 border rounded-lg px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3 w-full"
              placeholder="Enter First Name"
              type="text"
              onChange={(e) => {
                const inputText = e.target.value;
                const lettersOnly = inputText.replace(/[^A-Za-z]/g, "");
                setFirstName(lettersOnly);
              }}
              value={firstName}
            ></input>
          </div>
          <div className="flex flex-col w-1/2 space-y-2 max-sm:w-full">
            <p className="text-gray-500 text-sm xl:text-xs special:text-sm">
              Surname
            </p>
            <input
              className="bg-slate-100 rounded-lg border px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3 w-full"
              placeholder="Enter Surame"
              type="text"
              onChange={(e) => {
                const inputText = e.target.value;
                const lettersOnly = inputText.replace(/[^A-Za-z]/g, "");

                setLastName(lettersOnly);
              }}
              value={lastName}
            ></input>
          </div>
        </div>

        {/* <div className="flex flex-col space-y-2">
<p className="text-[#999999] text-sm xl:text-md special:text-xl ml-2">
  Last Name
</p>
<input
  className="bg-gray-300 rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3"
  placeholder="Enter Last Name"
  type="text"
  onChange={(e) => setName(e.target.value)}
  value={name}
></input>
</div> */}
        <div className="flex flex-col space-y-2 relative">
          <div className="flex items-center justify-between">
            <p className="text-gray-500 text-sm xl:text-xs special:text-sm">
              Valid Email
            </p>
            {valUser.verified ? (
              ""
            ) : (
              <span className="text-xs text-red-500 text-right">
                {" "}
                Please verify your email by clicking{" "}
                <Link to={"/verifyEmail"} className="text-blue-500 font-bold">
                  {" "}
                  here
                </Link>
              </span>
            )}
          </div>

          <input
            className="bg-slate-100 border rounded-lg px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3"
            placeholder="Enter Valid EMail"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={valUser.verified ? true : false}
          ></input>
          {valUser && (
            <img
              src={valUser.verified ? Vrfy : NotVrfy}
              className="w-20 absolute top-6 right-2"
            />
          )}
        </div>
        <div className="flex flex-col space-y-2 relative">
          <div className="flex items-center justify-between">
          <p className="text-gray-500 text-sm xl:text-xs special:text-sm">
            Phone Number
          </p>
          {
            valUser.mobileVerified ? '' : <span className="text-xs text-red-500 text-right"> Please verify your mobile by clicking <Link to={'/verifyMobile'} className="text-blue-500 font-bold"> here</Link></span>
          }
          </div>

          <input
            className="bg-slate-100 border rounded-lg px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3"
            placeholder="Enter Phone Number"
            type="tel"
            disabled
            onChange={(e) => setMobile(e.target.value)}
            value={mobile}
          ></input>
          {valUser && <img src={valUser.mobileVerified ? Vrfy : NotVrfy} className="w-20 absolute top-6 right-2" />}
        </div>
        {/* <div className="flex flex-col space-y-2">
  <p className="text-[#999999] text-sm xl:text-md special:text-xl ml-2">
    NIC Number
  </p>
  <input
    className="border bg-transparent font-bold rounded-xl px-5 py-4 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-lg special:py-5 special:px-7  special:text-lg"
    placeholder="Enter NIC Number"
    type="text"
    onChange={(e) => setNic(e.target.value)}
    value={nic}
  ></input>
</div> */}

        <div className="flex items-center gap-2 max-sm:flex-col ">
          <div className="flex flex-col space-y-2 w-1/2 max-sm:w-full  relative mb-3">
            <div className="flex items-center justify-between">
              <p className="text-[#999999] text-sm xl:text-md special:text-xl ml-2">
                Phone Number
              </p>
              {valUser.mobileVerified ? (
                ""
              ) : (
                <span className="text-xs text-red-500 text-right">
                  {" "}
                  Please verify your mobile by clicking{" "}
                  <Link
                    to={"/verifyMobile"}
                    className="text-blue-500 font-bold"
                  >
                    {" "}
                    here
                  </Link>
                </span>
              )}
            </div>

            <input
              className="border bg-transparent font-bold rounded-xl px-5 py-4 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-lg special:py-5 special:px-7  special:text-lg"
              placeholder="Enter Phone Number"
              type="tel"
              disabled
              onChange={(e) => setMobile(e.target.value)}
              value={mobile}
            ></input>
            {valUser && (
              <img
                src={valUser.mobileVerified ? Vrfy : NotVrfy}
                className="w-20 special:w-24 absolute top-9 special:top-12 right-2"
              />
            )}
          </div>

          <div className="flex flex-col space-y-2 w-1/2 max-sm:w-full mb-3">
            <p className="text-[#999999] text-sm xl:text-md special:text-xl ml-2">
              Date of Birth
            </p>
            <input
              className="border bg-transparent font-bold rounded-xl px-5 py-4 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-lg special:py-5 special:px-7  special:text-lg"
              placeholder="Enter Date of Birth"
              type="date"
              value={dob?.substring(0, 10)}
              onChange={(e) => setDob(e.target.value)}
            ></input>
          </div>
        </div>

        <div className="flex items-center gap-2 max-sm:flex-col">
          <div className="flex flex-col space-y-2 w-1/2 max-sm:w-full">
            <p className="text-gray-500 text-sm xl:text-xs special:text-sm">
              Address Line 1
            </p>
            <input
              className="bg-slate-100 border rounded-lg px-2 py-2 focus:outline-none placeholder:text-sm placeholder:special:text-xl special:py-3 w-full"
              placeholder="Address Line 1"
              type="text"
              value={address}
              onChange={(e) => {
                const inputText = e.target.value;
                const lettersAndNumbersOnly = inputText.replace(
                  /[^A-Za-z0-9]/g,
                  ""
                );
                setAddress(lettersAndNumbersOnly);
              }}
            ></input>
          </div>
          <div className="flex flex-col space-y-2 w-1/2 max-sm:w-full">
            <p className="text-gray-500 text-sm xl:text-xs special:text-sm">
              Address Line 2
            </p>
            <input
              className="bg-slate-100 border rounded-lg px-2 py-2 focus:outline-none placeholder:text-sm placeholder:special:text-xl special:py-3 w-full"
              placeholder="Address Line 2"
              type="text"
              value={address2}
              onChange={(e) => {
                const inputText = e.target.value;
                const lettersAndNumbersOnly = inputText.replace(
                  /[^A-Za-z0-9]/g,
                  ""
                );

                setAddress2(lettersAndNumbersOnly);
              }}
            ></input>
          </div>
        </div>

        <div className="flex items-center gap-2 max-sm:flex-col mb-3">
          <div className="flex flex-col space-y-2 w-1/3 max-sm:w-full">
            <p className="text-gray-500 text-sm xl:text-xs special:text-sm">
              City
            </p>
            <input
              className="bg-slate-100 border rounded-lg px-2 py-2 focus:outline-none placeholder:text-sm placeholder:special:text-xl special:py-3 w-full"
              placeholder="City"
              type="text"
              value={city}
              onChange={(e) => {
                const inputText = e.target.value;
                const lettersAndNumbersOnly = inputText.replace(
                  /[^A-Za-z0-9]/g,
                  ""
                );
                setCity(lettersAndNumbersOnly);
              }}
            ></input>
          </div>
          <div className="flex flex-col space-y-2 w-1/3 max-sm:w-full">
            <p className="text-gray-500 text-sm xl:text-xs special:text-sm">
              State
            </p>
            <input
              className="bg-slate-100 border rounded-lg px-2 py-2 focus:outline-none placeholder:text-sm placeholder:special:text-xl special:py-3 w-full"
              placeholder="State"
              type="text"
              value={state}
              onChange={(e) => {
                const inputText = e.target.value;
                const lettersAndNumbersOnly = inputText.replace(
                  /[^A-Za-z0-9]/g,
                  ""
                );
                setState(lettersAndNumbersOnly);
              }}
            ></input>
          </div>
          <div className="flex flex-col space-y-2 w-1/3 max-sm:w-full">
            <p className="text-gray-500 text-sm xl:text-xs special:text-sm">
              Postal Code
            </p>
            <input
              className="bg-slate-100 border rounded-lg px-2 py-2 focus:outline-none placeholder:text-sm placeholder:special:text-xl special:py-3 w-full"
              placeholder="Postal Code"
              type="text"
              value={postalcode}
              onChange={(e) => {
                const inputText = e.target.value;
                const lettersAndNumbersOnly = inputText.replace(
                  /[^A-Za-z0-9]/g,
                  ""
                );
                setPostalcode(lettersAndNumbersOnly);
              }}
            ></input>
          </div>
        </div>

        {/* <div className="flex flex-col space-y-2">
  <p className="text-[#999999] text-sm xl:text-md special:text-xl ml-2">
    License Number
  </p>
  <input
    className="bg-white rounded-xl px-2 py-2 focus:outline-none placeholder:text-sm placeholder:special:text-xl special:py-3"
    placeholder="License Number"
    type="text"
    value={license}
    onChange={(e) => setLicense(e.target.value)}
  ></input>
</div> */}
        {/* <div className="flex flex-col space-y-2">
  <p className="text-[#999999] text-sm xl:text-md special:text-xl ml-2">
    TIN
  </p>
  <input
    className="bg-white rounded-xl px-2 py-2 focus:outline-none placeholder:text-sm placeholder:special:text-xl special:py-3"
    placeholder="Enter Tin"
    type="text"
    value={tin}
    onChange={(e) => setTin(e.target.value)}
  />
</div> */}
        {refferalId ? (
          <div className="flex flex-col space-y-2">
            <p className="text-gray-500 text-sm xl:text-xs special:text-sm">
              Refferal Id
            </p>
            <input
              className="bg-slate-100 border rounded-lg px-2 py-2 focus:outline-none placeholder:text-sm placeholder:special:text-xl special:py-3"
              placeholder="Enter Reference Id"
              type="text"
              disabled
              value={userData?.rafflesId}
            ></input>
          </div>
        ) : (
          ""
        )}

        <div className="flex flex-row justify-between items-center pt-4 max-sm:flex-col max-sm:items-start max-sm:gap-5">
          <div className="special:text-xl flex flex-row gap-2 items-center">
            <div className="inline-flex items-center">
              <label className="relative flex items-center p-3 rounded-full cursor-pointer ">
                <input
                  id="checkbox"
                  type="checkbox"
                  checked={isChecked}
                  onChange={onCheckboxChange}
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#666666]  transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#FF4C00] checked:bg-[#FF4C00] checked:before:bg-[#FF4C00] hover:before:opacity-10"
                />
                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </label>
            </div>
            <div className="flex flex-row items-center gap-2">
              <p
                className="text-xs md:text-sm xl:text-md capitalize special:text-xl cursor-pointer"
                onClick={() => setIsChecked(!isChecked)}
              >
                I agree with the
              </p>
              <Link to="/conditions" target="_blank" className="yellow-text">
                <p className="text-xs md:text-sm xl:text-md special:text-xl cursor-pointer text-orange-500">
                  Terms of use
                </p>
              </Link>
            </div>
          </div>

          <button
            disabled={!isChecked}
            onClick={() => updateUserDatails()}
            className={`text-white rounded-xl md:px-12 px-5 py-3 font-semibold special:text-xl max-sm:w-full bg-${
              isChecked ? "black" : "[#FF4C00]"
            } hover:bg-${isChecked ? "black/50" : ""}`}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
