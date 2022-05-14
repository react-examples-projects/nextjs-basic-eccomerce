import { Input, Modal, Textarea, Grid } from "@geist-ui/react";
import { useState } from "react";
import { isValidFile, toFormData } from "utils/utils";
import { Controller } from "react-hook-form";
import ErrorText from "components/ErrorText";
import useProductForm from "hooks/useProductForm";
import Select from "react-select";
import ErrorTextFormProduct from "components/ErrorTextFormProduct";
import useCreateProduct from "hooks/products/useCreateProduct";

export default function CreateProductModal({bindings}) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useProductForm();
  const { create, isLoading, isError, error } = useCreateProduct();
  const [files, setFiles] = useState(null);
  const options = [
    { value: "1", label: "Ropa y Accesorios" },
    { value: "2", label: "Comida y Víveres" },
    { value: "3", label: "Aseo Personal" },
  ];

  const createProduct = async (obj) => {
    const product = toFormData(obj);
    await isValidFile(files);
    for (const file of files) {
      product.append("product_images", file);
    }

    await create(product);
  };

  return (
    <Modal {...bindings} width="30rem">
      <Modal.Title>Agregar nuevo producto</Modal.Title>

      <Modal.Content>
        <form id="create_product" onSubmit={handleSubmit(createProduct)}>
          <div className="mb-3">
            <Input
              {...register("product_name")}
              width="100%"
              name="product_name"
            >
              Nombre del producto
            </Input>
            <ErrorTextFormProduct errorField={errors.product_name} />
          </div>

          <div className="mb-3">
            <label htmlFor="product_description" className="label">
              Descripción del producto
            </label>
            <Textarea
              {...register("product_description")}
              width="100%"
              name="product_description"
              id="product_description"
            />
            <ErrorTextFormProduct errorField={errors.product_description} />
          </div>

          <div className="mb-3">
            <label htmlFor="product_category" className="label">
              Categoría del producto
            </label>
            <Controller
              control={control}
              name="product_category"
              render={({ field }) => (
                <Select
                  {...field}
                  id="product_category"
                  options={options}
                  isClearable
                  isSearchable
                />
              )}
            />

            <ErrorTextFormProduct errorField={errors.product_category} />
          </div>

          <div className="mb-3">
            <label htmlFor="product_image" className="label">
              Imágenes del producto
            </label>
            <input
              {...register("product_image")}
              type="file"
              className="input"
              name="product_image"
              id="product_image"
              onChange={(e) => setFiles(e.target.files)}
              multiple
            />

            <ErrorTextFormProduct errorField={errors.product_images} />
          </div>

          <div className="mb-3">
            <Grid.Container gap={1}>
              <Grid xs={24} sm={12} md={12} lg={12}>
                <div className="w-100">
                  <label htmlFor="product_count" className="label">
                    Cantida disponible
                  </label>
                  <input
                    {...register("product_count")}
                    type="number"
                    className="input w-100"
                    name="product_count"
                    id="product_count"
                  />

                  <ErrorTextFormProduct errorField={errors.product_count} />
                </div>
              </Grid>

              <Grid xs={24} sm={12} md={12} lg={12}>
                <div className="w-100">
                  <label htmlFor="product_price" className="label">
                    Precio del producto
                  </label>
                  <input
                    {...register("product_price")}
                    type="number"
                    className="input w-100"
                    name="product_price"
                    id="product_price"
                  />

                  <ErrorTextFormProduct errorField={errors.product_price} />
                </div>
              </Grid>
            </Grid.Container>
          </div>

          <ErrorText isVisible={!!isError} text={error} />
        </form>
      </Modal.Content>

      <Modal.Action passive onClick={() => setVisible(!visible)}>
        Cancelar
      </Modal.Action>

      <Modal.Action
        htmlType="submit"
        form="create_product"
        disabled={isLoading}
        loading={isLoading}
      >
        Aceptar
      </Modal.Action>
    </Modal>
  );
}
