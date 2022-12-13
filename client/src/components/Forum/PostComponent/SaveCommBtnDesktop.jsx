import { MdOutlineModeComment, MdOutlineBookmarkBorder } from "react-icons/md";
import { styles } from "../styles.js";

const SaveCommBtnDesktop = () => {
    return (
    <div className={`flex flex-row w-[50%] `}>
        <div className={`${styles.flexRow} mr-4 `}>
        <MdOutlineModeComment
            className={`${styles.icons} w-[16px] h-[18px] mt-[2px]`}
        />
        <p className={`${styles.textPost} ${styles.hoverText} cursor-pointer`}>
            5<span> Comments</span>
        </p>
        </div>
        <div className={`${styles.flexRow} `}>
        <MdOutlineBookmarkBorder
            className={`${styles.icons} w-[18px] h-[29px] pt-[4px]`}
        />
        <p className={`${styles.textPost} ${styles.hoverText}  cursor-pointer`}>
            Save
        </p>
        </div>
    </div>
    );
};

export default SaveCommBtnDesktop;
