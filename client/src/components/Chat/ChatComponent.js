import ChatSearch from "./ChatSearch"
import ChatParticipants from "./ChatParticipants";
import ChatFeed from "./ChatFeed";
import ChatCreateGroup from "./ChatCreateGroup";

export default function ChatComponent() {
  return (
    <div className="p-4 text-center">

        <ChatCreateGroup/>
        <ChatSearch/>
        <ChatParticipants/>
        <ChatFeed/>

    </div>
  )
}
