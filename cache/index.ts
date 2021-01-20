import { InMemoryCache, makeVar } from '@apollo/client';
import { Todos } from '../models/todos';

// Create the initial value
const todosInitialValue: Todos = [
  {
    id: 123,
    completed: false,
    text: 'Use Apollo Client 3',
  },
];

// Create the todos var and initialize it with the initial value
export const todosVar = makeVar<Todos>(todosInitialValue);

const todos = {
  read() {
    return todosVar();
  },
};

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        todos,
      },
    },
  },
});
