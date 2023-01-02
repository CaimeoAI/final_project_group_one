const Input = (props) => {
  return (
    <input
      {...props}
      className={
        "bg-transparent border border-slate-400 focus:border-slate-300 rounded text-md p-1 md:p-3 md:py-3  focus:outline-none  " +
        props.className
      }
    />
  );
};

export default Input;
