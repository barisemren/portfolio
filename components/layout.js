import Link from "next/link";
import styles from "./layout.module.scss";
import { BsPersonFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import {
  FaGraduationCap,
  FaHome,
  FaPaperclip,
  FaGamepad,
} from "react-icons/fa";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul>
          <Link href="/">
            <a>
              <li className={styles.nav_item}>
                <FaHome />
                Home
              </li>
            </a>
          </Link>
          <Link href="./about">
            <a>
              <li className={styles.nav_item}>
                <BsPersonFill />
                About
              </li>
            </a>
          </Link>
          <Link href="./education">
            <a>
              <li className={styles.nav_item}>
                <FaGraduationCap />
                Education
              </li>
            </a>
          </Link>
          <Link href="./resume">
            <a>
              <li className={styles.nav_item}>
                <FaPaperclip />
                Resume
              </li>
            </a>
          </Link>
          <Link href="./hobbies">
            <a>
              <li className={styles.nav_item}>
                <FaGamepad />
                Hobbies
              </li>
            </a>
          </Link>
          <Link href="./contact">
            <a>
            <li className={styles.nav_item}>
            <MdAlternateEmail />
            Contact
          </li>
            </a>
          </Link>
        </ul>
        <footer className={styles.nav_footer}>© Barış Emren 2022</footer>
      </nav>
      <main>{children}</main>
    </div>
  );
}
