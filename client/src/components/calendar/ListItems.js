import React from "react";

export default function ListItems(props) {
  return (
    <div className="rounded-md  h-12 m-1 bg-white text-left text-black">
      <div className="m-auto ">
        <p className="text-center p-2 text-xs ">
          {props.event.title.substring(0,15)} - {props.event.date}
        </p>
      </div>
    </div>
  );
}
