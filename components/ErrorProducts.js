import { Button, Text } from "@geist-ui/core";
import { BiEditAlt } from "react-icons/bi";
import Link from "next/link";

export default function ErrorProducts() {
  return (
    <>
      <div
        className="text-center container full-vp d-flex flex-column align-content-center justify-content-center"
        style={{ maxWidth: "600px" }}
      >
        <img
          alt="Un error ocurrió en la página"
          src="./images/error.svg"
          className="w-100 d-block mx-auto"
          style={{ maxWidth: "300px" }}
        />
        <Text style={{ fontSize: "2rem" }} h1>
          Un error acaba de suceder
        </Text>
        <Text className="text-muted" p>
          Acaba de suceder un error al tratar de solicitar la lista de
          productos. Intente más tarde.
        </Text>
        <Text type="success" className="mb-2" small>
          <Link href="/contact">
            <a className="w-100 justify-content-center d-flex align-items-center">
              <BiEditAlt className="me-1" style={{ fontSize: "1rem" }} />
              Si el error persiste considera avisarnos
            </a>
          </Link>
        </Text>
        <div className="d-flex w-100 justify-content-center">
          <Button
            onClick={() => window.location.reload()}
            type="success"
            className="me-2"
          >
            Refrescar
          </Button>
          <Link href="/">
            <Button>Ir al incio</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
