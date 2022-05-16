import "../styles/app.scss";
import "../node_modules/highlight.js/styles/atelier-seaside-light.css";
import "@fontsource/inter/index.css";
import "@fontsource/inter/900.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps}>
      <Head>
        <meta name="description" content="Graviton website" />
      </Head>
    </Component>
  );
}

export default MyApp;
