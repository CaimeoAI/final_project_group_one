import React from "react";
import ListItems from "./ListItems";

export default function List() {
  return (
    <div class="flex flex-col md:w-[20%] m-1">
      <ListItems />
      <ListItems />
      <ListItems/>
    </div>
  );
}
