import React, { createContext, useState } from "react";

export const MainContext = createContext();

export default function MainContextProvider(props) {
  //! 01 - STATES

  const [currentEvents, setCurrentEvents] = useState([]);
  const [showPostFormModal, setShowPostFormModal] = useState(false);
  //* 02 - FUNCTIONS

    return (
    <MainContext.Provider
      value={{
        showPostFormModal,
        setShowPostFormModal,
        currentEvents, 
        setCurrentEvents,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}
