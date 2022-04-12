import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import "cal-sans";

import theme from "../src/theme";
import Layout from "@/components/layout";
import CmdPalette from "@/components/cmd-palette";
import CmdPaletteProvider from "src/providers/cmd-palette-provider";

import "../style.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <NextSeo
        title="Bobir Rahmatov - Full-Stack Developer."
        description="Full-stack Engineer, Data Science, and Open Source Advocate."
        twitter={{
          cardType: "summary_large_image",
          handle: "@bobirrahmatof",
        }}
        openGraph={{
          url: "https://bobirrahmatov.tech",
          title: "Bobir Rahmatov - Full-Stack Developer.",
          description:
            "Full-stack Engineer, Data Science, and Open Source Advocate.",
          locale: "en_US",
          images: [
            {
              url: "https://bobirrahmatov.tech/assets/images/social-banner.png",
              width: 1200,
              height: 630,
              alt: "Bobir Rahmatov",
              type: "image/png",
            },
          ],
        }}
      />
      <CmdPaletteProvider>
        <Layout>
          <CmdPalette />
          <Component {...pageProps} />
        </Layout>
      </CmdPaletteProvider>
    </ChakraProvider>
  );
};

export default App;
