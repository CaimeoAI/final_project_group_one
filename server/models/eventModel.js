import mongoose from "mongoose";


const eventSchema = mongoose.Schema({
  title: String,
  start: Date,
  end: Date,
  allDay: Date,
});

const Event = mongoose.model("Event",eventSchema)

export default Event
