import React, { useState } from "react";
import Avatar from "../assets/avatar-profile.jpeg";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="flex flex-col text-center text-white h-screen bg-[#152238]">
      <h1 className="mt-10">REGISTRATION</h1>
      <div className="flex justify-center">
        <img className="my-10 w-20" src={Avatar} alt="avatar" />
      </div>
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
          type="selecfield"
          placeholder="select field..."
          id="selecfield"
          name="selecfield"
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
          type="confpass"
          placeholder="confirm password"
          id="confpass"
          name="confpass"
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
          SUBMIT
        </button>
      </form>
      <button
        className="mt-10 underline"
        onClick={() => props.onFormSwitch("login")}
      >
        Already have an account? Login here.
      </button>
    </div>
  );
};
