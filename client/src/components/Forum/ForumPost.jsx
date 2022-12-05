import React from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import {MdOutlineModeComment, MdOutlineBookmarkBorder} from "react-icons/md"
import { styles } from "./styles";
import postImg from "../../assets/post-default.jpg";

const ForumPost = () => {
  return (
    <div className="w-full h-[10rem] border-solid border-2  rounded-lg mt-5 flex flex-row justify-center items-center space-x-3">
      <div className="w-12 flex flex-col justify-center items-center ml-2">
        <BiUpvote className={styles.votingIcons} />
        <p>0</p>
        <BiDownvote className={styles.votingIcons} />
      </div>

      <img
        src={postImg}
        alt="post-default"
        className="w-[200px] h-[120px] rounded-lg"
      />

      <div>
        <h3>Title</h3>

        <p className={styles.textPost}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia iste
          ad, magnam ipsam temporibus repellendus aut sunt ex distinctio veniam...
        </p>

        <div className="flex flex-row w-52 mt-5">
          <div className={`${styles.flexRow} mr-4`}>
            <MdOutlineModeComment className={`${styles.iconsComSave} w-[16px] h-[18px]`} /> 
            <p className={styles.textPost}> 5 Comments</p>
          </div>
          <div className={`${styles.flexRow} `}>
            <MdOutlineBookmarkBorder className={`${styles.iconsComSave} w-[16px] h-[25px] mt-1`} />
            <p className={styles.textPost}>Save</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumPost;
