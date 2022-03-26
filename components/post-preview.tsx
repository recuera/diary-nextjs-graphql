import styles from '../styles/PostPreview.module.scss';
import { Post } from '../types/post';

type Props = {
  post: Partial<Post>;
};

const PostPreview = ({ post }: Props) => {
  return (
    <>
      <div className={styles['post-container']}>
        <div className={styles.title}>
          <span>📒</span>
          <h3>{post.title}</h3>
        </div>

        <p>{post.body}</p>
      </div>
    </>
  );
};

export default PostPreview;
