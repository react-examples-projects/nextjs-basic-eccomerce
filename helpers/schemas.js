import * as yup from "yup";

const ProductSchema = yup.object({
  product_name: yup.string().trim().required("El nombre es obligatorio"),
  product_description: yup
    .string()
    .trim()
    .required("La descripción es obligatorio"),
  product_category: yup.string().required("La categoría es obligatoria"),
  product_images: yup.array(),
  product_price: yup
    .number()
    .min(1, "El mínimo deber diferente a 0")
    .required("El precio es obligatorio"),
  product_count: yup
    .number()
    .min(1, "El mínimo deber diferente a 0")
    .required("La cantidad es obligatorio"),
});

export { ProductSchema };
