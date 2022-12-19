import React, { useContext } from "react";
import ListItems from "./ListItems.js";
import { MainContext } from "../../context/MainContext";

export default function List() {
  const { currentEvents } = useContext(MainContext);
  console.log(currentEvents);

  return (
    <div class="flex flex-col md:w-[20%] m-1">
      {currentEvents.map((event) => (
        <ListItems event={event.title} />
      ))}
    </div>
  );
}
