//! MODEL IMPORT
import User from "../models/userModel.js";

//? ENCRYPTION, AUTHENTICATION AND VERIFICATION IMPORTS
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


//* CONTROLLER FUNCTIONS

// http://localhost:5000/auth/register
export const registerUser = async( req, res, next ) => {
    try {
        const { email, password } = req.body
        if(!email) {
            return res
                .json({ message: 'Please provide an email address' })
        }

        const userFound = await User.findOne({ email })

        if (userFound)
            return res
                .status(401)
                .json({ status: 'failed', message: 'User with this email already exists'})

        //* PASSWORD ENCRYPTION
        const saltRound = 15    // Determines salt rounds
        const salt = await bcrypt.genSalt( saltRound )    // Encyrption based on salt rounds
        
        const hashpw = await bcrypt.hash( password, salt ) // Hash Process
        req.body.password = hashpw
        
        //* DATABASE SAVE
        const user = new User(req.body) // Taking frontend inputs and saving them in a variable
        await user.save() // Saving the above variable data into the database
        
        //*TOKEN CREATION

        const payload = {
            id: user._id,
            email: user.email
        }

        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "3600s" }, ( error, token ) => {
            if ( error ) throw error

            res
            .status(200)
            .json({ status: 'success', message: 'Account created'})
        })

    } catch ( error ) {
        next( error )
    }
}

// http://localhost:5000/auth/login
export const loginUser = async( req, res, next ) => {
    try {
        const { email, password } = req.body
        const currentUser = await User.findOne({ email })

        //* EMAIL VERIFICATION
        if (!currentUser)
            return res
                .status(400)
                .json({ status: "failed", message: "Email or Password wrong" })
        
        //* PASSWORD VERIFICATION
        const verified = await bcrypt.compare( password, currentUser.password )
    
        if (!verified)
            return res
                .status(400)
                .json({ status: "failed", message: "Email or Password wrong" })

        const payLoad = {
            email
        }

        const token = jwt.sign( payLoad, process.env.JWT_SECRET, { expiresIn:"3600s" } )

        return res
            .status(200)
            .json({
                status: "success",
                message: `User with email ${currentUser.email} successfully logged in`,
                data: { email: currentUser.email, token }
            })
    
    } catch ( error ) {
        next ( error )
    }
}

