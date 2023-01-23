//! CORE IMPORTS
import express from "express";

//? CONTROLLER IMPORTS
import {protect} from "../controllers/authController.js"
import { addEvent, deleteEvent, getEvents } from "../controllers/eventController.js";

//* ROUTER
const router = express.Router();

router.route("/addEvent").post(protect, addEvent);

router.route('/events').get(protect, getEvents);

router.route('/deleteEvent').delete(protect, deleteEvent);

export default router;