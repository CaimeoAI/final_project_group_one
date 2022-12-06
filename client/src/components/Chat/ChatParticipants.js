export default function ChatParticipants() {
  return (
    <div 
        className="
            mt-6 
            p-2 
            w-full
            rounded-[25px]
      
            lg:h-screen
            lg:w-[224px]"
        style={{backgroundColor:"#212D42"}}>

       <h2 className="font-bold">Participants</h2>

        <ul className="text-left">
            <li className="m-4">Melanie</li>
            <li className="m-4">George</li>
        </ul>
    </div>
  )
}
