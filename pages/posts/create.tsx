import { useMutation } from '@apollo/client';
import { NextPage } from 'next';
import Layout from '../../components/layout';
import PostForm from '../../components/post-form';
import CREATE_POST from '../../lib/queries/create-post';
import styles from '../../styles/PostDetail.module.scss';
import { Post } from '../../types/post';

const CreatePost: NextPage = () => {
  const post = new Post();

  const [savePost] = useMutation(CREATE_POST, {
    onCompleted: () => {
      window.alert('Post saved correctly!');
    },
  });

  const handleSave = (postData: Post) => {
    savePost({ variables: { input: postData } });
  };

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

export default CreatePost;
