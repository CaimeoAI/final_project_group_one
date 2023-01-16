import { MdOutlineBookmarkBorder } from "react-icons/md";
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import { useForum } from "../../../context/ForumProvider.js";
import { styles } from "../styles.js";

const IconsMobile = ({ post, comments }) => {
  const { voting, voteNum, votingNumColor,votingIconColor, dislikedBtnFun, likedBtnFun } = useForum();
  const UpVote = likedBtnFun(post);
  const DownVote = dislikedBtnFun(post);

  return (
    <div
      className={`
          flex
          flex-row
          justify-between
          border-hover-primary
          md:hidden 
          border-t
          mt-2
          pt-4
          `}
    >
      <div className={`flex flex-row`}>
        <div className={`${styles.flexRow}`}>
          <UpVote
            onClick={() => {
              voting("like", post);
            }}
            className={`cursor-pointer  ${votingIconColor(post.likes,"likes")}`}
          />
          <div className={`font-mono  flex justify-center items-center mx-3  ${votingNumColor(post)}`}>
            {voteNum(post)}
          </div>
          <DownVote
            onClick={() => {
              voting("dislike", post);
            }}
            className={`cursor-pointer ${votingIconColor(post.dislikes,"dislikes")}`}
          />
        </div>

        <div className={`flex flex-row items-center`}>
          <ModeCommentOutlinedIcon
           style = {{fontSize: '20px'}}

            className={`text-grayed-out hover:text-accent-secondary 
              w-[16px] h-[22px] ml-5`}
          />
          <p className="text-grayed-out hover:text-accent-secondary  font-mono ml-2 text-md">

            {comments}
          </p>
        </div>
      </div>

      <MdOutlineBookmarkBorder
        className={`${styles.icons} 
              ${styles.hoverIcons} 
              w-[20px] h-[32px] `}
      />
    </div>
  );
};

export default IconsMobile;
