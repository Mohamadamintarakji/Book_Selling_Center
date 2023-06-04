import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: { products: [], loadingPro: true, error: null },
  reducers: {
    GET_PRODUCTS: (state, action) => {
      state.products = action.payload;
      state.loadingPro = false;
    },

    ADD_PRODUCT: (state, action) => {
      state.products.push(...action.payload);
    },
    SET_UPDATE_PRODUCT: (state, action) => {
      state.updateProId = action.payload._id;
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.selectedCategories = action.payload.categories;
      state.selectedSizeList = action.payload.sizeList;
      state.selectedColorList = action.payload.colorList;
      state.price = action.payload.price;
      state.elementState = action.payload.elementState;
      state.image = action.payload.image;
      state.isEdit = true;
      state.isAdd = false;
      state.products.filter((el) => el._id === action.payload._id);
    },

    SET_ADD_PRODUCT: (state, action) => {
      state.name = "";
      state.elementState = false;
      state.description = "";
      state.categories = "";
      state.selectedSizeList = "";
      state.selectedColorList = "";
      state.price = "";
      state.image = "";
      state.isEdit = false;
      state.isAdd = true;
    },
    UPDATE_PRODUCT: (state, action) => {
      state.loadingPro = true;
      state.updateProId = null;
      const el = state.products.filter((el) => el._id !== action.payload);
      el.name = action.payload.name;
      el.categories = action.payload.categories;
      el.description = action.payload.description;
      el.sizeList = action.payload.sizeList;
      el.colorList = action.payload.colorList;
      el.price = action.payload.price;
      el.image = action.payload.image;
    },
    DELETE_PRODUCT: (state, action) => {
      state.deletedPro = true;
      state.loadingPro = true;
      state.products.filter((el) => el._id !== action.payload);
    },
    RESET_PRO: (state, action) => {
      state.deletedPro = false;
      state.updatePro = false;
    },
  },
});

export const {
  GET_PRODUCTS,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  RESET_PRO,
  SET_UPDATE_PRODUCT,
  SET_ADD_PRODUCT,
} = productsSlice.actions;
export default productsSlice.reducer;
