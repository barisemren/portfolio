import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/About.module.scss'

export default function About() {
  return (
    <Layout>
        <section className={styles.about}>
            <h1>About</h1>
            <p>
              <p className={styles.dots}>...</p>
              23 years old currently Frontend, future Fullstack Developer. <p className={styles.dots}>...</p> 
              I've always been interested in stuff about coding. But Frontend Development was very distant subject for me. <br/>
              I wanted to do something about Embedded Systems and IoT at the beginning of my university education. <br/>
              Then with the pandemic situation, I decided to learn less costly programming languages. <br/>
              Thats how I started to learn Frontend Web Development. Now It's my job, hobby and most importantly passion. <br/>
              Nowadays, I'm really interested in MERN Stack and trying to learn more about it. <br/> 
            </p>
        </section>
    </Layout>
  )
}
