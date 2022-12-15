import { createContext, useState } from "react";

export const MainContext = createContext();

export default function MainContextProvider(props) {
  //! 01 - STATES
  const [showPostFormModal, setShowPostFormModal] = useState(false);

  //* 02 - FUNCTIONS

  return (
    <MainContext.Provider
      value={{
        showPostFormModal,
        setShowPostFormModal,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}
