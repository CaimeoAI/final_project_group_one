/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import RoomName from "./RoomName";
import ChatTextInput from "./ChatTextInput";
import ChatMessage from "./ChatMessage";

import './ChatFeedCustomScroll.css'


export default function ChatFeed() {

  return (
    <div 
        className="
            bg-secondary
            flex
            flex-col
            my-2
            mb-14
            rounded-[25px]
            grow
            overflow-y-scroll
            
            md:p-2
            md:m-4">
        
        <RoomName/>
        
        <div className="overflow-y-scroll">

            <div className="h-full flex flex-col md:px-4">

                <ChatMessage/>

            </div>

        </div>

        <ChatTextInput/>
    </div>
  )
}
