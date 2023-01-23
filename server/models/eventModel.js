import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
  title: { type: String, required: true},
  start: Date,
  end: Date,
  allDay: Boolean,
});

const Event = mongoose.model("Event", eventSchema);

export default Event;

