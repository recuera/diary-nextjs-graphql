import { NextPage } from 'next';
import Layout from '../../components/layout';
import PostForm from '../../components/post-form';
import styles from '../../styles/PostDetail.module.scss';
import { Post } from '../../types/post';

const CreatePost: NextPage = () => {
  const post = new Post();

  const handleSave = (newPost: Post) => {
    console.log(newPost);
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
