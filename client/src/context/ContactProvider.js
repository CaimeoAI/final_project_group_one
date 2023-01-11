import { createContext, useContext, useState, useEffect } from "react"
import useLocalStorage from "../components/hooks/useLocalStorage"

const ContactsContext = createContext()


export const useContacts = () => {
    return useContext(ContactsContext)
}

export function ContactsProvider({ children }) {

    const [userProfile, setUserProfile] = useState({})

    const [contacts, setContacts] = useLocalStorage('contacts', [])

    const [conversations, setConversations] = useLocalStorage('conversations', [])

    const [selectedContact, setSelectedContact] = useLocalStorage('currentConversation', {
        email: '',
        username: ''
    })

    useEffect(() => {
      return
    }, [conversations])
    
    const createConversation = (id) => {
        setConversations(prevConversations => {
            return [...prevConversations, {id: id, messages: []}]
        })
    }

    const createContact = (id, name) => {
        console.log(userProfile)
        setContacts(prevContacts => {
            createConversation(id)
            return [...prevContacts, {id, name}]
        })
    }

    const addMessage = (selectedContact, text, sender) => {

        const recipientEmail = selectedContact
        setConversations(prevConversations => {
            let madeChange = false
            const newMessage = { sender, text }
            const newConversations = prevConversations.map(conversation => {
                console.log(recipientEmail)

                if (conversation.id === recipientEmail){
                    madeChange = true
                    return {
                        ...conversation, messages: [...conversation.messages, newMessage]
                    }
                }

                return conversation
            })
            
            if (madeChange) {
                return newConversations
            } else {
                return [...prevConversations, {recipient: recipientEmail, messages: [newMessage]}]
            }
        })
    }

    const sendMessage = (selectedContact, text) => {
        const myEmail = localStorage.getItem('email')
        addMessage(selectedContact, text, myEmail)
    }

    const messageOrigin = conversations

    return (
        <ContactsContext.Provider value={{
            contacts,
            createContact,
            selectedContact,
            setSelectedContact,
            sendMessage,
            setUserProfile,
            userProfile,
            messageOrigin
        }}>
            { children }
        </ContactsContext.Provider>
    )
}