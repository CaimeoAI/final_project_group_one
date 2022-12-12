import React from "react";

const Search = () => {
  return (
    <div
      className="
          flex  
          h-[5%] 
          w-[100%]
          md:w-[65%]
          mb-10
          "
    >
      <input
        className="bg-slate-400 border-hidden placeholder:text-white mx-6 w-[100%] m-auto mt-4 h-9 pl-4 "
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
