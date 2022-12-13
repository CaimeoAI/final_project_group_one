import { BiUpvote, BiDownvote } from "react-icons/bi";
import { styles } from "../styles.js";

const VoteBtnDesktop = () => {
    return (
    <div
        className="
            hidden 
            w-[80%]  
            grow 
            flex-col 
            justify-center 
            items-center 
            md:flex 
            md:w-[10%] 
            md:space-y-3
            lg:w-16"
    >
        <BiUpvote className={styles.votingIcons} />
        <p>0</p>
        <BiDownvote className={styles.votingIcons} />
    </div>
    );
};

export default VoteBtnDesktop;
