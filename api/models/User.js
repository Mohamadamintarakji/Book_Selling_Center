import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import validator from "validator";
const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: [true, "Plese provied your name"],
    minlength: 3,
    maxlength: 20,
  },
  lname: {
    type: String,
    required: [true, "Plese provied your lastName"],
    minlength: 3,
    maxlength: 20,
  },
  email: {
    type: String,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Please provide valid email address",
    },
    required: [true, "Plese provied your email"],
  },
  moreDetails: {
    address: {
      type: String,
    },
    address: {
      type: String,
    },
    country: {
      type: String,
    },
    zipCode: {
      type: String,
    },
    telefon: {
      type: String,
    },
  },

  password: {
    type: String,
    required: [true, "Plese enter your password"],
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  resetToken: String,
  resetTokenExp: Date,
  cart: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      selectedSize: {
        type: String,
        required: true,
      },
      selectedColor: {
        type: String,
        required: true,
      },
    },
  ],
  myOrders: [
    {
      type: Object,
      required: true,
    },
  ],
});

userSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LEFTTIME,
  });
};

userSchema.methods.checkPassword = async function (password) {
  const isMatch = await bcrypt.compare(password, this.password);
  return isMatch;
};

userSchema.methods.addToCart = async function (
  productId,
  selectedSize,
  selectedColor,
  qnt
) {
  const checkElement = this.cart.findIndex((cp) => {
    return cp.productId.toString() === productId.toString();
  });
  const checkSize = this.cart.findIndex((cp) => {
    return cp.selectedSize.toString() === selectedSize.toString();
  });
  const checkColor = this.cart.findIndex((cp) => {
    return cp.selectedColor.toString() === selectedColor.toString();
  });

  let itemQuantity = qnt || 1;
  console.log(`${itemQuantity}d`);
  const CartItems = [...this.cart];

  if (checkElement >= 0 && checkSize >= 0 && checkColor >= 0) {
    this.cart.map((e) => {
      if (
        e.productId.toString() === productId &&
        e.selectedSize === selectedSize &&
        e.selectedColor === selectedColor
      ) {
        e.quantity += itemQuantity;
      }
    });
  } else {
    CartItems.push({
      productId: productId,
      quantity: itemQuantity,
      selectedSize: selectedSize,
      selectedColor: selectedColor,
    });
  }
  this.cart = CartItems;
  return this.save();
};
userSchema.methods.deleteItem = function (productId) {
  const cartItems = this.cart.filter((item) => {
    return item._id.toString() !== productId.toString();
  });
  this.cart = cartItems;
  return this.save();
};
userSchema.methods.addToMyOrder = function (product) {
  console.log("g");
  const orders = [...this.myOrders];
  orders.push(...product);

  this.myOrders = orders;
  return this.save();
};

userSchema.methods.clearCart = function () {
  this.cart = [];
  return this.save();
};
const User = mongoose.model("User", userSchema);
export default User;
