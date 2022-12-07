import ChatGroupSelector from "./ChatGroupSelector";
import ChatMessage from "./ChatMessage";
import ChatTextInput from "./ChatTextInput";
import './ChatFeedCustomScroll.css'

export default function ChatFeed() {
  return (
    <div 
        className="
            bg-[#212D42]
            flex
            flex-col
            mt-4
            rounded-[25px]
            h-screen
            max-h-[536px]
            grow
            p-2
            
            lg:max-h-[820px]
            lg:mx-8
            lg:my-auto
            lg:p-6">
        
        <ChatGroupSelector groupName="Group One"/>
        
        <div className="overflow-y-scroll">
          <ChatMessage
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
              name="George"
              message="Fine, thanks."
              color="#6F76F8"
              text="white"/>

        </div>

        <ChatTextInput/>
    </div>
  )
}
