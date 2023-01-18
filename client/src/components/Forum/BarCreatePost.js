import { useContext } from "react";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import { MainContext } from "../../context/MainContext";

const BarCreatePost = () => {
  const { setShowPostFormModal } = useContext(MainContext);
  const userProfileImg = localStorage.getItem("photo");

  return (
    <>
      {/* --------------MOBILE VERSION---------------------- */}
      <div
        onClick={() => setShowPostFormModal(true)}
        className="
                  flex
                  md:hidden
                  justify-center
                  items-center 
                  bg-accent-secondary
                  text-text-primary
                  cursor-pointer
                  text-xs 
                  fixed 
                  w-16 
                  h-16 
                  bottom-[6.35em] 
                  right-2
                  leading-tight 
                  rounded-full 
                  shadow-xl 
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
                  "
      >
        <MapsUgcIcon style={{ fontSize: "30px" }} />
      </div>
      {/* --------------TABLET|DESKTOP VERSION---------------------- */}
      <div
        style={{ backgroundColor: " rgb(33,45,66)" }}
        className={`
          
          bg-grayed-out
          cursor-pointer
          hidden 
          md:flex 
          items-center
          rounded-md
          mt-[15px]
          md:w-full 
          mb-4`}>
        <div className={`w-10 h-10 rounded-full mx-4 `}>
          <img
            src={userProfileImg}
            alt="user profile pic"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <input
          onClick={() => setShowPostFormModal(true)}
          placeholder="Create Post"
          className="
                          w-[94.5%]
                          mr-3
                          my-4 
                          px-6 
                          py-2.5 
                          bg-slate-700
                          text-white 
                          font-medium 
                          text-xs 
                          leading-tight 
                          uppercase 
                          rounded 
                          shadow-md 
                          hover:bg-slate-800
                          hover:shadow-lg 
                          focus:bg-slate-800
                          focus:shadow-lg 
                          focus:outline-none 
                          focus:ring-0 
                          active:bg-active 
                          active:shadow-lg 
                          transition 
                          duration-150 
                          ease-in-out 
                          ml-1"/>
      </div>
    </>
  );
};

export default BarCreatePost;