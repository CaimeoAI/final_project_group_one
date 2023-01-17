import React from "react";

export default function Welcome(text) {
  return (
    <div className={text.text}>
      <h1>Welcome {localStorage.getItem("name")}!</h1>
    </div>
  );
}
