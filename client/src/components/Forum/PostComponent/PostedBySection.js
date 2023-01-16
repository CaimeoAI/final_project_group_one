import { styles } from "../styles.js";

const PostedBySection = ({ user, time }) => {
  const timeStr = new Date(time).toString();
  const date = timeStr.slice(4, 10);
  const year = timeStr.slice(11, 15);
  const hour = timeStr.slice(16, 21);

  return (
    <div className={`flex flex-row pr-4 justify-end pt-2`}>
      <p className={`text-[13px] lg:text-[14px] font-mono pr-2 text-hover-primary`}>Posted by</p>
      <p className={`text-[13px] lg:text-[14px] font-mono pr-2 text-hover-primary`}>{user}</p>
      <p className={`text-[13px] lg:text-[14px] font-mono pr-2 text-hover-primary`}>
        {date},<span> {year}</span>
        <span> at </span>
        {hour}
      </p>
    </div>
  );
};

export default PostedBySection;
