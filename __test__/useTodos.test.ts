import useTodos from '../hooks/useTodos';
import { todosVar } from '../cache';

const operations = useTodos(todosVar);

describe('useTodos', () => {
  beforeEach(() => {
    // Reset our reactive variables
    todosVar([]);
  });

  it('should delete a todo', () => {
    operations.deleteTodo(123);
    expect(todosVar()).toHaveLength(0);
  });
});
