import React from "react";
import SearchIcon from "../../../assets/icons/black_search_24px.svg";

const Search = () => {
  return (
    <div className="relative w-full h-[32px]">
      <img
        src={SearchIcon}
        alt="search"
        className="absolute right-[58px] translate-y-[-50%] top-1/2"
      />
      <input
        type="text"
        name="search"
        placeholder="Search"
        className="border border-[#828282] rounded-[5px] w-full h-full pl-[58px] pr-[75px] text-[#333333] placeholder:text-[#333333]"
      />
    </div>
  );
};

export default Search;
