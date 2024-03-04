import { Link } from "react-router-dom";
import newsimage4 from "../../assets/images/news/4.png";
import { HiDotsHorizontal } from "react-icons/hi";

const HistoryList = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="md:pr-32">
          <div className="flex flex-col space-y-4 2xl:space-y-8 special:space-y-12">
            <Link to="/#">
              <div className="flex items-center flex-row gap-4 border-b-2 border-gray-200 px-3 py-1 hover:rounded-lg  hover:bg-[#D1D5DB]">
                <img
                  src={newsimage4}
                  alt=""
                  className="w-16 h-16 xl:w-16 xl:h-16 rounded-full 2xl:h-24 2xl:w-24 special:h-32 special:w-32"
                />
                <div className="flex w-full flex-col">
                  <h3 className="text-md xl:text-xl md:text-lg capitalize font-bold special:text-4xl 2xl:text-2xl">
                    1991 land rover defender 110
                  </h3>
                  <p className="text-md xl:text-lg 2xl:text-xl special:text-2xl">
                    2023-SEP-19 Tuesday
                  </p>
                  <p className="text-left special:text-xl">
                    {" "}
                    <span className="text-blue-500 font-bold">R</span> 14 34 46
                    88
                  </p>
                  <p className="text-xl ml-auto">
                    <HiDotsHorizontal />
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/#">
              <div className="flex items-center flex-row gap-4 border-b-2 border-gray-200 px-3 py-1 hover:rounded-lg  hover:bg-[#D1D5DB]">
                <img
                  src={newsimage4}
                  alt=""
                  className="w-16 h-16 xl:w-16 xl:h-16 rounded-full 2xl:h-24 2xl:w-24 special:h-32 special:w-32"
                />
                <div className="flex w-full flex-col">
                  <h3 className="text-md xl:text-xl md:text-lg capitalize font-bold special:text-4xl 2xl:text-2xl">
                    1991 land rover defender 110
                  </h3>
                  <p className="text-md xl:text-lg 2xl:text-xl special:text-2xl">
                    2023-SEP-19 Tuesday
                  </p>
                  <p className="text-left special:text-xl">
                    {" "}
                    <span className="text-blue-500 font-bold">R</span> 14 34 46
                    88
                  </p>
                  <p className="text-xl ml-auto">
                    <HiDotsHorizontal />
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/#">
              <div className="flex items-center flex-row gap-4 border-b-2 border-gray-200 px-3 py-1 hover:rounded-lg  hover:bg-[#D1D5DB]">
                <img
                  src={newsimage4}
                  alt=""
                  className="w-16 h-16 xl:w-16 xl:h-16 rounded-full 2xl:h-24 2xl:w-24 special:h-32 special:w-32"
                />
                <div className="flex w-full flex-col">
                  <h3 className="text-md xl:text-xl md:text-lg capitalize font-bold special:text-4xl 2xl:text-2xl">
                    1991 land rover defender 110
                  </h3>
                  <p className="text-md xl:text-lg 2xl:text-xl special:text-2xl">
                    2023-SEP-19 Tuesday
                  </p>
                  <p className="text-left special:text-xl">
                    {" "}
                    <span className="text-blue-500 font-bold">R</span> 14 34 46
                    88
                  </p>
                  <p className="text-xl ml-auto">
                    <HiDotsHorizontal />
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/#">
              <div className="flex items-center flex-row gap-4 border-b-2 border-gray-200 px-3 py-1 hover:rounded-lg  hover:bg-[#D1D5DB]">
                <img
                  src={newsimage4}
                  alt=""
                  className="w-16 h-16 xl:w-16 xl:h-16 rounded-full 2xl:h-24 2xl:w-24 special:h-32 special:w-32"
                />
                <div className="flex w-full flex-col">
                  <h3 className="text-md xl:text-xl md:text-lg capitalize font-bold special:text-4xl 2xl:text-2xl">
                    1991 land rover defender 110
                  </h3>
                  <p className="text-md xl:text-lg 2xl:text-xl special:text-2xl">
                    2023-SEP-19 Tuesday
                  </p>
                  <p className="text-left special:text-xl">
                    {" "}
                    <span className="text-blue-500 font-bold">R</span> 14 34 46
                    88
                  </p>
                  <p className="text-xl ml-auto">
                    <HiDotsHorizontal />
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryList;
