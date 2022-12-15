import mongoose from "mongoose";
import validator from "validator";

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please tell us your name!"],
  },

  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  photo: String,

  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
  },
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
