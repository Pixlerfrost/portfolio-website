import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../Components/theme";
import Font from "../Components/fonts";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Font />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
