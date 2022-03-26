import styles from '../styles/PostDetail.module.scss';

type Props = {
  title: string;
};

const PostTitle = ({ title }: Props) => {
  return (
    <>
      <div className={styles.title}>
        <span>📒</span>
        <h2>{title}</h2>
      </div>
    </>
  );
};

export default PostTitle;
