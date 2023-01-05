import { useContext } from "react";
import { BsPlusLg } from "react-icons/bs";
import { MainContext } from "../../context/MainContext";
import { styles } from "./styles";

const BarCreatePost = () => {
  const { setShowPostFormModal } = useContext(MainContext);

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
        bg-[#064635]
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
          
          bg-gray-500
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
          `}
        style={{ backgroundColor: " rgb(33,45,66)" }}
      > 
        
        <div className={`w-10 h-10 rounded-full mx-4`}>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            alt="user profile pic"
            className="w-[100%] object-cover rounded-full"
          />
        </div>
        <input 
         onClick={() => setShowPostFormModal(true)}
         placeholder="Create Post"
        className="w-[95%] bg-slate-700 rounded-lg  hover:border hover:bg-transparent hover:border-slate-600 hover:transition hover:duration-60 hover:ease-in ease-out mr-5  md:p-4 md:py-4  focus:outline-none"/>
      </div>
    </>
  );
};

export default BarCreatePost;
