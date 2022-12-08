import React from "react";
import FullCalend from "../components/calendar/FullCalend.js";
import List from "../components/calendar/List.js";

const Calendar = () => {
  return (
    <div
      className="flex flex-col lg:flex-row m-4 "
      style={{ backgroundColor: "lightGray" }}
    >
      <FullCalend />
      <List />
    </div>
  );
};

export default Calendar;
