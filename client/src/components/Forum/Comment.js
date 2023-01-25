//! 01 - HOOKS
import { useForum } from "../../context/ForumProvider";

//* 02 - INSTALL
import DOMPurify from "dompurify";

//? 03 - STYLING
import { BsDot } from "react-icons/bs";
import "./FromEditor.css";

const Comment = ({ comment }) => {
  //console.log(comment)
  const { htmlDecode } = useForum();
  const sanitizedHTML = DOMPurify.sanitize(comment.content);

  const timeStr = new Date(comment.createdAt).toString();
  const date = timeStr.slice(4, 10);
  const year = timeStr.slice(11, 15);
  const hour = timeStr.slice(16, 21);

  return (
    
      <div className="py-3">
        <div className="flex flex-row text-right w-full justify-start items-center">
          <div className={`w-7 h-7 rounded-full mr-2`}>
            <img
              src={comment?.author?.photo}
              alt="user profile pic"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <p className={`font-mono text-orange-300`}>{comment?.author?.name}</p>
          <BsDot />
          <p className={`text-[10px] md:text-sm font-mono text-grayed-out`}>
            {date},<span> {year}</span>
            <span> at </span>
            {hour}
          </p>
        </div>
        <div className={`ml-9 p-2`}>
          <div
            className="fromEditor text-sm md:text-lg"
            dangerouslySetInnerHTML={{ __html: htmlDecode(sanitizedHTML) }}
          ></div>
        </div>
      </div>
    
  );
};

export default Comment;
