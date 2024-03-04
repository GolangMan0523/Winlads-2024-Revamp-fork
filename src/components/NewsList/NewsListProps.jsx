import React, { useState } from "react";
import Heart from "react-animated-heart";
import { Link } from "react-router-dom";;

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
  const [likeCount, setLikeCount] = useState(0);
  
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
      <div className="flex flex-col space-y-1 hover:bg-[#F5F5F5] py-2  px-2">
        <div className="flex xl:flex-row flex-col gap-2 2xl:gap-4 ">
          <img src={img} alt="" className="w- h-auto" />
          <div className="">
            <p className="text-md xl:text-2xl   font-bold md:text-lg special:text-4xl uppercase">
              {maintitle}
            </p>

            <p className="text-xs xl:text-xl special:text-3xl py-2  capitalize">
              {newstitle}
            </p>
            <div className="text-xs xl:text-xl special:text-2xl py-2">
              {" "}
              {desc}
            </div>
            <div>{formattedDate}</div>
            {/* <div className="flex items-center">
              <button onClick={handleLikeClick}>
                <Heart isClick={isLiked} className="w-12 h-12" />{" "}
              </button>
              <span>{likeCount}</span>
            </div> */}
          </div>
        </div>
        <div className="flex justify-end">
          <Link
            to={`/news/${id}`}
            state={{ maintitle, newstitle, createdat, desc }}
          >
            <p className="text-[#FF4C00] text-xl font-bold">Show More</p>
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default NewsListProps;
