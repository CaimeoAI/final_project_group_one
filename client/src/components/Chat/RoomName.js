import { useRooms } from '../../context/RoomProvider'

export default function ChatGroupSelector() {

  const { currentRoom } = useRooms()

  return (
    <div className={`p-4 text-left text-xl font-bold lg:text-2xl text-accent-primary ${currentRoom === '' ? "flex justify-center align-center m-auto" : ""}`}>
        {currentRoom === '' ?
        <p className="border-[2px] rounded-full border-accent-secondary p-2">Select a room or join one!</p>
        :
        <p className="border-[2px] rounded border-hover-primary inline-block p-2">{currentRoom}</p>
        }
        
    </div>
  )
}
