import Post from "../models/postModel.js";
import UserModel from "../models/userModel.js";
import Comment from "../models/commentModel.js";

//-------------------- CREATE A POST --------------------
export const createPost = async (req, res) => {
  const { title, body, topic } = req.body;

  const user = await UserModel.findOne({ _id: req.id });

  try {
    const newPost = new Post({
      title,
      body,
      topic,
      author: user._id,
    });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.log(error.message)
    res.status(500).json({
      error: error.message,
    });
  }
};

//-------------------- GET ALL POSTS WITH COMMENTS--------------------
export const getListOfPosts = async (req, res) => {
  try {
    const allPosts = await Post.find()
      .populate({
        path: "comments",
        populate: { path: "author", select: "email" },
      })
      .populate("author", "email _id");
    res.status(201).json(allPosts);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

//-------------------- GET SINGLE POST WITH COMMENTS--------------------
export const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id)
      .populate({
        path: "comments",
        populate: { path: "author", select: "email" },
      })
      .populate("author", "email _id");
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

//-------------------- ADD COMMENT --------------------
export const createComment = async (req, res) => {
  const { content } = req.body;
  try {
    const user = await UserModel.findOne({ _id: req.id });
    //console.log(user);
    //console.log(req.params.id);
    const newComment = new Comment({
      postID: req.params.id,
      content,
      author: user._id,
    });
    await newComment.save();

    if (newComment) {
      await Post.findByIdAndUpdate(req.params.id, {
        $push: { comments: newComment._id },
      });
    }

    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
