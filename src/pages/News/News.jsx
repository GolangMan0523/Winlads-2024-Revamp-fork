import MainCar from "../../assets/images/MainCar.png";
import GoldCard from "../../components/GoldCard/GoldCard";
import TopNav from "../../components/TopNav/TopNav";
import "./news.css";
import { useLocation } from "react-router-dom";

function News() {
  const location = useLocation()
  const { maintitle, newstitle, createdat, desc,img } = location.state

  const dateObject = new Date(createdat);
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  const formattedDate = dateObject.toLocaleString('en-US', options);

  return (
    <div className="flex relative">
      {/* home-content */}
      <div className="xl:flex xl:flex-row flex-col xl:justify-between flex-1 px-4 xl:gap-8 pb-5 space-y-4 xl:space-y-0">
        

      {/* right-side */}
      <div className="flex flex-col flex-1  py-4">
        
      <TopNav textColor="black" />

        <div>

          <div className="flex flex-col">
            <p className="font-bold text-3xl xl:text-5xl mt-5">{maintitle}</p>
            <p className="text-xs md:text-sm xl:text-sm 2xl:text-sm special:text-xl my-2">
              {formattedDate}
            </p>
            <div className="flex items-center justify-center  w-full sm:w-2/3  xl:w-1/2">
            <img src={img}  className="w-full object-contain rounded-xl"/>
            </div>
           
          </div>

          <p className="text-sm xl:text-3xl md:text-3xl mt-4">
            {newstitle}
          </p>

          <ul className="space-y-3 md:text-lg xl:text-sm 2xl:text-xl special:text-2xl mt-4">
            {desc}
          </ul>
        </div>

      </div>
    </div>
    </div >

  );
}

export default News;
