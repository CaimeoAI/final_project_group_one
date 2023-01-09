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
                text-text-primary
                bg-accent-secondary
                hover:bg-hover-secondary"
            type="button" onClick={() => setShowChatAddContactModal(true)}>Add Contact</button>
    </div>
  )
}
