import { Routes, Route } from "react-router-dom";
import SidebarNav from "./pages/SidebarNav";
import LearningSupport from "./pages/LearningSupport";
import Calendar from "../src/pages/Calendar.js";
import RegistrationComponent from "./pages/RegistrationComponent";
import ChatComponent from "./pages/ChatComponent";
import Forum from "./pages/Forum";
import SeePost from "./components/Forum/SeePost";
import Settings from "./pages/Settings";
import MobileNavBar from "./components/MobileNavBar";

const App = () => {
  return (
    <div className="width-full h-screen flex relative">
    
      {localStorage.getItem("isLogedIn") ? (
        <>
          <SidebarNav  />
          <MobileNavBar/>

          <Routes>
            <Route path="/learningsupport" element={<LearningSupport />} />
            <Route path="/academia" element={<Forum />} />
            <Route path="/academia/:id" element={<SeePost />} />
            <Route path="/chat" element={<ChatComponent />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/" element={<Calendar />} />
          </Routes>
        </>
      ) : (
        <RegistrationComponent />
      )}
    </div>
  );
};

export default App;
