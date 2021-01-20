import { Todos } from 'models/todos';
import { ReactiveVar } from '@apollo/client';
import Operations from 'models/operations';

const useTodos = (todosVar: ReactiveVar<Todos>): Operations => {
  /* other operations */
  const deleteTodo = (id: number): void => {
    const allTodos = todosVar();
    const filteredTodos = allTodos.filter((todo) => todo.id !== id);
    todosVar(filteredTodos);
  };

  return {
    deleteTodo,
  };
};

export default useTodos;
