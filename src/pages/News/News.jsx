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
        {/* left side */}
        <div className="flex-col  space-y-4">

          <div className=" rounded-b-3xl py-4">
            <div className=" xl:hidden">
            <TopNav textColor={"white"}/>
            </div>
      
        </div>

   


      </div>

      {/* right-side */}
      <div className="flex flex-col flex-1 space-y-4 py-4">
        <div className="invisible xl:visible">
          <TopNav />
        </div>
        <div
          className="mx-4"
        >
          <div className="flex flex-col">
            <p className="font-bold text-3xl xl:text-5xl mt-8">{maintitle}</p>
            <p className="text-xs md:text-sm xl:text-sm 2xl:text-sm special:text-xl my-2">
              {formattedDate}
            </p>
            <img src={img}  className="w-full lg:w-1/2 rounded-xl"/>
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
