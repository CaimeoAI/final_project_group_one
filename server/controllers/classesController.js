//! MODEL IMPORT

import classesModel from "../models/classesModel.js";
import UserModel from "../models/userModel.js";

//* CLASSES CONTROLLER FUNCTIONS

//-------------------- CREATE A CLASS --------------------
export const createClass = async (req, res) => {
  const { title, type, field } = req.body;

  try {
    const newClass = new classesModel({
      title,
      type,
      field,
    });
    await newClass.save();
    res.status(201).json(newClass);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}


//-------------------- GET SINGLE CLASS --------------------
export const getClass = async (req, res) => {
  const { id } = req.params;
  try {
    const classes = await classesModel.findById(id);
    res.status(201).json(classes);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}


//-------------------- GET ALL CLASSES --------------------
export const getListOfClasses = async (req, res) => {
  try {
    const allClasses = await classesModel.find();
    res.status(201).json(allClasses);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}



//-------------------- GET CLASSES BY FIELD--------------------
export const getClassesByField = async (req, res) => {
  const { field } = req.params;
  try {
    const classes = await classesModel.find({ field: field });
    res.status(201).json(classes);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

//-------------------- GET CLASSES BY TYPE--------------------
export const getClassesByType = async (req, res) => {
  const { type } = req.params;
  try {
    const user = await UserModel.findById(req.id, { course: 1 });
    console.log(user.course);
    const classes = await classesModel
      .find()
    res.status(201).json(classes);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}
