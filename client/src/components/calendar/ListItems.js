import React from "react";
import { v4 as uuidv4 } from 'uuid';

export default function ListItems(props) {
  // const id = uuidv4()
  // return (
  //   <div key={id} className="rounded-md  h-12 m-1 bg-accent-primary text-left text-text-secondary">
  //     <div key={id} className="m-auto ">
  //       <p key={id} className="text-center p-2 text-xs ">
  //         {props.event.title} - {props.event.start}
  //       </p>
  //     </div>
  //   </div>
  // );
  return (
    <div key={uuidv4()} className="rounded-md  h-12 m-1 bg-secondary text-left text-text-primary">
      <div>
        <p className="text-center p-2 text-xs ">
          {props.event.title} - {props.event.start}
        </p>
      </div>
    </div>
  );
}