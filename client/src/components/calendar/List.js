import React, { useContext, useEffect, useState } from "react";
import ListItems from "./ListItems.js";
import { MainContext } from "../../context/MainContext";

export default function List() {
  const { currentEvents } = useContext(MainContext);
  const[width,setWidth]=useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={`flex flex-col h-screen pt-10 md:pr-2 ${width < 768 ? 'w-full' : 'md:w-30%'} md:pt-24 lg:w-[30%] text-center text-text-primary`}>
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
