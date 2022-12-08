import React from "react";
import { Routes, Route } from "react-router-dom";
import SidebarNav from "./pages/SidebarNav";
import LearningSupport from "./pages/LearningSupport";
import Calendar from "../src/pages/Calendar.js";
import RegistrationComponent from "./pages/RegistrationComponent";
import ChatComponent from './pages/ChatComponent'
import NavBar from "./components/NavBar";
import Forum from "./pages/Forum";

const App = () => {
  return (
    <>
      <SidebarNav />
      {/* <NavBar /> */}
      <div className="width-100 ">
      
      <Routes>
        <Route path="/register" element={<RegistrationComponent />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/learningsupport" element={<LearningSupport />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/chat" element={<ChatComponent/>} />
        <Route path="/settings" element={<LearningSupport />} />
      </Routes>
      </div>
    </>
  );
};


export default App;