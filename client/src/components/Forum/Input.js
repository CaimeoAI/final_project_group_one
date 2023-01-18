const Input = (props) => {
  return (
    <input
      {...props}
      id="form-input"
      className={
        "bg-secondary border border-hover-primary hover:border-slate-400  rounded  text-sm md:text-[16px]  text-text-primary p-[10px] md:p-3  mb-2  focus:outline-none " +
        props.className
      }
    />
  );
};

export default Input;