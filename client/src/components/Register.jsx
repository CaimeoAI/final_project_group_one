import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import axios from "axios";
import RegisterImage from "../assets/registration.jpg";
import toast, { Toaster } from "react-hot-toast";
import UploadAndDisplayImage from "./UploadAndDisplayImage";
import { MainContext } from "../context/MainContext";

export const Register = (props) => {
  const { convertBase64 } = useContext(MainContext);
  const navigateTo = useNavigate();
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    course: "select a field",
    photo: "",
    password: "",
    passwordConfirm: "",
  });
  const fields = ["WebDev", "DigitalMarketing", "AWS", "Python"];

  const updateUserDetails = (e) => {
    return setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const updateUserImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);

    return setUserDetails({ ...userDetails, photo: base64 });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (userDetails.course === "select a field") {
        toast.error("Please choose a field before to register.");
        return;
      }
      const response = await axios.post(
        `${process.env.REACT_APP_BE_URL}/auth/signup`,
        userDetails
      );
      console.log("Register response from backend", response);
      localStorage.setItem("userID", response.data.data.user._id);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("photo", response.data.data.user.photo);
      localStorage.setItem("name", response.data.data.user.name);
      localStorage.setItem("course", response.data.data.user.course);

      if (response.data.status === "success") {
        localStorage.setItem("isLogedIn", true);
        toast.success("You are successfully registered");
        navigateTo("/");
        window.location.reload();
      }
    } catch (error) {
      toast.error(error.response?.data?.message?.split(":")[2]);
    }
  };

  return (
    <div className="lg:flex flex-row h-screen w-screen">
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
      <div className="flex flex-col text-center text-text-primary overflow-hidden h-screen bg-primary lg:w-1/2 justify-center ">
        <h1 className="pt-10 text-text-primary">REGISTRATION</h1>

        <form
          className="flex flex-col flex-nowrap md:flex  justify-center items-center"
          onSubmit={handleSubmit}
        >
          <UploadAndDisplayImage updateUserImage={updateUserImage} />
          <input
            className="
            mt-4
            w-72
            h-12
            text-base
            rounded-full text-white
            border-2 
          border-secondary
          bg-primary
            text-center"
            type="text"
            placeholder="name"
            id="name"
            name="name"
            minLength="8"
            onChange={(e) => updateUserDetails(e)}
          />
          <input
            className="
            mt-4
            w-72
            h-12
            text-base
            rounded-full text-white
            border-2 
          border-secondary
          bg-primary
            text-center"
            type="email"
            placeholder="email address"
            id="email"
            name="email"
            onChange={(e) => updateUserDetails(e)}
          />

         <div className="relative">
         <select
            value={userDetails.course}
            onChange={(e) => {
              updateUserDetails(e);
            }}
            required
            type="text"
            id="course"
            name="course"
            className="
            mt-4 
            w-72 
            h-12 
            text-base 
            rounded-full 
            text-grayed-out
            border-2 
            border-secondary
            bg-primary
            text-center
            appearance-none
            "
          >
            <option
              value={"select a field"}
              disabled
              className="text-text-primary w-72 rounded-full"
            >
              select a field
            </option>
            {fields.map((field, id) => (
              <option key={id} value={field}>
                {field}
              </option>
            ))}
          </select>
             <span className=" text-grayed-out absolute right-5 top-10 mt-[-2px] h-[8px] w-[8px] -translate-y-1/2 rotate-45 border-r-2 border-b-2"></span>
         </div>

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
            minLength="8"
            onChange={(e) => updateUserDetails(e)}
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
        border-secondary
        bg-primary
        text-center"
            type="password"
            placeholder="confirm password"
            id="passwordConfirm"
            name="passwordConfirm"
            minLength="8"
            onChange={(e) => updateUserDetails(e)}
          />
          <p className="text-xs mt-1 text-grayed-out">
            *Password has to be atleast 8 characters
          </p>
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
            SUBMIT
          </button>
        </form>
        <button
          className="mt-10  text-text-primary"
          onClick={() => props.onFormSwitch("login")}
        >
          Already have an account?
          <span
            className="hover:text-accent-secondary 
                         ml-1
                         cursor-pointer
                         hover:underline
                         hover:font-semibold
                         transition-transform
                         hover:-translate-y-4">
            Login here.
          </span>
        </button>
      </div>

      <div className="hidden lg:block overflow-hidden w-1/2 h-screen">
        <img
          className="lg:w-full lg:h-full"
          src={RegisterImage}
          alt="registrationImage"
        />
      </div>
    </div>
  );
};
