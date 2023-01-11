//! CORE IMPORTS
import express from "express";

//? CONTROLLER IMPORTS
import {
    createQuiz,
    getListOfQuizzes,
    getQuiz,   
    getQuizbyField,
    getQuizbyDifficulty,
    getQuizbyType,
    getQuizbyScore,
    getQuizbyTime,


} from "../controllers/quizControllers.js";

//* ROUTER
const router = express.Router();

router.route("/quizzes").post(createQuiz).get(getListOfQuizzes);

router.route("/quizzes/:id").get(getQuiz);

router.route("/quizzes/field/:field").get(getQuizbyField);

router.route("/quizzes/difficulty/:difficulty").get(getQuizbyDifficulty);  

router.route("/quizzes/type/:type").get(getQuizbyType);

router.route("/quizzes/score/:score").get(getQuizbyScore);

router.route("/quizzes/time/:time").get(getQuizbyTime);

export default router;
