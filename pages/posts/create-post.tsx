import { NextPage } from 'next';
import Head from 'next/head';

const CreatePost: NextPage = () => {
  return (
    <>
      <Head>
        <title>Finnovating Blog</title>
        <meta name='description' content='Finnovating Blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>Create Post</h1>
      </main>
    </>
  );
};

export default CreatePost;
