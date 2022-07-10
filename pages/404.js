import { Button, Text } from "@geist-ui/core";
import useBody from "hooks/useBody";
import Link from "next/link";

export default function Error() {
  useBody({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  });
  return (
    <>
      <div
        className="text-center mx-auto mt-5 d-flex flex-column align-content-center justify-content-center"
        style={{ maxWidth: "600px" }}
      >
        <img
          alt="Un error ocurrió en la página"
          src="/images/404.svg"
          className="w-100 d-block mx-auto"
          style={{ maxWidth: "300px" }}
        />
        <Text style={{ fontSize: "2rem" }} h1>
          Página o recurso no encontrado
        </Text>
        <Text className="text-muted" p>
          La página o recurso que intentas acceder fue eliminado o no fue
          encontrado en nuestro servidores.
        </Text>

        <div className="d-flex w-100 justify-content-center">
          <Link href="/">
            <Button type="success">Ir al incio</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
