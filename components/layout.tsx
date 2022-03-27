import styles from '../styles/Layout.module.scss';
import Head from 'next/head';
import Navbar from './navbar';
import ClientOnly from './client-only';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Finnovating Blog</title>
        <meta name='description' content='Finnovating Blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <div className={styles.container}>
        <ClientOnly>
          <div className={styles.content}>{children}</div>
        </ClientOnly>
      </div>

      <footer className={styles.footer}>Made by Ana Recuero</footer>
    </>
  );
};

export default Layout;
