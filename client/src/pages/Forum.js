//! 01 - HOOKS
import { MainContext } from "../context/MainContext";
import { useForum } from "../context/ForumProvider";
import { useEffect, useContext, useState } from "react";

//* 02 - COMPONENTS
import ForumSearch from "../components/Forum/ForumSearch";
import ListingPosts from "../components/Forum/ListingPosts";
import BarCreatePost from "../components/Forum/BarCreatePost";
import CreatePostModal from "../components/Forum/CreatePostModal";

import { RiseLoader } from "react-spinners";

const Forum = () => {
  const { showPostFormModal, setShowPostFormModal } = useContext(MainContext);
  const { getAllPost, posts, searchInput, isLoading } = useForum();

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
        h-full
        overflow-auto
        bg-primary
        text-grayed-out
        p-5
        md:px-6
        lg:px-8
        flex
        flex-col
        flex-initial
        pb-[70px]
        md:pb-4
        "
    >
      <ForumSearch />

      <div className={!showPostFormModal ? "hidden" : ""}>
        <CreatePostModal getAllPost={getAllPost} />
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-screen mt-6">
          <RiseLoader color="#334155" size={20} aria-label="Loading Spinner" />
        </div>
      ) : filteredPosts.length === 0 ? (
        <div className="text-slate-500 text-sm md:w-[50%]  md:text-[1.3em] m-auto pl-3 md:leading-9 font-mono ">
          <h3>
            There are currently no posts in the forum that address this topic.
            If you would like to start a discussion and be the first to bring it
            up, you can click
            <span
              onClick={() => setShowPostFormModal(true)}
              className="text-accent-secondary underline hover:text-hover-secondary cursor-pointer mx-2"
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
      <div className="h-16"></div>
    </div>
  );
};

export default Forum;
