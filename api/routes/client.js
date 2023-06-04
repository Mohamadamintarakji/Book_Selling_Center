import express from "express";
import auth from "../middlewere/auth.js";
import checkUser from "../middlewere/getUser.js";

const router = express.Router();
import multer from "multer";
const upload = multer({ dest: "uploads/" });

import {
  findProduct,
  getProducts,
  getAllItems,
} from "../controllers/dashboard.js";
import {
  addToCart,
  getCart,
  deleteItem,
  getProByCategory,
  createOrder,
} from "../controllers/client.js";
router.route("/productDetailes/:id").get(findProduct);
router.route("/home").get(getAllItems);
router.route("/category/:name").get(getProByCategory);
router.route("/cart").get(checkUser, getCart).post(checkUser, addToCart);
router.route("/create-order").post(checkUser, createOrder);

router.route("/cart/:id").delete(checkUser, deleteItem);
export default router;
