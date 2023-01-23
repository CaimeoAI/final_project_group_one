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
import {IoArrowBackCircleOutline} from "react-icons/io5"
import "react-quill/dist/quill.snow.css";
import "./FromEditor.css";

const SeePost = () => {
  const { getPost, singelPost, comments, modulesReactQuill, htmlDecode, getLocalStorageData } = useForum();
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
        authorization: getLocalStorageData("token"),
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
      className={`bg-primary md:py-2 md:px-9 text-text-primary w-full h-screen overflow-auto pb-16`}
    >
      {/* //---------- Question Section ----------- */}
       <NavLink to={`/academia`}>
         <div className="flex justify-end  text-grayed-out font-semibold md:pr-2 py-3  hover:text-hover-primary">
         <IoArrowBackCircleOutline className="cursor-pointer mx-2 w-[20px] h-[20px] md:w-[26px] md:h-[26px] "/>
         <span className="hidden md:block">Go Back</span>
         </div>
         </NavLink>
      <div className="flex flex-row  bg-secondary rounded-md shadow mx-4 md:mx-0">
      <SinglePostVote post={singelPost} />
      <div className="pl-5 py-4 ">
      <h1 className="text-md md:text-[23px]  text-grayed-out font-serif ">
            {singelPost.title}
          </h1>
          <div
          className="fromEditor  text-text-primary pr-5 pt-2"
          dangerouslySetInnerHTML={{ __html: htmlDecode(sanitizedHTML) }}
        ></div>
      </div>
      </div>

      {/* //---------- Comments Section ----------- */}
      <div className={`px-4 md:py-6 md:px-10 text-text-primary  `}>
        <h1 className="text-sm md:text-[18px] font-bold  text-accent-secondary md:pb-6  font-serif py-3">
          <span className="text-[24px] pr-1">{comments.length}</span> answers
        </h1>
        {comments.length > 0 &&
          comments.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))}
      </div>

      {/* //---------- Form Section ----------- */}
      <div className="">
        <h1 className="text-sm md:text-[18px] font-bold font-serif mb-2 text-accent-secondary pl-5 md:pl-[40px]">Your answer</h1>

        <div className={`w-full  flex items-center flex-col`}>
          <div className="pb-5 w-[90%] md:w-[75%] lg:w-[55%]">
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
                   className="inline-block 
                              mb-5 
                              px-6  
                              p-2.5
                              bg-accent-secondary
                              text-text-primary 
                              font-medium 
                              text-xs 
                              leading-tight 
                              uppercase 
                              rounded 
                              shadow-md 
                              hover:bg-hover-secondary  
                              hover:shadow-lg
                              focus:bg-hover-secondary 
                              focus:shadow-lg 
                              focus:outline-none 
                              focus:ring-0 
                              active:bg-grayed-out 
                              active:shadow-lg 
                              transition 
                              duration-150 
                              ease-in-out 
                              ml-1 ">
                Comment
             </button>
         
        </div>
      </div>
    </div>
  );
};

export default SeePost;
