//! 01 - HOOKS
import { NavLink } from "react-router-dom";
import { useForum } from "../../context/ForumProvider";

//* 02 - COMPONENTS
import VoteBtnDesktop from "./PostComponent/VoteBtnDesktop";
import IconsMobile from "./PostComponent/IconsMobile";
import SaveCommBtnDesktop from "./PostComponent/SaveCommBtnDesktop";
import PostedBySection from "./PostComponent/PostedBySection";

//? 04 - STYLING
import onlinemarketing from "../../assets/marketing.png";
import aws from "../../assets/aws.png";
import webdev from "../../assets/webdev.png";
import python from "../../assets/python.png";
import { styles } from "../Forum/styles";

const ListingPosts = ({ post }) => {
  const { voteNum, voting } = useForum();

  const getImg = (topic) => {
    switch (topic) {
      case "webdev":
        return webdev;
      case "onlinemarketing":
        return onlinemarketing;
      case "AWS":
        return aws;
      case "python":
        return python;
    }
  };

  return (
    <div
      className={`
      w-full
      bg-slate-700
      border
      shadow-md
      border-slate-600
      hover:border-slate-500
      hover:shadow-xl
      rounded-md
      transition duration-120 ease-in hover:ease-out
      mb-2
      flex 
      flex-col
      md:flex-row 
      flex-grow
      items-center`}
    >
      <VoteBtnDesktop post={post} voteNum={voteNum} voting={voting} />
      <NavLink to={`/academia/${post._id}`}>
        <div className={`w-full flex flex-row px-4 md:p-4 items-center`}>
          <div
            className="
              
                hidden 
                h-[120px] 
                rounded-xl
                md:flex 
                md:w-[220px]
                lg:w-[190px]
               "
          >
            <img
              src={getImg(post.topic)}
              alt="post-default"
              className=" h-auto rounded-xl w-full"
            />
          </div>

          <div className="w-[95%] md:px-4 ">
            <div className="h-[80%]">
              <h1
                className={`pt-2 md:pt-4 truncate text-slate-300 pb-2 font-bold cursor-pointer  ${styles.hoverText}`}
              >
                {post.title}
              </h1>

              <div
                className={`
            ${styles.textPost} 
            
            h-[120px] 
            md:h-[80px] 
            md:mb-1 
            
            lg:pr-2  
            text-ellipsis 
            overflow-hidden 
            mb-5`}
              >
                <div
                  className="inAllPosts inline-block"
                  dangerouslySetInnerHTML={{ __html: post.body }}
                ></div>
              </div>
            </div>

            <div className="hidden md:flex flex-row md:w-[100%] py-2  ">
              <SaveCommBtnDesktop comments={post.comments.length} />
              <PostedBySection user={post.author.email} time={post.createdAt} />
            </div>
          </div>
        </div>
      </NavLink>
      <IconsMobile comments={post.comments.length} post={post} />
    </div>
  );
};

export default ListingPosts;
