import { useState } from "react"
import { useContacts } from "../../context/ContactProvider"


export default function ChatTextInput() {

  const [text, setText] = useState("")

  const { sendMessage } = useContacts()

  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage(JSON.parse(localStorage.getItem('chat-app-currentConversation')).email, text)
    setText("")
  }

  return (
    <div className="mt-auto 
                    w-full 
                    py-4 
                    px-2 
                    border-t-[1px] 
                    border-accent-primary">

      <form className="flex" onSubmit={handleSubmit}>
        <input className="w-full 
                          bg-transparent 
                          font-bold 
                          outline-none 
                          text-accent-primary" 
               type="text" 
               onChange={(e) => setText(e.target.value)}
               onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSubmit()
                }
               }}
               value={text} 
               placeholder="Enter text..."/>

        <button type="submit" className="px-4 py-1 bg-accent-secondary hover:bg-hover-secondary rounded">SEND</button>
      </form>
        
    </div>
  )
}
