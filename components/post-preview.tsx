import Link from 'next/link';
import styles from '../styles/PostPreview.module.scss';
import { Post } from '../types/post';

type Props = {
  post: Partial<Post>;
};

const PostPreview = ({ post }: Props) => {
  return (
    <>
      <Link as={`/posts/${post.id}`} href='/posts/[post.id]' passHref>
        <a className={styles.container}>
          <div className={styles.title}>
            <span>📒</span>
            <h3>{post.title}</h3>
          </div>

          <p>{post.body}</p>
        </a>
      </Link>
    </>
  );
};

export default PostPreview;
