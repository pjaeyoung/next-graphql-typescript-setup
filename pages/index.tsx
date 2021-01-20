import { NextPage } from 'next';
import Head from 'next/head';
import { TodoList } from '@components';
import styles from '@styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className='Next App'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.posts}>
        <h1 className={styles.title}>ALL POSTS</h1>
        <TodoList />
      </main>
    </div>
  );
};

export default Home;
