import { gql } from 'apollo-boost';

export const getBooksQuery = gql`
{
  books{
    id
    name
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

export const addBookMutation = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
    }
  }
`

export const getBookQuery = gql`
  query Book($id: ID!){
    id
    name
    genre
    author{
      id
      name
      age
      books{
        id
        name
        genre
      }
    }
  }
`