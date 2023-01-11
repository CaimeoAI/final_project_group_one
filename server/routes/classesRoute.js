import express from "express";

import {
    createClass,
    getListOfClasses,
    getClass
} from "../controllers/classesControllers.js";

const router = express.Router();
router.route("/classes").post(createClass).get(getListOfClasses);

router.route("/classes/:id").post(createClass).get(getClass);

export default router;
