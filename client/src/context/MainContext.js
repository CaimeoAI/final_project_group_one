import React, { createContext, useState } from "react";

export const MainContext = createContext();

export default function MainContextProvider(props) {
  //! 01 - STATES
  const [currentEvents, setCurrentEvents] = useState([]);
  //* 02 - FUNCTIONS

  return (
    <MainContext.Provider value={{ currentEvents, setCurrentEvents, }}>
      {props.children}
    </MainContext.Provider>
  );
}
