import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import MainContextProvider from "./context/MainContext";
import { ContactsProvider } from "./context/ContactProvider";
import { ForumProvider } from "./context/ForumProvider";
import AuthProvider from "./context/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainContextProvider>
        <AuthProvider>
        <ContactsProvider>
          <ForumProvider>
            <App />
          </ForumProvider>
        </ContactsProvider>
        </AuthProvider>
      </MainContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
