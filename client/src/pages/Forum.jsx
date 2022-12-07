import ForumSearch from "../components/Forum/ForumSearch";
import ForumListOfPosts from "../components/Forum/ForumListOfPosts";
import { posts } from "../components/Forum/forum-data.js";
import BarCreatePost from "../components/Forum/BarCreatePost";
import UserPicTablet from "../components/UserPicTablet";

const Forum = () => {
  return (
    <div
      className="
            w-[95%] 
            mb-[75px] 
            px-[5%] 
            flex 
            flex-col 
            flex-1 
            justify-center 
            align-center  
            md:ml-[60px] 
            md:mb-4
            lg:pl-[220px]"
    >
      <div className="flex flex-row">
        <ForumSearch />
        <BarCreatePost />
        <UserPicTablet/>
      </div>

      <div>
        {posts.map((post) => (
          <ForumListOfPosts key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Forum;
