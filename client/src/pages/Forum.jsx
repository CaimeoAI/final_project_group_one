import ForumSearch from "../components/Forum/ForumSearch";
import ListingPosts from "../components/Forum/ListingPosts.jsx";
import { posts } from "../components/Forum/forum-data.js";
import BarCreatePost from "../components/Forum/BarCreatePost";

const Forum = () => {
  return (
    <div
      className="
      bg-slate-700
        p-6"
    >
      <div className="flex flex-row justify-between">
        <ForumSearch />
        <BarCreatePost />
      </div>

      {posts.map((post) => (
        <ListingPosts key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Forum;
