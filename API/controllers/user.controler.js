import "express-async-errors";
import { StatusCodes } from "http-status-codes";
import AppError from "../error/AppError.js";
import UserApplication from "../models/UserApplication.model.js";

export const step1 = async (req, res, next) => {
  const newUserApplication = await UserApplication.create(req.body);
  res
    .status(201)
    .json({
      message: "Form submitted successfully!",
      data: newUserApplication,
    });
};
