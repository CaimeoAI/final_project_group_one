
import React from "react";
import { Routes, Route } from "react-router-dom";
import SidebarNav from "./pages/SidebarNav";
import LearningSupport from "./pages/LearningSupport";

const App = () => {
  return (
    <>
      <SidebarNav />
      <div className="width-100 ">

      <Routes>
        <Route path="/" element={<LearningSupport />} />
        <Route path="/learningsupport" element={<LearningSupport />} />
        <Route path="/" element={<LearningSupport />} />
        <Route path="/" element={<LearningSupport />} />
        <Route path="/" element={<LearningSupport />} />
      </Routes>
      </div>
    </>
  );
};


export default App;