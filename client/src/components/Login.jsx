import React, { useState } from "react";
import LoginImage from "../assets/login.jpg";
import axios from "axios";
import { useContacts } from "../context/ContactProvider.js";

export const Login = (props) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  })

  const Context = useContacts();

  const handleSubmit = (e) => {
    e.preventDefault();

    //! Gives error 400 Bad Request
    // setUserData({
    //   email: e.target.email.value,
    //   password: e.target.password.value,
    // });

    if (userData.email !== "" || userData.email !== undefined) {
      axios
        .post(`${process.env.REACT_APP_BE_URL}/auth/login`, {
          email: e.target.email.value,
          password: e.target.password.value,
        })
        .then((res) => {
          console.log("response from backend", res);
          console.log(res);
          Context.setUserProfile(res.data.data.user);
          localStorage.setItem("email", res.data.data.user.email);
          localStorage.setItem("currentCourse", res.data.data.user.course)
          console.log("email", res.data.data.user.email);
          localStorage.setItem("userID", res.data.data.user._id);
          localStorage.setItem("token", res.data.token);
        })
        .catch((error) => console.log(error));
    }
  }

  return (
    <div className="lg:flex flex-row-reverse">
      <div className="flex flex-col text-center text-text-primary w-screen h-screen bg-primary lg:w-1/2 justify-center">
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
          text-text-primary
          border-2 
          border-secondary
          bg-primary
          text-center"
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
        text-text-primary
        border-2 
        border-secondary
        bg-primary
        text-center"
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
                text-text-primary
                bg-accent-secondary
                hover:bg-hover-secondary"
            type="submit"
          >
            LOGIN
          </button>
        </form>
        <button className="mt-4 underline text-text-primary">Forgot your password? </button>
        <button
          className="mt-10 underline text-text-primary"
          onClick={() => props.onFormSwitch("register")}
        >
          Don't have an account? Register here.
        </button>
      </div>
      <div className="hidden lg:block w-1/2">
        <img
          className="lg:w-full h-full bg-cover"
          src={LoginImage}
          alt="loginImage"
        />
      </div>
    </div>
  );
};
