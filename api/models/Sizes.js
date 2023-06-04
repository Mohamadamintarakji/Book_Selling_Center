import mongoose from "mongoose";

const sizeSchema = mongoose.Schema({
  sizeName: {
    type: String,
    required: true,
  },
  elementState: {
    type: Boolean,
  },
});

const Sizes = mongoose.model("Size", sizeSchema);
export default Sizes;
