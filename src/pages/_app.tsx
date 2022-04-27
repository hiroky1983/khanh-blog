import { AppProps } from "next/dist/shared/lib/router/router";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import { Layout } from "../components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
