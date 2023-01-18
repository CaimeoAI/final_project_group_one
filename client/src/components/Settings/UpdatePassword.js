/* eslint-disable*/
import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useForum } from "../../context/ForumProvider";

const UpdatePassword = () => {
  const { getLocalStorageData } = useForum();
  const token = getLocalStorageData("token");
  const [pass, setPass] = useState({
    passwordCurrent: "",
    password: "",
    passwordConfirm: "",
  });

  const updateUserDetails = (e) => {
    return setPass({ ...pass, [e.target.name]: e.target.value });
  };

  const updatePassword = async (e) => {
    e.preventDefault();
    const URL = `${process.env.REACT_APP_BE_URL}/auth/updateMyPassword`;
    const configuration = {
      headers: {
        authorization: token,
      },
    };

    try {
      const result = await axios.patch(URL, pass, configuration);
      localStorage.setItem("token", result.data.token);
      if (result.data.status === "success") {
        localStorage.setItem("isLogedIn", true);
        toast.success("Your password has been successfully changed.");
        window.setTimeout(() => {
          location.assign("/");
        });
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="md:m-5 rounded-md pb-10 lg:w-5/12 ">
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
      <h1 className="text-xl md:text-[25px] font-bold px-10 pt-8 text-text-primary md:pl-20 lg:pl-10">
        Password
      </h1>
      <form onSubmit={updatePassword}>
        <div className="w-full pt-12">
          <div className="mb-8 px-10 md:px-20 lg:px-10">
            <label className="mb-3 block text-base font-medium text-[#929DA7]">
              Current Password
            </label>
            <div className="relative">
              <input
                name="passwordCurrent"
                onChange={(e) => updateUserDetails(e)}
                type="password"
                placeholder="••••••••"
                minLength="8"
                className="w-full bg-transparent  border-hover-primary focus:border-grayed-out active:border-grayed-out placeholder-hover-primary rounded-md border border-success py-3 px-12 text-text-primary  outline-none transition"
              />
              <span className="absolute top-1/2 left-4 -translate-y-1/2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.16797 10.0007C3.70773 10.0007 3.33464 10.3737 3.33464 10.834V16.6673C3.33464 17.1276 3.70773 17.5007 4.16797 17.5007H15.8346C16.2949 17.5007 16.668 17.1276 16.668 16.6673V10.834C16.668 10.3737 16.2949 10.0007 15.8346 10.0007H4.16797ZM1.66797 10.834C1.66797 9.45327 2.78726 8.33398 4.16797 8.33398H15.8346C17.2153 8.33398 18.3346 9.45327 18.3346 10.834V16.6673C18.3346 18.048 17.2153 19.1673 15.8346 19.1673H4.16797C2.78726 19.1673 1.66797 18.048 1.66797 16.6673V10.834Z"
                      fill="#637381"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 2.50065C9.11594 2.50065 8.2681 2.85184 7.64298 3.47696C7.01786 4.10208 6.66667 4.94993 6.66667 5.83398V9.16732C6.66667 9.62756 6.29357 10.0007 5.83333 10.0007C5.3731 10.0007 5 9.62756 5 9.16732V5.83398C5 4.5079 5.52678 3.23613 6.46447 2.29845C7.40215 1.36077 8.67392 0.833984 10 0.833984C11.3261 0.833984 12.5979 1.36077 13.5355 2.29845C14.4732 3.23613 15 4.5079 15 5.83398V9.16732C15 9.62756 14.6269 10.0007 14.1667 10.0007C13.7064 10.0007 13.3333 9.62756 13.3333 9.16732V5.83398C13.3333 4.94993 12.9821 4.10208 12.357 3.47696C11.7319 2.85184 10.8841 2.50065 10 2.50065Z"
                      fill="#637381"
                    ></path>
                  </g>
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="mb-8 px-10 md:px-20 lg:px-10">
            <label className="mb-3 block text-base font-medium text-[#929DA7]">
              New Password
            </label>
            <div className="relative">
              <input
                name="password"
                onChange={(e) => updateUserDetails(e)}
                type="password"
                minLength="8"
                placeholder="Enter your new password"
                className="w-full bg-transparent  border-hover-primary focus:border-grayed-out active:border-grayed-out placeholder-hover-primary rounded-md border border-success py-3 px-12 text-text-primary  outline-none transition"
              />
              <span className="absolute top-1/2 left-4 -translate-y-1/2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.16797 10.0007C3.70773 10.0007 3.33464 10.3737 3.33464 10.834V16.6673C3.33464 17.1276 3.70773 17.5007 4.16797 17.5007H15.8346C16.2949 17.5007 16.668 17.1276 16.668 16.6673V10.834C16.668 10.3737 16.2949 10.0007 15.8346 10.0007H4.16797ZM1.66797 10.834C1.66797 9.45327 2.78726 8.33398 4.16797 8.33398H15.8346C17.2153 8.33398 18.3346 9.45327 18.3346 10.834V16.6673C18.3346 18.048 17.2153 19.1673 15.8346 19.1673H4.16797C2.78726 19.1673 1.66797 18.048 1.66797 16.6673V10.834Z"
                      fill="#637381"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 2.50065C9.11594 2.50065 8.2681 2.85184 7.64298 3.47696C7.01786 4.10208 6.66667 4.94993 6.66667 5.83398V9.16732C6.66667 9.62756 6.29357 10.0007 5.83333 10.0007C5.3731 10.0007 5 9.62756 5 9.16732V5.83398C5 4.5079 5.52678 3.23613 6.46447 2.29845C7.40215 1.36077 8.67392 0.833984 10 0.833984C11.3261 0.833984 12.5979 1.36077 13.5355 2.29845C14.4732 3.23613 15 4.5079 15 5.83398V9.16732C15 9.62756 14.6269 10.0007 14.1667 10.0007C13.7064 10.0007 13.3333 9.62756 13.3333 9.16732V5.83398C13.3333 4.94993 12.9821 4.10208 12.357 3.47696C11.7319 2.85184 10.8841 2.50065 10 2.50065Z"
                      fill="#637381"
                    ></path>
                  </g>
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="mb-8 px-10 md:px-20 lg:px-10">
            <label className="mb-3 block text-base font-medium text-[#929DA7]">
              Re-type New Password
            </label>
            <div className="relative">
              <input
                name="passwordConfirm"
                type="password"
                onChange={(e) => updateUserDetails(e)}
                minLength="8"
                placeholder="Re-type your new password"
                className="w-full bg-transparent  border-hover-primary focus:border-grayed-out active:border-grayed-out placeholder-hover-primary rounded-md border border-success py-3 px-12 text-text-primary  outline-none transition"
              />
              <span className="absolute top-1/2 left-4 -translate-y-1/2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.16797 10.0007C3.70773 10.0007 3.33464 10.3737 3.33464 10.834V16.6673C3.33464 17.1276 3.70773 17.5007 4.16797 17.5007H15.8346C16.2949 17.5007 16.668 17.1276 16.668 16.6673V10.834C16.668 10.3737 16.2949 10.0007 15.8346 10.0007H4.16797ZM1.66797 10.834C1.66797 9.45327 2.78726 8.33398 4.16797 8.33398H15.8346C17.2153 8.33398 18.3346 9.45327 18.3346 10.834V16.6673C18.3346 18.048 17.2153 19.1673 15.8346 19.1673H4.16797C2.78726 19.1673 1.66797 18.048 1.66797 16.6673V10.834Z"
                      fill="#637381"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 2.50065C9.11594 2.50065 8.2681 2.85184 7.64298 3.47696C7.01786 4.10208 6.66667 4.94993 6.66667 5.83398V9.16732C6.66667 9.62756 6.29357 10.0007 5.83333 10.0007C5.3731 10.0007 5 9.62756 5 9.16732V5.83398C5 4.5079 5.52678 3.23613 6.46447 2.29845C7.40215 1.36077 8.67392 0.833984 10 0.833984C11.3261 0.833984 12.5979 1.36077 13.5355 2.29845C14.4732 3.23613 15 4.5079 15 5.83398V9.16732C15 9.62756 14.6269 10.0007 14.1667 10.0007C13.7064 10.0007 13.3333 9.62756 13.3333 9.16732V5.83398C13.3333 4.94993 12.9821 4.10208 12.357 3.47696C11.7319 2.85184 10.8841 2.50065 10 2.50065Z"
                      fill="#637381"
                    ></path>
                  </g>
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="w-full px-10 md:px-20 lg:px-10">
          <button className="w-full inline-block mx-2 px-6 py-3 bg-accent-secondary text-text-primary font-medium text-base leading-tight uppercase rounded shadow-md hover:bg-accent-secondary hover:shadow-lg focus:bg-hover-secondary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-grayed-out active:shadow-lg transition duration-150 ease-in-out ml-1">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePassword;
