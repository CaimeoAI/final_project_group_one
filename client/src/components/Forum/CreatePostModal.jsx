import Input from "./Input";
import Textarea from "./Texterea";
import Button from "./Button";
import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import { useState } from "react";
import axios from "axios";
import { staticToken } from "./token";

const CreatePostModal = ({ getAllPost }) => {
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
              
                w-3/4 
                md:w-2/4
              bg-zinc-800 
                p-5 
                text-sm 
                self-center 
                mx-auto 
                rounded-md"
      >
        <h1 className="text-2xl mb-5 text-slate-50">Create a post</h1>
        <Input
          className={"w-full mb-2"}
          placeholder={"Title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          className={"w-full mb-3"}
          placeholder={"Post text (you can use markdown)"}
          value={body}
          onChange={(e) => setBody(e.target.value)}
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
