import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import MainContextProvider from "./context/MainContext";
import { RoomsProvider } from "./context/RoomProvider";
import { ForumProvider } from "./context/ForumProvider";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <MainContextProvider>
        <RoomsProvider>
          <ForumProvider>
            <App />
          </ForumProvider>
        </RoomsProvider>
      </MainContextProvider>
    </BrowserRouter>
);
