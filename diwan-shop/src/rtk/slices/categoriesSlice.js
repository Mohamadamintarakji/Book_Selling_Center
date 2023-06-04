import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categoriesSlice",
  initialState: { categories: [], loadingCat: true },
  reducers: {
    GET_CATEGORIES: (state, action) => {
      state.categories = action.payload;
      state.loadingCat = false;
    },
    ADD_CATEGORY: (state, action) => {
      state.categories.push(...action.payload);
    },
    SET_UPDATE_CATEGORY: (state, action) => {
      state.updateCatId = action.payload._id;
      state.categoryName = action.payload.categoryName;
      state.elementState = action.payload.elementState;
      state.isEdit = true;
      state.isAdd = false;
      state.categories.filter((el) => el._id === action.payload);
    },
    SET_ADD_CATEGORY: (state, action) => {
      state.categoryName = "";
      state.image = [];
      state.elementState = false;
      state.isEdit = false;
      state.isAdd = true;
    },
    UPDATE_CATEGORY: (state, action) => {
      state.updateCatId = null;
      state.loadingCat = true;

      const el = state.categories.filter((el) => el._id !== action.payload);
      el.categoryName = action.payload.categoryName;
      el.elementState = action.payload.elementState;
      el.image = action.payload.image;
    },
    UPDATE_CATEGORY_STATE: (state, action) => {
      state.updateCat = true;

      const el = state.categories.filter((el) => el._id !== action.payload);
      el.categoryName = action.payload.categoryName;
      el.elementState = action.payload.elementState;
      el.image = action.payload.image;
    },
    DELETE_CATEGORY: (state, action) => {
      state.deletedCat = true;
      state.loadingCat = true;

      state.categories.filter((el) => el._id !== action.payload);
    },
    RESET_CAT: (state, action) => {
      state.deletedCat = false;
      state.updateCat = false;
    },
  },
});

export const {
  GET_CATEGORIES,
  ADD_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  RESET_CAT,
  SET_UPDATE_CATEGORY,
  SET_ADD_CATEGORY,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;
