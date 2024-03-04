import { CiSearch } from "react-icons/ci";

const SearchField = () => (
  <div className="relative">
    <input
      className="focus:outline-none special:text-3xl placeholder:xl:text-md xl:text-lg text-sm placeholder:text-sm  rounded-2xl w-full py-2 pl-12 pr-3 bg-gray-300 placeholder:text-black placeholder:special:text-2xl special:py-6 spacial:px-6 placeholder:2xl:text-md"
      type="search"
      placeholder="Search"
      aria-label="Search"
    />
    <CiSearch className="text-3xl absolute top-1/2 left-1 -translate-y-1/2"/>
  </div>
);

export default SearchField;
