import Product from "../models/Products.js";
import Category from "../models/Categories.js";
import Size from "../models/Sizes.js";
import Color from "../models/Colors.js";
import Orders from "../models/Orders.js";
import { StatusCodes } from "http-status-codes";
import BadRequestError from "../errors/bad-request.js";

const addToCart = async (req, res, next) => {
  try {
    const productId = req.body._id;
    const selectedSize = req.body.selectedSize;
    const selectedColor = req.body.selectedColor;
    const qnt = req.body.quantity;
    req.user.addToCart(productId, selectedSize, selectedColor, qnt);
  } catch (e) {
    next(e);
  }
};
const getCart = async (req, res, next) => {
  try {
    const data = await req.user.populate("cart.productId");
    const cart = data.cart;
    res.status(StatusCodes.OK).send({ cart });
  } catch (e) {
    next(e);
  }
};
const deleteItem = async (req, res, next) => {
  try {
    const productId = req.params.id;
    console.log(productId);
    req.user.deleteItem(productId);
    res.status(StatusCodes.OK).send({ productId });
  } catch (e) {
    next(e);
  }
};

const getProByCategory = async (req, res, next) => {
  try {
    const selectedCategory = await Category.findOne({
      name: req.params.name,
    });
    console.log(selectedCategory);

    res.status(StatusCodes.OK).send(selectedCategory);
  } catch (e) {
    next(e);
  }
};

const createOrder = async (req, res, next) => {
  try {
    if (req.user) {
      req.user.addToMyOrder(req.body.product);
      setTimeout(() => {
        req.user.clearCart();
      }, 1000);
    }
    const orders = await Orders.create(req.body);
    res.status(StatusCodes.OK).send(orders);
  } catch (e) {
    next(e);
  }
};
export { addToCart, getCart, getProByCategory, deleteItem, createOrder };
