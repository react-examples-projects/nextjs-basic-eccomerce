import { Text, Button, Tooltip, Avatar } from "@geist-ui/react";
import { BiUser, BiLogOut, BiCog, BiCart, BiSearch } from "react-icons/bi";
import { useSession, signOut } from "next-auth/react";
import css from "../styles/main.module.scss";
import Link from "next/link";
import AuthButtons from "./AuthButtons";

export default function Navbar() {
  const { data } = useSession();

  return (
    <nav className="d-flex justify-content-between align-items-center px-5 p-2 mt-3 mb-5">
      <div className="d-flex">
        <Link href="/">
          <a className="d-flex align-items-center">
            <Text
              className="mb-0"
              style={{ fontSize: "1.5rem", marginRight: "6rem" }}
              h1
            >
              Virtual Store
            </Text>
          </a>
        </Link>

        <Link href="/products">
          <a className="d-flex align-items-center text-muted me-4">
            <Text className="p-0 m-0">Productos</Text>
          </a>
        </Link>

        <Link href="/categories">
          <a className="d-flex align-items-center text-muted me-4">
            <Text className="p-0 m-0">Categorías</Text>
          </a>
        </Link>

        <Link href="/products">
          <a className="d-flex align-items-center text-muted me-4">
            <Text className="p-0 m-0">Contacto</Text>
          </a>
        </Link>
      </div>

      <div className="d-flex align-items-center">
        <Button
          type="abort"
          className="d-flex justify-content-center align-items-center"
          auto
        >
          <BiCart style={{ fontSize: "1.5rem" }} />
        </Button>

        <Button
          type="abort"
          className="d-flex justify-content-center align-items-center"
          auto
        >
          <BiSearch style={{ fontSize: "1.5rem" }} />
        </Button>

        <AuthButtons />

        {data?.user && (
          <Tooltip
            style={{ maxWidth: "100px" }}
            text={
              <ul className={css.userMenu}>
                <li className="text-muted">
                  <BiUser className="me-2" style={{ fontSize: "1rem" }} />
                  <Text className="m-0">Perfil</Text>
                </li>

                <li className="text-muted">
                  <BiCog className="me-2" style={{ fontSize: "1rem" }} />
                  <Text className="m-0">Configuración</Text>
                </li>

                <li className="text-muted" onClick={signOut}>
                  <BiLogOut className="me-2" style={{ fontSize: "1rem" }} />
                  <Text className="m-0">Salir</Text>
                </li>
              </ul>
            }
            placement="bottomEnd"
          >
            <Avatar src={data?.user.image} width="42px" height="42px" />
          </Tooltip>
        )}
      </div>
    </nav>
  );
}
