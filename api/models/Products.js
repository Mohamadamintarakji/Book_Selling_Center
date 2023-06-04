import mongoose from "mongoose";
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: [
    {
      type: String,
      required: true,
    },
  ],

  // userId: {
  //   type: Object,
  //   ref: "User",
  //   required: true,
  // },
  categories: [
    {
      type: String,
      ref: "Category",
      required: true,
    },
  ],
  sizeList: [
    {
      type: String,
      ref: "Sizes",
      required: true,
    },
  ],
  colorList: [
    {
      type: String,
      ref: "Colors",
      required: true,
    },
  ],
  elementState: {
    type: Boolean,
  },
  // stateList: [
  //   {
  //     type: String,
  //     ref: "State",
  //   },
  // ],

  data: {
    type: Date,
    default: Date.now,
  },
});
const Products = mongoose.model("Product", productSchema);
export default Products;
