import LoaderAuthButtons from "./Loaders/LoaderAuthButtons";
import { signIn, useSession } from "next-auth/react";

import { Button } from "@geist-ui/react";
export default function AuthButtons() {
  const { data, status } = useSession();

  if (status === "loading") {
    return <LoaderAuthButtons />;
  }

  if (!data?.user) {
    return (
      <>
        <Button className="ms-1" type="success-light" onClick={signIn} auto>
          Acceder
        </Button>
      </>
    );
  }

  return null;
}
