import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const getBooksQuery = gql`
  {
    books{
      id
      name
      genre
    }
  }
`;

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);
  console.log(loading, error, data, 'data');
  
  const displayBooks = () => {
    if (loading) {
      return <div>Loading...</div>
    } else {
      return data.books.map(book => <li key={book.id}>{book.name}</li>)
    }
  }

  return (
    <div>
      <ul id="book-list">
        {displayBooks()}
      </ul>
    </div>
  )
}

export default BookList
