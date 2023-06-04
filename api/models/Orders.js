import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  telefon: {
    type: String,
    required: true,
  },
  product: {
    type: Object,
    required: true,
  },
});
const Orders = mongoose.model("Order", orderSchema);
export default Orders;
