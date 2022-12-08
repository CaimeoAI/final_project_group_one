import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

export default function FullCalend() {
  return (
    <div className=" md:w-[100%] md:mr-3">
      <FullCalendar
        height="70vh"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        headerToolbar={{
          left: "title",
          center: "",
          right: "",
        }}
      />
    </div>
  );
}
