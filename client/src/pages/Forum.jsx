import ForumSearch from "../components/Forum/ForumSearch";
import ListingPosts from "../components/Forum/ListingPosts.jsx";
import BarCreatePost from "../components/Forum/BarCreatePost";
import { useState } from "react";
import { useEffect } from "react";
import { staticToken } from "../components/Forum/token.js";
import axios from "axios";
import CreatePostModal from "../components/Forum/CreatePostModal";
import { useContext } from "react";
import { MainContext } from "../context/MainContext";

const Forum = () => {
  const { showPostFormModal } = useContext(MainContext);
  const [posts, setPosts] = useState([]);

  const getAllPost = async () => {
    const URL = `${process.env.REACT_APP_BE_URL}/academia/posts`;
    const configuration = {
      headers: {
        authorization: staticToken,
      },
    };
    try {
      const result = await axios.get(URL, configuration);
      setPosts(result.data.reverse());
      //console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <div
      className="
        w-screen
        h-screen
        overflow-auto
      bg-slate-600
        p-4
        lg:pr-6
        "
    >
      <div className="flex flex-row justify-between mb-6">
        <ForumSearch />
        <BarCreatePost />
      </div>

      <div className={!showPostFormModal ? "hidden" : ""}>
        <CreatePostModal getAllPost={getAllPost} />
      </div>

      
      {posts.length > 0 &&
        posts.map((post) => <ListingPosts key={post._id} post={post} />)}
     
    </div>
  );
};

export default Forum;
