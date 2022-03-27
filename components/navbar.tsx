import styles from '../styles/Navbar.module.scss';
import Head from 'next/head';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <header className={styles.header}>
        <Link as={'/'} href='/' passHref>
          <a>My Diary</a>
        </Link>
      </header>
    </>
  );
};

export default Navbar;
