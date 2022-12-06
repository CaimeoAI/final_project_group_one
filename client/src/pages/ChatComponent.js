import ChatCreateGroup from "../components/Chat/ChatCreateGroup.js";
import ChatSearch from "../components/Chat/ChatSearch.js";
import ChatParticipants from "../components/Chat/ChatParticipants.js";
import ChatFeed from "../components/Chat/ChatFeed.js";

export default function ChatComponent() {
    return (
        <div 
            className="
                flex
                flex-col
                p-4 
                text-center 
                text-white
                h-screen
                w-screen
                
                lg:flex-row-reverse"
                style={{backgroundColor:"#152238"}}>            
                
                <div className="flex flex-col lg:mx-4 lg:mt-20 lg:mb-8">
                    <ChatCreateGroup/>
                    <ChatSearch/>
                    <ChatParticipants/>
                </div>

                <ChatFeed/>
        </div>
    )
}
