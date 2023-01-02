//! 01 - HOOKS
import { useForum } from "../../context/ForumProvider";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//* 02 - COMPONENTS
import VoteBtnDesktop from "./PostComponent/VoteBtnDesktop";
import Button from "./Button";
import Comment from "./Comment";

//! 03 - INSTALL
import axios from "axios";
import ReactQuill from "react-quill";

//? 04 - STYLING
import "react-quill/dist/quill.snow.css";
import "./FromEditor.css";
import { staticToken } from "./token";

const SeePost = () => {
  const { getPost, singelPost, comments, modulesReactQuill } = useForum();
  const { id } = useParams();

  const [content, setContent] = useState("");

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
      className={`bg-slate-600 px-9 py-7 text-slate-300 w-full h-screen overflow-auto`}
    >
      {/* //---------- Question Section ----------- */}
      <div className={`  bg-slate-700 rounded-t-md`}>
        <div className="flex flex-row  py-2 mb-4 items-center shadow-xl  bg-slate-700  rounded-t-md ">
          <div className="py-3">
            <VoteBtnDesktop post={singelPost} />
          </div>
          <h1 className="text-[32px] font-semibold  text-orange-300">
            {singelPost.title}
          </h1>
        </div>
        <div
          className="fromEditor inline-block md:px-14 py-4 font-semibold text-lg "
          dangerouslySetInnerHTML={{ __html: singelPost.body }}
        ></div>
      </div>

      {/* //---------- Comments Section ----------- */}
      <div className={`md:py-6 md:px-14 shadow-xl bg-slate-700  `}>
        <h1 className="text-xl  text-orange-300 pb-6">
          <span>{comments.length}</span> Answers
        </h1>
        {comments.length > 0 &&
          comments.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))}
      </div>

      {/* //---------- Form Section ----------- */}
      <div className="shadow-xl bg-slate-700 rounded-b-md">
        <h1 className="text-xl mb-5 text-orange-300 md:pl-12">Your Answer</h1>

        <div className={`w-full p-2 flex items-center flex-col`}>
          <div className="pb-9 md:w-[70%]">
            <ReactQuill
              modules={modulesReactQuill}
              theme="snow"
              value={content}
              onChange={setContent}
              className="h-[250px] md:h-[300px] lg:h-[400px] pb-11 bg-slate-500"
            />
          </div>

          <div className="text-start md:pl-5">
            <Button
              onClick={() => {
                addComment();
                setContent("");
              }}
              className={"px-5 py-2 mb-4"}
            >
              Post your answer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeePost;
