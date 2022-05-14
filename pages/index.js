import { Text, Button, useModal } from "@geist-ui/react";
import { useShoppinCardContext } from "context/ShoppingCardContext";
import ProductList from "components/ProductList";
import mainStyles from "css/main.module.scss";
import CreateProductModal from "components/Modals/CreateProductModal";

export default function Home() {
  const {} = useShoppinCardContext();
  const { visible, setVisible, bindings } = useModal();

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

      <Button mt={1} type="success" onClick={() => setVisible(!visible)}>
        Agregar producto
      </Button>

      <ProductList />

      <CreateProductModal bindings={bindings}/>
    </main>
  );
}
