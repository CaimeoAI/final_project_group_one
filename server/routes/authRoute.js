//! CORE IMPORTS
import express from "express";
import {
  forgotPassword,
  login,
  protect,
  resetPassword,
  signup,
  updatePassword,
} from "../controllers/authController.js";
import { updateMe, deleteMe } from "../controllers/userController.js";
//? CONTROLLER). IMPORTS
// import { registerUser, loginUser } from "../controllers/authController.js";

//* ROUTER
const router = express.Router();

//Authorization Routers
router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/forgotPassword").post(forgotPassword);
router.route("/resetPassword/:token").patch(resetPassword);

router.route("/updateMyPassword").patch(protect, updatePassword);

//User Routers
router.route("/updateMe").patch(protect, updateMe);
router.route("/deleteMe").delete(protect, deleteMe);
// router.route("/login").post(loginUser);
// router.route("/register").post(registerUser);

export default router;
