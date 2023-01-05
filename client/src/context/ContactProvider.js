import { createContext, useContext, useState } from "react"
import useLocalStorage from "../components/hooks/useLocalStorage"

const ContactsContext = createContext()


export const useContacts = () => {
    return useContext(ContactsContext)
}

export function ContactsProvider({ children }) {

    const [userProfile, setUserProfile] = useState({})
    // console.log(userProfile.email);

    const [contacts, setContacts] = useLocalStorage('contacts', [])

    const [selectedContact, setSelectedContact] = useState({
        email: '',
        username: ''
    })

    const [conversations, setConversations] = useLocalStorage('conversations', [])

    const createConversation = (id) => {
        setConversations(prevConversations => {
            return [...prevConversations, {id: id, messages: []}]
        })
    }

    const createContact = (id, name) => {
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
        console.log(selectedContact);
        addMessage(selectedContact, text, userProfile.email)
    }

    const messageOrigin = conversations

    console.log(messageOrigin);

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



// { id: recipientEmail
//   messages: [ { sender, text }, { sender, text }, { sender, text }]
// },
// { id: recipientEmail
//     messages: [ { sender, text }, { sender, text }, { sender, text }]
//  },