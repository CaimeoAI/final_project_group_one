import { createContext, useContext, useState } from "react";
import axios from "axios";

import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

const ForumContext = createContext();

export const useForum = () => {
  return useContext(ForumContext);
};

export function ForumProvider({ children }) {
  //! 01 - STATES
  const [posts, setPosts] = useState([]);
  const [singelPost, setSingelPost] = useState({});
  const [comments, setComments] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filterBy, setFilterBy] = useState("");

  const modulesReactQuill = {
    toolbar: [
      ["bold", "underline", "italic"],
      ["code-block", "blockquote"],
      [{ list: "ordered" }],
      [{ list: "bullet" }],
    ],
  };

  //* 02 - FUNCTIONS
  const getLocalStorageData = (data) => {
    return data === "token"
      ? "Bearer " + localStorage.getItem(data)
      : localStorage.getItem(data);
  };
  const user = getLocalStorageData("userID");

  const getAllPost = async (filter) => {
    const URL = `${process.env.REACT_APP_BE_URL}/academia/posts`;
    const configuration = {
      headers: {
        authorization: getLocalStorageData("token"),
      },
    };
    try {
      const result = await axios.get(URL, configuration);
      if (filter) {
        const filterResult = result.data.filter((el) => el.topic === filter);
        setPosts(filterResult);
      } else {
        setPosts(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getPost = async (id) => {
    const URL = `${process.env.REACT_APP_BE_URL}/academia/posts/${id}`;
    const configuration = {
      headers: {
        authorization: getLocalStorageData("token"),
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
        authorization: getLocalStorageData("token"),
      },
    };
    try {
      await axios.put(URL, { action }, configuration);
      id ? getPost(fetchId) : getAllPost(filterBy);
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

  const votingIconColor = (arr, vote) => {
    if (arr?.includes(user) && vote === "likes") {
      return "text-green-600 hover:fill-green-700 ";
    } else if (arr?.includes(user) && vote === "dislikes") {
      return "text-blue-400  hover:fill-blue-500";
    } else {
      return "text-slate-500 hover:fill-slate-400";
    }
  };

  const votingNumColor = (post) => {
    if (post?.likes?.includes(user)) {
      return "text-green-700";
    } else if (post?.dislikes?.includes(user)) {
      return "text-blue-400";
    } else {
      return "text-gray-200";
    }
  };

  const votingIcon = (post) => {
    if (!post?.likes?.includes(user) && !post?.dislikes?.includes(user)) {
      return "none";
    } else if (post?.likes?.includes(user)) {
      return "liked";
    } else {
      return "disliked";
    }
  };
  const likedBtnFun = (post) => {
    const likedBtn = votingIcon(post);
    if (likedBtn === "liked") {
      return ThumbUpAltIcon;
    } else {
      return ThumbUpOffAltIcon;
    }
  };
  const dislikedBtnFun = (post) => {
    const dislikedBtn = votingIcon(post);
    if (dislikedBtn === "disliked") {
      return ThumbDownAltIcon;
    } else {
      return ThumbDownOffAltIcon;
    }
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
        votingIconColor,
        votingNumColor,
        votingIcon,
        likedBtnFun,
        dislikedBtnFun,
        getLocalStorageData,
        setSearchInput,
        searchInput,
        filterBy,
        setFilterBy,
      }}
    >
      {children}
    </ForumContext.Provider>
  );
}
