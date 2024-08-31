import express from "express";
import { verifyUserToken } from "../utility/verifyUserToken.js";

const router = express.Router();
//define your controler in get(....)
router.route("").get();

export default router;
