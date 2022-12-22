import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import MainContextProvider from "./context/MainContext";
import { ContactsProvider } from "./context/ContactProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainContextProvider>
        <ContactsProvider>
            <App />
        </ContactsProvider>
      </MainContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
