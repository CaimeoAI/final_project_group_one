import mongoose, { Schema } from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User" },
    postID:  { type: Schema.Types.ObjectId, ref: "Post" },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
