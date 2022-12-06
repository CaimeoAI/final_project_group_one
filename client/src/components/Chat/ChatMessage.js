export default function ChatMessage(props) {
  return (
    <div className={"px-4 m-4 text-sm " + props.alignment}>
        <h3 className={props.align}>{props.name}</h3>
        <p 
            className={"p-3 px-6 w-fit m-2 rounded-[25px] " + props.align}  
            style={{backgroundColor: props.color, color: props.text}}>{props.message}</p>
        

    </div>
  )
}
