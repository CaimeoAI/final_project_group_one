import React, { useState } from "react";

import { HiMenuAlt3 } from "react-icons/hi";

import { RiSettings4Line } from "react-icons/ri";
import { BsBook, BsCalendar3 } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { SlGraduation } from "react-icons/sl";

import { Link } from "react-router-dom";
/* import Tabs from "../components/learningComponents/Tabs"; */

const SidebarNav = () => {
  const menus = [
    { name: "Calendar", link: "/Calendar", icon: BsCalendar3},
    { name: "Learning Support", link: "/learningsupport", icon: BsBook },
    { name: "Academia", link: "/", icon: SlGraduation },
    { name: "Chat", link: "/", icon: FiMessageSquare },

    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex ">
      <div
        className={`bg-[#171467bb] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-purple-200 text-xl text-blue-900 font-semibold w-full">
        <div>
          <strong>Header with logo search and Page title here</strong>
          <br />
          Lorem ipsum dolor sit amet consectet possimus omnis optio dolom culpa
          pariatur velit.
        </div>
        {/* <Tabs/> */}
      </div>
    </section>
  );
};

export default SidebarNav;