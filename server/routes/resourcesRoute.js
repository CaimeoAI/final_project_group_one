//! CORE IMPORTS
import express from "express";

//? CONTROLLER IMPORTS
import {
    createResource,
    getResource,
    getListOfResources,
    updateResource,
    deleteResource,
} from "../controllers/resourcesControllers.js";

//* ROUTER
const router = express.Router();

router.route("/resources").post(createResource).get(getListOfResources);

router.route("/resources/:id").get(getResource).put(updateResource).delete(deleteResource);

export default router;