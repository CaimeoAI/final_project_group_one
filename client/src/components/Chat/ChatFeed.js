/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ChatGroupSelector from "./ChatGroupSelector";
import ChatTextInput from "./ChatTextInput";
import ChatMessage from "./ChatMessage";

import './ChatFeedCustomScroll.css'


export default function ChatFeed(props) {


  return (
    <div 
        className="
            bg-secondary
            flex
            flex-col
            mt-4
            rounded-[25px]
            h-screen
            max-h-[536px]
            grow
            p-2
            
            lg:max-h-[670px]
            lg:mx-8
            lg:my-auto
            lg:p-6
            
            xl:max-h-[820px]
            
            2xl:max-h-[890px]">
        
        <ChatGroupSelector/>
        
        <div className="overflow-y-scroll">

            <div className="h-full flex flex-col px-4">

                {/* <ChatMessage selectedConversation={props.selectedConversation}/> */}

                {props.selectedConversation?.map( message => 
                    <div key={message.index} className={"flex flex-col px-4 m-2 text-sm " + "text-right"}>
                    {message.sender === localStorage.getItem('email')? <h3 className="mx-2 text-right">YOU</h3> : <h3 className="mx-2 text-left">{JSON.parse(localStorage.getItem('chat'))}</h3>}
                    <p className={"p-3 px-6 w-fit m-2 rounded-[25px] " + "text-left ml-auto"}  
                    style={{backgroundColor: "#6F76F8", color: "white"}}>{message.text}</p>
                </div>)}
            </div>

        </div>

        <ChatTextInput messageToggler={props.messageToggler} />
    </div>
  )
}
