import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
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
      </div>
    </Layout>
  );
};

export default Home;
