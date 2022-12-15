import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User" },
    title: { type: String },
    body: { type: String, required: true },
    img: { type: String },
    comments: [ { type: Schema.Types.ObjectId, ref: "Comment" }]
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
