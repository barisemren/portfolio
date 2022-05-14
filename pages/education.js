import Layout from "../components/layout";
import styles from "../styles/Education.module.scss";

export default function Education() {
  return (
    <Layout>
      <section className={styles.education}>
        <h1>Education</h1>
        <p>
          I'm about to graduate from Pamukkale University, Electrical and
          Electronics Engineering Department. <br />
          I have complated several online courses and some of them are : <br />
          <div className={styles.course_lists}>
            patika.dev{" "}
            <a
              className={styles.links}
              target="_blank"
              rel="noreferrer"
              href="https://app.patika.dev/paths/baslangic-seviye-frontend-web-development-patikasi"
            >
              beginner
            </a>
            ,{" "}
            <a
              className={styles.links}
              target="_blank"
              rel="noreferrer"
              href="https://app.patika.dev/paths/orta-seviye-frontend-web-development-patikasi"
            >
              intermediate
            </a>
            , and {""}
            <a
              className={styles.links}
              target="_blank"
              rel="noreferrer"
              href="https://app.patika.dev/paths/ileri-seviye-frontend-web-development-patikasi-"
            >
              advanced
            </a>{" "}
            web development.
          </div>
          <div className={styles.course_lists}>
            Turkcell Geleceği Yazanlar Web Programming{" "}
            <a
              className={styles.links}
              target="_blank"
              rel="noreferrer"
              href="https://gelecegiyazanlar.turkcell.com.tr/konu/egitim/101-html/htmle-giris"
            >
              101
            </a>
            ,{" "}
            <a
              className={styles.links}
              target="_blank"
              rel="noreferrer"
              href="https://gelecegiyazanlar.turkcell.com.tr/konu/web-programlama/egitim/201"
            >
              201
            </a>
            ,{" "}
            <a
              className={styles.links}
              target="_blank"
              rel="noreferrer"
              href="https://gelecegiyazanlar.turkcell.com.tr/konu/web-programlama/egitim/301"
            >
              301
            </a>{" "}
            and{" "}
            <a
              className={styles.links}
              target="_blank"
              rel="noreferrer"
              href="https://gelecegiyazanlar.turkcell.com.tr/konu/web-programlama/egitim/302"
            >
              302
            </a>
            .
          </div>{" "}
          <br />
          As I said I'm really interested in MERN Stack and I want to be a
          Fullstack Developer. <br /> To achive this, I follow{" "}
          <a
            className={styles.links}
            target="_blank"
            rel="noreferrer"
            href="https://fullstackopen.com/en/"
          >
            fullstackopen.com
          </a>
            {" "} 
        </p>
      </section>
    </Layout>
  );
}
