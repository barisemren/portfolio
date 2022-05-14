import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import Me from "../assets/me.jpg";
import {BsChevronDoubleDown} from "react-icons/bs";
import styles from "../styles/Home.module.scss";


export default function Home() {
  return (
    <Layout >
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.home}>
        <Image
        className={styles.image}
          src={Me}
          layout="intrinsic"
          width={200}
            height={200}
          alt="Barış Emren"
        />
        <h1>Barış EMREN</h1>
        <h2>Jr. Frontend Developer</h2>
        <p>Hi! I am Barış and this is my digital personal portfolio. <br/> You can scroll down or just click the menu icons for more. </p>
        <BsChevronDoubleDown className={styles.scroll_icon}/>
      </section>
    </Layout>
  );
}
