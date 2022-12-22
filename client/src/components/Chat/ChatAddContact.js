import { useContext } from 'react'
import { MainContext } from '../../context/MainContext'

export default function ChatAddContact() {

  const { setShowChatAddContactModal } = useContext(MainContext)

  return (
    <div>
        <button 
            className="
                mt-1
                w-56
                h-9
                text-base
                rounded-full
                text-black" 
                
            style={{
                backgroundColor:"#D9D9D9"}}
            type="button" onClick={() => setShowChatAddContactModal(true)}>Add Contact</button>
    </div>
  )
}
