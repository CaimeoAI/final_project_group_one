import { useState, useEffect } from 'react'
import JoinRoom from "../components/Chat/JoinRoom.js";
import ChatContacts from "../components/Chat/RoomList.js";
import ChatFeed from "../components/Chat/ChatFeed.js";
import JoinRoomModal from "../components/Chat/JoinRoomModal.js";
import { useRooms } from '../context/RoomProvider.js';

export default function ChatComponent() {

    const { roomList } = useRooms()
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
                lg:flex-row-reverse
                overflow-hidden">            
                
                <div className="flex flex-col lg:mx-2 md:m-4">
                    <JoinRoom/>
                    <ChatContacts/>
                </div>
                
                <ChatFeed/>
                <JoinRoomModal/>
        </div>
    )
}
