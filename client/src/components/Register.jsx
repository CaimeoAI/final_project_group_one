import React, { useState } from "react";
import Avatar from "../assets/avatar-profile.jpeg";
import RegisterImage from "../assets/registration.jpg";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="lg:flex flex-row">
      <div className="flex flex-col text-center text-white w-screen h-screen bg-[#152238] lg:w-1/2 justify-center">
        <h1 className="pt-10">REGISTRATION</h1>
        <div className="flex justify-center">
          <img className="my-10 w-20" src={Avatar} alt="avatar" />
        </div>
        <form
          className="flex flex-col flex-nowrap md:flex  justify-center items-center"
          onSubmit={handleSubmit}
        >
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

          <select
            required
            className="
            mt-4 
            w-72 
            h-12 
            text-base 
            rounded-full 
            text-white border-2 
            border-[#203354]
            bg-[#152238]
            text-center"
          >
            <option value="" disabled selected>
              select field...
            </option>
            <option value="WebDev">WebDev</option>
            <option value="DigitalMarketing">Digital Marketing</option>
            <option value="AWS">AWS</option>
            <option value="Python">Python</option>
          </select>

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
      <div className="hidden lg:block w-1/2">
        <img
          className="lg:w-full h-full bg-cover bg-fixed"
          src={RegisterImage}
          alt="registrationImage"
        />
      </div>
    </div>
  );
};
