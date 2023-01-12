import mongoose from "mongoose";

const quizSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    questions: { type: Array, required: true },
    answers: { type: Array, required: true },
    correctAnswers: { type: Array, required: true },
    score: { type: Number, required: true },
    time: { type: Number, required: true },
    difficulty: { type: String, required: true },
    field: { type: String, required: true },
    type: { type: String, required: true },
}, { timestamps: true });

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;