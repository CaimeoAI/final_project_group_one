//! 01 - HOOKS
import { useForum } from "../../context/ForumProvider";

//* 02 - INSTALL
import DOMPurify from "dompurify";

//? 03 - STYLING
import { BsDot } from "react-icons/bs";
import "./FromEditor.css";

const Comment = ({ comment }) => {
  const { htmlDecode } = useForum();
  const sanitizedHTML = DOMPurify.sanitize(comment.content);

  const timeStr = new Date(comment.createdAt).toString();
  const date = timeStr.slice(4, 10);
  const year = timeStr.slice(11, 15);
  const hour = timeStr.slice(16, 21);

  return (
    <div>
      <div>
        <div className="flex flex-row text-right w-full justify-start items-center">
          <div className={`w-7 h-7 rounded-full bg-gray-300 mr-2`}>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              alt="user profile pic"
              className="w-[100%] object-cover rounded-full"
            />
          </div>
          <p className={`font-bold text-green-700`}>
            {comment.author.email.split("@")[0]}
          </p>
          <BsDot />
          <p className={`text-sm font-mono text-gray-400`}>
            {date},<span> {year}</span>
            <span> at </span>
            {hour}
          </p>
        </div>
        <div className={`ml-9 py-6`}>
          <div
            className="fromEditor text-sm md:text-lg"
            dangerouslySetInnerHTML={{ __html: htmlDecode(sanitizedHTML) }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
