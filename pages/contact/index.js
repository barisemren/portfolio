import Layout from "../../components/Layout";
import Contact from "../../components/Contact";
import Head from "next/head";
export default function index() {
  return (
    <Layout>
      <Head>
        <title>Barış Emren | Contact</title>
        <link rel="icon" type="favicon" href="/favicon.ico" />
      </Head>
      <Contact />
    </Layout>
  );
}
