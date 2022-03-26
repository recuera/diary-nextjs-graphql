import { useQuery } from '@apollo/client';
import Layout from '../components/layout';
import GET_POSTS from '../lib/queries/get-posts';
import styles from '../styles/Home.module.scss';

const Home = () => {
  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: {
      options: {
        paginate: {
          page: 1,
          limit: 5,
        },
      },
    },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;
  console.log(data);

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
