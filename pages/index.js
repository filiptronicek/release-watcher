import Head from 'next/head'
import styles from '../styles/Home.module.css'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import { useEffect, useState } from 'react';
import { watcherFetcher } from '../lib/api';

dayjs.extend(relativeTime);

export default function Home({ watched }) {

  const dateF = (timeStamp) => {
    const dateToRender = dayjs().to(dayjs.unix(timeStamp / 1000));
    return (
      <span>{dateToRender}</span>
    )
  }

  const renderProvider = (provider, domain) => {
    return (
      <a
        href={`https://${domain}/`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.card}
      >
        <h3>{domain.charAt(0).toUpperCase() + domain.slice(1)} &rarr;</h3>
        <p>Deployed from <code>{provider.version.substr(0, 7)}</code> {dateF(watched.github.time)}</p>
      </a>
    )
  }

  const generator = Math.random();
  console.log(generator)

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
          The place to get deploy information about GitHub and GitLab{' '}
        </p>

        <div className={styles.grid}>
          {renderProvider(watched.github, "github.com")}
          {renderProvider(watched.gitlab, "gitlab.com")}
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
        &nbsp;-&nbsp;
        <span>
          <a href="/about">About</a>
        </span>
      </footer>
    </div>
  )
}

export async function getServerSideProps({ }) {
  const watched = await watcherFetcher() || "⚠ failed to fetch";

  return {
    props: { watched },
  }
}