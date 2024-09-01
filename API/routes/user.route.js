import express from "express";
import { step1 } from "../controllers/user.controler.js";
import { verifyUserToken } from "../utility/verifyUserToken.js";

const router = express.Router();
//define your controler in get(....)
router.route("/step1").post(step1);

export default router;
