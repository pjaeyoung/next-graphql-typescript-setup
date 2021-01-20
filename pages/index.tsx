import { NextPage } from 'next';
import Head from 'next/head';
import { ALL_POSTS } from '@gql';
import { useQuery } from '@apollo/client';
import styles from '@styles/Home.module.css';
import { Post } from '@components';

const allPostsQueryVars = {
  skip: 0,
  first: 10,
};

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(ALL_POSTS, { variables: allPostsQueryVars });

  if (error) return <div>Error loading posts.</div>;
  if (loading) return <div>Loading</div>;

  const { allPosts } = data;

  return (
    <div className='Next App'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.posts}>
        <h1 className={styles.title}>ALL POSTS</h1>
        <ul className={styles.posts__list}>
          {allPosts.map((post, index) => (
            <Post key={post.id} post={post} index={index} />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;
