import { gql } from '@apollo/client';

export default gql`
  query GetAllTodos {
    todos @client {
      id
      text
      completed
    }
  }
`;
