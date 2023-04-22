import React from "react";
import Layout from "../../components/Layout";
import Home from "../../components/Home";
import Head from "next/head";

export default function index() {
  return (
    <Layout>
      <Head>
        <title>Barış Emren | Home</title>
        <link rel="icon" type="favicon" href="/favicon.ico" />
      </Head>
      <Home />
    </Layout>
  );
}
