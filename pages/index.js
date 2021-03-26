import Head from 'next/head'
import styles from '../styles/Home.module.css'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime);

export default function Home() {

  const dateF = (timeStamp) => {
    const dateToRender = dayjs().to(dayjs(timeStamp));
    return (
      <span>{dateToRender}</span>
    )
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Release watcher</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Release watcher
        </h1>

        <p className={styles.description}>
          The place to get deploy information about GitHub and GitLab{' '}
        </p>

        <div className={styles.grid}>
          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>GitHub.com &rarr;</h3>
            <p>Deployed from fkwfinfAh {dateF(1616783267318)}</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
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
      </footer>
    </div>
  )
}
