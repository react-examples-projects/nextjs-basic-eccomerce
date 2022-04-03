import axios from "axios";

export const getProducts = async () => {
  const res = await axios.get("/api/product");
  return res?.data?.data || [];
};

export const createProduct = async (product) => {
  const res = await axios.post("/api/product", product);
  return res?.data?.data || [];
};
