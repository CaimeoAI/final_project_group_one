import ChatGroupSelector from "./ChatGroupSelector";
import ChatMessage from "./ChatMessage";
import ChatTextInput from "./ChatTextInput";
import './ChatFeedCustomScroll.css'
import { useContacts } from "../../context/ContactProvider";

export default function ChatFeed() {

    const { conversations, selectedContact } = useContacts()

  return (
    <div 
        className="
            bg-secondary
            flex
            flex-col
            mt-4
            rounded-[25px]
            h-screen
            max-h-[536px]
            grow
            p-2
            
            lg:max-h-[670px]
            lg:mx-8
            lg:my-auto
            lg:p-6
            
            xl:max-h-[820px]
            
            2xl:max-h-[890px]">
        
        <ChatGroupSelector/>
        
        <div className="overflow-y-scroll">

            <div className=" h-full flex flex-col px-4">
                {JSON.parse(localStorage.getItem('chat-app-conversations')).filter(e => e.id === JSON.parse(localStorage.getItem('chat-app-currentConversation')).email)[0].messages?.map( message => 
                        <div key={message.index} className={"px-4 m-4 text-sm " + "text-left"}>
                            <h3 className={"text-left"}>{selectedContact.username}</h3>
                            <p 
                                className={"p-3 px-6 w-fit m-2 rounded-[25px] " + "text-left"}  
                                style={{backgroundColor: "#6F76F8", color: "white"}}>{message.text}</p>
                                {console.log(message)}
                        </div>)}

            </div>
          {/* <ChatMessage
              alignment="text-left flex flex-col"
              name="George"
              message="Hi"
              color="#6F76F8"
              text="white"/>
          <ChatMessage
              alignment="text-right flex flex-col items-end"
              name="Melanie"
              message="Hi, how are you doing?"
              color="#D9D9D9"
              text="black"/>
          <ChatMessage
              alignment="text-left flex flex-col"
              name="George"
              message="Fine, thanks."
              color="#6F76F8"
              text="white"/>

          <ChatMessage
              alignment="text-right flex flex-col items-end"
              name="Melanie"
              message="Hi, how are you doing?"
              color="#D9D9D9"
              text="black"/>
          <ChatMessage
              alignment="text-left flex flex-col"
              name="George"
              message="Fine, thanks."
              color="#6F76F8"
              text="white"/>
          <ChatMessage
              alignment="text-right flex flex-col items-end"
              name="Melanie"
              message="Hi, how are you doing?"
              color="#D9D9D9"
              text="black"/>
          <ChatMessage
              alignment="text-left flex flex-col"
              name="George"
              message="Fine, thanks."
              color="#6F76F8"
              text="white"/>
          <ChatMessage
              alignment="text-right flex flex-col items-end"
              name="Melanie"
              message="Hi, how are you doing?"
              color="#D9D9D9"
              text="black"/>
          <ChatMessage
              alignment="text-left flex flex-col"
              name="George"
              message="Fine, thanks."
              color="#6F76F8"
              text="white"/>
          <ChatMessage
              alignment="text-right flex flex-col items-end"
              name="Melanie"
              message="Hi, how are you doing?"
              color="#D9D9D9"
              text="black"/>
          <ChatMessage
              alignment="text-left flex flex-col"
              name="George"
              message="Fine, thanks."
              color="#6F76F8"
              text="white"/>
          <ChatMessage
              alignment="text-right flex flex-col items-end"
              name="Melanie"
              message="Hi, how are you doing?"
              color="#D9D9D9"
              text="black"/>
          <ChatMessage
              alignment="text-left flex flex-col"
              name="George"
              message="Fine, thanks."
              color="#6F76F8"
              text="white"/>
          <ChatMessage
              alignment="text-right flex flex-col items-end"
              name="Melanie"
              message="Hi, how are you doing?"
              color="#D9D9D9"
              text="black"/>
          <ChatMessage
              alignment="text-left flex flex-col"
              name="Jude"
              message="Hello World"
              color="#6F76F8"
              text="white"/> */}

        </div>

        <ChatTextInput/>
    </div>
  )
}
