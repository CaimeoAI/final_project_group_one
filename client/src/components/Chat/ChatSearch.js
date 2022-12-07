export default function ChatSearch() {
  return (
    <div            
      className="
        flex
        justify-between
        bg-[#212D42]
        mt-4
        rounded-full
        py-1.5
        w-full
        pl-4
    
        lg:w-[224px]">
        <input className="bg-transparent w-40 outline-none" type="text" placeholder="Search..."/>

        <i className="fa-solid fa-magnifying-glass text-xl mr-4"></i>
    </div>
  )
}
