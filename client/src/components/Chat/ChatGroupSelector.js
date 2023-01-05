import { useContacts } from '../../context/ContactProvider'

export default function ChatGroupSelector(props) {

  const { selectedContact } = useContacts()

  return (
    <div className="p-4 text-left text-lg font-bold lg:text-2xl">
        <h1>{ selectedContact.email } - { selectedContact.username }</h1>
    </div>
  )
}
