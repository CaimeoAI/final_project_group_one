//! MODEL IMPORT

import Quiz from "../models/quizModel";

//* CONTROLLER FUNCTIONS

//-------------------- CREATE A QUIZ --------------------
export const createQuiz = async (req, res) => {
  const { title, description, questions, answers, correctAnswers, score, time, difficulty, field, type } = req.body;
  try {
    const newQuiz = new Quiz({
      title,
      description,
      questions,
      answers,
      correctAnswers,
      score,
      time,
      difficulty,
      field,
      type,
    });
    await newQuiz.save();
    res.status(201).json(newQuiz);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

//-------------------- GET A LIST OF QUIZZES --------------------
export const getListOfQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({
        error: error.message,
        });
    }
    }

//-------------------- GET A QUIZ --------------------
export const getQuiz = async (req, res) => {

    try {
        const { id } = req.params;
        const quiz = await Quiz.findById
        (id);
        if (quiz) { 
            return res.status(200).json(quiz);
        }
        res.status(404).json({ message: "Quiz not found!" });
    } catch (error) {
        res.status(500).json({
        error: error.message,
        });
    }
    }

//-------------------- GET A QUIZ BY FIELD --------------------

export const getQuizbyField = async (req, res) => {
    try {
        const { field } = req.params;
        const quiz = await Quiz.find
        ({field: field});
        if (quiz) { 
            return res.status(200).json(quiz);
        }
        res.status(404).json({ message: "Quiz not found!" });
    } catch (error) {
        res.status(500).json({
        error: error.message,
        });
    }
    }
    
//-------------------- GET A QUIZ BY DIFFICULTY --------------------

export const getQuizbyDifficulty = async (req, res) => {
    try {
        const { difficulty } = req.params;
        const quiz = await Quiz.find
        ({difficulty: difficulty});
        if (quiz) { 
            return res.status(200).json(quiz);
        }
        res.status(404).json({ message: "Quiz not found!" });
    } catch (error) {
        res.status(500).json({
        error: error.message,
        });
    }
    }

//-------------------- GET A QUIZ BY TYPE --------------------

export const getQuizbyType = async (req, res) => {
    try {
        const { type } = req.params;
        const quiz = await Quiz.find
        ({type: type});
        if (quiz) { 
            return res.status(200).json(quiz);
        }
        res.status(404).json({ message: "Quiz not found!" });
    } catch (error) {
        res.status(500).json({
        error: error.message,
        });
    }
    }

//-------------------- GET A QUIZ BY SCORE --------------------

export const getQuizbyScore = async (req, res) => {
    try {
        const { score } = req.params;
        const quiz = await Quiz.find
        ({score: score});
        if (quiz) { 
            return res.status(200).json(quiz);
        }
        res.status(404).json({ message: "Quiz not found!" });
    } catch (error) {
        res.status(500).json({
        error: error.message,
        });
    }
    }


//-------------------- GET A QUIZ BY TIME --------------------

export const getQuizbyTime = async (req, res) => {
    try {
        const { time } = req.params;
        const quiz = await Quiz.find
        ({time: time});
        if (quiz) { 
            return res.status(200).json(quiz);
        }
        res.status(404).json({ message: "Quiz not found!" });
    } catch (error) {
        res.status(500).json({
        error: error.message,
        });
    }
    }
