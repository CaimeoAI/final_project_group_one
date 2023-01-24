//! CORE IMPORTS
import express from "express"

//? CONTROLLER IMPORTS
import { addRoom, getAllRooms, addMessage, getRoomMessages, roomDelete } from "../controllers/userController.js"

//* ROUTER
const router = express.Router()

router
    .route("/rooms")
    .post(addRoom)

router
    .route("/rooms/:username")
    .get(getAllRooms)

router
    .route("/rooms/message")
    .post(addMessage)

router
    .route("/rooms/messages/:room")
    .get(getRoomMessages)

router
    .route("/roomDelete")
    .patch(roomDelete)

export default router