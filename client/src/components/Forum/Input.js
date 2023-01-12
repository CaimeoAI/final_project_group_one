const Input = (props) => {
  return (
    <input
      {...props}
      id="form-input"
      className={
        "bg-transparent border border-grayed-out hover:border-slate-400  rounded  text-sm md:text-[16px]  text-text-primary p-1 md:p-3 md:py-3  focus:outline-none " +
        props.className
      }
    />
  );
};

export default Input;
