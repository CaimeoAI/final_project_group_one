//! 01 - HOOKS
import { useForum } from "../../context/ForumProvider";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

//* 02 - COMPONENTS
import SinglePostVote from "./SinglePostVote";
import Comment from "./Comment";

//! 03 - INSTALL
import axios from "axios";
import ReactQuill from "react-quill";
import DOMPurify from 'dompurify';

//? 04 - STYLING
import {MdClose} from "react-icons/md"
import "react-quill/dist/quill.snow.css";
import "./FromEditor.css";
import { staticToken } from "./token";

const SeePost = () => {
  const { getPost, singelPost, comments, modulesReactQuill, htmlDecode } = useForum();
  const { id } = useParams();

  const [content, setContent] = useState("");
  const sanitizedHTML = DOMPurify.sanitize(singelPost.body); 

  useEffect(() => {
    getPost(id);
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
      getPost(id);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div
      className={`bg-slate-600 p-2 text-slate-300 w-full h-screen overflow-auto`}
    >
      {/* //---------- Question Section ----------- */}
      <div className={`  bg-slate-700 rounded-t-md `}>
        <div className="w-full flex flex-row py-2 mb-4 items-center shadow  bg-slate-700 rounded-t-md relative ">
          
            <SinglePostVote post={singelPost} />
          
          <h1 className="text-md md:text-xl font-semibold  text-orange-300 p-3">
            {singelPost.title}
          </h1>
         <NavLink to={`/academia`}>
         <MdClose className="cursor-pointer absolute top-[6px] right-[6px] md:top-2 md:right-2  w-[20px] h-[20px] md:w-[24px] md:h-[24px] text-slate-500 hover:text-slate-800"/>
         </NavLink>
        </div>
        <div
          className="fromEditor md:px-14 p-4 font-semibold  text-sm md:text-lg "
          dangerouslySetInnerHTML={{ __html: htmlDecode(sanitizedHTML) }}
        ></div>
      </div>

      {/* //---------- Comments Section ----------- */}
      <div className={`px-4 md:py-6 md:px-14 bg-slate-700  `}>
        <h1 className="md:-ml-4 text-sm md:text-xl  text-orange-300 pb-6">
          <span>{comments.length}</span> Answers
        </h1>
        {comments.length > 0 &&
          comments.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))}
      </div>

      {/* //---------- Form Section ----------- */}
      <div className="shadow-xl bg-slate-700 rounded-b-md">
        <h1 className="text-sm pl-4 md:text-xl mb-2 text-orange-300 md:pl-10">Your Answer</h1>

        <div className={`w-full  flex items-center flex-col`}>
          <div className="pb-5 w-[90%] md:w-[70%] ">
            <ReactQuill
              modules={modulesReactQuill}
              theme="snow"
              value={content}
              onChange={setContent}
              className="h-[250px] md:h-[300px] lg:h-[400px] pb-[42px] md:pb-11 bg-slate-500"
            />
          </div>

         
            <button
              onClick={() => {
                addComment();
                setContent("");
              }}
              className={"inline-block mb-5 px-6 p-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out ml-1 "}
            >
              Post your answer
            </button>
         
        </div>
      </div>
    </div>
  );
};

export default SeePost;
