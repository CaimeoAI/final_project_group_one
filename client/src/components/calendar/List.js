import React from "react";
import ListItems from "./ListItems";

export default function List() {
  return (
    <div class="rounded border-2 border-blue-600 flex flex-col md:mr-2 gap-2">
      <ListItems />
      <ListItems />
      <ListItems/>
    </div>
  );
}
