import ChatAddContact from "../components/Chat/ChatAddContact.js";
import ChatSearch from "../components/Chat/ChatSearch.js";
import ChatContacts from "../components/Chat/ChatContacts.js";
import ChatFeed from "../components/Chat/ChatFeed.js";
import AddContactModal from "../components/Chat/AddContactModal.js";

export default function ChatComponent() {
    return (
        <div 
            className="
                bg-primary
                flex
                flex-col
                p-4
                text-center 
                text-text-primary
                h-screen
                w-screen
                
                lg:flex-row-reverse">            
                
                <div className="flex flex-col lg:mx-4 lg:mt-20 lg:mb-8 2xl:mt-4">
                    <ChatAddContact/>
                    <ChatSearch/>
                    <ChatContacts/>
                </div>
                
                <ChatFeed/>
                <AddContactModal/>
        </div>
    )
}
