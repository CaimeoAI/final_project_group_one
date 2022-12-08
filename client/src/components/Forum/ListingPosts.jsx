import React from "react";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { MdOutlineModeComment, MdOutlineBookmarkBorder } from "react-icons/md";
import { styles } from "./styles";
import postImg from "../../assets/post-default.jpg";

const ListingPosts = ({ post }) => {
  return (
    <div
      className={`
      w-full 
      m-auto  
      border-solid
      border-2  
      rounded-xl 
      mt-4 
      flex 
      flex-row 
      items-center 
      justify-around `}
    >
      {/* ------------- VOTE BUTTONS DESKTOP -------------- */}
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
            lg:w-16" >
              <BiUpvote className={styles.votingIcons} />
              <p>0</p>
              <BiDownvote className={styles.votingIcons} />
        </div>

        <div
            className="
                hidden 
                h-[120px] 
                rounded-xl
                md:flex 
                md:w-[220px]
                lg:w-[190px]" >
          <img
          src={postImg}
          alt="post-default"
          className="max-w-[100%] h-auto rounded-xl"/>
        </div>

        <div className="w-[90%]  md:px-4">
          <div className="h-[80%] ">
            <h3 className="pt-4 truncate">{post.title}</h3>
          <div
            className={`
            ${styles.textPost} 
            h-[120px] 
            md:h-[80px] 
            md:mb-1 
            lg:pr-2  
            text-ellipsis 
            overflow-hidden 
            mb-5`}>
            {post.content}
          </div>
        </div>

        {/* --------------ICONS - MOBILE VERSION---------------------- */}
        <div 
        className={`
          ${styles.flexRow} 
          md:hidden 
          border-t-2 
          h-[18%]`}>
            <div
              className={`
              ${styles.flexRow} 
              w-[30%] 
              h-[100%] 
              justify-around 
              pr-4`}>
                <BiUpvote className={styles.votingIcons} />
                <p>0</p>
                <BiDownvote className={styles.votingIcons} />
            </div>
          <div className={`${styles.flexRow} w-[70%] h-[100%] justify-between`}>
            <div className={`${styles.flexRow} w-[20%] justify-around`}>
              <MdOutlineModeComment
                className={`${styles.icons} ${styles.hoverIcons} w-[16px] h-[20px] ml-2`}/>
              <p> 5 </p>
            </div>
            <div className={`w-[80%] flex justify-end`}>
              <MdOutlineBookmarkBorder
                className={`${styles.icons} ${styles.hoverIcons} w-[20px] h-[32px] `}/>
            </div>
          </div>
        </div>

        {/* --------------ICONS - TABLET|DESKTOP VERSION---------------------- */}
        <div className="hidden md:flex flex-row w-[100%] py-2 ">
          <div className={`flex flex-row w-[50%] `}>
            <div className={`${styles.flexRow} mr-4 `}>
              <MdOutlineModeComment
                className={`${styles.icons} w-[16px] h-[18px] mt-[2px]`} />
              <p className={`${styles.textPost} ${styles.hoverText} cursor-pointer`} >
                5<span> Comments</span>
              </p>
            </div>
            <div className={`${styles.flexRow} `}>
              <MdOutlineBookmarkBorder
                className={`${styles.icons} w-[18px] h-[29px] pt-[4px]`}/>
              <p className={`${styles.textPost} ${styles.hoverText}  cursor-pointer`}>
                Save
              </p>
            </div>
          </div>

          <div className={`flex flex-row pr-4 w-[50%] justify-end pt-1 `}>
            <p className={`${styles.textTiming}`}>Posted by</p>
            <p className={`${styles.textTiming}`}>@userName</p>
            <p className={`${styles.textTiming}`}>
              2<span className="p-1">mins</span> ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingPosts;
