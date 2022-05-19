import { Grid } from "@geist-ui/react";
import LoaderProducts from "./Loaders/LoaderProducts";
import useProducts from "hooks/products/useProducts";
import Product from "./Product";
import ErrorProducts from "./ErrorProducts";

export default function ProductList() {
  const { products, isLoading, isError } = useProducts();

  if (isError) {
    return <ErrorProducts />;
  }

  if (isLoading) {
    return <LoaderProducts />;
  }

  return (
    <>
      <Grid.Container mt={5} gap={1}>
        {products?.map((product) => {
          return (
            <Grid xs={24} sm={12} md={6} lg={6} key={product._id}>
              <Product {...product} />
            </Grid>
          );
        })}
      </Grid.Container>
    </>
  );
}
