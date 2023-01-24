import { MdOutlineModeComment, MdOutlineBookmarkBorder } from "react-icons/md";
import {TbHash} from "react-icons/tb"
import { styles } from "../styles.js";

const SaveCommBtnDesktop = ({ comments, field }) => {
  return (
    <div className={`flex flex-row mt-2`}>
      <div className={`${styles.flexRow} mr-4  fill-hover-primary hover:fill-grayed-out text-hover-primary hover:text-grayed-out `}>
        <MdOutlineModeComment
         className={` mr-1 w-[18px] h-[18px] mt-[2px] cursor-pointer`}
        />
        <p className={`pl-1`}>
          {comments}
          <span className=" text-slate-400 pl-1 cursor-pointer">Comments</span>
        </p>
      </div>
      <div className={`${styles.flexRow} text-hover-primary `}>
        <TbHash
          className={`w-[18px] h-[29px] pt-[4px]`}
        />
        <p className="lowercase">
         {field}
        </p>
      </div>
    </div>
  );
};

export default SaveCommBtnDesktop;
