import mongoose from "mongoose";

const colorSchema = mongoose.Schema({
  colorName: {
    type: String,
    required: true,
  },
  elementState: {
    type: Boolean,
  },
});
const Colors = mongoose.model("Color", colorSchema);
export default Colors;
