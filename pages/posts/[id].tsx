import { useQuery } from '@apollo/client';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import GET_POST_DETAIL from '../../lib/queries/get-post-detail';
import { Post } from '../../types/post';

const PostDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  let post: Post = new Post();

  const { loading, error, data } = useQuery(GET_POST_DETAIL, {
    variables: { id },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;
  if (data) post = data.post;

  console.log(data);

  return (
    <>
      <Layout>
        <h1>{post.title}</h1>
      </Layout>
    </>
  );
};

export default PostDetail;
