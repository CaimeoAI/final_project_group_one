import { useRooms } from '../../context/RoomProvider'

export default function ChatGroupSelector() {

  const { currentRoom } = useRooms()

  return (
    <div className="p-4 text-left text-xl font-bold lg:text-2xl text-accent-primary">
        {currentRoom}
    </div>
  )
}
