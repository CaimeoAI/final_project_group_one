//! CORE IMPORTS
import express from 'express'

//? CONTROLLER IMPORTS
import { registerUser, loginUser } from '../controllers/authController.js'

//* ROUTER
const router = express.Router()

router
    .route('/login')
    .post( loginUser )

router
    .route('/register')
    .post( registerUser )

export default router