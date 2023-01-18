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
});

const Event = mongoose.model("Message",messagesSchema)

export default Event
