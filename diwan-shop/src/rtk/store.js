import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import categoriesSlice from "./slices/categoriesSlice";
import sizesSlice from "./slices/sizesSlice";
import cartSlice from "./slices/cartSlice";
import colorsSlice from "./slices/colorsSlice";
import authSlice from "./slices/authSlice";
import ordersSlice from "./slices/ordersSlice";
export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
    categories: categoriesSlice,
    sizes: sizesSlice,
    colors: colorsSlice,
    auth: authSlice,
    orders: ordersSlice,
  },
});
