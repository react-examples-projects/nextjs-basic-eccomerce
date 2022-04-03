import { createProduct } from "../../helpers/http";
import { toast } from "react-toastify";
import { useMutation } from "react-query";

export default function useCreateProduct() {
  const { isLoading, mutateAsync, data, error, isError } =
    useMutation(createProduct);

  const create = async (data) => {
    try {
      await mutateAsync(data);
      toast.success("Producto creado", "success");
    } catch (error) {
      toast.error("Error al crear el producto", "error");
    }
  };

  return {
    create,
    isLoading,
    data,
    error,
    isError,
  };
}
