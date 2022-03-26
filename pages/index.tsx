import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Finnovating Blog</title>
        <meta name='description' content='Finnovating Blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to this blog!</h1>

        <div className={styles.grid}>
          <a href='/posts/create-post' className={styles.card}>
            <h2>Create Post &rarr;</h2>
          </a>

          <a href='/posts/7' className={styles.card}>
            <h2>Some Post &rarr;</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
};

export default Home;
