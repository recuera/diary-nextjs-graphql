import styles from '../styles/PostDetail.module.scss';

type Props = {
  body: string;
};

const PostBody = ({ body }: Props) => {
  return (
    <>
      <div className={styles.body}>
        <p>{body}</p>
      </div>
    </>
  );
};

export default PostBody;
