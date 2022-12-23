import { createContext, useContext } from "react"
import useLocalStorage from "../components/hooks/useLocalStorage"

const ContactsContext = createContext()


export const useContacts = () => {
    return useContext(ContactsContext)
}

export function ContactsProvider({ children }) {

    const [contacts, setContacts] = useLocalStorage('contacts', [])

    function createContact(id, name) {
        setContacts(prevContacts => {
            return [...prevContacts, {id, name}]
        })
    }

    return (
        <ContactsContext.Provider value={{
            contacts,
            createContact
        }}>
            { children }
        </ContactsContext.Provider>
    )
}
