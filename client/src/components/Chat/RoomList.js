import { useEffect } from 'react'
import { useRooms } from '../../context/RoomProvider'

export default function ChatContacts() {

  const { roomList, setRoom, setCurrentRoom, socket } = useRooms()

  const selectRoomHandler = async (room) => {
    setRoom(room)
    setCurrentRoom(room)
    socket.emit('join_room', room)
  }

  return (
    <div 
        className="
            mt-2
            md:mt-6
            md:w-full
            md:mx-auto

            p-2
            rounded-[25px]
            bg-secondary
            lg:h-screen">

       <h2 className="font-bold text-accent-primary">Your Rooms</h2>

        <ul className="text-left">
            {roomList.map( (room, index) => (
               <li className="m-4
                              px-4 
                              py-2 
                              text-accent-primary 
                              hover:bg-hover-primary 
                              rounded-full 
                              active:bg-grayed-out
                              focus:" 
                    key={index} 
                    onClick={() => selectRoomHandler(room)}>
               {room}</li>
            ))}
        </ul>
    </div>
  )
}
