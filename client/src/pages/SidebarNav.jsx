import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { HiMenuAlt3 } from "react-icons/hi";
import { RiSettings4Line } from "react-icons/ri";
import { BsBook, BsCalendar3 } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { SlGraduation } from "react-icons/sl";
import { IoLogOutOutline } from "react-icons/io5";

import { Link } from "react-router-dom";

const SidebarNav = () => {
  const menus = [
    { name: "Calendar", link: "/", icon: BsCalendar3 },
    { name: "Learning Support", link: "/learningsupport", icon: BsBook },
    { name: "Academia", link: "/academia", icon: SlGraduation },
    { name: "Chat", link: "/chat", icon: FiMessageSquare },
    { name: "Setting", link: "/settings", icon: RiSettings4Line },
  ];
  const logout = { name: "Logout", icon: IoLogOutOutline };
  const userProfileImg = localStorage.getItem("photo");

  const [open, setOpen] = useState(true);
  const navigateTo = useNavigate();

  const logOut = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("userID");
    localStorage.removeItem("token");
    localStorage.removeItem("isLogedIn");
    navigateTo("/login");
    window.location.reload(false);
  };

  return (
    /* Sidebar Background Color */

    <div
      className={`bg-tertiary min-h-screen ${
        open ? "w-72" : "w-16"
      } duration-500 text-gray-100 px-4 `}
    >
      <div className="py-3 flex justify-end text-text-primary">
        <HiMenuAlt3
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      
      <div className="w-10 h-10 rounded-full">

        <img
          crossOrigin="anonymous"
          src={userProfileImg}
          alt=""

          className="w-full h-full rounded-full object-cover"

          

        />
      </div>
      <div className="mt-4 flex flex-col gap-4 relative ">
        {menus?.map((menu, i) => (
          <Link
            to={menu?.link}
            key={i}
            className={` ${
              menu?.margin && "mt-5"
            } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-secondary rounded-md text-text-primary`}
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
              } absolute left-48 bg-accent-primary font-semibold whitespace-pre text-text-secondary rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              {menu?.name}
            </h2>
          </Link>
        ))}
      </div>

      <div
        onClick={logOut}
        className={`mt-4 group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-secondary rounded-md text-text-primary cursor-pointer`}
      >
        <div>{React.createElement(logout.icon, { size: "20" })}</div>
        <h2
          style={{
            transitionDelay: `${5 + 3}00ms`,
          }}
          className={`whitespace-pre duration-500 ${
            !open && "opacity-0 translate-x-28 overflow-hidden"
          }`}
        >
          {logout.name}
        </h2>
        <h2
          className={`${
            open && "hidden"
          } absolute  left-28 bg-accent-primary font-semibold whitespace-pre text-text-secondary rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
        >
          {logout.name}
        </h2>
      </div>
    </div>
  );
};

export default SidebarNav;
