import { createContext, useContext, useState } from "react"
import useLocalStorage from "../components/hooks/useLocalStorage"

const ContactsContext = createContext()


export const useContacts = () => {
    return useContext(ContactsContext)
}

export function ContactsProvider({ children }) {

    const [contacts, setContacts] = useLocalStorage('contacts', [])

    const [selectedContact, setSelectedContact] = useState({
        selectedContactID: '',
        selectedContactName: ''
    })

    function createContact(id, name) {
        setContacts(prevContacts => {
            return [...prevContacts, {id, name}]
        })
    }

    const sendMessage = () => {
        // Work in Progress
    }

    return (
        <ContactsContext.Provider value={{
            contacts,
            createContact,
            selectedContact,
            setSelectedContact,
            sendMessage
        }}>
            { children }
        </ContactsContext.Provider>
    )
}
