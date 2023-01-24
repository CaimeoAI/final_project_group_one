import React from 'react'
import './ChatFeedCustomScroll.css'
import { useRooms } from '../../context/RoomProvider'
import ScrollToBottom from 'react-scroll-to-bottom'

export default function ChatMessage() {

    const { messageList } = useRooms()

    return (
        <>
            <ScrollToBottom className="h-full">
                {messageList?.map( (message, index) => 
                    
                    <div key={index} className={"flex flex-col px-4 m-2 text-sm text-right"}>
                        <div className={`flex  + ${message.author === localStorage.getItem('username')? "flex-row-reverse" : ""}`}>
                            {message.author === localStorage.getItem('username')?
                                <img src={message.photo} className="mr-2 h-[30px] w-[30px] rounded-full" alt='userIcon'/>
                                :
                                <img src={message.photo} className="ml-2 h-[30px] w-[30px] rounded-full" alt='userIcon'/>}

                            {message.author === localStorage.getItem('username')? 
                                <h3 className="px-2 text-right self-end">YOU</h3> 
                                : 
                                <h3 className="px-2 text-left self-end">{message.author}</h3>}
                        </div>
                        {message.author === localStorage.getItem('username')? 
                            <p className="bg-accent-primary text-text-secondary p-3 px-6 w-fit mt-1 mx-2 rounded-[25px] text-left ml-auto">{message.message}</p>
                            :
                            <p className="bg-accent-secondary text-text-primary p-3 px-6 w-fit mt-1 mx-2 rounded-[25px] text-left">{message.message}</p>}

                        {message.author === localStorage.getItem('username')?
                            <p className="mt-1 mx-4 text-xs text-right text-grayed-out">{message.time}</p>
                            :
                            <p className="mt-1 mx-4 text-xs text-left text-grayed-out">{message.time}</p>
                        }
                    </div>)}
            </ScrollToBottom>
        </>
    )
}
