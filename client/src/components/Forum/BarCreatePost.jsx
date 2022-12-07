import { BsPlusLg } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import { styles } from "./styles";

const BarCreatePost = () => {
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
       bg-blue-600 
         rounded-full 
         md:hidden 
         cursor-pointer`}
      >
        <BsPlusLg
          className={`
           md:hidden 
           w-[24px] 
           h-[24px]
         fill-gray-300
         hover:fill-sky-600 
           cursor-pointer`}
        />
      </div>
       {/* --------------TABLET|DESKTOP VERSION---------------------- */}
      <div
        className={`
         ${styles.flexCenter} 
         hidden 
         md:flex 
         items-end
         h-10
         mt-[17px]
         justify-between 
         
         ml-2
         md:w-[26%]  
         md:rounded-xl
         lg:w-[36%]   
         border-b-2 
         `}
      >
        <p className="text-md lg:text-lg pl-5 ">Create a post</p>
        <IoIosAddCircleOutline
          className={`
               mr-2
             fill-gray-400  
             hover:fill-cyan-700
               w-[30px] 
               h-[30px]
               cursor-pointer`}
        />
      </div>
    </>
  );
};

export default BarCreatePost;
