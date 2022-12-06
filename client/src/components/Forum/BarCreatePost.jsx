import { BsPlusLg } from "react-icons/bs";
import { MdAddCircleOutline } from "react-icons/md";
import { styles } from "./styles";

const BarCreatePost = () => {
  return (
    <>
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
          className={`md:hidden 
           w-[24px] 
           h-[24px]
         fill-gray-300
         hover:fill-sky-600 
           cursor-pointer`}
        />
      </div>
      <div
        className={`
         ${styles.flexCenter} 
         hidden 
         md:flex 
         items-end 
         justify-between 
         px-4 
         pt-3 
         ml-2
         md:w-[26%]  
         md:rounded-xl
         lg:w-[36%]   
         border-b-2 cursor-pointer`}
      >
        <p className="text-md lg:text-lg">Create a post</p>
        <MdAddCircleOutline
          className={`
               w-[28px] h-[28px]
             fill-gray-600
             hover:fill-sky-600 
               cursor-pointer`}
        />
      </div>
    </>
  );
};

export default BarCreatePost;
