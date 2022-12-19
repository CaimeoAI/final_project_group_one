//! MODEL IMPORT
import User from "../models/userModel.js";

import sendEmail from "../utils/email.js";

//? ENCRYPTION, AUTHENTICATION AND VERIFICATION IMPORTS
import crypto from "crypto";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Edson's Controller
//Observations:
// ErrorHandler
// See if make sense to use catchAsync
//See what will be the routers that must to be protect (just available for loged Users) --> See the video

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

//------------------- SIGN UP ---------------------
export const signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });

    const token = signToken(newUser._id);

    res.status(201).json({
      status: "success",
      token,
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

//------------------- LOG IN ----------------------
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    //1)Check if email and password exist
    if (!email || !password)
      return res
        .status(400)
        .json({ status: "fail", message: "Please provide email and password" });

    //2)Check if user exists && password is correct
    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password)))
      return res
        .status(401)
        .json({ status: "fail", message: "Incorrect email or password" });

    //3)If everything ok, send token to client
    const token = signToken(user._id);
    res.status(200).json({
      status: "success",
      token,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

//------------------- FORGOT PASSWORD -------------

export const forgotPassword = async (req, res, next) => {
  //1) Get user based on POSTed email
  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.status(404).json({
      status: "fail",
      message: "There is no user with email address.",
    });
  //2) Generate the random reset token
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });
  //3)Send it to user's email

  const resetURL = `${req.protocol}://${req.get(
    "host"
  )}/auth/resetPassword/${resetToken}`;

  const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to:${resetURL}.\nIf you didn't forget your password, please ignore this email!`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Your password reset token (valid for 10 min)",
      message,
    });

    res.status(200).json({
      status: "success",
      message: "Token sent to email!",
    });
  } catch (error) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });
    return res.status(500).json({
      status: "fail",
      message: "There was an error sending the email. Try again later.",
    });
  }
};

//------------------- RESET PASSWORD -------------

export const resetPassword = async (req, res, next) => {
  //1)Get user based on the token
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  //2)If token has not expired, and there is user, set the new password
  if (!user) {
    return res.status(400).json({
      status: "fail",
      message: "Token is invalid or has expired",
    });
  }

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  //3)Update changePasswordAt property for the user
  //4)Log the user in, send JWT
  const token = signToken(user._id);
  res.status(200).json({
    status: "success",
    token,
  });
};

// //* CONTROLLER FUNCTIONS

// // http://localhost:5000/auth/register
// export const registerUser = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;
//     if (!email) {
//       return res.json({ message: "Please provide an email address" });
//     }

//     const userFound = await User.findOne({ email });

//     if (userFound)
//       return res.status(401).json({
//         status: "failed",
//         message: "User with this email already exists",
//       });

//     //* PASSWORD ENCRYPTION
//     const saltRound = 15; // Determines salt rounds
//     const salt = await bcrypt.genSalt(saltRound); // Encyrption based on salt rounds

//     const hashpw = await bcrypt.hash(password, salt); // Hash Process
//     req.body.password = hashpw;

//     //* DATABASE SAVE
//     const user = new User(req.body); // Taking frontend inputs and saving them in a variable
//     await user.save(); // Saving the above variable data into the database

//     //*TOKEN CREATION

//     const payload = {
//       id: user._id,
//       email: user.email,
//     };

//     jwt.sign(
//       payload,
//       process.env.JWT_SECRET,
//       { expiresIn: "5d" },
//       (error, token) => {
//         if (error) throw error;

//         res.status(200).json({ status: "success", message: "Account created" });
//       }
//     );
//   } catch (error) {
//     next(error);
//   }
// };

// // http://localhost:5000/auth/login
// export const loginUser = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;
//     const currentUser = await User.findOne({ email });

//     //* EMAIL VERIFICATION
//     if (!currentUser)
//       return res
//         .status(400)
//         .json({ status: "failed", message: "Email or Password wrong" });

//     //* PASSWORD VERIFICATION
//     const verified = await bcrypt.compare(password, currentUser.password);

//     if (!verified)
//       return res
//         .status(400)
//         .json({ status: "failed", message: "Email or Password wrong" });

//     const payLoad = {
//       email,
//     };

//     const token = jwt.sign(payLoad, process.env.JWT_SECRET, {
//       expiresIn: "5d",
//     });

//     return res.status(200).json({
//       status: "success",
//       message: `User with email ${currentUser.email} successfully logged in`,
//       data: { email: currentUser.email, token },
//     });
//   } catch (error) {
//     next(error);
//   }
// };
