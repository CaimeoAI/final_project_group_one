function Textarea(props) {
  return (
    <textarea
      {...props}
      className={
        "bg-gray-500 text-sm p-2 rounded-md focus:outline-none  " +
        props.className
      }
    />
  );
}

export default Textarea;
