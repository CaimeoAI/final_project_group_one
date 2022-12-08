const  Input = (props) => {
    return (
        <input
        {...props}
        className={
        "bg-gray-500 text-sm p-2 border border-black rounded-md block " +
        props.className
        }
    />
    );
}

export default Input;
