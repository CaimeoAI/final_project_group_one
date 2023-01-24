import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useForum } from "../../context/ForumProvider";
import { MainContext } from "../../context/MainContext";
import UpdatePhoto from "./UpdatePhoto";

const AccountInfo = () => {
      const { getLocalStorageData } = useForum();
      const { convertBase64 } = useContext(MainContext);
      const [userData, setUserData] = useState();
      const courses = ["WebDev", "DigitalMarketing", "AWS", "Python"];
      const token = getLocalStorageData("token");

      const getUserData = async () => {
        const URL = `${process.env.REACT_APP_BE_URL}/auth/user`;
        const configuration = {
          headers: {
            authorization: token,
          },
        };
        try {
          const result = await axios.get(URL, configuration);
          setUserData(result.data);
        } catch (error) {
          console.log(error);
        }
      };

      const updateUserDetails = (e) => {
        return setUserData({ ...userData, [e.target.name]: e.target.value });
      };

      const updateUserImage = async (e) => {
        
        const file = e.target.files[0];
        const base64 = await convertBase64(file);

        return setUserData({ ...userData, photo: base64 });
      };

      useEffect(() => {
        getUserData();
      }, []);

      const handleSubmit = async (e) => {
        e.preventDefault();
        const URL = `${process.env.REACT_APP_BE_URL}/auth/updateMe`;
        const configuration = {
          headers: {
            authorization: token,
          },
        };
        try {
          const response = await axios.patch(URL, userData, configuration);
          localStorage.setItem("email", response.data.data.user.email);
          localStorage.setItem("photo", response.data.data.user.photo);
          localStorage.setItem("name", response.data.data.user.name);
          localStorage.setItem("course", response.data.data.user.course);
          window.location.reload(false);
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <div className=" mb-4 pb-10 md:m-5 lg:w-5/12 ">
      <h1 className="text-xl md:text-[25px] font-bold px-10 md:px-20 lg:pl-10 pt-8 text-text-primary">
        Account Information
      </h1>
      <p className="text-sm text-grayed-out pt-3 pl-10 md:pl-20 lg:pl-10 pb-4">
        Edit your profile quickly
      </p>

      <form onSubmit={handleSubmit}>
        <UpdatePhoto
          imgSrc={userData?.photo}
          updateUserImage={updateUserImage}
        />

        <div className="w-full mt-4 ">
          <div className="mb-8 px-10 md:px-20 lg:px-10">
            <label className="mb-3 block text-base font-medium text-[#929DA7]">
              Username
            </label>
            <div className="relative">
              <input
                name="name"
                onChange={(e) => updateUserDetails(e)}
                type="text"
                placeholder="Devid Jhon"
                className="bg-transparent w-full rounded-md border  border-hover-primary p-3 pl-12 placeholder-hover-primary outline-none transition focus:border-grayed-out active:border-grayed-out text-text-primary  disabled:cursor-default disabled:bg-[#F5F7FD]"
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
                      d="M3.72039 12.8864C4.50179 12.105 5.5616 11.666 6.66667 11.666H13.3333C14.4384 11.666 15.4982 12.105 16.2796 12.8864C17.061 13.6678 17.5 14.7276 17.5 15.8327V17.4993C17.5 17.9596 17.1269 18.3327 16.6667 18.3327C16.2064 18.3327 15.8333 17.9596 15.8333 17.4993V15.8327C15.8333 15.1696 15.5699 14.5338 15.1011 14.0649C14.6323 13.5961 13.9964 13.3327 13.3333 13.3327H6.66667C6.00363 13.3327 5.36774 13.5961 4.8989 14.0649C4.43006 14.5338 4.16667 15.1696 4.16667 15.8327V17.4993C4.16667 17.9596 3.79357 18.3327 3.33333 18.3327C2.8731 18.3327 2.5 17.9596 2.5 17.4993V15.8327C2.5 14.7276 2.93899 13.6678 3.72039 12.8864Z"
                      fill="#637381"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.0007 3.33268C8.61994 3.33268 7.50065 4.45197 7.50065 5.83268C7.50065 7.21339 8.61994 8.33268 10.0007 8.33268C11.3814 8.33268 12.5006 7.21339 12.5006 5.83268C12.5006 4.45197 11.3814 3.33268 10.0007 3.33268ZM5.83398 5.83268C5.83398 3.5315 7.69946 1.66602 10.0007 1.66602C12.3018 1.66602 14.1673 3.5315 14.1673 5.83268C14.1673 8.13387 12.3018 9.99935 10.0007 9.99935C7.69946 9.99935 5.83398 8.13387 5.83398 5.83268Z"
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
              Email Address
            </label>
            <div className="relative">
              <input
                name="email"
                onChange={(e) => updateUserDetails(e)}
                type="email"
                placeholder="info@yourmail.com"
                className="bg-transparent w-full rounded-md border  border-hover-primary p-3 pl-12  placeholder-hover-primary outline-none transition focus:border-grayed-out active:border-grayed-out text-text-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
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
                      d="M3.33398 4.16667C2.87756 4.16667 2.50065 4.54357 2.50065 5V15C2.50065 15.4564 2.87756 15.8333 3.33398 15.8333H16.6673C17.1238 15.8333 17.5007 15.4564 17.5007 15V5C17.5007 4.54357 17.1238 4.16667 16.6673 4.16667H3.33398ZM0.833984 5C0.833984 3.6231 1.95708 2.5 3.33398 2.5H16.6673C18.0442 2.5 19.1673 3.6231 19.1673 5V15C19.1673 16.3769 18.0442 17.5 16.6673 17.5H3.33398C1.95708 17.5 0.833984 16.3769 0.833984 15V5Z"
                      fill="#637381"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.984696 4.52154C1.24862 4.14449 1.76823 4.0528 2.14527 4.31673L10.0007 9.81554L17.8562 4.31673C18.2332 4.0528 18.7528 4.14449 19.0167 4.52154C19.2807 4.89858 19.189 5.41818 18.8119 5.68211L10.4786 11.5154C10.1917 11.7163 9.80977 11.7163 9.52284 11.5154L1.1895 5.68211C0.812463 5.41818 0.720767 4.89858 0.984696 4.52154Z"
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
              Course
            </label>
            <div className="relative">
              <select
                name="course"
                onChange={(e) => updateUserDetails(e)}
                className="bg-transparent  border-hover-primary  focus:border-grayed-out active:border-grayed-out text-grayed-out w-full appearance-none rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-text-primary"
              >
                {courses.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
              <span className=" text-grayed-out absolute right-4 top-1/2 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2"></span>
            </div>
          </div>
        </div>

        <div className="w-full  px-10 md:px-20 lg:px-10">
          <button className="w-full
                      mx-2 
                      px-6 
                      py-2.5 
                      bg-accent-secondary
                      text-text-primary
                      font-medium 
                      text-xs 
                      leading-tight 
                      uppercase 
                      rounded 
                      shadow-md 
                      hover:bg-hover-secondary 
                      hover:shadow-lg 
                      focus:bg-hover-secondary 
                      focus:shadow-lg 
                      focus:outline-none 
                      focus:ring-0 
                      active:bg-active 
                      active:shadow-lg 
                      transition 
                      duration-150 
                      ease-in-out 
                      ml-1">
            Update Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountInfo;
