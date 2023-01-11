import { useContacts } from '../../context/ContactProvider'

export default function ChatContacts() {

  const { contacts, setSelectedContact, conversations } = useContacts()
  
  return (
    <div 
        className="
            mt-6 
            p-2 
            w-full
            rounded-[25px]
            bg-secondary
            lg:h-screen
            lg:w-[224px]">

       <h2 className="font-bold text-accent-primary">Contacts</h2>

        <ul className="text-left">
            {contacts.map(contact => (
               <li className="m-4 px-4 py- text-accent-primary hover:bg-hover-primary rounded-full active:bg-gray-900 focus:" key={contact.id} onClick={() => setSelectedContact({email:contact.id, username:contact.name, conversation: conversations?.filter(e => e.id === JSON.parse(localStorage.getItem('chat-app-currentConversation')).email)})}>{contact.name}</li>
            ))}
        </ul>
    </div>
  )
}
