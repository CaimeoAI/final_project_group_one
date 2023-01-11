//! CORE IMPORTS
import express from "express";

//? CONTROLLER IMPORTS
import {
    getListOfResources,
    getResource,
    createResource,
    updateResource,
    deleteResource,
} from "../controllers/resourcesControllers.js";