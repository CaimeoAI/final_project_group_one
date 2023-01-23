import React, { useContext, useEffect, useState } from "react";
import ListItems from "./ListItems.js";
import { MainContext } from "../../context/MainContext";

export default function List() {
  const { currentEvents } = useContext(MainContext);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`flex flex-col h-screen pt-10 ${width < 768 ? "w-full" : "md:w-30%"
        } md:pt-24 lg:w-[30%] text-center text-text-primary`}
    >
      Events Scheduled
      {currentEvents?.map((event,index) => {
        const obj = { title: event.title };
        if (event.allDay) {
          obj.allday = event.allDay;
        }
        if (event.start) {
          obj.start = event.start.slice(0,10);
        }
        if (event.end) {
          obj.end = event.end;
        }
        return <ListItems key={index} event={obj} />;
      })}
    </div>
  );
}
