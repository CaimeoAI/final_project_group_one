//! MODEL IMPORT

import UserModel from "../models/userModel.js";
import catchAsync from "../utils/catchAsync.js";
import Event from "../models/eventModel.js";

//* CONTROLLER FUNCTIONS

//------------------- ADD EVENT -------------------------

export const addEvent = catchAsync(async (req, res) => {
  //const { content } = req.body;

  const newEvent = new Event(req.body);
  await newEvent.save();
  if (newEvent) {
    await UserModel.findByIdAndUpdate(req.user.id, {
      $push: { events: newEvent },
    });
  }
  console.log(newEvent);
  res.status(201).json(newEvent);
});

//------------------- GET USER'S EVENTS -------------------------

export const getEvents = catchAsync(async (req, res, next) => {
  const user = await UserModel.findById(req.user.id).populate({
    path: "events",
    select: "title start end allDay",
  });

  res.status(200).json({
    status: "success",
    data: {
      events: user.events,
    },
  });
});

//------------------- DELETE USER'S EVENTS -------------------------
export const deleteEvent = catchAsync(async (req, res, next) => {
  const { id } = req.headers;
  try {
    // Search user by ID
    const user = await UserModel.findById(req.user.id);
    if (!user) return res.status(404).send({ message: "User not found" });
    // Remove the event of user's list event
    const filter = { _id: req.user.id, events: { $in: [id] } };
    const update = { $pull: { events: id } };
    await UserModel.updateOne(filter, update);
    const event = await Event.findOneAndDelete({ _id: id });
    if (!event) return res.status(404).send({ message: "Event not found" });
    return res.status(200).send({ message: "Event deleted successfully" });
  } catch (error) {
    return res.status(500).send({ message: "Error deleting event" });
  }
});
