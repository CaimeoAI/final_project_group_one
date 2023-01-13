import { useContacts } from '../../context/ContactProvider'

export default function ChatGroupSelector(props) {

  const { selectedContact } = useContacts()
  return (
    <div className="p-4 text-left text-xl font-bold lg:text-2xl text-accent-primary">
        {selectedContact.email !== '' ? <h1>{ selectedContact.username } ({ selectedContact.email })</h1> : <h1> Select a contact</h1>}
    </div>
  )
}
