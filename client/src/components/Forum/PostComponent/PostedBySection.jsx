import { styles } from "../styles.js";

const PostedBySection = () => {
    return (
    <div className={`flex flex-row pr-4 w-[50%] justify-end pt-1 `}>
        <p className={`${styles.textTiming}`}>Posted by</p>
        <p className={`${styles.textTiming}`}>@userName</p>
        <p className={`${styles.textTiming}`}>2<span className="p-1">mins</span> ago </p>
    </div>
    );
};

export default PostedBySection;
