import { Todo } from 'models/todos';
import Operations from 'models/operations';
import styles from '@styles/Home.module.css';

interface TodoItemProps extends Todo {
  actions: Operations;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed, actions }) => {
  return (
    <li className={styles.post}>
      <h4>{completed ? <s>{text}</s> : `${text}`}</h4>
      <button
        className={styles.post__btnDelete}
        data-id={id}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => actions.deleteTodo(parseInt(e.currentTarget.dataset.id))}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
