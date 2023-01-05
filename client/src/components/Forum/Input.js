const Input = (props) => {
  return (
    <input
      {...props}
      className={
        "bg-transparent border border-slate-300 hover:border-slate-400  hover:shadow-xl rounded  text-sm md:text-[1.2em]  text-slate-200 p-1 md:p-3 md:py-3  focus:outline-none " +
        props.className
      }
    />
  );
};

export default Input;
