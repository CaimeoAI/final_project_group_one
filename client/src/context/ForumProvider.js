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
      setPosts(result.data.reverse());
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
    return post?.likes?.length - post?.dislikes?.length || 0;
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

  const modulesReactQuill = {
    toolbar: [
      ["bold", "underline", "italic"],
      ["code-block", "blockquote"],
      [{ header: [1, 2, 3, 4, 5] }],
      [{ list: "ordered" }],
      [{ list: "bullet" }],
    ],
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
      }}
    >
      {children}
    </ForumContext.Provider>
  );
}
