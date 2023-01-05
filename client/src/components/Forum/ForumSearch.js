import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import FilterBtn from "./FilterBtn";

const ForumSearch = () => {
  return (
   <div className="flex flex-row mt-5">
     <div            
      className="
        flex
        justify-between
        items-center
        shadow-md
        rounded-full
        py-1.5
        w-full
        pl-4
        lg:pl-6
        md:w-[50%]
        lg:w-[40%]"
        style={{ backgroundColor: " rgb(33,45,66)" }}>
        <input className="bg-transparent md:h-8 lg:h- outline-none w-[90%]" type="text" placeholder="Search..."/>

        <SearchIcon className="mr-4 lg:mr-6 text-slate-300"/>
    </div>
     <FilterBtn/>
   </div>
  );
};

export default ForumSearch;
