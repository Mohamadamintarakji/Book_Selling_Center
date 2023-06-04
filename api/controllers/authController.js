import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import BadRequestError from "../errors/bad-request.js";
import UnAuthenticatedError from "../errors/UnAuthenticated.js";
import {
  createAdminCookies,
  createUserCookies,
} from "../utils/createCookies.js";
import UnAuthenticated from "../errors/UnAuthenticated.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import createMail from "../utils/createMail.js";
const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password || (!email && !password)) {
      throw new BadRequestError("Please provide all vallues");
    }
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new UnAuthenticatedError("This email is not regiterated");
    }

    const isCorrect = await user.checkPassword(password);
    if (!isCorrect) {
      throw new UnAuthenticatedError("Unvalid password");
    }
    const token = user.createJWT();
    if (user.isAdmin) {
      const admin = user.isAdmin;
      createAdminCookies({ res, admin });
    }
    createUserCookies({ res, token });

    res.status(StatusCodes.OK).send({ user });
  } catch (e) {
    console.log(e);
    return next(e);
  }
};
const VerificationMail = async (req, res, next) => {
  try {
    const { email, url } = req.body;

    if (!email) throw new BadRequestError("Please provide all vallues");
    const user = await User.findOne({ email: email });
    if (user) throw new BadRequestError("Email already used");
    const path = "verify-register";

    createMail(url, email, path);

    res.status(StatusCodes.OK).send({
      user,
    });
  } catch (e) {
    console.log(e);
    return next(e);
  }
};
const register = async (req, res, next) => {
  try {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    let password = req.body.password;

    if (
      !fname ||
      !lname ||
      !email ||
      !password ||
      (!fname && !lname && !email && !password)
    )
      throw new BadRequestError("Please provide all vallues");
    const user = await User.findOne({ email: email });
    if (user) throw new BadRequestError("Email already used");
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    const Newuser = await User.create({ fname, lname, email, password });
    const token = Newuser.createJWT();
    createUserCookies({ res, token });

    res.status(StatusCodes.OK).send({
      user,
    });
  } catch (e) {
    console.log(e);
    return next(e);
  }
};
const logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now() + 1000),
  });
  res.cookie("admin", "logout", {
    httpOnly: true,
    expires: new Date(Date.now() + 1000),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out!" });
};

const getUser = async (req, res, next) => {
  try {
    const user = req.user;
    console.log(user);
    res.status(StatusCodes.OK).json({ user });
  } catch (err) {
    throw new UnAuthenticated("no user");
  }
};
import nodemailer from "nodemailer";

const ResetPassword = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new UnAuthenticatedError("This email is not regiterated");
    }
    const token = user.createJWT();
    user.resetToken = token;
    user.resetTokenExp = Date.now() + 3600000;
    user.save();
    const url = `http://localhost:3000`;
    const path = "reset-password/${token}";
    createMail(url, email, path);
    // let transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: "sef.diwan0000@gmail.com",
    //     pass: "ardsfwrykabtjrbz",
    //   },
    // });

    // let mailOptions = {
    //   from: "sef.diwan0000@gmail.com",
    //   to: email,
    //   subject: "reset password",
    //   html: `
    // <p> enter new password </p>
    // <a href="${url}">reset password</a>
    // `,
    // };
    // transporter.sendMail(mailOptions, (err, info) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log(`email: ${info.response}`);
    //   }
    // });
    res.status(StatusCodes.OK).json({ user });
  } catch (err) {
    return next(err);
  }
};

const setNewPassword = async (req, res, next) => {
  const { token } = req.params;
  try {
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpires: { $gt: Date.now() },
    });

    res.status(StatusCodes.OK).json({ user });
  } catch (err) {
    next(err);
  }
};
const updatePassword = async (req, res, next) => {
  const { newPassword, token, userId } = req.body;

  try {
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpires: { $gt: Date.now() },
    });
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(newPassword, salt);
    user.password = password;
    user.resetToken = undefined;
    user.resetTokenExp = undefined;
    user.save();
    res.status(StatusCodes.OK).json({ user });
  } catch (err) {
    next(err);
  }
};
export {
  login,
  register,
  VerificationMail,
  getUser,
  logout,
  ResetPassword,
  setNewPassword,
  updatePassword,
};
