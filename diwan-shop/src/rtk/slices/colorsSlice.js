import { createSlice } from "@reduxjs/toolkit";

const colorsSlice = createSlice({
  name: "colorsSlice",
  initialState: { colors: [], loadingColor: true },
  reducers: {
    GET_COLORS: (state, action) => {
      state.colors = action.payload;
      state.loadingColor = false;
    },
    ADD_COLOR: (state, action) => {
      state.colors.push(...action.payload);
    },

    SET_UPDATE_COLOR: (state, action) => {
      state.updateColorId = action.payload._id;
      state.colorName = action.payload.colorName;
      state.elementState = action.payload.elementState;
      state.isEdit = true;
      state.isAdd = false;
      state.colors.filter((el) => el._id === action.payload);
    },
    SET_ADD_COLOR: (state, action) => {
      state.colorName = "";
      state.elementState = false;
      state.isEdit = false;
      state.isAdd = true;
    },
    UPDATE_COLOR: (state, action) => {
      state.updateColorId = null;
      state.loadingColor = true;

      const el = state.colors.filter((el) => el._id !== action.payload);
      el.colorName = action.payload.colorName;
      el.elementState = action.payload.elementState;
      el.image = action.payload.image;
    },
    DELETE_COLOR: (state, action) => {
      state.deletedColor = true;
      state.loadingColor = true;

      state.colors.filter((el) => el._id !== action.payload);
    },
    RESET_COLOR: (state, action) => {
      state.deletedColor = false;
      state.updateColor = false;
    },
  },
});

export const {
  GET_COLORS,
  ADD_COLOR,
  DELETE_COLOR,
  RESET_COLOR,
  UPDATE_COLOR,
  SET_UPDATE_COLOR,
  SET_ADD_COLOR,
} = colorsSlice.actions;
export default colorsSlice.reducer;
