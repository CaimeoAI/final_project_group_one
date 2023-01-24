import mongoose, { Schema } from "mongoose";

const messagesSchema = mongoose.Schema({
  room: {
    type:String,
    required: true },
  author: {
    type:String,
    required: true },
  message: {
    type:String,
    required: true },
  time: {
    type:String,
    required: true },
  photo: {
    type:String,},
});

const Message = mongoose.model("Message",messagesSchema)

export default Message
