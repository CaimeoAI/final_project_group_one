const Input = (props) => {
  return (
    <input
      {...props}
      className={
        "bg-slate-200 text-sm p-2  focus:outline-none  " +
        props.className
      }
    />
  );
};

export default Input;
