import React from 'react'
import './ChatFeedCustomScroll.css'

export default function ChatMessage(props) {
    return (
        <>
            {props.selectedConversation?.map( message => 
                <div key={message.index} className={"flex flex-col px-4 m-2 text-sm " + "text-right"}>
                {message.sender === localStorage.getItem('email')? <h3 className="mx-2 text-right">YOU</h3> : <h3 className="mx-2 text-left">{JSON.parse(localStorage.getItem('chat'))}</h3>}
                <p className={"p-3 px-6 w-fit m-2 rounded-[25px] " + "text-left ml-auto"}  
                style={{backgroundColor: "#6F76F8", color: "white"}}>{message.text}</p>
            </div>)}
        </>
    )
}
