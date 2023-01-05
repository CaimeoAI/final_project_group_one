import { createContext, useContext, useState } from "react";
import { staticToken } from "../components/Forum/token";
import axios from "axios";

const ForumContext = createContext();

export const useForum = () => {
  return useContext(ForumContext);
};

export function ForumProvider({ children }) {
  //! 01 - STATES
  const [posts, setPosts] = useState([]);
  const [singelPost, setSingelPost] = useState({});
  const [comments, setComments] = useState([]);

  const modulesReactQuill = {
    toolbar: [
      ["bold", "underline", "italic"],
      ["code-block", "blockquote"],
      [{ list: "ordered" }],
      [{ list: "bullet" }],
    ],
  };

  //* 02 - FUNCTIONS
  const getAllPost = async () => {
    const URL = `${process.env.REACT_APP_BE_URL}/academia/posts`;
    const configuration = {
      headers: {
        authorization: staticToken,
      },
    };
    try {
      const result = await axios.get(URL, configuration);
      setPosts(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPost = async (id) => {
    const URL = `${process.env.REACT_APP_BE_URL}/academia/posts/${id}`;
    const configuration = {
      headers: {
        authorization: staticToken,
      },
    };
    try {
      const result = await axios.get(URL, configuration);
      setSingelPost(result.data);
      setComments(result.data.comments);
    } catch (error) {
      console.log(error);
    }
  };

  const voteNum = (post) => {
    return post?.likes?.length - post?.dislikes?.length || "Vote";
  };

  const voting = async (action, post, id) => {
    const fetchId = !id ? post._id : id;

    const URL = `${process.env.REACT_APP_BE_URL}/academia/posts/${fetchId}`;

    const configuration = {
      headers: {
        authorization: staticToken,
      },
    };
    try {
      await axios.put(URL, { action }, configuration);
      id ? getPost(fetchId) : getAllPost();
    } catch (error) {
      console.log(error);
    }
  };

  const htmlDecode = (content) => {
    let e = document.createElement("div");
    e.innerHTML = content;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  };

  const bestPost = () => {
    setPosts([...posts].sort((a, b) => b.likes.length - a.likes.length));
  };

  const hotPosts = () => {
    setPosts([...posts].sort((a, b) => b.comments.length - a.comments.length));
  };

  const latestPosts = () => {
    setPosts([...posts].reverse());
  };

  return (
    <ForumContext.Provider
      value={{
        getAllPost,
        posts,
        getPost,
        singelPost,
        setSingelPost,
        comments,
        setComments,
        voting,
        voteNum,
        modulesReactQuill,
        htmlDecode,
        bestPost,
        hotPosts,
        latestPosts,
      }}
    >
      {children}
    </ForumContext.Provider>
  );
}
