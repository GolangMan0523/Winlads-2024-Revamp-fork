import React, { useEffect, useState } from "react";
import TopNav from "../../components/TopNav/TopNav";
import User from "../../assets/images/side-bar/User2.png";
import MainCar from "../../assets/images/MainCar.png";
import axios from "axios";
import Cookies from "universal-cookie";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { toast } from "react-toastify";
import ItemLoader from "../../components/Loader/ItemLoader";
import { storage } from "../../firebase.config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Link, useNavigate } from "react-router-dom";
import { validateCurrentUser } from "../../utils/validateuser";
import CardComponent from "../../components/cardComponent/CardComponent";
import { useRefresh } from "../../utils/RefreshContext";
import AffiliateCard from "../../components/Affiliate/AffiliateCard";
import Col4Table from "../../components/Affiliate/Col4Table";
import Count from "../../components/Affiliate/Count";

const RefCount = () => {
  const cookies = new Cookies(null, { path: "/" });
  const { refreshCount, refresh } = useRefresh();
  const id = cookies.get("wr_token");
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const [valUser, setValUser] = useState({});

  const [name, setName] = useState("");
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
  const [loading, setLoading] = useState(false);
  const [userImage, setUserImage] = useState("");
  const [refferalId, setRefferalId] = useState();
  // const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    getUserData();
  }, [refreshCount]);

  const getUserData = async () => {
    setLoading(true);
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/validate?id=${id}`)
      .then((response) => {
        console.log(response.data.data);
        setUserData(response?.data?.data);
        setMobile(response?.data?.data.mobile);
        setName(response?.data?.data.name);
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
        console.log(response?.data?.data.image);
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

  const tableData = [
    {
      id: 'Jane_01',
      name: 'Jane Cooper',
      email: 'jane01@gmail.com',
      mobile: '0192837291'
    },
    {
      id: 'Jane_01',
      name: 'Jane Cooper',
      email: 'jane01@gmail.com',
      mobile: '0192837291'
    },
    {
      id: 'Jane_01',
      name: 'Jane Cooper',
      email: 'jane01@gmail.com',
      mobile: '0192837291'
    },
    {
      id: 'Jane_01',
      name: 'Jane Cooper',
      email: 'jane01@gmail.com',
      mobile: '0192837291'
    }
  ]

  const tableHeadings = [
    'User Id',
    'User Name',
    'Mobile Number',
    'Email'
  ]
  return (
    <div className="bg-[#F2F5FB]">
      <div className="flex relative">
        <div className="right-side-logo max-xl:hidden z-10"></div>
        <div
          className="flex xl:flex-row flex-col xl:justify-between flex-1 mx-5 xl:gap-8 pb-5 space-y-4 xl:space-y-0 bg-no-repeat"
        >
          <div className="flex flex-col space-y-4 flex-1 visible xl:hidden">
            <div className="bg-black rounded-b-3xl py-4">
              <TopNav textColor={"white"} />
              <div className="pt-10">
                <img className="" src={MainCar} alt="main" />
              </div>
            </div>
            <CardComponent />
          </div>
          <div className="flex flex-col space-y-4 flex-1 xl:mx-4">
            <div className="flex flex-col space-y-4">
              {loading ? (
                <div className="flex justify-center pt-12">
                  <ItemLoader />

                </div>
              ) : (
                <>
                  {/* LEFT SIDE */}
                  <h2 className="text-md md:text-xl font-bold my-3">Refferal List</h2>
                  <Count count={13225} />
                  <div className="mt-20">
                    <h2 className="text-md md:text-xl font-bold mt-10 mb-4">Refferal List</h2>
                    <Col4Table data={tableData} header={tableHeadings} />
                  </div>


                </>
              )}
            </div>
          </div>
          <div className="xl:flex flex-col space-y-4 flex-1 hidden relative">
            <div className="bg-black rounded-b-3xl py-4">
              <TopNav textColor={"white"} />
              <div className="pt-10">
                <img className="w-3/4" src={MainCar} alt="main" />
              </div>
            </div>
            <div>
              {/* BELOW JEEP */}
              <AffiliateCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefCount;
