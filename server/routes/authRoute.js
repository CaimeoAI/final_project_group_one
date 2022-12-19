//! CORE IMPORTS
import express from "express";
import {
  forgotPassword,
  login,
  resetPassword,
  signup,
} from "../controllers/authController.js";
//? CONTROLLER IMPORTS
// import { registerUser, loginUser } from "../controllers/authController.js";

//* ROUTER
const router = express.Router();

//Edson's Router
router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/forgotPassword").post(forgotPassword);
router.route("/resetPassword/:token").patch(resetPassword);

// router.route("/login").post(loginUser);
// router.route("/register").post(registerUser);

export default router;
