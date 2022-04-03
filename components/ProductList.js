import React from "react";
import { Carousel } from "react-responsive-carousel";
import ShowMoreText from "react-show-more-text";
import { Text, Image, Grid, Card } from "@geist-ui/react";
import LoaderProducts from "./LoaderProducts";
import useProducts from "hooks/products/useProducts";

export default function ProductList() {
  const { products, isLoading, isError } = useProducts();

  if (isLoading) {
    return <LoaderProducts />;
  }
  return (
    <Grid.Container mt={5} gap={1}>
      {products?.map((product) => {
        return (
          <Grid sm={24} md={8} lg={6} key={product._id}>
            <Card width="100%">
              <Carousel axis="horizontal" showIndicators={false}>
                {product?.product_images?.map((product_image) => {
                  return (
                    <Image
                      src={product_image}
                      width="100%"
                      height="180px"
                      style={{ objectFit: "cover" }}
                    />
                  );
                })}
              </Carousel>

              <Text h5 my={0} mt={1}>
                {product.product_name}
              </Text>
              <Text small p>
                <ShowMoreText
                  lines={2}
                  more=""
                  less=""
                  className="view-more"
                  anchorClass=""
                  width={280}
                  truncatedEndingComponent={"... "}
                >
                  {product.product_description}
                </ShowMoreText>
              </Text>

              <Text small number>
                {product.product_price}$
              </Text>
            </Card>
          </Grid>
        );
      })}
    </Grid.Container>
  );
}
