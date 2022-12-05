import ForumSearch from "./ForumSearch";
import ForumPost from "./ForumPost";
import posts from './forum-data.js'

const ForumComponent = () => {
  return (
    <div className="w-[80%] h-[100%] flex flex-col flex-1">
      <ForumSearch/>
      <div className="h-[93%]">
      {posts.map((post)=>(
        <ForumPost key={post.id} post={post}/>
      ))}
      </div>
      
    </div>
  );
};

export default ForumComponent;
