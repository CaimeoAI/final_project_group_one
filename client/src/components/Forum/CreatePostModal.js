//! 01 - HOOKS
import { useForum } from "../../context/ForumProvider";
import { useContext, useEffect, useState } from "react";
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

const CreatePostModal = ({ getAllPost }) => {
  const { modulesReactQuill, getLocalStorageData } = useForum();
  const { setShowPostFormModal } = useContext(MainContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [topic, setTopic] = useState("Select a field");
  const [val, setVal] = useState(true);

  const createPost = async () => {
    const token = getLocalStorageData("token");
    const data = { title, body, topic };
    const URL = `${process.env.REACT_APP_BE_URL}/academia/posts`;
    const configuration = {
      headers: {
        authorization: token,
      },
    };
    try {
      await axios.post(URL, data, configuration);
      getAllPost();
    } catch (error) {
      console.log(error);
    }
  };

  const checkValability = () => {
    if (body === "" || title === "" || topic === "Choose a field") {
      setVal(true);
    } else {
      setVal(false);
    }
  };

  useEffect(() => {
    checkValability();
  }, [body, title, topic]);

  return (
    <div
      className={"w-screen h-screen fixed top-0 left-0 z-20 flex"}
      style={{ backgroundColor: "rgba(0,0,0,.5)"}}
    >
      <div
        className="
                shadow-2xl
                bg-secondary
                w-[90%]
                md:w-[60%]
                lg:w-[40%]
                p-6
                md:py-10
                md:px-[35px]
                lg:px-[30px]
                text-sm 
                self-center 
                mx-auto 
                rounded-md
                "
      >
        <div className={`flex flex-col md:flex-row  md:w-[97%] justify-between md:items-center pl-1 mb-3 md:mb-0`}>
          <h1 className="mb-4 md:mb-1 md:pl-4 lg:pl-[26px] font-semibold text-lg md:text-xl text-accent-primary">
            Create a post
          </h1>
          <Dropdowns topic={topic} setTopic={setTopic} />
        </div>

        <div
          className={`w-full flex flex-col items-center md:p-3 pb-10 md:pb-14 lg:py-3 lg:pb-10 rounded`}
        >
          <Input
            className={
              "w-[97%] mb-2 pl-2 placeholder:text-grayed-out placeholder:text-[14px]"
            }
            placeholder={`Title`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <ReactQuill
            modules={modulesReactQuill}
            theme="snow"
            value={body}
            onChange={setBody}
            className="w-[97%] h-[250px] md:h-[300px] lg:h-[250px] rounded  text-text-primary text-md"
          />
        </div>

        <div className="text-right  pt-12 pr-1 md:pt-0 lg:pt-6 md:pr-6">
          <button
            disabled={val}
            onClick={() => {
              createPost();
              setShowPostFormModal(false);
              setTitle("");
              setBody("");
              setTopic("Choose a field");
            }}
            className={`${
              val ? "cursor-not-allowed" : "cursor-pointer"
            } inline-block mx-2 px-6 py-2.5 bg-accent-secondary text-text-primary font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-accent-secondary hover:shadow-lg focus:bg-hover-secondary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-grayed-out active:shadow-lg transition duration-150 ease-in-out ml-1 `}
          >
            POST
          </button>
          <button
                    onClick={() => {
                      setShowPostFormModal(false);
                      setTopic("Choose a field");
                    }}
                    outline="true"
                   className="inline-block 
                                  px-6 
                                  py-2.5
                                  bg-accent-tertiary
                                  text-text-primary 
                                  font-medium  
                                  text-xs 
                                  leading-tight 
                                  uppercase 
                                  rounded 
                                  shadow-md
                                  hover:bg-hover-tertiary 
                                  hover:shadow-lg 
                                  focus:bg-slate-700 
                                  focus:shadow-lg 
                                  focus:outline-none 
                                  focus:ring-0 
                                  active:bg-slate-800 
                                  active:shadow-lg 
                                  transition 
                                  duration-150 
                                  ease-in-out">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
