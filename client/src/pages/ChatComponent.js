import { useState, useEffect } from 'react'
import JoinRoom from "../components/Chat/JoinRoom.js";
import ChatContacts from "../components/Chat/RoomList.js";
import ChatFeed from "../components/Chat/ChatFeed.js";
import JoinRoomModal from "../components/Chat/JoinRoomModal.js";

export default function ChatComponent() {

    return (
        <div 
            className="
                bg-primary
                flex
                flex-col
                p-4
                text-center 
                text-text-primary
                h-screen
                w-screen
                pb-16
                lg:flex-row-reverse">            
                
                <div className="flex flex-col lg:mx-4 lg:mt-20 lg:mb-8 2xl:mt-4">
                    <JoinRoom/>
                    <ChatContacts/>
                </div>
                
                <ChatFeed/>
                <JoinRoomModal/>
        </div>
    )
}
