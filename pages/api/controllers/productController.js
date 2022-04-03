import ProductModel from "../models/ProductModel";

class ProductController {
  async getAll() {
    const data = await ProductModel.find({}).lean();
    return data;
  }

  async create(data) {
    const product = new ProductModel(data);
    const result = await product.save();
    return result.toObject();
  }
}

export default new ProductController();
