//! CORE IMPORTS
import express from "express"; // FRAMEWORK
import mongoose from "mongoose"; // DATABASE CONNECTION
import rateLimit from "express-rate-limit"; //REQUEST RATE LIMIT
import helmet from "helmet"; //ADITIONAL SECURE MEASURES
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";

//? MIDDLEWARE IMPORTS
import cors from "cors"; // TRANSMITTING HTTP HEADERS
import morgan from "morgan"; // ADDITIONAL TERMINAL DATA
import dotenv from "dotenv"; // ENVIRONMENTAL FILE

mongoose.set("strictQuery", false);
import { tokenVerification } from "./middleware/tokenVerification.js";

//* ROUTE IMPORTS
import authRoute from "./routes/authRoute.js";
import forumRoute from "./routes/forumRoute.js";

//! MAIN CONFIGURATION

dotenv.config();

const app = express();

//? MIDDLEWARE CONFIGURATION
//Set security HTTP headers
app.use(helmet());

// Limit request from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many request from this IP, please try again in an hour!",
});
app.use("/auth", limiter); //Define a commun route to put the limiter

app.use(express.json({ limit: "50mb", extended: true })); // Allows to send json objects for POST/PUT requests and limits file upload to 50mb
app.use(express.urlencoded({ limit: "50mb", extended: true })); // Allows to send strings and Arrays for POST/PUT requests and limits file upload to 50mb

//Data sanitization against NoSQL query injection
app.use(mongoSanitize()); // look from req.body and filter out all the dolar sign and dots

//Data sanitization against XSS
app.use(xss()); // clean all malicious code

app.use(cors());
app.use(morgan("dev")); // Developer Information in Terminal showing each request to the server

//* ROUTES

// http://localhost:5000/auth
app.use("/auth", authRoute);
// http://localhost:5000/forum
app.use("/academia", tokenVerification, forumRoute);

//? GLOBAL ERROR HANDLER
// The Global Error Handler gets the error from the function that comes before and gives out a response containing the error message
app.use((error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || "error";

  res.status(error.statusCode).json({
    status: error.status,
    message: error.message,
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
