//! MODEL  IMPORT
import resourcesModel from "../models/resourcesModel";

//* RESOURCES CONTROLLER FUNCTIONS

//-------------------- CREATE A RESOURCE --------------------
export const createResource = async (req, res) => {
    const { title, description, link, type, field } = req.body;
    
    try {
        const newResource = new resourcesModel({
        title,
        description,
        link,
        type,
        field,
        });
        await newResource.save();
        res.status(201).json(newResource);
    } catch (error) {
        res.status(500).json({
        error: error.message,
        });
    }
    }

//-------------------- GET SINGLE RESOURCE --------------------
export const getResource = async (req, res) => {
    const { id } = req.params;
    try {
        const resource = await resourcesModel.findById(id);
        res.status(201).json(resource);
    } catch (error) {
        res.status(500).json({
        error: error.message,
        });
    }
    }
    
//-------------------- GET ALL RESOURCES --------------------
export const getListOfResources = async (req, res) => {
    try {
        const allResources = await resourcesModel.find();
        res.status(201).json(allResources);
    } catch (error) {
        res.status(500).json({
        error: error.message,
        });
    }
    }

//-------------------- GET RESOURCES BY FIELD--------------------
export const getResourcesByField = async (req, res) => {
    const { field } = req.params;
    try {
        const resources = await resourcesModel.find({ field: field });
        res.status(201).json(resources);
    } catch (error) {
        res.status(500).json({
        error: error.message,
        });
    }
    }

//-------------------- GET RESOURCES BY TYPE--------------------
export const getResourcesByType = async (req, res) => {
    const { type } = req.params;
    try {
        const resources = await resourcesModel.find({ type: type });
        res.status(201).json(resources);
    } catch (error) {
        res.status(500).json({
        error: error.message,
        });
    }
    }
