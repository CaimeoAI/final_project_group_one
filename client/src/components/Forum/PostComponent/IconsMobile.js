import { BiUpvote, BiDownvote } from "react-icons/bi";
import { MdOutlineModeComment, MdOutlineBookmarkBorder } from "react-icons/md";
import { useForum } from "../../../context/ForumProvider.js";
import { styles } from "../styles.js";

const IconsMobile = ({ post, comments }) => {

  const { voting,voteNum } = useForum()

  return (
    <div
      className={`
          flex
          flex-row
          justify-between
         border-slate-500
          md:hidden 
          border-t
          mt-2
          pt-4
          `}>
<div className={`flex flex-row`}>
<div className={`${styles.flexRow} `}>
          <BiUpvote 
             onClick={() => {voting("like",post) }}
             className={styles.votingIcons} />
          <div
             className="text-white font-mono  flex justify-center items-center mx-1">
             {voteNum(post)}</div>
          <BiDownvote 
             onClick={() => {voting("dislike",post) }}
             className={styles.votingIcons} />
      </div>
      
         <div className={`flex flex-row items-center `}>
            <MdOutlineModeComment
              className={`${styles.icons} 
              ${styles.hoverIcons} 
              w-[16px] h-[22px] ml-5`}/>
            <p className="text-slate-400 font-mono ml-0.5 text-md">{comments} <span>Comments</span></p>
         </div>
</div>
         
            <MdOutlineBookmarkBorder
              className={`${styles.icons} 
              ${styles.hoverIcons} 
              w-[20px] h-[32px] `} />
        
      
    </div>
  );
};

export default IconsMobile;
