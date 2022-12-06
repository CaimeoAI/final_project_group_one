import React from "react";
// import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { MdOutlineModeComment, MdOutlineBookmarkBorder } from "react-icons/md";
import { styles } from "./styles";
import postImg from "../../assets/post-default.jpg";

const ForumPost = ({ post }) => {
  

  return (
    <div
      className={`
      w-[100%] m-auto  
      md:h-[15%]  
      lg:h-[10%]  
      border-solid border-2  
      rounded-xl mt-4 flex 
      flex-row items-center justify-around `}
    >
      <div className="
      hidden w-[80%]  
      grow flex-col justify-center items-center 
      md:flex md:w-[10%] md:space-y-3
      lg:w-[8%]
      ">
        <BiUpvote className={styles.votingIcons} />
        <p>0</p>
        <BiDownvote className={styles.votingIcons} />
      </div>

      <div className="
      hidden h-[120px] rounded-xl
      md:flex  md:w-[220px]
      ">
        <img
          src={postImg}
          alt="post-default"
          className="max-w-[100%] h-auto rounded-xl"
        />
      </div>

      <div className="w-[90%]  h-[100%]  md:px-4 ">
        <div className="h-[82%]">
          <h3 className="pt-4 truncate">{post.title}</h3>
          <div
            className={`${styles.textPost} h-[140px] md:h-[80px]  text-ellipsis overflow-hidden pb-1`}
          >
            {post.content}
          </div>
        </div>

        {/* --------------MOBILE VERSION---------------------- */}
        <div className={`${styles.flexRow} md:hidden border-t-2 h-[18%]`}>
          <div
            className={`${styles.flexRow} w-[30%] h-[100%] justify-around pr-4`}
          >
            <BiUpvote className={styles.votingIcons} />
            <p>0</p>
            <BiDownvote className={styles.votingIcons} />
          </div>
          <div className={`${styles.flexRow} w-[70%] h-[100%] justify-between`}>
            <div className={`${styles.flexRow} w-[20%] justify-around`}>
              <MdOutlineModeComment
                className={`${styles.iconsComSave} w-[16px] h-[20px] ml-2`}
              />
              <p> 5 </p>
            </div>
            <div className={`w-[80%] flex justify-end`}>
              <MdOutlineBookmarkBorder
                className={`${styles.iconsComSave} w-[20px] h-[32px] `}
              />
            </div>
          </div>
        </div>
        {/* --------------TABLET|DESKTOP VERSION---------------------- */}
        <div className="hidden md:flex flex-row w-44 py-2  justify-between">
          <div className={`${styles.flexRow} mr-4`}>
            <MdOutlineModeComment
              className={`${styles.iconsComSave} w-[16px] h-[18px] mt-[2px]`}
            />
            <p className={`${styles.textPost}`}> 5  <span className=" hover:text-cyan-300 cursor-pointer">Comments</span> </p>
          </div>
          <div className={`${styles.flexRow} `}>
            <MdOutlineBookmarkBorder
              className={`${styles.iconsComSave} w-[16px] h-[25px] pt-1`}
            />
            <p className={styles.textPost}>Save</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumPost;
