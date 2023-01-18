//! CORE IMPORTS
import express from "express";

//? CONTROLLER IMPORTS
import {forgotPassword,login,protect,resetPassword,signup,updatePassword, addEvent} from "../controllers/authController.js";
import { updateMe, deleteMe, getUser } from "../controllers/userController.js";

//* ROUTER
const router = express.Router();

//Authorization Routers
router
   .route("/signup")
   .post(signup);
 
router
   .route("/login")
   .post(login);


router 
  .route("/forgotPassword")
  .post(forgotPassword);

router
  .route("/resetPassword/:token")
  .patch(resetPassword);

  //User Routers

router
  .route('/user')
  .get(protect, getUser)

router
  .route("/updateMe")
  .patch(protect, updateMe);


router
  .route("/updateMyPassword")
  .patch(protect, updatePassword);

router
  .route("/deleteMe")
  .delete(protect, deleteMe);


//--------ADD EVENT--------//
router.route("/addEvent").patch(protect, addEvent);
///---------------//

export default router;
