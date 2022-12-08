import ForumSearch from "../components/Forum/ForumSearch";
import ListingPosts from "../components/Forum/ListingPosts.jsx";
import { posts } from "../components/Forum/forum-data.js";
import BarCreatePost from "../components/Forum/BarCreatePost";
import UserPicTablet from "../components/UserPicTablet";

const Forum = () => {
  return (
    <div
      className="
            w-full
            md:w-[95%]
            mb-[75px] 
            px-6
            md:px-10
            flex 
            flex-col 
            justify-center 
            align-center  
            md:ml-[60px] 
            md:mb-4
            lg:pl-[220px]" >

      <div className="flex flex-row">
        <ForumSearch />
        <BarCreatePost />
        <UserPicTablet/>
      </div>
      
        {posts.map((post) => (
          <ListingPosts key={post.id} post={post} />
        ))}
      
    </div>
  );
};

export default Forum;
