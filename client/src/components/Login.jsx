import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="flex flex-col justify-center text-center text-white h-screen bg-[#152238]">
      <form onSubmit={handleSubmit}>
        <input
          className="
          mt-4
          w-72
          h-12
          text-base
          rounded-full
          text-white
          border-2 
          border-[#203354]
          bg-[#152238]
          text-center"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email address"
          id="email"
          name="email"
        />

        <input
          className="
         mt-4
         w-72
         h-12
         text-base
         rounded-full
         text-white
         border-2 
         border-[#203354]
         bg-[#152238]
         text-center"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="password"
          id="password"
          name="password"
        />
        <button
          className="
                mt-4
                w-72
                h-12
                text-base
                rounded-full
                text-white
                bg-[#334563]"
          type="submit"
        >
          LOGIN
        </button>
      </form>
      <button className="mt-4 underline">Forgot your password?</button>
      <button
        className="mt-10 underline"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
};
