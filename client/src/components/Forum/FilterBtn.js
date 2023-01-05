import React from "react";
import RocketOutlinedIcon from "@mui/icons-material/RocketOutlined";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import NewReleasesOutlinedIcon from "@mui/icons-material/NewReleasesOutlined";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import { useForum } from "../../context/ForumProvider";


const FilterBtn = () => {
  const {latestPosts, bestPost, hotPosts} = useForum();
  const fileds = ["webdev", "aws", "marketing", "python"];

  return (
    <div className="hidden md:flex flex-row  text-slate-400 font-bold items-center md:text-[0.8em] lg:text-[1em] max-h-[70px] ">
      <div 
      onClick={()=>bestPost()}
      className="ml-2 lg:ml-6 cursor-pointer hover:bg-slate-700 px-2.5 py-1.5 rounded-full  hover:text-slate-300">
        <RocketOutlinedIcon />
        <span className="ml-2">Best</span>
      </div>
      <div 
      onClick={hotPosts}
      className="cursor-pointer  hover:bg-slate-700 px-2.5 py-1.5 rounded-full  hover:text-slate-300">
        <LocalFireDepartmentIcon />
        <span className="ml-2">Hot</span>
      </div>
      <div
      onClick={()=>latestPosts()} 
      className="cursor-pointer  hover:bg-slate-700 px-2.5 py-1.5 rounded-full  hover:text-slate-300 mr-1.5">
        <NewReleasesOutlinedIcon />
        <span className="ml-2">New</span>
      </div>
      <div className="md:hidden lg:flex text-md font-semibold ml-3 border-l border-slate-500">
        {fileds.map((item, id)=>(
            <div   key={id} className="ml-1 cursor-pointer  hover:bg-slate-700 px-2.5 py-1.5 rounded-lg  hover:text-slate-300">
            <TagOutlinedIcon />
            <span className="">{item}</span>
          </div>
        ))}
        {/* <div className="ml-1 cursor-pointer  hover:bg-slate-700 px-2.5 py-1.5 rounded-lg  hover:text-slate-300">
          <TagOutlinedIcon />
          <span className="">webdev</span>
        </div>
        <div className="ml-1 cursor-pointer  hover:bg-slate-700 px-2.5 py-1.5 rounded-lg  hover:text-slate-300">
          <TagOutlinedIcon />
          <span className="">aws</span>
        </div>
        <div className="ml-1 cursor-pointer  hover:bg-slate-700 px-2.5 py-1.5 rounded-lg  hover:text-slate-300">
          <TagOutlinedIcon />
          <span className="">marketing</span>
        </div>
        <div className="ml-1 cursor-pointer  hover:bg-slate-700 px-2.5 py-1.5 rounded-lg  hover:text-slate-300">
          <TagOutlinedIcon />
          <span className="">python</span>
        </div> */}
      </div>
    </div>
  );
};

export default FilterBtn;
