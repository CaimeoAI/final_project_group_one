//! MODEL IMPORT

import Post from "../models/postModel.js";
import UserModel from "../models/userModel.js";
import Comment from "../models/commentModel.js";

//* CONTROLLER FUNCTIONS

//-------------------- CREATE A POST --------------------
export const createPost = async (req, res) => {
  const { title, body, topic } = req.body;

  const user = await UserModel.findById(req.id);

  try {
    const newPost = new Post({
      title,
      body,
      topic,
      author: user._id,
      likes: [],
      dislikes: [],
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
    const allPosts = await Post.find()
      .populate({
        path: "comments",
        populate: { path: "author", select: "name photo" },
      })
      .populate("author", "name _id photo");
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
        populate: { path: "author", select: "name photo" },
      })
      .populate("author", "name _id photo");
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

//-------------------- VOTING --------------------
export const voting = async (req, res) => {
  const userByID = await UserModel.findById(req.id);
  const post = await Post.findById(req.params.id);

  const userLiked = post?.likes.find(
    (user) => JSON.stringify(user) === JSON.stringify(userByID._id)
  );
  const userDisliked = post?.dislikes.find(
    (user) => JSON.stringify(user) === JSON.stringify(userByID._id)
  );

  try {
    if (req.body.action === "like") {
      if (userLiked) {
        console.log("User already liked this post");
        return res
          .status(500)
          .send({ message: "User already liked this post" });
      } else {
        const filteredArray = [...post.dislikes].filter(
          (user) => JSON.stringify(user) !== JSON.stringify(userByID._id)
        );

        await Post.findByIdAndUpdate(req.params.id, {
          likes: [...post.likes, userByID._id],
          dislikes: filteredArray,
        });
      }

      return res.status(201).json("The post has been liked");
    } else {
      if (userDisliked) {
        return res
          .status(500)
          .send({ message: "User already disliked this post" });
      } else {
        const filteredArray = [...post.likes].filter(
          (user) => JSON.stringify(user) !== JSON.stringify(userByID._id)
        );

        await Post.findByIdAndUpdate(req.params.id, {
          dislikes: [...post.dislikes, userByID._id],
          likes: filteredArray,
        });
      }

      return res.status(201).json("The post has been disliked");
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
