import { useEffect, useState } from "react";
import MainCar from "../../assets/images/MainCar.png";
import GoldCard from "../../components/GoldCard/GoldCard";
import TopNav from "../../components/TopNav/TopNav";
import NewsListProps from "../../components/NewsList/NewsListProps";
import axios from "axios";
import SearchField from "../../components/SearchField/SearchField";
import ItemLoader from "../../components/Loader/ItemLoader";

import { MdOutlineDoNotDisturbOff } from "react-icons/md";
import BG from "../../assets/images/HomesideBg.png";
import { validateCurrentUser } from "../../utils/validateuser";
import { Link, useNavigate } from "react-router-dom";
import newsCar from "../../assets/images/news/newsCar.png";


function Newslist() {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [valUser, setValUser] = useState({});
  const navigate = useNavigate();
  const [initialShow, setInitShow] = useState(5);
  
  const handleSeeMore = (show) => {
    if (show) {
      setInitShow(transactions.length)
    } else {
      setInitShow(5)
    }
  }

  useEffect(() => {
    currentUserValidation();
    getNews();
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

  const getNews = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/getNews`)
      .then((response) => {
        console.log(response.data.data);
        setNewsList(response?.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className="">
      {/* side-nav */}

      {/* home-content */}
      <div className="xl:flex xl:flex-row flex-col xl:justify-between flex-1 mx-5 xl:gap-4 pb-5 space-y-4 xl:space-y-0">
        <img
          src={BG}
          alt=""
          className="absolute right-0 -z-10 top-40 w-72 xl:w-96 md:w-96 special:w-1/4 2xl:w-1/4 special:top-60 opacity-60 2xl:top-40"
        />
        {/* left side */}
        <div className=" space-y-4 flex-1">
          <div className="visible xl:hidden space-y-4">
            <div className=" rounded-b-3xl py-4">
              <TopNav textColor={"black"} />
            </div>
          </div>
          {/* <SearchField /> */}
          <h1 className="font-bold text-xl special:text-4xl 2xl:text-2xl">
            News
          </h1>
          {loading ? (
            <div className="flex justify-center">
              <ItemLoader />
            </div>
          ) : newsList.length > 0 ? (
            <div className="flex flex-col space-y-4 special:pt-16 2xl:pt-8 xl:pt-8 pt-4 2xl:space-y-6">
              {newsList.map((news, key) => (
                <NewsListProps
                  key={key}
                  img={news.image ? news.image :newsCar}
                  maintitle={news.maintitle}
                  newstitle={news.newstitle}
                  createdat={news.createdat}
                  id={news._id}
                  desc={news.desc}
                />
              ))}
              {newsList.length > 5 &&
                (initialShow == 6 ? (
                  <button onClick={() => handleSeeMore(true)}>See More</button>
                ) : (
                  <button onClick={() => handleSeeMore(false)}>See Less</button>
                ))}
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-2">
              <MdOutlineDoNotDisturbOff className="w-12 h-12 2xl:w-16 2xl:h-16 special:w-24 special:h-24" />
              <p className="font-bold text-2xl 2xl:text-4xl special:text-6xl">
                No More News
              </p>
            </div>
          )}
        </div>
        {/* right-side */}
        {/* <div className="flex-col flex-1 space-y-4 hidden xl:flex">
          <div className=" space-y-4">
            <div className=" rounded-b-3xl py-4">
              <TopNav textColor={"black"} />
           
            </div>
        
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Newslist;
