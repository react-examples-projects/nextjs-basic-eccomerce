import { Text, Button, useModal, Grid, Card } from "@geist-ui/react";
import ProductList from "components/ProductList";
import css from "css/main.module.scss";
import CreateProductModal from "components/Modals/CreateProductModal";
import Navbar from "components/Navbar";
import Container from "components/Container";

export default function Home() {
  const { visible, setVisible, bindings } = useModal();
  const toggleVisible = () => setVisible(!visible);

  return (
    <main>
      <Navbar />

      <div className={css.hero}>
        <Grid.Container>
          <Grid xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className={css.wrapper}>
              <Text style={{ fontSize: "2.3rem" }} className="mb-0" h1>
                Tienda virtual
              </Text>

              <Text className="text-muted mb-0">
                Tienda virtual donde puedes vender, editar y explorar nuevos
                productos de otros vendedores
              </Text>

              <Text className="text-muted my-0">
                Puedes administrar tus productos y a la vez, exportarlos e
                importarlos a tu dispositivo
              </Text>

              <Button
                type="error-light"
                className="mt-3"
                style={{
                  maxWidth: "180px",
                }}
                scale={0.8}
              >
                Comenzar
              </Button>
            </div>
          </Grid>

          <Grid xs={0} sm={0} md={12} lg={12} xl={12} className="h-100">
            <img
              alt="Hero background"
              src="/images/hero.jpg"
              className="d-block img-fluid w-100 h-100"
            />
          </Grid>
        </Grid.Container>
      </div>

      <Container className="mt-5">
        <Grid.Container gap={1}>
          <Grid xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card>
              <Card.Content>
                <div style={{ marginLeft: "8rem" }}>
                  <Text h4>Compras Rápidas</Text>
                  <Text className="text-muted" p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste error officia eum earum nesciunt at repellendus, in
                    minima magni blanditiis!
                  </Text>
                </div>
              </Card.Content>
            </Card>
          </Grid>

          <Grid xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card>
              <Card.Content>
                <div style={{ marginLeft: "8rem" }}>
                  <Text h4>Gestión Segura de Productos</Text>
                  <Text className="text-muted" p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste error officia eum earum nesciunt at repellendus, in
                    minima magni blanditiis!
                  </Text>
                </div>
              </Card.Content>
            </Card>
          </Grid>
        </Grid.Container>
      </Container>

      <Container>
        <Button mt={1} type="success" onClick={() => setVisible(!visible)}>
          Agregar producto
        </Button>

        <ProductList />

        <CreateProductModal bindings={bindings} toggleVisible={toggleVisible} />
      </Container>
    </main>
  );
}
