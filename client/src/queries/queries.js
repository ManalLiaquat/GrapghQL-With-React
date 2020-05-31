import { gql } from 'apollo-boost';

export const getBooksQuery = gql`
{
  books{
    id
    name
    genre
  }
}
`;

export const getAuthorsQuery = gql`
{
  authors{
    id
    name
  }
}
`