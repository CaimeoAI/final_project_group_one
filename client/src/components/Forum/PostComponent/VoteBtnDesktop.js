//! 01 - HOOKS
import { useForum } from "../../../context/ForumProvider";
import { useParams } from "react-router-dom";

//? 04 - STYLING
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { styles } from "../styles.js";

const VoteBtnDesktop = ({ post }) => {
  const { voting, voteNum } = useForum();
  const { id } = useParams();

  return (
    <div
      className="
            hidden 
            md:flex
            relative
            py-2
           bg-slate-800
            rounded-l-md">
      <div
        className={`flex flex-col justify-between items-center absolute left-2 top-2 py-2`}
      >
        <BiUpvote
          onClick={() => {
            voting("like", post, id);
          }}
          className={styles.votingIcons}
        />
        <div className="text-gray-200 text-lg p-2 font-mono w-12 h-12 flex justify-center items-center">
          {voteNum(post)}
        </div>
        <BiDownvote
          onClick={() => {
            voting("dislike", post, id);
          }}
          className={styles.votingIcons}
        />
      </div>
    </div>
  );
};

export default VoteBtnDesktop;
