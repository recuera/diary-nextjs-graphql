import { useMutation, useQuery } from '@apollo/client';
import Layout from '../../components/layout';
import PostBody from '../../components/post-body';
import PostTitle from '../../components/post-title';
import GET_POST_DETAIL from '../../lib/queries/get-post-detail';
import { Post } from '../../types/post';
import styles from '../../styles/PostDetail.module.scss';
import Link from 'next/link';
import DELETE_POST from '../../lib/queries/delete-post';
import { useRouter } from 'next/router';

const PostDetail = ({ id }: { id: number }) => {
  const router = useRouter();
  let post: Post = new Post();

  const [deletePost] = useMutation(DELETE_POST, {
    onCompleted: () => {
      window.alert('Post deleted correctly!');
      router.push(`/`);
    },
  });

  const handleDelete = () => {
    deletePost({ variables: { id } });
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
          <PostTitle title={post.title} />
          <PostBody body={post.body} />

          <div className={styles.actions}>
            <Link
              as={`/posts/${post.id}/edit`}
              href='/posts/[post.id]/edit'
              passHref>
              <a className='button-primary'>Edit</a>
            </Link>

            <button className='button-warn' onClick={handleDelete}>
              Delete
            </button>
          </div>
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
