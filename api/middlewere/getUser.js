import UnAuthenticated from "../errors/UnAuthenticated.js";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const checkUser = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return next();
  }
  const payload = jwt.verify(token, process.env.JWT_SECRET);

  User.findById({ _id: payload.userId })
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      throw new UnAuthenticated("No User");
    });
};

export default checkUser;
