import { useContacts } from '../../context/ContactProvider'

export default function ChatContacts() {

  const { contacts, setSelectedContact } = useContacts()
  
  return (
    <div 
        className="
            mt-6 
            p-2 
            w-full
            rounded-[25px]
      
            lg:h-screen
            lg:w-[224px]"
        style={{backgroundColor:"#212D42"}}>

       <h2 className="font-bold">Contacts</h2>

        <ul className="text-left">
            {contacts.map(contact => (
               <li className="m-4 px-4 py-1 hover:bg-gray-600 rounded-full active:bg-gray-900 focus:" key={contact.id} onClick={() => setSelectedContact({email:contact.id, username:contact.name})}>{contact.name}</li>
            ))}
        </ul>
    </div>
  )
}
