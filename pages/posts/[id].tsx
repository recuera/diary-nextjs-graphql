import { useQuery } from '@apollo/client';
import Layout from '../../components/layout';
import PostBody from '../../components/post-body';
import PostTitle from '../../components/post-title';
import GET_POST_DETAIL from '../../lib/queries/get-post-detail';
import { Post } from '../../types/post';
import styles from '../../styles/PostDetail.module.scss';

const PostDetail = ({ id }: { id: number }) => {
  let post: Post = new Post();

  const { loading, error, data } = useQuery(GET_POST_DETAIL, {
    variables: { id },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;
  if (data) post = data.post;

  return (
    <>
      <Layout>
        <div className={styles.wrapper}>
          <PostTitle title={post.title} />
          <PostBody body={post.body} />
        </div>
      </Layout>
    </>
  );
};

PostDetail.getInitialProps = async ({
  query,
}: any): Promise<{ id: number }> => {
  const { id } = query;

  return { id: +id };
};

export default PostDetail;
