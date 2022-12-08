import React from "react";

const ForumSearch = () => {
  return (
    <div
      className="
          flex  
          h-[7%] 
          w-[100%]
          md:w-[65%]"
    >
      <input
        className="
                w-[100%]
                m-auto
                mt-4
                rounded-full
                h-11
                pl-4
                border-2"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default ForumSearch;