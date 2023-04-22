import Layout from "../../components/Layout";
import Contact from "../../components/Contact";
import Head from "next/head";
export default function index() {
  return (
    <Layout>
      <Head>
        <title>Barış Emren | Contact</title>
      </Head>
      <Contact />
    </Layout>
  );
}
