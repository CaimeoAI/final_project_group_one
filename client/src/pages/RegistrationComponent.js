import React, { useState } from "react";
import { Login } from "../components/Login.jsx";
import { Register } from "../components/Register.jsx";

export default function RegistrationComponent() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div>
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}
