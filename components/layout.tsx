import styles from './layout.module.scss';
import Head from 'next/head';

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

      <div className={styles.container}>
        <div className={styles.content}>{children}</div>
      </div>

      <footer className={styles.footer}>Footer</footer>
    </>
  );
};

export default Layout;