import React, { useContext } from "react";
import AccountInfo from "../components/Settings/AccountInfo";
import UpdatePassword from "../components/Settings/UpdatePassword";
import { MainContext } from "../context/MainContext";

const Settings = () => {
  
  const {logOut} = useContext(MainContext);

  return (
    <div className=" bg-primary w-screen h-full overflow-auto pb-20 md:pb-4 flex flex-col items-center md:inline-block">
      <div className="flex flex-col lg:flex-row lg:p-4 md:pb-0 mt-8 md:mt-12 lg:mt-24">
        <AccountInfo />
        <UpdatePassword />
      </div>
      <div className="md:hidden">
                 <button
                       onClick={logOut}
                       className="inline-block 
                                  px-6 
                                  py-2.5
                                  bg-accent-tertiary
                                  text-text-primary 
                                  font-medium  
                                  text-xs 
                                  leading-tight 
                                  uppercase 
                                  rounded 
                                  shadow-md
                                  hover:bg-hover-tertiary 
                                  hover:shadow-lg 
                                  focus:bg-slate-700 
                                  focus:shadow-lg 
                                  focus:outline-none 
                                  focus:ring-0 
                                  active:bg-slate-800 
                                  active:shadow-lg 
                                  transition 
                                  duration-150 
                                  ease-in-out">
                   Logout
                  </button>
       </div>
    </div>
  );
};

export default Settings;
