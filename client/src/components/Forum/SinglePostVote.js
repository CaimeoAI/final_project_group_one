//! 01 - HOOKS
import { useForum } from "../../context/ForumProvider";
import { useParams } from "react-router-dom";

//? 04 - STYLING
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { styles } from "./styles.js";

const SinglePostVote = ({ post }) => {
  const { voting, voteNum } = useForum();
  const { id } = useParams();

  return (
    <div
      className="
              md:flex
              flex-col 
              items-center 
              ml-2
              md:ml-5
              md:mr-2
              my-4">
           <BiUpvote
              onClick={() => voting("like", post, id)}
              className={`${styles.votingIcons} mb-2 ml-1.5 md:ml-0`}
           />
           <div 
               className="text-gray-100 text-xs md:text-lg  font-mono w-8 h-8 flex justify-center items-center  ">
               {voteNum(post)}
           </div>
           <BiDownvote
                onClick={() => voting("dislike", post, id)}
                className={`${styles.votingIcons}  mt-2 ml-1.5 md:ml-0`}
            />
     </div>
  );
};

export default SinglePostVote;
