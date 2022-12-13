import Post from "../models/postModel.js";
import UserModel from "../models/userModel.js";
import Comment from "../models/commentModel.js";

//-------------------- CREATE A POST --------------------
export const createPost = async (req, res) => {
  const { title, body } = req.body;
  const user = await UserModel.findOne({ email: req.userEmail });
  console.log(user);
  try {
    const newPost = new Post({
      title,
      body,
      author: user._id,
    });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

//-------------------- GET ALL POSTS WITH COMMENTS--------------------
export const getListOfPosts = async (req, res) => {
  try {
    const allPosts = await Post.find().populate("comments");
    res.status(201).json(allPosts);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

//-------------------- ADD COMMENT --------------------
export const createComment = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.userEmail });

    const newComment = new Comment({
      postID: req.params.id,
      body: req.body,
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
