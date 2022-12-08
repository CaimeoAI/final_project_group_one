
import React from "react";
import Calendar from "../src/pages/Calendar.js";
import RegistrationComponent from "./pages/RegistrationComponent";
import ChatComponent from './pages/ChatComponent'
import NavBar from "./components/NavBar";
import Forum from "./pages/Forum";

function App() {
  return (
    <div>
      <RegistrationComponent />
    <Calendar />
      <ChatComponent/>
      <NavBar />
      <Forum />
      

    </div>
  );
}

export default App;
