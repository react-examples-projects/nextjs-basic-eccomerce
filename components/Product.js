import { Text, Image, Card, Button } from "@geist-ui/react";
import { Carousel } from "react-responsive-carousel";
import TextShort from "./TextShort";

export default function Product({
  product_images,
  product_name,
  product_description,
  product_price,
  product_count,
}) {
  return (
    <Card width="100%" className="h-100">
      <div className="d-flex flex-column h-100">
        <Carousel axis="horizontal" showIndicators={false} showThumbs={false}>
          {product_images?.map((product_image) => {
            return (
              <Image
                key={product_image}
                src={product_image}
                width="100%"
                height="180px"
                style={{ objectFit: "cover" }}
              />
            );
          })}
        </Carousel>

        <Text h5 my={0} mt={1}>
          {product_name}
        </Text>

        <TextShort
          content={product_description}
          p
          style={{ fontSize: "13px" }}
        />

        <Text small p className="my-0" style={{ fontSize: "13px" }}>
          {product_price}$
        </Text>
        <Text small p className="mt-0 mb-2" style={{ fontSize: "13px" }}>
          {product_count} Unidades disponibles
        </Text>
        <Button scale={0.7} width="100%" className="mt-auto">
          Añadir al carrito
        </Button>
      </div>
    </Card>
  );
}
