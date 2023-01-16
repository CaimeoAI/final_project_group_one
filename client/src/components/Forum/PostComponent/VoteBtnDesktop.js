//! 01 - HOOKS
import { useForum } from "../../../context/ForumProvider";
import { useParams } from "react-router-dom";


const VoteBtnDesktop = ({ post }) => {
  const { voting, voteNum, votingIconColor, votingNumColor,dislikedBtnFun, likedBtnFun } = useForum();
  const { id } = useParams();

const UpVote = likedBtnFun(post)
const DownVote = dislikedBtnFun(post)

  return (
    <div
      className="
            hidden 
            md:flex
            pt-4
            flex-col
            justify-start
            items-center
            bg-slate-800
            pl-[1px]
           
            rounded-l-md">
    
        <UpVote
          onClick={() => {
            voting("like", post, id);
          }}
          className={`w-[20px] h-[20px] md:w-[24px] md:h-[24px] cursor-pointer ${votingIconColor(post?.likes,"likes")}`}
        />
        <div className={`text-lg p-2 font-mono w-12 h-12 flex justify-center items-center ${votingNumColor(post)}`}>
          {voteNum(post)}
        </div>
        <DownVote
          onClick={() => {
            voting("dislike", post, id);
          }}
          className={`w-[20px] h-[20px] md:w-[24px] md:h-[24px] cursor-pointer ${votingIconColor(post?.dislikes,"dislikes")}`}
        />
     
    </div>
  );
};

export default VoteBtnDesktop;
