import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    user: null,
    loading: true,
    showAlert: false,
    alertType: "",
    alertText: "",
    auth: false,
    admin: false,
  },
  reducers: {
    DISPLAY_ALERT: (state, action) => {
      console.log(action);
      state.showAlert = true;
      state.alertType = "danger";
      state.alertText =
        action.payload.alertText || "Please provide all values!";
    },
    CLEAR_ALERT: (state, action) => {
      state.showAlert = false;
      state.alertType = "";
      state.alertText = "";
    },
    GET_USER: (state, action) => {
      state.user = action.payload.user;
      state.loading = false;
    },
    SETUP_USER_SUCCESS: (state, action) => {
      state.showAlert = true;
      state.user = action.payload.user;
      state.alertType = "success";
      state.alertText = "Login Successful! Redirecting...";
      state.loading = false;
      state.admin = action.payload.isAdmin;
      if (action.payload) {
        state.auth = true;
      }
    },
    RESET_PASS: (state, action) => {
      state.resetUser = action.payload;
    },
    VERIFY_MAIL: (state, action) => {
      state.showAlert = true;
      state.alertType = "success";
      state.alertText = "Mail has been sent";
    },
    REGISTER_SUCCESS: (state, action) => {
      state.showAlert = true;
      state.user = action.payload.user;
      state.alertType = "success";
      state.alertText = "Register Successful!";
      state.user = action.payload.user;
      state.auth = true;
    },
    SET_USER_lOGOUT: (state, action) => {
      state.showAlert = false;
      state.user = null;
      state.auth = false;
    },
  },
});

export const {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_SUCCESS,
  SET_USER_lOGOUT,
  REGISTER_SUCCESS,
  GET_USER,
  RESET_PASS,
  VERIFY_MAIL,
} = authSlice.actions;
export default authSlice.reducer;
