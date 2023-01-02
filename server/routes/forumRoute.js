//! CORE IMPORTS
import express from "express";

//? CONTROLLER IMPORTS
import {
  createPost,
  getListOfPosts,
  createComment,
  getPost,
  voting,
} from "../controllers/forumControllers.js";

//* ROUTER
const router = express.Router();

router.route("/posts").post(createPost).get(getListOfPosts);

router.route("/posts/:id").post(createComment).get(getPost).put(voting);

export default router;
