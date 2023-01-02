import { BiUpvote, BiDownvote } from "react-icons/bi";
import { MdOutlineModeComment, MdOutlineBookmarkBorder } from "react-icons/md";
import { useForum } from "../../../context/ForumProvider.js";
import { styles } from "../styles.js";

const IconsMobile = ({ post, comments }) => {

  const { voting,voteNum } = useForum()

  return (
    <div
      className={`
        ${styles.flexRow} 
         border-slate-500
          md:hidden 
          border-t
          w-[90%]
          mt-2
          py-2`}>
      <div className={`${styles.flexRow} w-[20%]`}>
          <BiUpvote 
             onClick={() => {voting("like",post) }}
             className={styles.votingIcons} />
          <p 
             className="px-2 text-slate-300 font-mono ">
             {voteNum(post)}</p>
          <BiDownvote 
             onClick={() => {voting("dislike",post) }}
             className={styles.votingIcons} />
      </div>
      <div className={`${styles.flexRow} w-[80%] justify-between`}>
         <div className={`${styles.flexRow} w-[23%] justify-around`}>
            <MdOutlineModeComment
              className={`${styles.icons} 
              ${styles.hoverIcons} 
              w-[16px] h-[22px] ml-5`}/>
            <p className="text-slate-400 font-mono">{comments} </p>
         </div>
         <div className={`w-[77%] flex justify-end`}>
            <MdOutlineBookmarkBorder
              className={`${styles.icons} 
              ${styles.hoverIcons} 
              w-[20px] h-[32px] `} />
         </div>
      </div>
    </div>
  );
};

export default IconsMobile;
