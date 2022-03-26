import styles from '../styles/PostPreview.module.scss';
import { Post } from '../types/post';

type Props = {
  post: Partial<Post>;
};

const PostPreview = ({ post }: Props) => {
  return (
    <>
      <a className={styles.container} href={'/posts/' + post.id}>
        <div className={styles.title}>
          <span>📒</span>
          <h3>{post.title}</h3>
        </div>

        <p>{post.body}</p>
      </a>
    </>
  );
};

export default PostPreview;
