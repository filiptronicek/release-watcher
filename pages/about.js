import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Release watcher</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Release watcher 👀
        </h1>

        <p className={styles.description}>
            <h2>Favicons</h2> <br />
            Copyright 2020 Twitter, Inc and other contributors <br />
            Code licensed under the MIT License: http://opensource.org/licenses/MIT <br />
            Graphics licensed under CC-BY 4.0: https://creativecommons.org/licenses/by/4.0/
        </p>
      </main>

      <footer className={styles.footer}>
        Made by&nbsp;
        <a
          href="https://trnck.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Filip
        </a>
        <br />
        <span className={styles.smol}>
        </span>
      </footer>
    </div>
  )
}
