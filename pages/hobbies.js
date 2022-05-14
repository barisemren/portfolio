import Layout from "../components/layout";
import styles from "../styles/Hobbies.module.scss";

export default function Hobbies() {
  return (
    <Layout>
      <section className={styles.hobbies}>
        <h1>Hobbies</h1>
        <p>
          First of all music... I really love nearly all kinds of music. <br />{" "}
          While cooking, working, studying, walking, on public transport etc. I
          listen music. <br />
          <a
            className={styles.link}
            target="_blank"
            rel="noreferrer"
            href="https://open.spotify.com/user/baris.emren"
          >
            Here
          </a>{" "}
          is my spotify account, if you want to take a look. <br/> <br />I have been
          playing volleyball with my friends since primary school,
          in the summers it is our favorite activity. <br/> <br/>
          I also like to watch basketball, football (only Premier League), tennis and formula 1.<br/><br/>
          I am not into online games, but story based and open world games are my favorite, like The Witchera and AC Odyssey. 
        </p>
      </section>
    </Layout>
  );
}
