import React from "react";

export default function ListItems(props) {
  return (
    <div className="rounded-md  h-12 m-1 bg-accent-primary text-left text-text-secondary">
      <div className="m-auto ">
        <p className="text-center p-2 text-sm ">
          {props.event.title} - {props.event.start}
        </p>
      </div>
    </div>
  );
}
