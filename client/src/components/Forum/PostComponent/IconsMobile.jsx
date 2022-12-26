import { BiUpvote, BiDownvote } from "react-icons/bi";
import { MdOutlineModeComment, MdOutlineBookmarkBorder } from "react-icons/md";
import { styles } from "../styles.js";

const IconsMobile = ({comments}) => {
    return (
    <div
        className={`
        ${styles.flexRow} 
        md:hidden 
        border-t
        border-slate-500
        `}
    >
        <div
        className={`
            ${styles.flexRow} 
            w-[30%] 
            h-[100%] 
            justify-around 
            pr-4
            py-3`}
        >
        <BiUpvote className={styles.votingIcons} />
        <p>0</p>
        <BiDownvote className={styles.votingIcons} />
        </div>
        <div className={`${styles.flexRow} w-[70%] h-[100%] justify-between`}>
        <div className={`${styles.flexRow} w-[20%] justify-around`}>
            <MdOutlineModeComment
            className={`${styles.icons} ${styles.hoverIcons} w-[16px] h-[20px] ml-2`}
            />
            <p>{comments}</p>
        </div>
        <div className={`w-[80%] flex justify-end`}>
            <MdOutlineBookmarkBorder
            className={`${styles.icons} ${styles.hoverIcons} w-[20px] h-[32px] `}
            />
        </div>
        </div>
    </div>
    );
};

export default IconsMobile;
