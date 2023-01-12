import React, { useContext } from "react";
import ListItems from "./ListItems.js";
import { MainContext } from "../../context/MainContext";

export default function List() {
  const { currentEvents } = useContext(MainContext);
  return (
    <div className="flex flex-col md:w-[20%] md:pt-10 text-center text-text-primary">
      Events Scheduled
      {currentEvents.map((event) => {
        const obj = { title: event.title, date: event.startStr };
        const objStartEnd = {
          title: event.title,
          date: event.startStr.slice(0, 10),
        };
        if (event.allDay === true) {
          return <ListItems event={obj} />;
        } else {
          return <ListItems event={objStartEnd} />;
        }
      })}
    </div>
  );
}
