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
            href="https://github.com/"
            className={styles.card}
          >
            <h3>GitHub.com &rarr;</h3>
            <p>Deployed from <code>fkwfinfAh</code> {dateF(1616783267318)}</p>
          </a>

          <a
            href="https://gitlab.com"
            className={styles.card}
          >
            <h3>GitLab.com &rarr;</h3>
            <p>
              Deployed from <code>fkwfinfAh</code> {dateF(1616783067348)}
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
