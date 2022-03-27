import { useQuery } from '@apollo/client';
import Link from 'next/link';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import GET_POSTS from '../lib/queries/get-posts';
import styles from '../styles/Home.module.scss';
import { Post } from '../types/post';

const Home = () => {
  let posts: Post[] = [];

  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: {
      options: {
        paginate: {
          page: 1,
          limit: 20,
        },
      },
    },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;
  if (data) posts = data.posts.data;

  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to your diary!</h1>

          <h2 className={styles.subtitle}>
            Read your Posts or
            <Link as={`/posts/create`} href='/posts/create' passHref>
              <a className={styles.card}> write a new one 🖋</a>
            </Link>
          </h2>

          <div className={styles.posts}>
            {posts.map((post: Partial<Post>) => (
              <div className={styles['post-wrapper']} key={post.id}>
                <PostPreview post={post} />
              </div>
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
