import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../Components/theme";
import Font from "../Components/fonts";
import Layout from "../Components/main";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Font />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
