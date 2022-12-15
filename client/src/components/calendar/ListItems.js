import React from "react";

export default function ListItems(props) {

  return (
    <div className="rounded-md  h-12 m-1 bg-white">
      <div className="m-2 ml-6 ">
        <p>{props.event}</p>
      </div>
    </div>
  );
}
