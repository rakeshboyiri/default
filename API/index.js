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
//connection with the database
createConnection(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error(
      "Failed to start the server due to MongoDB connection error:",
      error
    );
    process.exit(1);
  });