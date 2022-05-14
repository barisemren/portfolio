import { useState } from "react";
import Layout from "../components/layout";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import {HiMail} from "react-icons/hi";
import styles from "../styles/Contact.module.scss";

export default function Contact() {
  return (
    <Layout>
      <section className={styles.contact}>
        <h1>Contact</h1>
        <p>You can contact me with my social media accounts or email.</p>
        <div className={styles.contact_links}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/barisemren/"
          >
            <BsLinkedin className={styles.link} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/barisemren"
          >
            <BsInstagram className={styles.link} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/barisemren"
          >
            <BsGithub className={styles.link} />
          </a>
        </div>
        <div className={styles.email}>
        <a
            target="_blank"
            rel="noreferrer"
            href="mailto:baris.emren@yahoo.com"
          >
            <HiMail className={styles.link} />
          </a>
        </div>
      </section>
    </Layout>
  );
}
