import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import MainContextProvider from "./context/MainContext";
import { ContactsProvider } from "./context/ContactProvider";
import { ConversationsProvider } from "./context/ConversationsProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainContextProvider>
        <ContactsProvider>
          <ConversationsProvider>
            <App />
          </ConversationsProvider>
        </ContactsProvider>
      </MainContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
