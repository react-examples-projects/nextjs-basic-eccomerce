import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProductSchema } from "../helpers/schemas";

export default function useProductForm() {
  const form = useForm({
    resolver: yupResolver(ProductSchema),
    defaultValues: {
      product_name: "",
      product_description: "",
      product_category: "",
      product_price: 0,
      product_count: 0,
      product_images: [],
    },
  });

  return form;
}
