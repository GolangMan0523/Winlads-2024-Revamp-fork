import React, { useState } from "react";
import Heart from "react-animated-heart";
import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";

function NewsListProps({ img, maintitle, newstitle, createdat, id, desc }) {
  const dateObject = new Date(createdat);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const formattedDate = dateObject.toLocaleString("en-US", options);

  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 100) + 1);

  const handleLikeClick = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };
  return (
    <div>
      <div className="flex flex-col space-y-1 hover:bg-[#95DEF1]/10 p-2 rounded-2xl">
        <div className="flex xl:flex-row flex-col gap-2 2xl:gap-4  items-center">

          <img src={img} alt="" className="w-full sm:w-3/5 lg:w-2/5 xl:w-1/5 h-auto rounded-2xl " />

          <div className="  w-full">
            <p className="font-extrabold text-base md:text-lg xl:text-2xl  special:text-4xl uppercase">
              {maintitle}
            </p>

            {newstitle && (
              <p className=" text-sm xl:text-lg special:text-xl py-2 text-[#666666]  capitalize">
                {newstitle}
              </p>
            )}

            <div className=" text-xs sm:text-sm xl:text-base special:text-xl pt-1 py-2 text-[#666666]">
              {desc}
            </div>


            <div className="flex items-center gap-2 sm:gap-8 text-sm special:text-lg text-[#666666]  flex-wrap">
              <span className="flex items-center gap-2"> <FaRegClock size={25} /> {formattedDate.slice(0,15)}</span>

              <span className="hidden sm:flex">|</span>


              <div className="flex items-center ">
              <Heart onClick={handleLikeClick} isClick={isLiked}   />
              <span> Likes : {likeCount}</span>
            </div>

            </div>


            
          </div>
        </div>

        <div className="flex justify-end">
          <Link
            to={`/news/${id}`}
            state={{ maintitle, newstitle, createdat, desc, img }}
          >
            <p className="text-[#FF4C00] text-sm special:text-base font-bold">Show More</p>
          </Link>
        </div>
      </div>
     
    </div>
  );
}

export default NewsListProps;
