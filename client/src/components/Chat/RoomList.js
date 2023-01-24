import { useEffect } from 'react'
import { useRooms } from '../../context/RoomProvider'

export default function ChatContacts() {

  const { roomList, setRoom, setCurrentRoom, socket, setRoomList, deleteRoomFromDatabase, currentRoom } = useRooms()

  const selectRoomHandler = async (room) => {
    setRoom(room)
    setCurrentRoom(room)
    socket.emit('join_room', room)
  }

  const handleDeleteRoom = (room) => {
    setRoom(room)
    deleteRoomFromDatabase(room)
    setRoomList(roomList.filter((x) => x !== room))
    setCurrentRoom('')
    setRoom('')
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
            {roomList.map( (roomX, index) => (
               <li className={`m-4
                              px-4 
                              py-2 
                              text-accent-primary 
                              hover:bg-hover-primary 
                              rounded-full 
                              active:bg-grayed-out
                              hover:cursor-pointer ${roomX === currentRoom ? "bg-hover-primary" : ""}`} 
                    key={index} 
                    onClick={() => selectRoomHandler(roomX)}>
                  <span className="flex justify-between">
                    <p>{roomX}</p>
                    <i className="fa-solid fa-xmark my-auto" onClick={() => handleDeleteRoom(roomX)}></i>
                  </span>
                </li>
            ))}
        </ul>
    </div>
  )
}
