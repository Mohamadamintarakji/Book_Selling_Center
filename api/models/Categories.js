import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  elementState: {
    type: Boolean,
  },
  image: [
    {
      type: String,
      // required: true,
    },
  ],
});

const Categories = mongoose.model("Category", categorySchema);
export default Categories;
