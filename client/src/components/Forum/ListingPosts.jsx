import { styles } from "./styles";
import postImg from "../../assets/post-default.jpg";
import VoteBtnDesktop from "./PostComponent/VoteBtnDesktop";
import IconsMobile from "./PostComponent/IconsMobile";
import SaveCommBtnDesktop from "./PostComponent/SaveCommBtnDesktop";
import PostedBySection from "./PostComponent/PostedBySection";
import { NavLink } from "react-router-dom";

const ListingPosts = ({ post }) => {
  
  return (
    <>
      <NavLink to={`/academia/${post._id}`}>
      <div
        className={`
      w-full 
      m-auto  
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
      flex-row 
      items-center 
      justify-around `}
      >
        <VoteBtnDesktop />

        <div
          className="
                hidden 
                h-[120px] 
                rounded-xl
                md:flex 
                md:w-[220px]
                lg:w-[190px]"
        >
          <img
            src={postImg}
            alt="post-default"
            className=" h-auto rounded-xl"
          />
        </div>

        <div className="w-[90%]  md:px-4">
          <div className="h-[80%]">
            
              <h1 className={`pt-4 truncate text-slate-300 pb-2 font-bold cursor-pointer  ${styles.hoverText}`} >
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
              {post.body}
            </div>
          </div>

          <IconsMobile comments={post.comments.length} />

          <div className="hidden md:flex flex-row w-[100%] py-2 ">
            <SaveCommBtnDesktop comments={post.comments.length} />
            <PostedBySection user={post.author.email} time={post.createdAt} />
          </div>
        </div>
      </div>
      </NavLink>
    </>
  );
};

export default ListingPosts;
