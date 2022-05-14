import Layout from "../components/layout";
import styles from "../styles/Resume.module.scss";

export default function Resume() {
  return (
    <Layout>
      <section className={styles.resume}>
        <h1>Resume</h1>
        <iframe
          src="https://drive.google.com/file/d/1BiWQgUR4XHDZ7e_g3G_uGSEk7F0SyRHQ/preview"
          width="640"
          height="480"
          allow="autoplay"
        ></iframe>
      </section>
    </Layout>
  );
}
