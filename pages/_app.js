import React from "react";
import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Blueprint Diagnostic Screening</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Take home challenge for Blueprint Mental Health Services"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
