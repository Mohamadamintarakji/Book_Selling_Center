import { createSlice } from "@reduxjs/toolkit";

const sizesSlice = createSlice({
  name: "sizesSlice",
  initialState: { sizes: [], loadingSize: true },
  reducers: {
    GET_SIZES: (state, action) => {
      state.sizes = action.payload;
      state.loadingSize = false;
    },

    ADD_SIZE: (state, action) => {
      state.sizes.push(...action.payload);
    },
    SET_UPDATE_SIZE: (state, action) => {
      state.updateSizeId = action.payload._id;
      state.sizeName = action.payload.sizeName;
      state.elementState = action.payload.elementState;
      state.isEdit = true;
      state.isAdd = false;
      state.sizes.filter((el) => el._id === action.payload);
    },
    SET_ADD_SIZE: (state, action) => {
      state.sizeName = "";
      state.elementState = false;
      state.isEdit = false;
      state.isAdd = true;
    },
    UPDATE_SIZE: (state, action) => {
      state.updateSizeId = null;
      state.loadingSize = true;

      const el = state.sizes.filter((el) => el._id !== action.payload);
      el.sizeName = action.payload.sizeName;
      el.elementState = action.payload.elementState;
      el.image = action.payload.image;
    },
    DELETE_SIZE: (state, action) => {
      state.deletedSize = true;
      state.loadingSize = true;

      state.sizes.filter((el) => el._id !== action.payload);
    },
    RESET_SIZE: (state, action) => {
      state.deletedSize = false;
      state.updateSize = false;
    },
  },
});

export const {
  GET_SIZES,
  ADD_SIZE,
  DELETE_SIZE,
  RESET_SIZE,
  UPDATE_SIZE,
  SET_UPDATE_SIZE,
  SET_ADD_SIZE,
} = sizesSlice.actions;
export default sizesSlice.reducer;
