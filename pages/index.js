import mainStyles from "css/main.module.scss";
import { Text, Input, Button, Modal, Textarea, Grid } from "@geist-ui/react";
import useToggle from "../hooks/useToggle";
import useCreateProduct from "hooks/products/useCreateProduct";
import { useState } from "react";
import ErrorText from "components/ErrorText";
import { isValidFile } from "utils/utils";
import ProductList from "components/ProductList";

export default function Home() {
  const { create, isLoading, isError } = useCreateProduct();
  const [isOpenModal, toggleOpenModal] = useToggle();
  const [files, setFiles] = useState(null);
  const [product, setProduct] = useState({
    product_name: "",
    product_description: "",
    product_price: 0,
    product_count: 0,
    product_images: [],
  });

  const onChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const createProduct = async () => {
    const form = document.getElementById("create_product");
    const product = new FormData(form);
    await isValidFile(files);
    for (const file of files) {
      product.append("product_images", file);
    }

    await create(product);
  };

  return (
    <main className={mainStyles.container}>
      <Text h1>Tienda virtual</Text>
      <Text mb={0}>
        Tienda virtual donde puedes vender, editar y explorar nuevos productos
        de otros vendedores
      </Text>
      <Text my={0}>
        Puedes administrar tus productos y a la vez, exportarlos e importarlos a
        tu dispositivo
      </Text>

      <Button mt={1} type="success" onClick={toggleOpenModal}>
        Agregar producto
      </Button>

      <ProductList />

      <Modal visible={isOpenModal} onClose={toggleOpenModal} width="30rem">
        <Modal.Title>Agregar nuevo producto</Modal.Title>
        <Modal.Content>
          <form id="create_product">
            <div className="mb-3">
              <Input
                width="100%"
                name="product_name"
                onChange={onChange}
                required
              >
                Nombre del producto
              </Input>
            </div>

            <div className="mb-3">
              <label htmlFor="product_description" className="label">
                Descripción del producto
              </label>
              <Textarea
                width="100%"
                name="product_description"
                onChange={onChange}
                id="product_description"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="product_image" className="label">
                Imágenes del producto
              </label>
              <input
                type="file"
                className="input"
                id="product_image"
                onChange={(e) => setFiles(e.target.files)}
                multiple
                required
              />
            </div>

            <div className="mb-3">
              <Grid.Container gap={1}>
                <Grid xs={24} sm={12} md={12} lg={12}>
                  <div className="w-100">
                    <label htmlFor="product_count" className="label">
                      Cantida disponible
                    </label>
                    <input
                      type="number"
                      className="input w-100"
                      name="product_count"
                      onChange={onChange}
                      id="product_count"
                      required
                    />
                  </div>
                </Grid>

                <Grid xs={24} sm={12} md={12} lg={12}>
                  <div className="w-100">
                    <label htmlFor="product_price" className="label">
                      Precio del producto
                    </label>
                    <input
                      type="number"
                      className="input w-100"
                      name="product_price"
                      onChange={onChange}
                      id="product_price"
                      required
                    />
                  </div>
                </Grid>
              </Grid.Container>
            </div>

            <ErrorText isVisible={!!isError} text={isError} />
          </form>
        </Modal.Content>

        <Modal.Action passive onClick={toggleOpenModal}>
          Cancelar
        </Modal.Action>
        <Modal.Action
          type="submit"
          onClick={createProduct}
          disabled={isLoading}
          loading={isLoading}
        >
          Aceptar
        </Modal.Action>
      </Modal>
    </main>
  );
}
