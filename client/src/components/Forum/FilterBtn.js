//! 01 - HOOKS/STATES

import { useEffect, useState } from "react";
import { useForum } from "../../context/ForumProvider";

//? 02 - STYLING
import RocketOutlinedIcon from "@mui/icons-material/RocketOutlined";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import NewReleasesOutlinedIcon from "@mui/icons-material/NewReleasesOutlined";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";

const FilterBtn = () => {
  const { latestPosts, bestPost, hotPosts, getAllPost, filterBy, setFilterBy } =
    useForum();
  const [active, setActive] = useState("");
  const fileds = ["webdev", "AWS", "onlinemarketing", "python"];

  useEffect(() => {
    getAllPost(filterBy);
  }, [filterBy]);

  return (
    <div className="hidden md:flex flex-row  text-slate-400 font-bold items-center md:text-[0.8em] lg:text-[1em] max-h-[70px] ">
      <div
        onClick={(e) => {
          bestPost();
          setActive("best");
        }}
        className={`ml-2 lg:ml-6 cursor-pointer hover:bg-slate-700 px-3 py-1.5 rounded-full  hover:text-slate-300 ${
          active === "best" && "bg-slate-700"
        }`}
      >
        <RocketOutlinedIcon />
        <span className="ml-2">Best</span>
      </div>
      <div
        onClick={(e) => {
          hotPosts();
          setActive("hot");
        }}
        className={`ml-2 lg:ml-2 cursor-pointer hover:bg-slate-700 px-3 py-1.5 rounded-full  hover:text-slate-300 ${
          active === "hot" && "bg-slate-700"
        }`}
      >
        <LocalFireDepartmentIcon />
        <span className="ml-2">Hot</span>
      </div>
      <div
        onClick={(e) => {
          latestPosts();
          setActive("latest");
        }}
        className={`ml-2 lg:ml-2 cursor-pointer hover:bg-slate-700 px-3 py-1.5 rounded-full  hover:text-slate-300 ${
          active === "latest" && "bg-slate-700"
        }`}
      >
        <NewReleasesOutlinedIcon />
        <span className="ml-2">New</span>
      </div>
      <div className="md:hidden lg:flex text-md font-semibold ml-3 border-l border-slate-500">
        {fileds.map((field, id) => (
          <div
            onClick={() => {
              setActive(field);
              setFilterBy(field);
            }}
            className={`ml-2 cursor-pointer  hover:bg-slate-700 px-2.5 py-1.5 rounded-lg  hover:text-slate-300 ${
              active === field && "bg-slate-700"
            }`}
          >
            <TagOutlinedIcon />
            <span>{field}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBtn;
