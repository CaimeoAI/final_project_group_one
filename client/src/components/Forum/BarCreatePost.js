import { useContext } from "react";
import { BsPlusLg } from "react-icons/bs";
import { MainContext } from "../../context/MainContext";
import { styles } from "./styles";

const BarCreatePost = () => {
  const { setShowPostFormModal } = useContext(MainContext);
  const userProfileImg = localStorage.getItem("photo");

  return (
    <>
      {/* --------------MOBILE VERSION---------------------- */}
      <div
        className={`${styles.flexCenter} 
          fixed 
          w-16 
          h-16 
          bottom-20 
          right-2
        bg-accent-secondary
          rounded-full 
          md:hidden 
          cursor-pointer`}
      >
        <BsPlusLg
          onClick={() => setShowPostFormModal(true)}
          className={`
                md:hidden 
                w-[24px] 
                h-[24px]
              fill-gray-100
              hover:fill-zinc-50 
              cursor-pointer`}
        />
      </div>
      {/* --------------TABLET|DESKTOP VERSION---------------------- */}
      <div
        className={`
          
          bg-grayed-out
          cursor-pointer
          hidden 
          md:flex 
          h-24
          items-center
          rounded-md
          border
          border-slate-700
          mt-[15px]
          md:w-full 
          mb-4
          `}
        style={{ backgroundColor: " rgb(33,45,66)" }}
      >
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
        ml-1"
        />
      </div>
    </>
  );
};

export default BarCreatePost;
