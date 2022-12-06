import ForumSearch from "../components/Forum/ForumSearch";
import ForumPost from "../components/Forum/ForumPost";
import { posts } from "../components/Forum/forum-data.js";
import BarCreatePost from "../components/Forum/BarCreatePost";

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
            md:ml-[60px] md:mb-4
            lg:px-[3%] 
            lg:pl-[17%]"
    >
      <div className="flex flex-row">
        <ForumSearch />
        <BarCreatePost />
      </div>

      <div>
        {posts.map((post) => (
          <ForumPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Forum;
