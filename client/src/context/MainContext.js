import axios from "axios";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MainContext = createContext();

export default function MainContextProvider(props) {
  //! 01 - STATES

  const [currentEvents, setCurrentEvents] = useState([]);
  const [showPostFormModal, setShowPostFormModal] = useState(false);
  const [showChatAddContactModal, setShowChatAddContactModal] = useState(false);

  //Calendar States
  const [deleted, setDeleted] = useState(false);
  const [open, setOpen] = useState(false); // controll the open close modal state
  const [title, setTitle] = useState(null); // control useEffect state in FullCalend.js
  const [start, setStart] = useState(null); // reference state for <TimePicker> Mui element in Modal.js
  const [end, setEnd] = useState(null); // reference state for <TimePicker> Mui element in Modal.js
  const [allDay, setAllDay] = useState(false); //
  // Object parameter generated in select prop inside <FullCalend>, used to controll event date in Modal.js
  const [selectedProp, setSelectedProp] = useState(null); 
  const [objectModal, setObjectModal] = useState({
    title: null,
    allDay: false,
    start: undefined,
    end: undefined,
  }); // model object to create calendar event FullCalend.js

  //* 02 - FUNCTIONS

  const getAllEvents = async() => {
    const token = "Bearer " + localStorage.getItem("token")
    try {
      const URL = `${process.env.REACT_APP_BE_URL}/calendar/events`;
    const configuration = {
      headers: {
        authorization: token,
      },
    };
      const result = await axios.get(URL, configuration)
      setCurrentEvents(result.data.data.events)
    } catch (error) {
      console.log(error)
    }
  }

  const navigateTo = useNavigate();

  const logOut = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("userID");
    localStorage.removeItem("token");
    localStorage.removeItem("isLogedIn");
    navigateTo("/login");
    window.location.reload(false);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <MainContext.Provider
      value={{
        showPostFormModal,
        setShowPostFormModal,
        currentEvents,
        showChatAddContactModal,
        setShowChatAddContactModal,
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
        setObjectModal,
        deleted,
        setDeleted,
        logOut,
        convertBase64,
        getAllEvents
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}
