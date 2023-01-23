import React, { useContext, useState } from "react";

import { HiMenuAlt3 } from "react-icons/hi";
import { RiSettings4Line } from "react-icons/ri";
import { BsBook, BsCalendar3 } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { SlGraduation } from "react-icons/sl";
import { MdLogout } from "react-icons/md";

import { Link } from "react-router-dom";
import { MainContext } from "../context/MainContext";

const SidebarNav = () => {
  const { logOut } = useContext(MainContext);
  const [open, setOpen] = useState(true);

  const menus = [
    { name: "Calendar", link: "/", icon: BsCalendar3 },
    { name: "Learning ", link: "/learningsupport", icon: BsBook },
    { name: "Academia", link: "/academia", icon: SlGraduation },
    { name: "Chat", link: "/chat", icon: FiMessageSquare },
    { name: "Setting", link: "/settings", icon: RiSettings4Line },
  ];
  const logout = { name: "Log out", icon: MdLogout };
  const userProfileImg = localStorage.getItem("photo");
  const userCourse = localStorage.getItem("course");
  const userName = localStorage.getItem("name");

  return (
    /* Sidebar Background Color */

    <div
      className={`hidden md:flex flex-col justify-between bg-navbar min-h-screen relative ${
        open ? "lg:w-72" : "lg:w-16 pr-3"
      } duration-500 text-text-primary px-4 `}
    >
      <div className="md:hidden py-3 lg:flex justify-end text-text-primary">
        <HiMenuAlt3
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>

      <div className="h-56 flex flex-col items-center justify-center">
        <div
          className={`${
            open && "lg:w-24 lg:h-24 mx-auto"
          } w-10 h-10 rounded-full md:mt-10 lg:mt-5`}
        >
          <img
            crossOrigin="anonymous"
            src={userProfileImg}
            alt=""
            className={`w-full h-full rounded-full object-cover`}
          />
        </div>
        <h2
          className={`${
            !open && "opacity-0"
          } text-text-primary font-bold mt-3 text-center md:hidden lg:block`}
        >
          {userName}
        </h2>
        <h2
          className={`${
            !open && "opacity-0"
          } text-accent-secondary font-bold mt-3 text-center md:hidden lg:block`}
        >
          Course: {userCourse}
        </h2>
      </div>

      <div className="md:mt-8 h-[85%]  flex flex-col  gap-4  relative  ">
        {menus?.map((menu, i) => (
          <Link
            to={menu?.link}
            key={i}
            className={` ${
              menu?.margin && "mt-5"
            }  group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-secondary rounded-md text-text-primary`}
          >
            <div className="flex justify-center items-center">
              {React.createElement(menu?.icon, { size: "20" })}
            </div>
            <h2
              style={{
                transitionDelay: `${i + 3}00ms`,
              }}
              className={`md:hidden lg:block whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menu?.name}
            </h2>
            <h2
              className={`${
                open && "lg:hidden"
              } z-10 absolute left-48 bg-accent-primary font-semibold whitespace-pre text-text-secondary rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              {menu?.name}
            </h2>
          </Link>
        ))}
      </div>

      <div className="flex flex-col pb-3">
        <Link
          onClick={logOut}
          className={` ${
            logout?.margin && "mt-5"
          }  group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-secondary rounded-md text-text-primary cursor-pointer`}
        >
          <div>{React.createElement(logout.icon, { size: "20" })}</div>
          <h2
            style={{
              transitionDelay: `${5 + 3}00ms`,
            }}
            className={`md:hidden lg:block whitespace-pre duration-500 ${
              !open && "opacity-0 translate-x-28 overflow-hidden z-10"
            }`}
          >
            {logout.name}
          </h2>
          <h2
            className={`${
              open && "lg:hidden"
            } absolute left-48 bg-accent-primary font-semibold whitespace-pre text-text-secondary rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-[4.5rem] group-hover:duration-300 group-hover:w-fit  `}
          >
            {logout.name}
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default SidebarNav;
