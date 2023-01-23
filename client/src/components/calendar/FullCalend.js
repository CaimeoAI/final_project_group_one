import React, { useContext, useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { MainContext } from "../../context/MainContext";
import Modal from "../calendar/Modal";
import ModalDeleted from "./ModalDeleted";
import Welcome from "./Welcome";

export default function FullCalend() {
  const {
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
    setDeleted,
    getAllEvents,
    currentEvents,
    setCurrentEvents,
  } = useContext(MainContext);

  const handleOpen = () => setOpen(true);
  const [showElement, setShowElement] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 20000); // 20 seconds

    getAllEvents();

    if (selectedProp) {
      if (objectModal) {
        setCurrentEvents((currentEventsArray) => [
          ...currentEventsArray,
          objectModal,
        ]);

        setObjectModal({
          title: null,
          allDay: false,
          start: null,
          end: null,
        });
        setTitle(null);
        setEnd(null);
        setStart(null);
      }
    }
  }, [title, showElement]);

  const handleDateClick = (selected) => {
    setSelectedProp(selected);
    handleOpen();
  };

  const handleEventClick = (selected) => {
    setSelectedProp(selected);
    setDeleted(true);
  };

  return (
    <div className=" h-[100%] w-[100%] p-2 md:h-[80%] md:pl-4 md:pt-4">
      {showElement ? (
        <Welcome text={"fade-in"} />
      ) : (
        <Welcome text={"fade-out"} />
      )}
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
        events={currentEvents}
      />
      {open && <Modal />}
      {deleted && <ModalDeleted />}
    </div>
  );
}
