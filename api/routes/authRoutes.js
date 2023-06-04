import UserInfo from "../models/User.js";
import bcrypt from "bcryptjs";
import auth from "../middlewere/auth.js";
import checkUser from "../middlewere/getUser.js";

const router = express.Router();
import express from "express";

import {
  login,
  register,
  VerificationMail,
  getUser,
  logout,
  ResetPassword,
  setNewPassword,
  updatePassword,
} from "../controllers/authController.js";
router.route("/login").post(login);
router.route("/register").post(VerificationMail);
router.route("/verify-register").post(register);
router.route("/logout").post(logout);
router.route("/getUser").get(checkUser, getUser);
router.route("/reset-password").post(ResetPassword);
router.route("/reset-password/:token").post(setNewPassword);
router.route("/updatePassword").post(updatePassword);

export default router;
