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

//? CONTROLLER IMPORTS

import { updateMe, deleteMe } from "../controllers/userController.js";


//* ROUTER
const router = express.Router();

//Authorization Routers
router.route("/signup").post(signup);
router.route("/login").post(login);
// Necessary to create the Logout

router.route("/forgotPassword").post(forgotPassword);
router.route("/resetPassword/:token").patch(resetPassword);

//User Routers

router
  .route("/updateMe")
  .patch(protect, updateMe);
router.route("/deleteMe").delete(protect, deleteMe);


router.route("/updateMyPassword").patch(protect, updatePassword);


export default router;
