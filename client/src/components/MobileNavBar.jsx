import { Link } from "react-router-dom";
import React from "react";

import { RiSettings4Line } from "react-icons/ri";
import { BsBook, BsCalendar3 } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { SlGraduation } from "react-icons/sl";

const MobileNavBar = () => {
  const menus = [
    { name: "Calendar", link: "/", icon: BsCalendar3 },
    { name: "Learning Support", link: "/learningsupport", icon: BsBook },
    { name: "Academia", link: "/academia", icon: SlGraduation },
    { name: "Chat", link: "/chat", icon: FiMessageSquare },
    { name: "Setting", link: "/settings", icon: RiSettings4Line },
  ];

  return (
    <div
      className="
      fixed 
      bottom-0
      left-0
      rigt-0
      bg-navbar
      w-full
      md:hidden
      h-16
      z-10
      "
    >
      <div className=" flex flex-row justify-around p-3">
        {menus?.map((menu, i) => (
          <Link
            to={menu?.link}
            key={i}
            className={`
            group flex items-center text-sm font-medium p-3 hover:bg-secondary rounded-md text-text-primary`}
          >
            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNavBar;
