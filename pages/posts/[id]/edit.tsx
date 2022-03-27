import { useMutation, useQuery } from '@apollo/client';
import Layout from '../../../components/layout';
import GET_POST_DETAIL from '../../../lib/queries/get-post-detail';
import { Post } from '../../../types/post';
import styles from '../../../styles/PostDetail.module.scss';
import PostForm from '../../../components/post-form';
import UPDATE_POST from '../../../lib/queries/update-post';

const PostDetail = ({ id }: { id: number }) => {
  let post: Post = new Post();

  const [updatePost] = useMutation(UPDATE_POST, {
    onCompleted: () => {
      window.alert('Post saved correctly!');
    },
  });

  const handleSave = (postData: Post) => {
    updatePost({ variables: { id, input: postData } });
  };

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
          <h1>Write a new Post!</h1>

          <PostForm title={post.title} body={post.body} save={handleSave} />
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
