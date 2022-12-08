import ChatCreateGroup from "../components/Chat/ChatCreateGroup.js";
import ChatSearch from "../components/Chat/ChatSearch.js";
import ChatParticipants from "../components/Chat/ChatParticipants.js";
import ChatFeed from "../components/Chat/ChatFeed.js";

export default function ChatComponent() {
    return (
        <div 
            className="
                bg-[#152238]
                flex
                flex-col
                p-4
                text-center 
                text-white
                h-screen
                w-screen
                
                lg:flex-row-reverse">            
                
                <div className="flex flex-col lg:mx-4 lg:mt-20 lg:mb-8 2xl:mt-4">
                    <ChatCreateGroup/>
                    <ChatSearch/>
                    <ChatParticipants/>
                </div>
                
                <ChatFeed/>
        </div>
    )
}
