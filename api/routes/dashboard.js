import express from "express";
import auth from "../middlewere/auth.js";
const router = express.Router();

import {
  getAllItems,
  getProducts,
  getCategories,
  getColors,
  getSizes,
  addProduct,
  addCategory,
  addColor,
  addSize,
  updateProduct,
  updateCategory,
  updateColor,
  updateSize,
  deleteProduct,
  deleteCategory,
  deleteColor,
  deleteSize,
  findProduct,
  findCategory,
  findColor,
  findSize,
} from "../controllers/dashboard.js";

router.route("/").get(getAllItems);
router.route("/MangeProducts").get(getProducts).post(addProduct);
router
  .route("/MangeProducts/:id")
  .put(updateProduct)
  .get(findProduct)
  .delete(deleteProduct);
router.route("/MangeCategories").get(getCategories).post(addCategory);
router
  .route("/MangeCategories/:id")
  .put(updateCategory)
  .get(findCategory)
  .delete(deleteCategory);
router.route("/MangeSizes").get(getSizes).post(addSize);
router
  .route("/MangeSizes/:id")
  .put(updateSize)
  .get(findSize)
  .delete(deleteSize);
router.route("/MangeColors").get(getColors).post(addColor);
router
  .route("/MangeColors/:id")
  .put(updateColor)
  .get(findColor)
  .delete(deleteColor);
export default router;
