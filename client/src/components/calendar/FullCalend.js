import React, { useContext, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { MainContext } from "../../context/MainContext";
import Modal from "../../components/calendar/Modal.js";

export default function FullCalend() {
  const { currentEvents, setCurrentEvents } = useContext(MainContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const handleDateClick = (selected) => {
    handleOpen();
    const title = null; /* prompt("Title for the new event"); */
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();
    console.log(selected);

    if (title) {
      calendarApi.addEvent({
        id: `${selected.startStr}-${title}`,
        title /* : `${title} ` */,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay /* false */,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };
  return (
    <>
      <div className=" h-[50%] p-2 md:h-[80%] md:w-[80%] md:pl-4 md:pt-4">
        <FullCalendar
          height="100%"
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
          ]}
          headerToolbar={{
            left: "title",
            center: "prev,next",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          select={handleDateClick}
          eventClick={handleEventClick}
          eventsSet={(events) => setCurrentEvents(events)}
          eventTextColor="black"
          eventColor="pink"
          eventBorderColor="purple"
          //EventApi//
          /*  initialEvents={[
            {
              id: "12315",
              title: "All-day event ",
              date: "2022-09-14",
              backgroundColor: "green",
            },
            {
              id: "5123",
              title: "Timed event ",
              date: "2022-09-28",
            },
          ]} */
        />
      </div>
      {/* {openModal} */}
      {open && <Modal />}
    </>
  );
}
