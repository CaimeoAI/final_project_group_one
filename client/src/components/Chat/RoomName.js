import { useRooms } from '../../context/RoomProvider'

export default function ChatGroupSelector() {

  const { currentRoom } = useRooms()

  return (
    <div className="p-4 text-left text-xl font-bold lg:text-2xl text-accent-primary">
        <p className="border-[2px] rounded border-hover-primary inline-block p-2">{currentRoom}</p>
    </div>
  )
}
