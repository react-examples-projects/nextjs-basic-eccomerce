import { getProviders, getSession, signIn } from "next-auth/react";
import { Button, Text } from "@geist-ui/react";
import useBody from "hooks/useBody";

export default function SignIn({ providers }) {
  useBody({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  });

  return (
    <div className="p-1 mx-auto d-flex flex-column align-items-center">
      <Text className="my-0 mb-4 fw-bold" h3>
        Iniciar Sesión
      </Text>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          {console.log(provider.id)}
          <Button
            className="mb-2"
            onClick={() =>
              signIn(provider.id, { callbackUrl: "http://localhost:3000/" })
            }
          >
            <Text className="m-0"> Sign in with {provider.name}</Text>
          </Button>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
