import { useQuery } from '@apollo/client';
import { GET_ALL_TODOS } from '@gql';
import { todosVar } from '@cache';
import useTodos from '@hooks/useTodos';
import { Todos } from '@models/todos';
import TodoItem from './TodoItem';
import styles from '@styles/Home.module.css';

const TodoList: React.FC = () => {
  const operations = useTodos(todosVar);

  const { loading, error, data } = useQuery<{ todos: Todos }>(GET_ALL_TODOS);

  if (error) return <div>Error loading posts.</div>;
  if (loading) return <div>Loading</div>;

  const { todos } = data;
  return (
    <ul className={styles.posts__list}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          actions={{
            deleteTodo: operations.deleteTodo,
          }}
        />
      ))}
    </ul>
  );
};

export default TodoList;
