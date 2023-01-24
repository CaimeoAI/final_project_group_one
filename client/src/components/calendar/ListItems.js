import React from "react";

export default function ListItems(props) {

  return (

    <div className="rounded-md  h-12 m-1 bg-secondary text-left text-text-primary">

      <div>
        <p className="text-center p-2 text-xs ">
          {props.event.title} - {props.event.start}
        </p>
      </div>
    </div>
  );
}