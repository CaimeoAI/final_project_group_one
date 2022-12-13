//! CORE IMPORTS
import express from "express"; // FRAMEWORK
import mongoose from "mongoose"; // DATABASE CONNECTION

//? MIDDLEWARE IMPORTS
import cors from 'cors' // TRANSMITTING HTTP HEADERS
import morgan from 'morgan' // ADDITIONAL TERMINAL DATA
import dotenv from 'dotenv' // ENVIRONMENTAL FILE

mongoose.set('strictQuery', false);
import { tokenVerification } from './middleware/tokenVerification.js'

//* ROUTE IMPORTS
import authRoute from './routes/authRoute.js'
import forumRoute from './routes/forumRoute.js'

//! MAIN CONFIGURATION

dotenv.config();

const app = express();

//? MIDDLEWARE CONFIGURATION

app.use(express.json({ limit: "50mb", extended: true })); // Allows to send json objects for POST/PUT requests and limits file upload to 50mb
app.use(express.urlencoded({ limit: "50mb", extended: true })); // Allows to send strings and Arrays for POST/PUT requests and limits file upload to 50mb
app.use(cors());
app.use(morgan("dev")); // Developer Information in Terminal showing each request to the server

//* ROUTES

// http://localhost:5000/auth
app.use('/auth', authRoute)
// http://localhost:5000/forum
app.use('/forum', tokenVerification, forumRoute)

//? GLOBAL ERROR HANDLER

// The Global Error Handler gets the error from the function that comes before and gives out a response containing the error message
app.use((error, req, res) => {
  res.status(error.status || 500).json({
    error: { msg: error.message },
  });
});

//! DATABASE CONNECTION

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Successfully connected to database on port " + process.env.PORT
      );
    });
  })
  .catch((e) => console.log(e));
