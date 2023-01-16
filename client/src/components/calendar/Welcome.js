import React from "react";

export default function Welcome(text) {
  return (
    <div className={text.text}>
      <h1>Welcome (username)</h1>
    </div>
  );
}
