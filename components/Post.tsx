import styles from '@styles/Home.module.css';

type PostType = {
  id: number;
  title: string;
  url: string;
};

interface PostProps {
  post: PostType;
  index: number;
}

const Post: React.FC<PostProps> = ({ post, index }) => {
  return (
    <li className={styles.post}>
      <div>
        <span>{index + 1}. </span>
        <a href={post.url}>{post.title}</a>
      </div>
    </li>
  );
};

export default Post;
