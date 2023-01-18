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
            mt-4
            rounded-[25px]
            h-screen
            grow
            p-2
            
            md:max-h-[1100px]

            lg:max-h-[670px]
            lg:mx-8
            lg:my-auto
            lg:p-6
            
            xl:max-h-[820px]
            
            2xl:max-h-[890px]">
        
        <RoomName/>
        
        <div className="overflow-y-scroll">

            <div className="h-full flex flex-col px-4">

                <ChatMessage/>

            </div>

        </div>

        <ChatTextInput/>
    </div>
  )
}
