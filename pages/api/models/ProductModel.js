import mongoose, { Schema, model } from "mongoose";

const ProductSchema = new Schema(
  {
    product_name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    product_description: {
      type: String,
      required: [true, "Product description is required"],
      trim: true,
    },
    product_images: {
      type: [String],
      trim: true,
    },
    product_price: {
      type: String,
      required: [true, "Product price is required"],
    },
    product_count: {
      type: Number,
      required: [true, "Product count is required"],
    },
  },
  {
    timestamps: true,
    collection: "products",
  }
);

export default mongoose.models.Product || model("Product", ProductSchema);
