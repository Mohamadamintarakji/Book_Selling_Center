import { createSlice } from "@reduxjs/toolkit";
const ordersSlice = createSlice({
  name: "ordersSlice",
  initialState: { orders: [] },
  reducers: {
    GET_ORDERS: (state, action) => {},
    ADD_ORDER: (state, action) => {
      state.orders.push(action.payload);
    },
    clearOrders: (state, action) => {
      state.orders = [];
    },
  },
});

export const { ADD_ORDER, clearOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
