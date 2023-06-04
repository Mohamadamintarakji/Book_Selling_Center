import UnAuthenticated from "../errors/UnAuthenticated.js";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const auth = async (req, res, next) => {
  const token = req.cookies.token;
  const admin = req.cookies.admin;
  if (!token) {
    throw new UnAuthenticated("Must be logged in");
  }
  if (!admin) {
    res.redirect("/home");
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(payload.userId);
    const testUser = payload.userId === "63628d5d178e918562ef9ce8";
    // req.user = { userId: payload.userId, testUser };
    req.user = user;

    next();
  } catch (err) {
    throw new UnAuthenticated("Authentication Invalid1");
  }
};

export default auth;
