import Button from "@mui/material/Button"
import SendIcon from "@mui/icons-material/Send"
import { useRooms } from "../../context/RoomProvider"

export default function ChatTextInput() {

  const { currentMessage, setCurrentMessage, sendMessage, currentRoom } = useRooms()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (currentMessage !== "") {
      sendMessage()
      setCurrentMessage("")
    }
  }

  return (
    <div className={`mt-auto 
                    w-full 
                    py-4 
                    px-2 
                    border-t-[1px] 
                    border-grayed-out ${currentRoom === '' ? "hidden" : ""}`}>

      <form className="flex" onSubmit={handleSubmit}>
        <input className="w-full 
                          bg-transparent 
                          font-bold 
                          outline-none 
                          text-accent-primary"
               type="text" 
               onChange={(event) => setCurrentMessage(event.target.value)}

               value={currentMessage} 
               placeholder="Enter text..."/>

        {/* <button type="submit" className="px-4 py-1 bg-accent-secondary hover:bg-hover-secondary rounded">SEND</button> */}
        <Button
            sx={{
              backgroundColor: '#047857',
              marginTop: "10px",
              float: "right",
            }}
            variant="contained"
            type="submit"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
      </form>
        
    </div>
  )
}
