import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Layout from "../components/layout";
import Home from "./home";
import About from "./about";
import Education from "./education";
import Resume from "./resume";
import Hobbies from "./hobbies";
import Contact from "./contact";
export default function App() {
  return (
    <Layout className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Barış Emren's personal website" />
      </Head>
      <Home id="home" />
      <About id="about" />
      <Education id="education" />
      <Resume id="resume" />
      <Hobbies id="hobbies" />
      <Contact id="contact" />
    </Layout>
  );
}
