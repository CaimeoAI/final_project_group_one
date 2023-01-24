import { useContext } from 'react'
import { MainContext } from '../../context/MainContext'
import { useRooms } from '../../context/RoomProvider'

export default function ChatAddContact() {

  const { setShowChatAddContactModal } = useContext(MainContext)
  const {roomList} = useRooms()

  return (
    <div className={`${roomList.length === 0 ? "animate-bounce" : ""}`}>
        <button 
            className="
                mt-1
                w-56
                h-9
                text-base
                rounded-full
                text-text-primary
                bg-accent-secondary
                hover:bg-hover-secondary"
            type="button" onClick={() => setShowChatAddContactModal(true)}>JOIN ROOM</button>
    </div>
  )
}
