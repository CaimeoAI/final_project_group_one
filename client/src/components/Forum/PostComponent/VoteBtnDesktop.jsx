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
            flex-col 
            ml-3 
            items-center 
            justify-between
            md:flex 
            md:w-20
            md:space-y-2
           "
    >
      <BiUpvote
        onClick={() => {
          voting("like", post, id);
        }}
        className={styles.votingIcons}
      />
      <p className="text-gray-400 text-lg font-mono p-2 ">{voteNum(post)}</p>
      <BiDownvote
        onClick={() => {
          voting("dislike", post, id);
        }}
        className={styles.votingIcons}
      />
    </div>
  );
};

export default VoteBtnDesktop;
