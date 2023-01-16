import { MdOutlineModeComment, MdOutlineBookmarkBorder } from "react-icons/md";
import { styles } from "../styles.js";

const SaveCommBtnDesktop = ({ comments }) => {
  return (
    <div className={`flex flex-row mt-2`}>
      <div className={`${styles.flexRow} mr-4  fill-hover-primary hover:fill-grayed-out text-hover-primary hover:text-grayed-out cursor-pointer`}>
        <MdOutlineModeComment
         className={` mr-1 w-[18px] h-[18px] mt-[2px]`}
        />
        <p className={`pl-1`}>
          {comments}
          <span className=" text-slate-400 pl-1">Comments</span>
        </p>
      </div>
      <div className={`${styles.flexRow}  fill-hover-primary hover:fill-grayed-out text-hover-primary hover:text-grayed-out cursor-pointer `}>
        <MdOutlineBookmarkBorder
          className={` mr-1 w-[18px] h-[29px] pt-[4px]`}
        />
        <p className={`text-md
            `}>
         <span>Save</span>  
        </p>
      </div>
    </div>
  );
};

export default SaveCommBtnDesktop;
