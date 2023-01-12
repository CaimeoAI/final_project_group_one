import { MdOutlineModeComment, MdOutlineBookmarkBorder } from "react-icons/md";
import { styles } from "../styles.js";

const SaveCommBtnDesktop = ({ comments }) => {
  return (
    <div className={`flex flex-row mt-2`}>
      <div className={`${styles.flexRow} mr-4`}>
        <MdOutlineModeComment
          className={`fill-grayed-out cursor-pointer mr-1 w-[18px] h-[18px] mt-[2px]`}
        />
        <p className={`text-grayed-out hover:text-accent-secondary  cursor-pointer pl-1`}>
          {comments}
          <span className=" text-slate-400 pl-1"> Comments</span>
        </p>
      </div>
      <div className={`${styles.flexRow} `}>
        <MdOutlineBookmarkBorder
          className={`fill-grayed-out cursor-pointer mr-1 w-[18px] h-[29px] pt-[4px]`}
        />
        <p className={`text-md
            text-grayed-out hover:text-accent-secondary  cursor-pointer`}>
         <span className=" text-slate-400">Save</span>  
        </p>
      </div>
    </div>
  );
};

export default SaveCommBtnDesktop;
