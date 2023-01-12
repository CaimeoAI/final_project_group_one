//! 01 - HOOKS
import { useForum } from "../../context/ForumProvider";
import { useParams } from "react-router-dom";

const SinglePostVote = ({ post }) => {
  const { voting, voteNum, votingIconColor, votingNumColor, likedBtnFun, dislikedBtnFun } = useForum();
  const { id } = useParams();

  const UpVote = likedBtnFun(post);
  const DownVote = dislikedBtnFun(post);

  return (
    <div
      className="
              md:flex
              flex-col 
              items-center 
              ml-2
              md:ml-5
              md:mr-2
              my-4"
    >
      <UpVote
        onClick={() => voting("like", post, id)}
        className={`${votingIconColor(post?.likes,"likes")}} mb-2 ml-1.5 md:ml-0 cursor-pointer`}
      />
      <div className={`${votingNumColor(post)} text-md md:text-lg  font-mono w-8 h-8 flex justify-center items-center `}>
        {voteNum(post)}
      </div>
      <DownVote
        onClick={() => voting("dislike", post, id)}
        className={`${votingIconColor(post?.dislikes,"dislikes")}}  mt-2 ml-1.5 md:ml-0 cursor-pointer`}
      />
    </div>
  );
};

export default SinglePostVote;
