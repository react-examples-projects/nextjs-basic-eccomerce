import React from "react";
import { Grid } from "@geist-ui/react";
import LoaderProducts from "./LoaderProducts";
import useProducts from "hooks/products/useProducts";
import Product from "./Product";
import { useShoppinCardContext } from "context/ShoppingCardContext";

export default function ProductList() {
  const { count } = useShoppinCardContext();
  const { products, isLoading, isError } = useProducts();

  if (isLoading) {
    return <LoaderProducts />;
  }

  return (
    <>
      <h3>Contador: {count}</h3>
      <Grid.Container mt={5} gap={1}>
        {products?.map((product) => {
          return (
            <Grid xs={24} sm={12} md={8} lg={6} key={product._id}>
              <Product {...product} />
            </Grid>
          );
        })}
      </Grid.Container>
    </>
  );
}
