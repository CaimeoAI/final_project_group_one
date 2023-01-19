import express from "express";

import {
    getClassesByType,
    getListOfClasses,
    createClass,
    getClass,

} from "../controllers/classesController.js"

const router = express.Router();
router.route("/newclass").post(createClass).get(getListOfClasses);

router.route("/classes/:id").post(createClass).get(getClass);
/* 
router.route("/classes/field/:field").get(getClassesByField); */

router.route("/type").get(getClassesByType);

export default router;
