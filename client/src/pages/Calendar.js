import React from "react";
import FullCalend from "../components/calendar/FullCalend.js";
import List from "../components/calendar/List.js";

const Calendar = () => {
  return (
    <div className="flex flex-col w-screen h-screen lg:flex-row bg-primary md:pl-2 ">
      <FullCalend />
      <List />
    </div>
  );
};

export default Calendar;
