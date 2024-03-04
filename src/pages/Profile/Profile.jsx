import React, { useEffect, useState } from "react";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";
import User from "../../assets/images/side-bar/User2.png";
import GoldCard from "../../components/GoldCard/GoldCard";
import MainCar from "../../assets/images/MainCar.png";
import Vrfy from "../../assets/images/icons/Verified.png";
import NotVrfy from "../../assets/images/icons/Unverified.png";
import backgroundcar from "../../assets/images/background/Background-car.png";
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
  const [localImage, setLocalImage] = useState('');
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
      const reader = new FileReader();  // Create a new FileReader
      reader.onload = () => {
        setLocalImage(reader.result); // Set the state with the URL of the uploaded image
      };
      reader.readAsDataURL(file); // Read the file as a data URL

    }

  };
  const handleRemoveLocalImage = () => {
    setLocalImage(userImage)
    //setProfile(null);
  }

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
      )

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
        setIsChecked(true)
      }
    } catch (err) {
      console.log('CATCH STATEMENT');
      console.log(err);
      toast.error(err.response.data.message)
      setLoading(false);
      setIsChecked(false);
    }
  }


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
return (
  <div className="bg-[#F2F5FB] w-full h-full">
    <div className="flex relative w-full">
      <div className="right-side-logo max-xl:hidden"></div>
      <div className="flex xl:flex-row flex-col xl:justify-between flex-1 mx-5 xl:gap-8 pb-5 space-y-4 xl:space-y-0 bg-no-repeat w-full">
        <div className="flex flex-col space-y-4 flex-1 visible xl:hidden">
          <div className="bg-black rounded-b-3xl py-4">
            <TopNav textColor={"white"} />
            <div className="pt-10">
              <img className="" src={MainCar} alt="main" />
            </div>
          </div>
          <AffiliateCard />
        </div>
        <div className="flex flex-col space-y-4 flex-1 xl:mx-4">
          <div className="flex flex-col space-y-3">
            {loading ? (
              <div className="flex justify-center pt-12">
                <ItemLoader />
              </div>
            ) : (
              <>
                <form className="mx-auto mt-4 relative">
                  {userImage ? (
                    <div className="special:w-28 w-16 2xl:w-20 aspect-square rounded-full overflow-hidden">
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
                    className="z-10 absolute -bottom-3 -right-2 text-2xl bg-gray-200 rounded-full p-1 cursor-pointer"
                  >
                    {/* {userImage ? <img src={userImage} /> : <MdOutlinePhotoCamera />} */}

                    <MdOutlinePhotoCamera />
                  </label>
                  <input
                    type="file"
                    className="hidden"
                    name="profile"
                    id="profile"
                    onChange={handleProfileImageChange}
                  />
                </form>
                {profile && <p className="text-center text-xs flex items-center justify-center gap-2">{profile?.name} </p>}
                {/* <span className="text-xl cursor-pointer" onClick={handleRemoveLocalImage}><IoIosClose/></span> */}
                <div className="flex items-center justify-center gap-2">
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
                <div className="flex flex-col space-y-2 special:space-y-5">
                  <div className="flex flex-col space-y-2">
                    <p className="text-black text-sm xl:text-md special:text-xl">
                      User ID
                    </p>
                    <input
                      className="bg-white rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3"
                      placeholder="Enter User Name"
                      type="text"
                      value={userData?.uid}
                      disabled
                    ></input>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex flex-col w-1/2 space-y-2">
                      <p className="text-black text-sm xl:text-md special:text-xl">
                        First Name
                      </p>
                      <input
                        className="bg-white rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3 w-full"
                        placeholder="Enter First Name"
                        type="text"
                        onChange={(e) => {
                          const inputText = e.target.value;
                          const lettersOnly = inputText.replace(
                            /[^A-Za-z]/g,
                            ""
                          );
                          setFirstName(lettersOnly);
                        }}
                        value={firstName}
                      ></input>
                    </div>
                    <div className="flex flex-col w-1/2 space-y-2">
                      <p className="text-black text-sm xl:text-md special:text-xl">
                        Surname
                      </p>
                      <input
                        className="bg-white rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3 w-full"
                        placeholder="Enter Surame"
                        type="text"
                        onChange={(e) => {
                          const inputText = e.target.value;
                          const lettersOnly = inputText.replace(
                            /[^A-Za-z]/g,
                            ""
                          );

                          setLastName(lettersOnly);
                        }}
                        value={lastName}
                      ></input>
                    </div>
                  </div>

                  {/* <div className="flex flex-col space-y-2">
                    <p className="text-black text-sm xl:text-md special:text-xl">
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
                      <p className="text-black text-sm xl:text-md special:text-xl">
                        Valid Email
                      </p>
                      {
                        valUser.verified ? '' : <span className="text-xs text-red-500 text-right"> Please verify your email by clicking <Link to={'/verifyEmail'} className="text-blue-500 font-bold"> here</Link></span>
                      }
                    </div>


                      <input
                        className="bg-white rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3"
                        placeholder="Enter Valid EMail"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        disabled={valUser.verified ? true : false}
                      ></input>
                      {valUser && <img src={valUser.verified ? Vrfy : NotVrfy} className="w-20 absolute top-8 right-2"/> }
                    </div>
                    <div className="flex flex-col space-y-2">
                      <p className="text-black text-sm xl:text-md special:text-xl">
                        Phone Number
                      </p>
                      <input
                        className="bg-white rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3"
                        placeholder="Enter Phone Number"
                        type="tel"
                        disabled
                        onChange={(e) => setMobile(e.target.value)}
                        value={mobile}
                      ></input>
                    </div>
                    {/* <div className="flex flex-col space-y-2">
                      <p className="text-black text-sm xl:text-md special:text-xl">
                        NIC Number
                      </p>
                      <input
                        className="bg-white rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3"
                        placeholder="Enter NIC Number"
                        type="text"
                        onChange={(e) => setNic(e.target.value)}
                        value={nic}
                      ></input>
                    </div> */}
                  <div className="flex flex-col space-y-2">
                    <p className="text-black text-sm xl:text-md special:text-xl">
                      Date of Birth
                    </p>
                    <input
                      className="bg-white rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3"
                      placeholder="Enter Date of Birth"
                      type="date"
                      value={dob?.substring(0, 10)}
                      onChange={(e) => setDob(e.target.value)}
                    ></input>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex flex-col space-y-2 w-1/2">
                      <p className="text-black text-sm xl:text-md special:text-xl">
                        Address Line 1
                      </p>
                      <input
                        className="bg-white rounded-xl px-2 py-2 focus:outline-none placeholder:text-sm placeholder:special:text-xl special:py-3 w-full"
                        placeholder="Address Line 1"
                        type="text"
                        value={address}
                        onChange={(e) => {
                          const inputText = e.target.value;
                          const lettersAndNumbersOnly = inputText.replace(/[^A-Za-z0-9]/g, '');
                          setAddress(lettersAndNumbersOnly)
                        }
                        }


                      ></input>
                    </div>
                    <div className="flex flex-col space-y-2 w-1/2">
                      <p className="text-black text-sm xl:text-md special:text-xl">
                        Address Line 2
                      </p>
                      <input
                        className="bg-white rounded-xl px-2 py-2 focus:outline-none placeholder:text-sm placeholder:special:text-xl special:py-3 w-full"
                        placeholder="Address Line 2"
                        type="text"
                        value={address2}
                        onChange={(e) => {
                          const inputText = e.target.value;
                          const lettersAndNumbersOnly = inputText.replace(/[^A-Za-z0-9]/g, '');

                          setAddress2(lettersAndNumbersOnly)
                        }
                        }


                      ></input>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex flex-col space-y-2 w-1/3">
                      <p className="text-black text-sm xl:text-md special:text-xl">
                        City
                      </p>
                      <input
                        className="bg-white rounded-xl px-2 py-2 focus:outline-none placeholder:text-sm placeholder:special:text-xl special:py-3 w-full"
                        placeholder="City"
                        type="text"
                        value={city}
                        onChange={(e) => {
                          const inputText = e.target.value;
                          const lettersAndNumbersOnly = inputText.replace(/[^A-Za-z0-9]/g, '');
                          setCity(lettersAndNumbersOnly)
                        }
                        }


                      ></input>
                    </div>
                    <div className="flex flex-col space-y-2 w-1/3">
                      <p className="text-black text-sm xl:text-md special:text-xl">
                        State
                      </p>
                      <input
                        className="bg-white rounded-xl px-2 py-2 focus:outline-none placeholder:text-sm placeholder:special:text-xl special:py-3 w-full"
                        placeholder="State"
                        type="text"
                        value={state}
                        onChange={(e) => {
                          const inputText = e.target.value;
                          const lettersAndNumbersOnly = inputText.replace(/[^A-Za-z0-9]/g, '');
                          setState(lettersAndNumbersOnly)
                        }
                        }


                      ></input>
                    </div>
                    <div className="flex flex-col space-y-2 w-1/3">
                      <p className="text-black text-sm xl:text-md special:text-xl">
                        Postal Code
                      </p>
                      <input
                        className="bg-white rounded-xl px-2 py-2 focus:outline-none placeholder:text-sm placeholder:special:text-xl special:py-3 w-full"
                        placeholder="Postal Code"
                        type="text"
                        value={postalcode}
                        onChange={(e) => {
                          const inputText = e.target.value;
                          const lettersAndNumbersOnly = inputText.replace(/[^A-Za-z0-9]/g, '');
                          setPostalcode(lettersAndNumbersOnly)
                        }
                        }

                      ></input>
                    </div>
                  </div>

                  {/* <div className="flex flex-col space-y-2">
                      <p className="text-black text-sm xl:text-md special:text-xl">
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
                      <p className="text-black text-sm xl:text-md special:text-xl">
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
                      <p className="text-black text-sm xl:text-md special:text-xl">
                        Refferal Id
                      </p>
                      <input
                        className="bg-white rounded-xl px-2 py-2 focus:outline-none placeholder:text-sm placeholder:special:text-xl special:py-3"
                        placeholder="Enter Reference Id"
                        type="text"
                        disabled
                        value={userData?.rafflesId}
                      ></input>
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="flex flex-row justify-between items-center pt-4">
                    {/* <div className="flex items-center xl:gap-6 gap-3">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checked-checkbox"
                      className="ml-2 xl:text-sm text-xs font-medium text-gray-900 dark:text-gray-300"
                    >
                      <p className="text-black">
                        {" "}
                        I agree with the terms of use
                      </p>
                    </label>
                  </div> */}

                    <div className="special:text-xl flex flex-row gap-2 items-center">
                      {" "}
                      <input
                        id="checkbox"
                        type="checkbox"
                        checked={isChecked}
                        onChange={onCheckboxChange}
                        className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <div className="flex flex-row items-center gap-2">
                        <p
                          className="text-xs md:text-sm xl:text-md special:text-xl cursor-pointer"
                          onClick={() => setIsChecked(!isChecked)}
                        >
                          I agree with the
                        </p>
                        <Link
                          to="/conditions"
                          target="_blank"
                          className="yellow-text"
                        >
                          <p className="text-xs md:text-sm xl:text-md special:text-xl cursor-pointer">
                            Terms of use
                          </p>
                        </Link>
                      </div>
                    </div>

                    <button
                      disabled={!isChecked}
                      onClick={() => updateUserDatails()}
                      className={`text-white rounded-xl md:px-12 px-5 py-3 font-semibold special:text-xl bg-${isChecked ? "black" : "gray-500"
                        } hover:bg-${isChecked ? "black/50" : ""}`}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="xl:flex flex-col space-y-4 flex-1 hidden">
          <div className="bg-black rounded-b-3xl py-4">
            <TopNav textColor={"white"} />
            <div className="pt-10">
              <motion.img
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 80, opacity: 1 }}
                transition={{ type: "tween", duration: 1, delay: 1 }}
                className="w-3/4"
                src={MainCar}
                alt="main"
              />
            </div>
          </div>

          {/* <div className="w-full">
              <GoldCard />
            </div> */}
          <div>
            <AffiliateCard />
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default Profile;
