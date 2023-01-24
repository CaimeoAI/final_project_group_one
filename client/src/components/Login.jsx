/* eslint-disable*/
import { useState } from "react";
import axios from "axios";
import LoginImage from "../assets/login-resized.jpg";
import Logo from "../assets/logo.png";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const navigateTo = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.email !== "" || userData.email !== undefined) {
      axios
        .post(`${process.env.REACT_APP_BE_URL}/auth/login`, {
          email: e.target.email.value,
          password: e.target.password.value,
        })
        .then((res) => {
          console.log("LOGIN response from backend", res);
          localStorage.setItem("username", res.data.data.user.name);
          localStorage.setItem("email", res.data.data.user.email);
          localStorage.setItem("userID", res.data.data.user._id);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("photo", res.data.data.user.photo);
          localStorage.setItem("name", res.data.data.user.name);
          localStorage.setItem("course", res.data.data.user.course);

          if (res.data.status === "success") {
            localStorage.setItem("isLogedIn", true);
            toast.success("Logged in successfully!");
            navigateTo("/");
            window.location.reload(false);
          }
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    }
  };

  return (
    <div className="flex flex-row-reverse overflow-hidden h-screen w-screen">
      <Toaster
        toastOptions={{
          success: {
            style: {
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              color: "#111827",
              padding: "15px 25px",
            },
          },
          error: {
            style: {
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              color: "#111827",
              padding: "15px 25px",
            },
          },
        }}
      />

      <div className="flex flex-col text-center text-text-primary  bg-primary  w-screen lg:w-1/2 justify-center">
        <img 
            className="mx-auto w-[50%] animate-pulse" 
            src={Logo} 
            alt="logo" />

        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-nowrap md:flex  justify-center items-center "
        >
          <input
            type="email"
            placeholder="email address"
            id="email"
            name="email"
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
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            name="password"
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
          />
          <button
            type="submit"
            className="
                      mt-4
                      w-72
                      h-12
                      text-base
                      rounded-full
                      text-text-primary
                      bg-accent-secondary
                      hover:bg-hover-secondary"
          >
            LOGIN
          </button>
        </form>
        <button className="mt-4 underline text-text-primary">
          Forgot your password?{" "}
        </button>
        <button
          className="mt-10 text-text-primary"
          onClick={() => props.onFormSwitch("register")}
        >
          Don't have an account?
          <span
            className="hover:text-accent-secondary 
                         ml-1
                         cursor-pointer
                         hover:underline
                         hover:font-semibold
                         hover:decoration-accent-secondary 
                         transition 
                         duration-250 
                         ease-in-out">
            Register here.
          </span>
        </button>
      </div>
      <div className="hidden lg:block overflow-hidden w-1/2 h-screen">
        <img className="lg:w-full lg:h-full" src={LoginImage} alt="loginImage" />
      </div>
    </div>
  );
};
