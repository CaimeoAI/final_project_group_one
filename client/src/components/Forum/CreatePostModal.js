//! 01 - HOOKS
import { useForum } from "../../context/ForumProvider";
import { useContext, useState } from "react";
import { MainContext } from "../../context/MainContext";

//* 02 - COMPONENTS
import Input from "./Input";
import Dropdowns from "./Dropdowns";

//! 03 - INSTALL
import axios from "axios";
import ReactQuill from "react-quill";

//? 04 - STYLING
import "react-quill/dist/quill.snow.css";
import "./FromEditor.css";
import { staticToken } from "./token";

const CreatePostModal = ({ getAllPost }) => {
  const { modulesReactQuill } = useForum();
  const { setShowPostFormModal } = useContext(MainContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [topic, setTopic] = useState("Choose a field");

  const createPost = async () => {
    const data = { title, body, topic };
    const URL = `${process.env.REACT_APP_BE_URL}/academia/posts`;
    const configuration = {
      headers: {
        authorization: staticToken,
      },
    };
    try {
      await axios.post(URL, data, configuration);
      getAllPost();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={"w-screen h-screen fixed top-0 left-0 z-20 flex"}
      style={{ backgroundColor: "rgba(0,0,0,.89)" }}
    >
      <div
        className="
                shadow-2xl
                bg-slate-800
                w-3/4 
                md:w-[62%]
                lg:w-[52%]
                p-6
                md:py-8
                md:px-[35px]
                lg:px-[47px]
                text-sm 
                self-center 
                mx-auto 
                rounded-md
                "
                
      >
        <div className={`w-full border-b border-slate-700 mb-4`}>
          <h1 className="text-lg md:text-2xl pb-3 text-slate-200">Create a post</h1>
        </div>
        <div className="">
          <Dropdowns topic={topic} setTopic={setTopic} />
        </div>

        <div
          className={`bg-slate-600 w-full flex flex-col items-center p-3 pb-20 md:pb-14 lg:py-5 lg:pb-10 rounded`}
        >
          <Input
            className={"w-[97%] mb-2 pl-2"}
            placeholder={"Title"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <ReactQuill
            modules={modulesReactQuill}
            theme="snow"
            value={body}
            onChange={setBody}
            className="w-[97%] h-[250px] md:h-[300px] lg:h-[300px] rounded mb-6"
          />
        </div>

        <div className="text-right mt-6 md:border-t border-slate-700 pt-4">
        <button
            onClick={() => {
              createPost();
              setShowPostFormModal(false);
              setTitle("");
              setBody("");
              setTopic("Choose a field");
            }}
            className={"inline-block mx-2 px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out ml-1 "}
          >
            POST
          </button>
          <button
            outline="true"
            onClick={() => {
              setShowPostFormModal(false);
              setTopic("Choose a field");
            }}
            className={"inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"}
          >
            Cancel
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
