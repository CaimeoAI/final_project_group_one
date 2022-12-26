import React, { useContext } from "react";
import ListItems from "./ListItems.js";
import { MainContext } from "../../context/MainContext";

export default function List() {
  const { currentEvents } = useContext(MainContext);
  console.log(currentEvents);
  
  return (
    <div className="flex flex-col md:w-[20%] md:pt-4 ">
      {currentEvents.map((event) => (
        <ListItems event={event.title + event.startStr}/>
      ))}
    </div>
  );
}
