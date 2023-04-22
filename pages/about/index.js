import Layout from "../../components/Layout";
import About from "../../components/About";
import Head from "next/head";
export default function index() {
  return (
    <Layout>
      <Head>
        <title>Barış Emren | About</title>
      </Head>
      <About />
    </Layout>
  );
}
