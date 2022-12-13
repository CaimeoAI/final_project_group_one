import { styles } from "./styles";
import postImg from "../../assets/post-default.jpg";
import VoteBtnDesktop from "./PostComponent/VoteBtnDesktop";
import IconsMobile from "./PostComponent/IconsMobile";
import SaveCommBtnDesktop from "./PostComponent/SaveCommBtnDesktop";
import PostedBySection from "./PostComponent/PostedBySection";

const ListingPosts = ({ post }) => {
  return (
    <div
      className={`
      w-full 
      m-auto  
      border-solid
      border 
      shadow-md
      rounded-xl 
      mt-4 
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
          className="max-w-[100%] h-auto rounded-xl"
        />
      </div>

      <div className="w-[90%]  md:px-4">
        <div className="h-[80%] ">
          <h3 className="pt-4 truncate text-gray-300 underline">
            {post.title}
          </h3>
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
            {post.content}
          </div>
        </div>

        <IconsMobile />

        <div className="hidden md:flex flex-row w-[100%] py-2 ">
          <SaveCommBtnDesktop />
          <PostedBySection />
        </div>
      </div>
    </div>
  );
};

export default ListingPosts;
