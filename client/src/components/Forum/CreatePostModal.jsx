import Input from "./Input";
import Button from "./Button";
import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import { useState } from "react";
import axios from "axios";
import { staticToken } from "./token";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Dropdowns from "./Dropdowns";
import "./FromEditor.css";

const CreatePostModal = ({ getAllPost }) => {
  const modules = {
    toolbar: [
      ["bold", "underline", "italic"],
      ["code-block", "blockquote"],
      [{ header: [1, 2, 3, 4, 5] }],
      [{ list: "ordered" }],
      [{ list: "bullet" }],
    ],
  };

  const { setShowPostFormModal } = useContext(MainContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [topic, setTopic] = useState("Choose a field");

  const createPost = async () => {
    const data = { title, body, topic };
    console.log(data);
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
                p-6
                md:py-8
                md:px-16
                text-sm 
                self-center 
                mx-auto 
                rounded-md
                "
      >
        <div className={`w-full border-b border-slate-700 mb-4`}>
          <h1 className="text-2xl pb-3 text-slate-200">Create a post</h1>
        </div>
        <div className="">
          <Dropdowns topic={topic} setTopic={setTopic} />
        </div>

        <div
          className={`bg-slate-600 w-full flex flex-col items-center p-3 pb-20 md:pb-14 lg:py-5 lg:pb-10 rounded`}
        >
          <Input
            className={"w-[97%] mb-2 text-white"}
            placeholder={"Title"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <ReactQuill
            modules={modules}
            theme="snow"
            value={body}
            onChange={setBody}
            className="w-[97%] h-[250px] md:h-[300px] lg:h-[300px] rounded mb-6"
          />
        </div>

        <div className="text-right mt-6 md:border-t border-slate-700 pt-4">
          <Button
            outline="true"
            onClick={() => setShowPostFormModal(false)}
            className={"px-5 py-2 mr-3"}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              createPost();
              setShowPostFormModal(false);
              setTitle("");
              setBody("");
              setTopic("Choose a field");
            }}
            className={"px-5 py-2"}
          >
            POST
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
