import { createContext } from "react";

export const MainContext = createContext();

export default function MainContextProvider(props) {
  //! 01 - STATES

  //* 02 - FUNCTIONS

  return (
    <MainContext.Provider value={{}}>{props.children}</MainContext.Provider>
  );
}
