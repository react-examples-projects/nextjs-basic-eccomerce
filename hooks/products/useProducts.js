import { useQuery } from "react-query";
import { getProducts } from "utils/http";

export default function useProducts() {
  const {
    isLoading,
    data: products,
    isError,
    error,
  } = useQuery("products", getProducts);
  return { isLoading, products, isError, error };
}
