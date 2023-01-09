//! 01 - HOOKS
import { MainContext } from "../context/MainContext";
import { useForum } from "../context/ForumProvider";
import { useEffect, useContext } from "react";

//* 02 - COMPONENTS
import ForumSearch from "../components/Forum/ForumSearch";
import ListingPosts from "../components/Forum/ListingPosts";
import BarCreatePost from "../components/Forum/BarCreatePost";
import CreatePostModal from "../components/Forum/CreatePostModal";

const Forum = () => {
  const { showPostFormModal, setShowPostFormModal } = useContext(MainContext);
  const { getAllPost, posts, searchInput } = useForum();

  const filteredPosts = posts.filter((item) => {
    if (searchInput === "") {
      return item;
    } else {
      return item.title.toLowerCase().includes(searchInput);
    }
  });

  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <div
      className="
        w-screen
        h-screen
        overflow-auto
       bg-[#152238]
        p-4
        md:px-6
        lg:px-10
        flex
        flex-col
        "
    >
      <ForumSearch />

      <div className={!showPostFormModal ? "hidden" : ""}>
        <CreatePostModal getAllPost={getAllPost} />
      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-slate-500 text-sm md:w-[50%]  md:text-[1.3em] m-auto pl-3 md:leading-9 font-mono ">
          <h3>
            There are currently no posts in the forum that address this topic.
            If you would like to start a discussion and be the first to bring it
            up, you can click
            <span
              onClick={() => setShowPostFormModal(true)}
              className="text-blue-500 underline hover:text-blue-600 cursor-pointer mx-2"
            >
              here
            </span>
            to create a new thread.
          </h3>
        </div>
      ) : (
        <>
          <BarCreatePost />
          {filteredPosts.length > 0 &&
            filteredPosts.map((post) => (
              <ListingPosts key={post._id} post={post} />
            ))}
        </>
      )}
    </div>
  );
};

export default Forum;
