import "express-async-errors";
import { StatusCodes } from "http-status-codes";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

//for throw errors
import NotFoundError from "../error/NotFoundError.js";
import UnauthError from "../error/UnauthError.js";

//imported user model
import User from "../models/user.model.js";

//signup route controller
export const signup = async (req, res, next) => {
  const { email, name, password, phone } = req.body;

  // Check if the email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      status: "error",
      message: "Email-id already in use,try to login",
    });
  }

  // Format the name to lowercase, remove spaces, and append a unique suffix
  const processedName = name.toLowerCase().replace(/\s+/g, "");
  const uniqueSuffix = Math.floor(100 + Math.random() * 900);
  const formattedName = `${processedName}${uniqueSuffix}`;

  // Create a new user if email is not taken
  const user = await User.create({
    name: name,
    userName: formattedName,
    email: email,
    phone: phone,
    password: password,
  });

  user.password = undefined;
  res.status(StatusCodes.CREATED).json({
    message: "User created successfully",
    user,
  });
};

//login route
export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  const validUser = await User.findOne({ email });
  if (!validUser) {
    throw new NotFoundError("User not found!😔 with this email ID");
  }

  const validPassword = await bcryptjs.compare(password, validUser.password);
  if (!validPassword) {
    throw new UnauthError("Invalid candidentals 🙊", StatusCodes.UNAUTHORIZED);
  }

  // Remove password before sending the user object in the response
  validUser.password = undefined;
  //create token
  const token = jwt.sign({ id: validUser._id }, "secret", {
    expiresIn: "30d",
  });

  res
    .cookie("access_token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
    })
    .status(StatusCodes.ACCEPTED)
    .json({
      message: "User logged in successfully",
      validUser,
    });
};
