import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//connection import
import createConnection from "./DB/connect.js";

//import error-handeler
import { errorHandler } from "./middleware/errorHandeler.js";

import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//for consume json data
app.use(express.json());
app.use(cookieParser());

//define endpoints here
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);

//should be placed at the bottom of index js
app.use(errorHandler);

//connection with the database
//connection with the database
createConnection("mongodb+srv://admin2:admin123@cluster0.y0uqy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
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