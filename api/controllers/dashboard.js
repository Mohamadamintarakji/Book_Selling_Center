import Product from "../models/Products.js";
import Category from "../models/Categories.js";
import Size from "../models/Sizes.js";
import Color from "../models/Colors.js";
import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import BadRequestError from "../errors/bad-request.js";

//--------------- get
const getAllItems = async (req, res, next) => {
  try {
    const products = await Product.find({});
    const categories = await Category.find({});
    const sizes = await Size.find({});
    const colors = await Color.find({});

    res.status(StatusCodes.OK).send({ products, categories, sizes, colors });
  } catch (err) {
    next(err);
  }
};

const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.status(StatusCodes.OK).send({ products });
  } catch (err) {
    next(err);
  }
};
const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find({});
    res.status(StatusCodes.OK).send({ categories });
  } catch (err) {
    console.log(err);
  }
};
const getColors = async (req, res, next) => {
  try {
    const colors = await Color.find({});
    console.log(colors);
    res.status(StatusCodes.OK).send({ colors });
  } catch (err) {
    console.log(err);
  }
};

const getSizes = async (req, res, next) => {
  try {
    const sizes = await Size.find({});
    console.log(sizes);
    res.status(StatusCodes.OK).send({ sizes });
  } catch (err) {
    console.log(err);
  }
};
//--------------- get

//--------------- add
const addProduct = async (req, res, next) => {
  const { name, categories, price, description, image, sizeList, colorList } =
    req.body;
  // console.log(req.user.userId);

  console.log(req.body);
  if (!name || !categories || !price || !description) {
    throw new BadRequestError("Please provide all vallues");
  }
  try {
    const product = await Product.create(req.body);

    res.status(StatusCodes.OK).send({ product });
  } catch (err) {
    return next(err);
  }
};
const addCategory = async (req, res, next) => {
  try {
    const category = await Category.create(req.body);
    console.log(category);
    res.status(StatusCodes.OK).send({ category });
  } catch (err) {
    return next(e);
  }
};

const addColor = async (req, res, next) => {
  try {
    const color = await Color.create(req.body);
    res.status(StatusCodes.OK).send({ color });
  } catch (err) {
    return next(e);
  }
  res.status(StatusCodes.OK).send({ size });
};
const addSize = async (req, res, next) => {
  const size = await Size.create(req.body);
  console.log(size);
  res.status(StatusCodes.OK).send({ size });
};
//--------------- add

//--------------- update
const updateProduct = async (req, res, next) => {
  try {
    const product = await Product.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          image: req.body.image,
          categories: req.body.categories,
          sizeList: req.body.sizeList,
          colorList: req.body.colorList,
          elementState: req.body.elementState,
        },
      }
    );
    res.status(StatusCodes.OK).send({ product });
  } catch (e) {
    next(e);
  }
};
const findProduct = async (req, res, next) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    res.status(StatusCodes.OK).send({ product });
  } catch (e) {
    next(e);
  }
};
const updateCategory = async (req, res, next) => {
  try {
    const category = await Category.updateOne(
      { _id: req.params.id },
      {
        $set: {
          categoryName: req.body.categoryName,
          elementState: req.body.elementState,
          image: req.body.image,
        },
      }
    );
    res.status(StatusCodes.OK).send({ category });
  } catch (e) {
    next(e);
  }
};
const findCategory = async (req, res, next) => {
  try {
    const category = await Category.findOne({ _id: req.params.id });
    res.status(StatusCodes.OK).send({ category });
  } catch (e) {
    next(e);
  }
};
const updateSize = async (req, res, next) => {
  try {
    const size = await Size.updateOne(
      { _id: req.params.id },
      {
        $set: {
          sizeName: req.body.sizeName,
          elementState: req.body.elementState,
        },
      }
    );
    res.status(StatusCodes.OK).send({ size });
  } catch (e) {
    next(e);
  }
};
const findSize = async (req, res, next) => {
  try {
    const size = await Size.findOne({ _id: req.params.id });
    res.status(StatusCodes.OK).send({ size });
  } catch (e) {
    next(e);
  }
};
const updateColor = async (req, res, next) => {
  try {
    const color = await Color.updateOne(
      { _id: req.params.id },
      {
        $set: {
          colorName: req.body.colorName,
          elementState: req.body.elementState,
        },
      }
    );
    res.status(StatusCodes.OK).send({ color });
  } catch (e) {
    next(e);
  }
};
const findColor = async (req, res, next) => {
  try {
    const color = await Color.findOne({ _id: req.params.id });
    res.status(StatusCodes.OK).send({ color });
  } catch (e) {
    next(e);
  }
};

//--------------- update
//--------------- delete
const deleteProduct = async (req, res, next) => {
  try {
    const deletedProduct = await Product.deleteOne({ _id: req.params.id });
    res.status(StatusCodes.OK).send({ deletedProduct });
  } catch (e) {
    next(e);
  }
};
const deleteCategory = async (req, res, next) => {
  try {
    const deletedCategory = await Category.deleteOne({ _id: req.params.id });
    res.status(StatusCodes.OK).send({ deletedCategory });
  } catch (e) {
    next(e);
  }
};
const deleteColor = async (req, res, next) => {
  try {
    const deletedColor = await Color.deleteOne({ _id: req.params.id });
    res.status(StatusCodes.OK).send({ deletedColor });
  } catch (e) {
    next(e);
  }
};
const deleteSize = async (req, res, next) => {
  try {
    const deletedSize = await Size.deleteOne({ _id: req.params.id });
    res.status(StatusCodes.OK).send({ deletedSize });
  } catch (e) {
    next(e);
  }
};
//--------------- delete

export {
  getAllItems,
  getProducts,
  getCategories,
  getSizes,
  getColors,
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
  deleteSize,
  deleteColor,
  findProduct,
  findCategory,
  findSize,
  findColor,
};
