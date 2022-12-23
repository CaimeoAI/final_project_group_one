import Input from "./Input";
import Textarea from "./Texterea";
import Button from "./Button";
import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import { useState } from "react";
import axios from "axios";
import { staticToken } from "./token";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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

  const createPost = async () => {
    const data = { title, body };
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
      style={{ backgroundColor: "rgba(0,0,0,.5)" }}
    >
      <div
        className="
                shadow-2xl
                bg-[#1B262C]
                w-3/4 
                md:w-[62%]
                p-6
                md:py-6
                md:px-8
                text-sm 
                self-center 
                mx-auto 
                rounded-md
                "
      >
        <h1 className="text-2xl mb-5 text-slate-100">Create a post</h1>
        <Input
          className={"w-full mb-2 placeholder-black::placeholder"}
          placeholder={"Title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <ReactQuill
          modules={modules}
          theme="snow"
          value={body}
          onChange={setBody}
          className="h-[250px] md:h-[300px] lg:h-[300px] bg-slate-200 overflow-auto text-black mb-6"
        />

        <div className="text-right">
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
