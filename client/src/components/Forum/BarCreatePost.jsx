import { useContext } from "react";
import { BsPlusLg } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
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
        onClick={() => setShowPostFormModal(true)}
        className={`
          ${styles.flexCenter} 
          cursor-pointer
          hidden 
          md:flex 
          items-end
          border
          rounded-full
          border-zinc-500
          shadow-md
          h-10
          mt-[15px]
          justify-between 
          ml-2
          md:w-[30%] 
          lg:w-[25%]`}
      >
        <p
          className="
                text-md 
                lg:text-lg 
                pl-5 
                text-green-700
                font-bold"
        >
          CREATE A POST
        </p>
        <IoIosAddCircleOutline
          
          className={`
                mr-2
              fill-gray-500  
              hover:fill-green-700
                w-[30px] 
                h-[30px]
                cursor-pointer`}
        />
      </div>
    </>
  );
};

export default BarCreatePost;