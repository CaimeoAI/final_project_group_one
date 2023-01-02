import React, { createContext, useState } from "react";

export const MainContext = createContext();

export default function MainContextProvider(props) {
  //! 01 - STATES

  const [currentEvents, setCurrentEvents] = useState([]);
  const [showPostFormModal, setShowPostFormModal] = useState(false);

  //Calendar States
  const [open, setOpen] = useState(false); // controll the open close modal state
  const [title, setTitle] = useState(null); // control useEffect state in FullCalend.js
  const [start, setStart] = useState(null); // reference state for <TimePicker> Mui element in Modal.js
  const [end, setEnd] = useState(null); // reference state for <TimePicker> Mui element in Modal.js
  const [allDay, setAllDay] = useState(false); //
  const [selectedProp, setSelectedProp] = useState(null); // Object parameter generated in select prop inside <FullCalend>, used to controll event date in Modal.js
  const [objectModal, setObjectModal] = useState({
    title: null,
    allDay: false,
    start: undefined,
    end: undefined,
  }); // model object to create calendar event FullCalend.js

  const [showChatAddContactModal, setShowChatAddContactModal] = useState(false)
  
  //* 02 - FUNCTIONS

  return (
    <MainContext.Provider
      value={{
        showPostFormModal,
        setShowPostFormModal,
        currentEvents,
        showChatAddContactModal, 
        setShowChatAddContactModal,
        currentEvents, 
        setCurrentEvents,
        open,
        setOpen,
        title,
        setTitle,
        start, 
        setStart,
        end,
        setEnd,
        allDay,
        setAllDay,
        selectedProp,
        setSelectedProp,
        objectModal,
        setObjectModal
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}
