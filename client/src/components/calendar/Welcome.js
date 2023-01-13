import React from "react";

export default function Welcome(text) {
  
  const userName = localStorage.getItem("name");
  const upperCaseName = userName.charAt(0).toUpperCase() + userName.slice(1);

  return (
    <div className={text.text}>
       <h1>
        Welcome {upperCaseName}!
      </h1>
    </div>
  );
}
