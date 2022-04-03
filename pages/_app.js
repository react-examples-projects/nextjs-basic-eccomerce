import "../styles/globals.css";
import "../styles/utils.css";
import "inter-ui/inter.css";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import { GeistProvider, CssBaseline } from "@geist-ui/core";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <GeistProvider>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
      <ToastContainer pauseOnFocusLoss closeOnClick />
    </GeistProvider>
  );
}

export default MyApp;
