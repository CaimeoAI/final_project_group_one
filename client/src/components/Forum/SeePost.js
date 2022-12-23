import React from "react";
import { staticToken } from "./token";
import axios from "axios";
import { useState, useEffect } from "react";
import Textarea from "./Texterea";
import Button from "./Button";
import Comment from "./Comment";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const SeePost = () => {
  const modules = {
    toolbar: [
      ["bold", "underline", "italic"],
      ["code-block", "blockquote"],
      [{ header: [1, 2, 3, 4, 5] }],
      [{ list: "ordered" }],
      [{ list: "bullet" }],
    ],
  };

  const [singelPost, setSingelPost] = useState({});
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");

  const { id } = useParams();

  const getPost = async () => {
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

  useEffect(() => {
    getPost();
  }, []);

  const addComment = async () => {
    const data = { content };
    const URL = `${process.env.REACT_APP_BE_URL}/academia/posts/${id}`;
    const configuration = {
      headers: {
        authorization: staticToken,
      },
    };
    try {
      await axios.post(URL, data, configuration);
      getPost();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`bg-slate-600 p-12 text-slate-300 w-full h-screen overflow-auto`}
    >
      {/* //---------- Question Section ----------- */}
      <div className={`mb-8`}>
        <h1 className="text-xl mb-5 text-orange-300 border-b border-slate-300 pb-5">
          {singelPost.title}
        </h1>
   <div className="fromEditor inline-block" dangerouslySetInnerHTML={{__html: singelPost.body}}></div>
      </div>

      {/* //---------- Comments Section ----------- */}
      <div className={`mb-8`}>
        <h1 className="text-xl mb-5 text-orange-300">
          <span>{comments.length}</span> Answers
        </h1>
        {comments.length > 0 &&
          comments.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))}
      </div>

      {/* //---------- Form Section ----------- */}
      <h1 className="text-xl mb-5 text-orange-300">Your Answer</h1>

      <div className={`md:w-[70%] `}>
        {/* <Textarea
          className={"w-full h-48 mb-3"}
          placeholder={"Post text (you can use markdown)"}
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        /> */}
         
          <ReactQuill modules={modules} theme="snow" value={content} onChange={setContent}  className="h-[250px] md:h-[300px] lg:h-[400px] bg-gray-100 overflow-auto text-gray-800 mb-6"/>
        
        <div className="text-start">
          <Button
            onClick={() => {
              addComment();
              setContent("");
            }}
            className={"px-5 py-2"}
          >
            Post your answer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SeePost;
