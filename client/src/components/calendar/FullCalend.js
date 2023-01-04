import React, { useContext, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { MainContext } from "../../context/MainContext";
import Modal from "../calendar/Modal";
import ModalDeleted from "./ModalDeleted";

export default function FullCalend() {
  const {
    /* currentEvents, */ setCurrentEvents,
    open,
    setOpen,
    title,
    setTitle,
    setStart,
    setEnd,
    selectedProp,
    setSelectedProp,
    objectModal,
    setObjectModal,
    deleted,
    setDeleted
  } = useContext(MainContext);

  const handleOpen = () => setOpen(true);

  useEffect(() => {
    if (selectedProp) {
      const calendarApi = selectedProp.view.calendar;
      calendarApi.unselect();

      // ObjectModal is the object created in modal module and received by FullCalend.js
      // In this part the calendar event is created when data is submited from modal

      if (objectModal) {
        calendarApi.addEvent({
          id: `${objectModal.title}`,
          title: objectModal.title, // String
          start: objectModal.start, // '2022-12-29T10:30:00+01:00'
          end: objectModal.end, // '2022-12-29T10:30:00+01:00'
          allDay: objectModal.allDay, // boolean
        });
        setObjectModal({
          title: null,
          allDay: false,
          start: undefined,
          end: undefined,
        });
        setTitle(null);
        setEnd(null);
        setStart(null);
      }
    }
  }, [title]);

  const handleDateClick = async (selected) => {
    setSelectedProp(selected);
    await handleOpen();
  };

 /*  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  }; */

  const handleEventClick = (selected) => {
  setSelectedProp(selected);
  setDeleted(true);
  };


  return (
    <div className=" h-[50%] p-2 md:h-[80%] md:w-[80%] md:pl-4 md:pt-4">
      <FullCalendar
        height="100%"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
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
        initialEvents={[
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
        ]}
      />
      {open && <Modal />}
      {deleted && <ModalDeleted/>}
    </div>
  );
}
