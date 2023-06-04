import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cartSlice",
  initialState: { cart: [], deleted: false, loading: true },
  reducers: {
    GET_CART: (state, action) => {
      state.added = false;
      state.deleted = false;
      state.loading = false;

      state.cart = action.payload;
    },
    addToCart: (state, action) => {
      // if (!action.payload.compare) {
      state.added = true;
      // }

      const finded = state.cart.find(
        (product) =>
          product.productId._id === action.payload.productId._id &&
          product.selectedSize === action.payload.selectedSize &&
          product.selectedColor === action.payload.selectedColor
      );
      if (finded) {
        finded.quantity += action.payload.quantity;
      } else {
        if (action.payload.quantity) {
          const cart = { ...action.payload };
          state.cart.push(cart);
        } else {
          const cart = { ...action.payload, quantity: 1 };
          state.cart.push(cart);
        }
      }
    },
    deleteUserCart: (state, action) => {
      state.item = true;
      state.loading = true;

      console.log(action.payload._id);
      state.cart.filter(
        (el) => el._id.toString() !== action.payload._id.toString()
      );
    },
    deleteCart: (state, action) => {
      state.item = true;
      state.added = false;
      state.deleted = true;
      state.loading = true;

      console.log(action.payload);

      state.cart.filter(
        (el) =>
          el.productId._id.toString() !==
            action.payload.productId._id.toString() &&
          el.selectedSize !== action.payload.selectedSize &&
          el.selectedColor !== action.payload.selectedColor
      );
    },
    clearCart: (state, action) => {
      state.cart = [];
    },

    updateCart: (state, action) => {
      const { _id, name, price, categories } = action.payload;
      const updateState = state.cart.find(
        (product) => product._id.toString() === _id.toString()
      );
      if (updateState) {
        updateState.name = name;
        updateState.price = price;
        updateState.categories = categories;
      }
    },
  },
});

export const {
  addToCart,
  deleteCart,
  deleteUserCart,
  clearCart,
  updateCart,
  GET_CART,
} = cartSlice.actions;
export default cartSlice.reducer;
