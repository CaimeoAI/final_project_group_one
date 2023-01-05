//! 01 - HOOKS
import { NavLink } from "react-router-dom";
import { useForum } from "../../context/ForumProvider";

//* 02 - COMPONENTS
import VoteBtnDesktop from "./PostComponent/VoteBtnDesktop";
import IconsMobile from "./PostComponent/IconsMobile";
import SaveCommBtnDesktop from "./PostComponent/SaveCommBtnDesktop";
import PostedBySection from "./PostComponent/PostedBySection";

//! 03 - INSTALL
import DOMPurify from "dompurify";

//? 04 - STYLING
import { styles } from "./styles";

const ListingPosts = ({ post }) => {
  const { htmlDecode } = useForum();

  const sanitizedHTML = DOMPurify.sanitize(post.body);

  return (
    <div
      className={`
      w-full
      flex 
      flex-col
      p-4
      md:p-0
      border
      border-slate-700
      hover:border-gray-600
      rounded-lg
      md:rounded-md
      hover:transition hover:duration-90 ease-in hover:ease-out
      mb-[14px]
      md:grid
      md:grid-cols-[60px_2fr]
      lg:grid-cols-[65px_2fr]
      `}
      style={{ backgroundColor: " rgb(33,45,66)" }}
    >
      <VoteBtnDesktop post={post} />

      <NavLink to={`/academia/${post._id}`}>
        <div className="md:pl-4 md:pt-2">
          <div className="min-h-[100px]">
            <h1
              className={`  text-gray-300 mb-2 font-bold cursor-pointer md:text-lg ${styles.hoverText}`}
            >
              {post.title}
            </h1>

            <div
              className={`
            ${styles.textPost} 
            overflow-hidden 
            mb-2
            md:mb-1 
            lg:pr-2`}>
              <div
                className="inAllPosts"
                dangerouslySetInnerHTML={{ __html: htmlDecode(sanitizedHTML) }}
              ></div>
            </div>
          </div>

          <div className="hidden md:flex flex-row md:w-full py-2 justify-between ">
            <SaveCommBtnDesktop comments={post.comments.length} />
            <PostedBySection user={post.author.email} time={post.createdAt} />
          </div>
        </div>
      </NavLink>
      <IconsMobile comments={post.comments.length} post={post} />
    </div>
  );
};

export default ListingPosts;
