import React from "react";

const ForumSearch = () => {
  return (
    <div
      className="
          flex  
          w-full
          md:w-[70%]
          lg:w-[75%]"
    >
      <input
        className="
                w-[100%]
                m-auto
                mt-4
                rounded-full
                h-10
                pl-4
                bg-slate-500 
                border-hidden
                placeholder:text-white"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default ForumSearch;
