import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

//connection import
import createConnection from "./DB/connect.js";

//import error-handeler
import { errorHandler } from "./middleware/errorHandeler.js";

import authRouter from "./routes/auth.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//for consume json data
app.use(express.json());
app.use(cookieParser());

//define endpoints here
app.use("/api/v1/auth", authRouter);

//should be placed at the bottom of index js
app.use(errorHandler);

//connection with the database
mongoose.connect('mongodb://localhost:27017/authentication_app')
.then(()=> console.log('Connected to MongoDB'))
.catch((error) => console.error("Failed to connect to MongoDB", error));